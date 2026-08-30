// The site is served from the root of civicsocietygy.uk, rather than a
// GitHub project sub-path. Keep image URLs rooted at the domain.
export const basePath = "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
