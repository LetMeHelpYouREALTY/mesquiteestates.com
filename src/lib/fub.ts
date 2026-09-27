const FUB_EVENTS_URL = "https://api.followupboss.com/v1/events";
export const SITE_SOURCE = "mesquiteestates.com";

export { CONTACT_ERROR_MESSAGE } from "@/lib/contact-constants";

export type LeadFormType = "contact" | "newsletter";

export type LeadPayload = {
  form: LeadFormType;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  sourceUrl?: string;
};

function asOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function parseLeadBody(
  body: unknown
): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const record = body as Record<string, unknown>;
  const form = record.form;

  if (form !== "contact" && form !== "newsletter") {
    return { ok: false, error: "Invalid or missing form type" };
  }

  return {
    ok: true,
    data: {
      form,
      name: asOptionalString(record.name),
      email: asOptionalString(record.email),
      phone: asOptionalString(record.phone),
      message: asOptionalString(record.message),
      sourceUrl: asOptionalString(record.sourceUrl),
    },
  };
}

export function validateLead(data: LeadPayload): string | null {
  if (data.form === "newsletter") {
    if (!data.email) {
      return "Email is required";
    }
    return null;
  }

  if (!data.name) {
    return "Name is required";
  }
  if (!data.email && !data.phone) {
    return "Email or phone is required";
  }
  return null;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "Visitor", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export type FubEventPayload = {
  source: string;
  system: string;
  type: string;
  message: string;
  description: string;
  sourceUrl: string;
  person: {
    firstName: string;
    lastName: string;
    emails: { value: string }[];
    phones: { value: string }[];
    tags: string[];
  };
};

export function buildFubEvent(data: LeadPayload): FubEventPayload {
  const formName = data.form === "newsletter" ? "Newsletter" : "Contact Form";
  const type = data.form === "newsletter" ? "Registration" : "General Inquiry";
  const tags =
    data.form === "newsletter"
      ? [SITE_SOURCE, "Newsletter"]
      : [SITE_SOURCE, formName];

  const displayName =
    data.name ??
    (data.form === "newsletter" ? "Newsletter Subscriber" : "Visitor");
  const { firstName, lastName } = splitName(displayName);

  const email = data.email;
  const phone = data.phone;

  let message: string;
  if (data.form === "contact") {
    const parts: string[] = [];
    if (data.message) {
      parts.push(data.message);
    }
    if (email) {
      parts.push(`Email: ${email}`);
    }
    if (phone) {
      parts.push(`Phone: ${phone}`);
    }
    message = parts.join("\n\n") || "Contact form submission";
  } else {
    message = data.name
      ? `Newsletter signup from ${data.name}`
      : "Newsletter signup";
  }

  const defaultUrl = `https://${SITE_SOURCE}`;

  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type,
    message,
    description: `${formName} — ${SITE_SOURCE}`,
    sourceUrl: data.sourceUrl ?? defaultUrl,
    person: {
      firstName,
      lastName,
      emails: email ? [{ value: email }] : [],
      phones: phone ? [{ value: phone }] : [],
      tags,
    },
  };
}

export async function submitToFollowUpBoss(
  event: FubEventPayload
): Promise<{ ok: true } | { ok: false; kind: "config" | "upstream" }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      "FOLLOW_UP_BOSS_API_KEY is not set; cannot submit leads to Follow Up Boss"
    );
    return { ok: false, kind: "config" };
  }

  const auth = Buffer.from(`${apiKey}:`).toString("base64");

  try {
    const response = await fetch(FUB_EVENTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        "X-System": SITE_SOURCE,
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      console.error(`Follow Up Boss API returned status ${response.status}`);
      return { ok: false, kind: "upstream" };
    }

    return { ok: true };
  } catch {
    console.error("Follow Up Boss API request failed");
    return { ok: false, kind: "upstream" };
  }
}
