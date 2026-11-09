import { afterEach, describe, expect, it, vi } from "vitest";
import { getTodayInGreatYarmouth } from "./dates";

afterEach(() => vi.useRealTimers());

function at(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
  return getTodayInGreatYarmouth();
}

describe("getTodayInGreatYarmouth", () => {
  it("returns the UTC date in winter (GMT)", () => {
    expect(at("2026-11-12T23:30:00Z")).toBe("2026-11-12");
  });
  it("rolls over at London midnight in winter", () => {
    expect(at("2026-11-13T00:00:00Z")).toBe("2026-11-13");
  });
  it("is already the next day late evening UTC in summer (BST)", () => {
    expect(at("2026-07-01T23:30:00Z")).toBe("2026-07-02");
  });
  it("pads month and day", () => {
    expect(at("2026-03-04T12:00:00Z")).toBe("2026-03-04");
  });
});
