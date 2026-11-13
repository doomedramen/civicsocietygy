import { describe, expect, it } from "vitest";
import {
  TOWN_CENTRE_AWARDS,
  awardCategories,
  daysUntilCeremony,
  hasCeremonyPassed,
  isAwardsActive,
} from "./awards";

describe("isAwardsActive", () => {
  it.each([
    ["2026-11-01", false],
    ["2026-11-02", true],
    ["2026-11-11", true],
    ["2026-11-12", true],
    ["2026-11-13", false],
    ["2027-01-01", false],
  ])("%s -> %s", (day, expected) => {
    expect(isAwardsActive(day)).toBe(expected);
  });

  it("stops no later than the ceremony day", () => {
    expect(TOWN_CENTRE_AWARDS.visibleUntil <= TOWN_CENTRE_AWARDS.ceremonyDate).toBe(true);
  });
});

describe("hasCeremonyPassed", () => {
  it("is false up to and including ceremony day", () => {
    expect(hasCeremonyPassed("2026-11-12")).toBe(false);
  });
  it("is true the day after", () => {
    expect(hasCeremonyPassed("2026-11-13")).toBe(true);
  });
});

describe("daysUntilCeremony", () => {
  it("counts whole days", () => {
    expect(daysUntilCeremony("2026-11-02")).toBe(10);
    expect(daysUntilCeremony("2026-11-11")).toBe(1);
  });
  it("is zero on the day and never negative afterwards", () => {
    expect(daysUntilCeremony("2026-11-12")).toBe(0);
    expect(daysUntilCeremony("2026-11-20")).toBe(0);
  });
});

describe("award data", () => {
  it("category count matches the list", () => {
    expect(awardCategories).toHaveLength(TOWN_CENTRE_AWARDS.categoryCount);
  });
  it("uses a trailing-slash path", () => {
    expect(TOWN_CENTRE_AWARDS.path).toBe("/awards/");
  });
});
