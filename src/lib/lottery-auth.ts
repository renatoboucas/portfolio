// Shared-secret session token for the /lottery gate.
// Uses Web Crypto (HMAC-SHA256) so it runs in both the Edge middleware (verify)
// and the Node route handler (sign). The cookie proves the visitor entered the
// shared username/password — it does not carry any user identity.

export const LOTTERY_COOKIE = "lottery_session";
export const LOTTERY_SESSION_TTL_SECONDS = 60 * 60 * 12; // 12h

const encoder = new TextEncoder();

function base64url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlToBytes(value: string): Uint8Array {
  let normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  while (normalized.length % 4) normalized += "=";
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function sign(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64url(new Uint8Array(signature));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createSessionToken(
  secret: string,
  ttlSeconds: number = LOTTERY_SESSION_TTL_SECONDS,
): Promise<string> {
  const payload = base64url(
    encoder.encode(JSON.stringify({ exp: Date.now() + ttlSeconds * 1000 })),
  );
  const signature = await sign(secret, payload);
  return `${payload}.${signature}`;
}

export async function verifySessionToken(
  secret: string,
  token: string | undefined | null,
): Promise<boolean> {
  if (!secret || !token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = await sign(secret, payload);
  if (!timingSafeEqual(signature, expected)) return false;

  try {
    const data = JSON.parse(new TextDecoder().decode(base64urlToBytes(payload)));
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function safeCredentialEqual(input: unknown, expected: string): boolean {
  if (typeof input !== "string") return false;
  return timingSafeEqual(input, expected);
}
