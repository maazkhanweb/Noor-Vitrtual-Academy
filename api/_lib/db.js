// Tiny storage layer on top of Upstash Redis (REST). Works with the
// Vercel Marketplace "Upstash Redis" integration (KV_REST_API_* or UPSTASH_REDIS_REST_* env vars).
const URL_ =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

export function dbConfigured() {
  return Boolean(URL_ && TOKEN);
}

async function redis(command) {
  if (!dbConfigured()) {
    throw new Error("DB_NOT_CONFIGURED");
  }
  const res = await fetch(URL_, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

export async function getList(key) {
  const raw = await redis(["GET", key]);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function setList(key, list) {
  await redis(["SET", key, JSON.stringify(list)]);
}
// Storage layer. Works with BOTH kinds of Redis that Vercel offers:
//  1) Upstash REST   -> env vars ending in REST_API_URL / REST_API_TOKEN (e.g. KV_REST_API_URL)
//  2) Normal Redis   -> env var ending in REDIS_URL or KV_URL (e.g. REDIS_URL)
import { createClient } from "redis";

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
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.result;
}

async function viaTcp(command) {
  const client = createClient({ url: TCP_URL() });
  client.on("error", () => {});
  await client.connect();
  try {
    return await client.sendCommand(command.map(String));
  } finally {
    client.destroy();
  }
}

async function run(command) {
  if (!dbConfigured()) throw new Error(DB_ERROR);
  if (REST_URL() && REST_TOKEN()) return viaRest(command);
  return viaTcp(command);
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
