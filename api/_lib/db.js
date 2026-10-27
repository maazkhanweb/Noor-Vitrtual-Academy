// Storage layer. Works with BOTH kinds of Redis that Vercel offers:
//  1) Upstash REST   -> env vars ending in REST_API_URL / REST_API_TOKEN (e.g. KV_REST_API_URL)
//  2) Normal Redis   -> env var ending in REDIS_URL or KV_URL (e.g. REDIS_URL)
function findEnv(suffixes, { exclude = [] } = {}) {
  for (const [key, value] of Object.entries(process.env)) {
    if (!value) continue;
    if (exclude.some((x) => key.includes(x))) continue;
    if (suffixes.some((suf) => key.endsWith(suf))) return value;
  }
  return "";
}

const REST_URL = () => findEnv(["REST_API_URL", "REST_URL"]);
const REST_TOKEN = () =>
  findEnv(["REST_API_TOKEN", "REST_TOKEN"], { exclude: ["READ_ONLY"] });
const TCP_URL = () =>
  findEnv(["REDIS_URL", "KV_URL"], { exclude: ["REST"] });

export const DB_ERROR =
  "Database not configured. Vercel > Storage mein Redis (Upstash) banayein, project se connect karein aur Redeploy karein.";

export function dbConfigured() {
  return Boolean((REST_URL() && REST_TOKEN()) || TCP_URL());
}

async function viaRest(command) {
  const res = await fetch(REST_URL(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REST_TOKEN()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    signal: AbortSignal.timeout(8000),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

async function viaTcp(command) {
  // loaded only when needed, so a problem here can never crash the whole API
  const { createClient } = await import("redis");
  // fail fast (no endless reconnect) so the API always answers with a clear error
  const client = createClient({
    url: TCP_URL(),
    socket: { connectTimeout: 5000, reconnectStrategy: false },
  });
  client.on("error", () => {});
  await client.connect();
  try {
    return await client.sendCommand(command.map(String));
  } finally {
    client.destroy();
  }
}

// Turns any error into a readable message (node-redis errors are often empty)
export function errMsg(err) {
  const first = err?.errors?.[0];
  return (
    err?.message ||
    first?.message ||
    err?.code ||
    first?.code ||
    String(err) ||
    "Unknown error"
  );
}

async function run(command) {
  if (!dbConfigured()) throw new Error(DB_ERROR);
  const useRest = REST_URL() && REST_TOKEN();
  try {
    return await (useRest ? viaRest(command) : viaTcp(command));
  } catch (err) {
    throw new Error(`Database error (${useRest ? "REST" : "REDIS_URL"}): ${errMsg(err)}`, { cause: err });
  }
}

export async function getList(key) {
  const raw = await run(["GET", key]);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setList(key, list) {
  await run(["SET", key, JSON.stringify(list)]);
}
