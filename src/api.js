// Small helper for talking to the /api serverless functions.
const TOKEN_KEY = "nva_admin_token";

export const getToken = () => sessionStorage.getItem(TOKEN_KEY) || "";
export const setToken = (t) => sessionStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);

export async function api(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) headers.Authorization = `Bearer ${getToken()}`;

  const res = await fetch(`/api/${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }

  if (!res.ok) {
    const err = new Error(data?.error || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}
