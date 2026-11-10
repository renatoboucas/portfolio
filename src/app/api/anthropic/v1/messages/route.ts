import { LOTTERY_COOKIE, verifySessionToken } from "@/lib/lottery-auth";

export const runtime = "nodejs";

// Anthropic (Claude) proxy for the number-charm lottery app, mirroring the
// OpenAI proxy at /api/lottery-chat. Only active when ANTHROPIC_API_KEY is
// configured in Vercel — the lottery chat falls back to /api/lottery-chat
// (OpenAI) when this returns 503. Gated by the /lottery session cookie.

const anthropicApiKey = process.env.ANTHROPIC_API_KEY || process.env.anthropic_api_key;

const MAX_BODY_BYTES = 400_000;

function readCookie(req: Request, name: string): string | undefined {
  const header = req.headers.get("cookie") ?? "";
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return undefined;
}

export async function POST(req: Request) {
  const secret = process.env.LOTTERY_SESSION_SECRET ?? "";
  const authed = await verifySessionToken(secret, readCookie(req, LOTTERY_COOKIE));
  if (!authed) {
    return Response.json(
      { type: "error", error: { type: "authentication_error", message: "Unauthorized. Log in at /lottery to use the lottery assistant." } },
      { status: 401 },
    );
  }

  if (!anthropicApiKey) {
    return Response.json(
      { type: "error", error: { type: "api_error", message: "ANTHROPIC_API_KEY is not configured." } },
      { status: 503 },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json(
      { type: "error", error: { type: "invalid_request_error", message: "Request body too large." } },
      { status: 413 },
    );
  }

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": anthropicApiKey,
      "anthropic-version": req.headers.get("anthropic-version") ?? "2023-06-01",
    },
    body: raw,
  });

  const payload = await upstream.text();
  return new Response(payload, {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
