import { NextResponse, type NextRequest } from "next/server";

// Exact, case-sensitive matches only. next.config redirects match case-insensitively,
// so "/about" -> "/About" there loops forever.
const EXACT: Record<string, string> = {
  "/about": "/About",
  "/contact": "/Contact_us",
};

export function middleware(req: NextRequest) {
  const to = EXACT[req.nextUrl.pathname];
  if (!to) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = to;
  return NextResponse.redirect(url, 308);
}

export const config = { matcher: ["/about", "/contact"] };
