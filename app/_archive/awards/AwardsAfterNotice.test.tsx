import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AwardsAfterNotice from "./AwardsAfterNotice";

afterEach(() => vi.useRealTimers());

function setDate(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
}

describe("AwardsAfterNotice", () => {
  it("is hidden up to and including ceremony day", () => {
    setDate("2026-11-12T20:00:00Z");
    const { container } = render(<AwardsAfterNotice />);
    expect(container).toBeEmptyDOMElement();
  });

  it("tells visitors the ceremony has taken place afterwards", () => {
    setDate("2026-11-14T12:00:00Z");
    render(<AwardsAfterNotice />);
    expect(screen.getByRole("status")).toHaveTextContent(/took place on Thursday 12 November 2026/);
  });
});
