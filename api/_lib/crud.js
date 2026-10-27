import crypto from "node:crypto";
import { getList, setList, dbConfigured } from "./db.js";
import { verifyRequest } from "./auth.js";

const newId = () => crypto.randomBytes(6).toString("hex");
const clean = (v, max = 2000) => String(v ?? "").trim().slice(0, max);

export function makeCrud({ key, fields, defaults }) {
  const pick = (body) => {
    const out = {};
    for (const f of fields) out[f] = clean(body?.[f]);
    return out;
  };

  return async function handler(req, res) {
    try {
      // PUBLIC: read
      if (req.method === "GET") {
        if (!dbConfigured()) return res.status(200).json(defaults);
        const list = await getList(key);
        return res.status(200).json(list ?? defaults);
      }

      // ADMIN ONLY below
      if (!verifyRequest(req)) return res.status(401).json({ error: "Unauthorized" });
      if (!dbConfigured()) return res.status(503).json({ error: "Database not configured" });

      let list = (await getList(key)) ?? [...defaults];

      if (req.method === "POST") {
        const item = { id: newId(), ...pick(req.body) };
        list.push(item);
        await setList(key, list);
        return res.status(201).json(item);
      }

      if (req.method === "PUT") {
        const id = clean(req.body?.id);
        const idx = list.findIndex((x) => x.id === id);
        if (idx === -1) return res.status(404).json({ error: "Not found" });
        list[idx] = { ...list[idx], ...pick(req.body), id };
        await setList(key, list);
        return res.status(200).json(list[idx]);
      }

      if (req.method === "DELETE") {
        const id = clean(req.query?.id);
        list = list.filter((x) => x.id !== id);
        await setList(key, list);
        return res.status(200).json({ ok: true });
      }

      return res.status(405).json({ error: "Method not allowed" });
    } catch (err) {
      return res.status(500).json({ error: err.message || "Server error" });
    }
  };
}
