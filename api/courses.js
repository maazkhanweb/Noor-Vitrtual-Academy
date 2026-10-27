import { makeCrud } from "./_lib/crud.js";
import { DEFAULT_COURSES } from "./_lib/defaults.js";

export default makeCrud({
  key: "nva:courses",
  fields: ["number", "title", "description", "image"],
  defaults: DEFAULT_COURSES,
});
