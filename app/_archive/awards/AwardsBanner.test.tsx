import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwardsBanner from "./AwardsBanner";

const pathname = vi.hoisted(() => ({ current: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => pathname.current }));

afterEach(() => {
  vi.useRealTimers();
  pathname.current = "/";
});

function setDate(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
}

describe("AwardsBanner", () => {
  it("renders nothing before the window opens", () => {
    setDate("2026-10-30T12:00:00Z");
    const { container } = render(<AwardsBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders nothing the day after the ceremony", () => {
    setDate("2026-11-13T09:00:00Z");
    const { container } = render(<AwardsBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it("shows ceremony details and a link to the awards page", () => {
    setDate("2026-11-05T12:00:00Z");
    render(<AwardsBanner />);
    expect(screen.getByText(/Thursday 12 November, 5\.30pm for 6pm/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Find out more" })).toHaveAttribute("href", expect.stringMatching(/^\/awards\/?$/));
  });

  it.each(["/awards", "/awards/", "/awards/2026/"])("hides the pointless link on %s", (path) => {
    pathname.current = path;
    setDate("2026-11-05T12:00:00Z");
    render(<AwardsBanner />);
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Find out more" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Dismiss awards notice" })).toBeInTheDocument();
  });

  it.each([
    ["2026-11-05T12:00:00Z", "In 7 days"],
    ["2026-11-11T12:00:00Z", "Tomorrow"],
    ["2026-11-12T12:00:00Z", "Tonight"],
  ])("countdown on %s reads %s", (iso, text) => {
    setDate(iso);
    render(<AwardsBanner />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("dismisses and remembers for the session", async () => {
    setDate("2026-11-05T12:00:00Z");
    const { unmount } = render(<AwardsBanner />);
    await userEvent.click(screen.getByRole("button", { name: "Dismiss awards notice" }));
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
    unmount();

    render(<AwardsBanner />);
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
  });

  it("still renders when browser storage throws", () => {
    setDate("2026-11-05T12:00:00Z");
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("blocked", "SecurityError");
    });
    expect(() => render(<AwardsBanner />)).not.toThrow();
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    vi.restoreAllMocks();
  });
});
