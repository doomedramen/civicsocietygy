// Browser storage can throw (blocked site data, some private modes), and
// a failure here must never break rendering. These helpers swallow errors:
// on failure a read returns null and a write is silently dropped.

type Kind = "localStorage" | "sessionStorage";

export function readStorage(kind: Kind, key: string): string | null {
  try {
    return window[kind].getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(kind: Kind, key: string, value: string): void {
  try {
    window[kind].setItem(key, value);
  } catch {
    // Ignore: the preference simply won't persist.
  }
}
