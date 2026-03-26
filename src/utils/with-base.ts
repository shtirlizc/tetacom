export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;

  return `${base}${base.endsWith("/") ? "" : "/"}${path.replace(/^\//, "")}`;
}
