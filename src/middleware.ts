import { NextResponse, type NextRequest } from "next/server";

import { LOTTERY_COOKIE, verifySessionToken } from "@/lib/lottery-auth";

const LOGIN_PATH = "/lottery/login";

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // The login page is served by Next.js itself — never gate or proxy it.
  if (pathname === LOGIN_PATH) return NextResponse.next();

  const secret = process.env.LOTTERY_SESSION_SECRET ?? "";
  const authed = await verifySessionToken(secret, req.cookies.get(LOTTERY_COOKIE)?.value);

  if (!authed) {
    const url = req.nextUrl.clone();
    url.pathname = LOGIN_PATH;
    url.search = `?next=${encodeURIComponent(pathname + search)}`;
    return NextResponse.redirect(url);
  }

  const appOrigin = process.env.LOTTERY_APP_ORIGIN;
  if (!appOrigin) {
    return new NextResponse(
      "The lottery app origin is not configured. Set LOTTERY_APP_ORIGIN to the number-charm deployment URL.",
      { status: 503 },
    );
  }

  // Strip the /lottery prefix and proxy to the standalone number-charm deploy,
  // which serves its content at the origin root.
  const rest = pathname.replace(/^\/lottery/, "") || "/";
  return NextResponse.rewrite(new URL(rest + search, appOrigin));
}

export const config = {
  matcher: ["/lottery", "/lottery/:path*"],
};
