import crypto from "node:crypto";
import { getList, setList, dbConfigured, DB_ERROR } from "./_lib/db.js";
import { verifyRequest } from "./_lib/auth.js";

const KEY = "nva:admissions";
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const APPLY = ["Free Trial Classes", "Proper Admission"];
const clean = (v, max = 200) => String(v ?? "").trim().slice(0, max);

export default async function handler(req, res) {
  try {
    // PUBLIC: submit the admission form
    if (req.method === "POST") {
      if (!dbConfigured()) return res.status(503).json({ error: DB_ERROR });
      const b = req.body || {};
      const entry = {
        id: crypto.randomBytes(6).toString("hex"),
        createdAt: new Date().toISOString(),
        studentName: clean(b.studentName),
        guardianName: clean(b.guardianName),
        guardianRelation: clean(b.guardianRelation),
        email: clean(b.email),
        whatsapp: clean(b.whatsapp, 30),
        applyFor: clean(b.applyFor),
        days: Array.isArray(b.days) ? b.days.filter((d) => DAYS.includes(d)) : [],
      };
      if (!entry.studentName || !entry.guardianName || !entry.guardianRelation ||
          !/^\S+@\S+\.\S+$/.test(entry.email) || entry.whatsapp.replace(/\D/g, "").length < 7 ||
          !APPLY.includes(entry.applyFor) || entry.days.length === 0) {
        return res.status(400).json({ error: "Please fill all fields correctly." });
      }
      const list = (await getList(KEY)) ?? [];
      list.unshift(entry);
      await setList(KEY, list);
      return res.status(201).json({ ok: true });
    }

    // ADMIN ONLY: list / delete
    if (!verifyRequest(req)) return res.status(401).json({ error: "Unauthorized" });
    if (!dbConfigured()) return res.status(503).json({ error: DB_ERROR });

    if (req.method === "GET") {
      return res.status(200).json((await getList(KEY)) ?? []);
    }
    if (req.method === "DELETE") {
      const id = clean(req.query?.id);
      const list = ((await getList(KEY)) ?? []).filter((x) => x.id !== id);
      await setList(KEY, list);
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
