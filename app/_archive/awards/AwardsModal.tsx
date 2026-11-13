"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TOWN_CENTRE_AWARDS } from "./awards";
import { readStorage, writeStorage } from "@/app/_lib/safeStorage";
import { withBasePath } from "@/app/_lib/basePath";
import { useAwardsActive } from "./useAwardsActive";

const SEEN_KEY = "csgy-awards-modal-2026";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// A one-time dialog on the homepage announcing the Town Centre Awards
// ceremony. Shown at most once per visitor, and only during the
// promotion window.
export default function AwardsModal() {
  const active = useAwardsActive();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    if (readStorage("localStorage", SEEN_KEY) === "true") return;
    // Defer to the next tick so the page paints before the dialog opens.
    const id = window.setTimeout(() => setOpen(true), 0);
    return () => window.clearTimeout(id);
  }, [active]);

  // Only remember the dialog as seen once it has actually been shown and
  // dismissed, so a quick reload doesn't lose it.
  const close = useCallback(() => {
    writeStorage("localStorage", SEEN_KEY, "true");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      // Keep keyboard focus inside the dialog while it is open.
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      if (event.shiftKey && (current === first || !dialogRef.current.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !dialogRef.current.contains(current))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-primary/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="awards-modal-heading"
        className="my-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative h-32 sm:h-52">
          <Image
            src={withBasePath("/images/gallery/IMG_8844.jpg")}
            alt="Great Yarmouth Town Hall, a red-brick building with a clock tower"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 512px, 100vw"
          />
          <div className="absolute inset-0 bg-primary/35" />
          <p className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-secondary-dark">
            Town Centre Awards 2026
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/80"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h2
            id="awards-modal-heading"
            className="font-serif text-3xl font-medium leading-tight text-primary"
          >
            Celebrating the shops, businesses and market stalls of Great Yarmouth
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            {TOWN_CENTRE_AWARDS.shortlistedCount} town-centre businesses have been
            shortlisted across {TOWN_CENTRE_AWARDS.categoryCount} categories —
            look out for the “shortlisted” sticker in their windows. Winners
            will be announced at our awards ceremony:
          </p>
          <div className="mt-5 rounded-lg border border-primary/10 bg-cream p-4 text-base">
            <p className="text-lg font-bold text-primary">{TOWN_CENTRE_AWARDS.dateLabel}</p>
            <p className="mt-1 text-gray-700">
              {TOWN_CENTRE_AWARDS.timeLabel} · {TOWN_CENTRE_AWARDS.venue}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={TOWN_CENTRE_AWARDS.path}
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary min-h-12 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-secondary-dark"
            >
              See the categories
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={close}
              className="min-h-12 px-4 text-base font-bold text-primary underline underline-offset-4 transition-colors hover:text-secondary"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}