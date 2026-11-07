import { NextResponse } from "next/server";

import {
  LOTTERY_COOKIE,
  LOTTERY_SESSION_TTL_SECONDS,
  createSessionToken,
  safeCredentialEqual,
} from "@/lib/lottery-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.LOTTERY_SESSION_SECRET;
  const expectedUser = process.env.LOTTERY_USERNAME;
  const expectedPassword = process.env.LOTTERY_PASSWORD;

  if (!secret || !expectedUser || !expectedPassword) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const { username, password } = (body ?? {}) as {
    username?: unknown;
    password?: unknown;
  };

  const ok =
    safeCredentialEqual(username, expectedUser) &&
    safeCredentialEqual(password, expectedPassword);

  if (!ok) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const token = await createSessionToken(secret);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(LOTTERY_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: LOTTERY_SESSION_TTL_SECONDS,
  });
  return res;
}
