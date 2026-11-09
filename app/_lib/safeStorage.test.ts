import { afterEach, describe, expect, it, vi } from "vitest";
import { readStorage, writeStorage } from "./safeStorage";

afterEach(() => vi.restoreAllMocks());

describe("safeStorage", () => {
  it("round-trips values", () => {
    writeStorage("localStorage", "k", "v");
    expect(readStorage("localStorage", "k")).toBe("v");
  });
  it("returns null for missing keys", () => {
    expect(readStorage("sessionStorage", "missing")).toBeNull();
  });
  it("does not throw when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("blocked", "SecurityError");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("full", "QuotaExceededError");
    });
    expect(readStorage("localStorage", "k")).toBeNull();
    expect(() => writeStorage("localStorage", "k", "v")).not.toThrow();
  });
});
