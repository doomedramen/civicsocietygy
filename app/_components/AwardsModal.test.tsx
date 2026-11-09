import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwardsModal from "./AwardsModal";

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  document.body.style.overflow = "";
});

function setDate(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(iso));
}

const ACTIVE = "2026-11-05T12:00:00Z";

describe("AwardsModal", () => {
  it("does not open outside the promotion window", async () => {
    setDate("2026-11-13T12:00:00Z");
    render(<AwardsModal />);
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens with an accessible name and locks scrolling", async () => {
    setDate(ACTIVE);
    render(<AwardsModal />);
    const dialog = await screen.findByRole("dialog");
    expect(dialog).toHaveAccessibleName(/Celebrating the shops/);
    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByRole("button", { name: "Close" })).toHaveFocus();
  });

  it("closes with Escape, restores scrolling and records it as seen", async () => {
    setDate(ACTIVE);
    render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(window.localStorage.getItem("csgy-awards-modal-2026")).toBe("true");
  });

  it("closes via 'Maybe later' and the close button", async () => {
    setDate(ACTIVE);
    const { unmount } = render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.click(screen.getByRole("button", { name: "Maybe later" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    unmount();

    window.localStorage.clear();
    render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when the backdrop is clicked but not the dialog body", async () => {
    setDate(ACTIVE);
    render(<AwardsModal />);
    const dialog = await screen.findByRole("dialog");
    await userEvent.click(screen.getByRole("heading", { level: 2 }));
    expect(dialog).toBeInTheDocument();
    await userEvent.click(dialog.parentElement!);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("only appears once per visitor", async () => {
    setDate(ACTIVE);
    const { unmount } = render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    unmount();

    render(<AwardsModal />);
    await new Promise((r) => setTimeout(r, 20));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("is not lost if the page is reloaded before being dismissed", async () => {
    setDate(ACTIVE);
    const { unmount } = render(<AwardsModal />);
    await screen.findByRole("dialog");
    unmount();
    render(<AwardsModal />);
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
  });

  it("keeps Tab focus inside the dialog", async () => {
    setDate(ACTIVE);
    render(<AwardsModal />);
    const close = await screen.findByRole("button", { name: "Close" });
    const later = screen.getByRole("button", { name: "Maybe later" });
    later.focus();
    await userEvent.tab();
    expect(close).toHaveFocus();
    await userEvent.tab({ shift: true });
    expect(later).toHaveFocus();
  });

  it("returns focus to the previously focused element on close", async () => {
    setDate(ACTIVE);
    const outside = document.createElement("button");
    document.body.appendChild(outside);
    outside.focus();
    render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(outside).toHaveFocus());
    outside.remove();
  });

  it("links to the awards page", async () => {
    setDate(ACTIVE);
    render(<AwardsModal />);
    expect(await screen.findByRole("link", { name: /See the categories/ })).toHaveAttribute("href", expect.stringMatching(/^\/awards\/?$/));
  });

  it("opens even when browser storage throws", async () => {
    setDate(ACTIVE);
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("blocked", "SecurityError");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("blocked", "SecurityError");
    });
    render(<AwardsModal />);
    await screen.findByRole("dialog");
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
