import { LOTTERY_COOKIE, verifySessionToken } from "@/lib/lottery-auth";

export const runtime = "nodejs";

// AI proxy for the number-charm lottery app (served behind /lottery).
// Reuses the portfolio's OPENAI_API_KEY and forwards OpenAI chat-completions
// requests (including tool calling) made by the lottery chat panel. Gated by
// the same /lottery session cookie, so only logged-in lottery users can call it.

const openaiApiKey = process.env.OPENAI_API_KEY || process.env.openai_api_key;

const ALLOWED_MODELS = new Set(["gpt-4o-mini"]);
const MAX_OUTPUT_TOKENS = 2000;
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
      { error: "Unauthorized. Log in at /lottery to use the lottery assistant." },
      { status: 401 },
    );
  }

  if (!openaiApiKey) {
    return Response.json(
      { error: "OPENAI_API_KEY is not configured. Add it in Vercel to enable the assistant." },
      { status: 503 },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ error: "Request body too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const model = typeof body.model === "string" && ALLOWED_MODELS.has(body.model)
    ? body.model
    : "gpt-4o-mini";
  const maxTokens = Math.min(
    typeof body.max_tokens === "number" ? body.max_tokens : MAX_OUTPUT_TOKENS,
    MAX_OUTPUT_TOKENS,
  );

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: body.messages,
      tools: body.tools,
      max_tokens: maxTokens,
      stream: false,
    }),
  });

  const payload = await upstream.text();
  return new Response(payload, {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
