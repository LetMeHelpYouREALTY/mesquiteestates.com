import { NextRequest, NextResponse } from "next/server";
import {
  buildFubEvent,
  CONTACT_ERROR_MESSAGE,
  parseLeadBody,
  submitToFollowUpBoss,
  validateLead,
} from "@/lib/fub";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const parsed = parseLeadBody(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const validationError = validateLead(parsed.data);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const referer = request.headers.get("referer");
  const sourceUrl =
    parsed.data.sourceUrl ??
    (referer && referer.startsWith("http") ? referer : undefined);

  const event = buildFubEvent({ ...parsed.data, sourceUrl });
  const result = await submitToFollowUpBoss(event);

  if (!result.ok) {
    if (result.kind === "config") {
      return NextResponse.json(
        { error: CONTACT_ERROR_MESSAGE },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: CONTACT_ERROR_MESSAGE },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
