import crypto from "node:crypto";

// Credentials come from Vercel Environment Variables.
// Defaults are only a fallback so the first deploy works - change them in Vercel.
const ADMIN_USER = () => process.env.ADMIN_USERNAME || "maaz56@";
const ADMIN_PASS = () => process.env.ADMIN_PASSWORD || "alikhan23";
const SECRET = () =>
  process.env.ADMIN_SECRET || `nva-secret-${ADMIN_USER()}-${ADMIN_PASS()}`;

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  if (x.length !== y.length) return false;
  return crypto.timingSafeEqual(x, y);
}

export function checkCredentials(username, password) {
  return safeEqual(username, ADMIN_USER()) && safeEqual(password, ADMIN_PASS());
}

function sign(payload) {
  return crypto.createHmac("sha256", SECRET()).update(payload).digest("hex");
}

export function createToken() {
  const exp = Date.now() + TOKEN_TTL_MS;
  const payload = String(exp);
  return `${payload}.${sign(payload)}`;
}

export function verifyRequest(req) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  if (!safeEqual(signature, sign(payload))) return false;
  return Number(payload) > Date.now();
}
