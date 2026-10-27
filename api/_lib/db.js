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
