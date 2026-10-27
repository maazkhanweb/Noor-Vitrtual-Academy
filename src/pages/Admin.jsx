import { useCallback, useEffect, useState } from "react";
import { api, getToken, setToken, clearToken } from "../api";

const downloadAllAdmissionsPDF = async (list) =>
  (await import("../pdf")).downloadAllAdmissionsPDF(list);
const downloadSingleAdmissionPDF = async (a) =>
  (await import("../pdf")).downloadSingleAdmissionPDF(a);
import "./Admin.css";

const fmtDate = (iso) =>
  new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

/* ============================ LOGIN ============================ */
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const { token } = await api("login", {
        method: "POST",
        body: { username, password },
      });
      setToken(token);
      onLogin();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-login-wrap">
      <form className="admin-login" onSubmit={submit}>
        <img src="/images/logo.png" alt="Noor Virtual Academy" />
        <h1>Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="admin-error">{error}</div>}
        <button type="submit" disabled={busy}>
          {busy ? "Signing in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

/* ====================== GENERIC CRUD SECTION ====================== */
function CrudSection({ title, endpoint, fields, emptyItem, summary, onAuthError }) {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null); // item being edited / created
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleErr = useCallback(
    (err) => {
      if (err.status === 401) onAuthError();
      else setError(err.message);
    },
    [onAuthError]
  );

  const [reloadKey, setReloadKey] = useState(0);
  const load = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    api(endpoint)
      .then(setItems)
      .catch(handleErr)
      .finally(() => setLoading(false));
  }, [endpoint, handleErr, reloadKey]);

  const save = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (editing.id) {
        await api(endpoint, { method: "PUT", body: editing, auth: true });
      } else {
        await api(endpoint, { method: "POST", body: editing, auth: true });
      }
      setEditing(null);
      load();
    } catch (err) {
      handleErr(err);
    }
  };

  const remove = async (item) => {
    if (!window.confirm(`Delete "${item.title || item.name}"?`)) return;
    try {
      await api(`${endpoint}?id=${item.id}`, { method: "DELETE", auth: true });
      load();
    } catch (err) {
      handleErr(err);
    }
  };

  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <h2>{title}</h2>
        <button className="btn primary" onClick={() => setEditing({ ...emptyItem })}>
          + Add New
        </button>
      </div>

      {error && <div className="admin-error">{error}</div>}

      {editing && (
        <form className="admin-edit" onSubmit={save}>
          <h3>{editing.id ? "Edit" : "Add"}</h3>
          {fields.map((f) => (
            <label key={f.name}>
              <span>{f.label}</span>
              {f.textarea ? (
                <textarea
                  rows={3}
                  value={editing[f.name] || ""}
                  required={f.required}
                  onChange={(e) => setEditing({ ...editing, [f.name]: e.target.value })}
                />
              ) : (
                <input
                  type="text"
                  value={editing[f.name] || ""}
                  required={f.required}
                  placeholder={f.placeholder}
                  onChange={(e) => setEditing({ ...editing, [f.name]: e.target.value })}
                />
              )}
            </label>
          ))}
          <div className="admin-edit-actions">
            <button type="submit" className="btn primary">Save</button>
            <button type="button" className="btn" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="admin-muted">Loading...</p>
      ) : items.length === 0 ? (
        <p className="admin-muted">Nothing here yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{summary(item)}</td>
                  <td className="admin-actions">
                    <button className="btn" onClick={() => setEditing({ ...item })}>Edit</button>
                    <button className="btn danger" onClick={() => remove(item)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

/* ========================== ADMISSIONS ========================== */
function Admissions({ onAuthError }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [reloadKey, setReloadKey] = useState(0);
  const load = () => setReloadKey((k) => k + 1);

  useEffect(() => {
    api("admissions", { auth: true })
      .then(setList)
      .catch((err) => {
        if (err.status === 401) onAuthError();
        else setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [onAuthError, reloadKey]);

  const remove = async (a) => {
    if (!window.confirm(`Delete application of ${a.studentName}?`)) return;
    try {
      await api(`admissions?id=${a.id}`, { method: "DELETE", auth: true });
      load();
    } catch (err) {
      if (err.status === 401) onAuthError();
      else setError(err.message);
    }
  };

  return (
    <section className="admin-card">
      <div className="admin-card-head">
        <h2>Admission Applications ({list.length})</h2>
        <div>
          <button className="btn" onClick={load}>Refresh</button>{" "}
          <button
            className="btn primary"
            disabled={list.length === 0}
            onClick={() => downloadAllAdmissionsPDF(list)}
          >
            Download PDF (A4)
          </button>
        </div>
      </div>

      {error && <div className="admin-error">{error}</div>}

      {loading ? (
        <p className="admin-muted">Loading...</p>
      ) : list.length === 0 ? (
        <p className="admin-muted">No applications yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table wide">
            <thead>
              <tr>
                <th>Student</th>
                <th>Guardian</th>
                <th>Relation</th>
                <th>Email</th>
                <th>WhatsApp</th>
                <th>Applying For</th>
                <th>Days</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((a) => (
                <tr key={a.id}>
                  <td>{a.studentName}</td>
                  <td>{a.guardianName}</td>
                  <td>{a.guardianRelation}</td>
                  <td>{a.email}</td>
                  <td>{a.whatsapp}</td>
                  <td>{a.applyFor}</td>
                  <td>{a.days.join(", ")}</td>
                  <td>{fmtDate(a.createdAt)}</td>
                  <td className="admin-actions">
                    <button className="btn" onClick={() => downloadSingleAdmissionPDF(a)}>PDF</button>
                    <button className="btn danger" onClick={() => remove(a)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

/* ============================ PAGE ============================ */
const TABS = ["Admissions", "Courses", "Teachers"];

function Admin() {
  const [loggedIn, setLoggedIn] = useState(Boolean(getToken()));
  const [tab, setTab] = useState("Admissions");

  const logout = useCallback(() => {
    clearToken();
    setLoggedIn(false);
  }, []);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="admin-page">
      <header className="admin-top">
        <h1>NVA Admin Panel</h1>
        <button className="btn" onClick={logout}>Logout</button>
      </header>

      <nav className="admin-tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={tab === t ? "active" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </nav>

      <div className="admin-body">
        {tab === "Admissions" && <Admissions onAuthError={logout} />}

        {tab === "Courses" && (
          <CrudSection
            title="Courses"
            endpoint="courses"
            onAuthError={logout}
            emptyItem={{ number: "", title: "", description: "", image: "" }}
            fields={[
              { name: "number", label: "Number (e.g. 07)" },
              { name: "title", label: "Course Title", required: true },
              { name: "description", label: "Description", textarea: true, required: true },
              { name: "image", label: "Image path or URL", placeholder: "/images/course-tajweed.png" },
            ]}
            summary={(c) => (
              <>
                <strong>{c.number} {c.title}</strong>
                <div className="admin-muted">{c.description}</div>
              </>
            )}
          />
        )}

        {tab === "Teachers" && (
          <CrudSection
            title="Teachers"
            endpoint="teachers"
            onAuthError={logout}
            emptyItem={{ name: "", qualification: "", subject: "", experience: "", bio: "", image: "" }}
            fields={[
              { name: "name", label: "Teacher Name", required: true },
              { name: "subject", label: "Subject / Course" },
              { name: "qualification", label: "Qualification" },
              { name: "experience", label: "Experience (e.g. 5 years)" },
              { name: "bio", label: "Short Bio", textarea: true },
              { name: "image", label: "Photo path or URL", placeholder: "https://..." },
            ]}
            summary={(t) => (
              <>
                <strong>{t.name}</strong>
                <div className="admin-muted">
                  {[t.subject, t.qualification, t.experience].filter(Boolean).join(" • ")}
                </div>
              </>
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Admin;
