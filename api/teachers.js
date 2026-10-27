import { makeCrud } from "./_lib/crud.js";
import { DEFAULT_TEACHERS } from "./_lib/defaults.js";

export default makeCrud({
  key: "nva:teachers",
  fields: ["name", "qualification", "subject", "experience", "bio", "image"],
  defaults: DEFAULT_TEACHERS,
});
