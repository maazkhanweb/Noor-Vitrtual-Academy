import { checkCredentials, createToken } from "./_lib/auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { username, password } = req.body || {};
  if (!checkCredentials(username || "", password || "")) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  return res.status(200).json({ token: createToken() });
}
