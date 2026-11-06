"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { TOWN_CENTRE_AWARDS, daysUntilCeremony } from "@/app/_lib/awards";
import { useAwardsActive, useTodayInGreatYarmouth } from "./useAwardsActive";

const DISMISSED_KEY = "csgy-awards-banner-dismissed";

function subscribeToDismissal() {
  // Dismissal never changes outside this component's own event handlers,
  // so there is nothing to subscribe to.
  return () => {};
}

// A slim, dismissible strip above the header promoting the Town Centre
// Awards ceremony. Shown on every page during the promotion window only.
export default function AwardsBanner() {
  const active = useAwardsActive();
  const today = useTodayInGreatYarmouth();
  const [dismissedByUser, setDismissedByUser] = useState(false);
  const dismissedInSession = useSyncExternalStore(
    subscribeToDismissal,
    () => window.sessionStorage.getItem(DISMISSED_KEY) === "true",
    () => false
  );

  if (!active || dismissedByUser || dismissedInSession) return null;

  const dismiss = () => {
    window.sessionStorage.setItem(DISMISSED_KEY, "true");
    setDismissedByUser(true);
  };

  const days = daysUntilCeremony(today);
  const countdown =
    days === 0 ? "Tonight" : days === 1 ? "Tomorrow" : `In ${days} days`;

  return (
    <aside
      aria-label="Town Centre Awards notice"
      className="bg-secondary text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-2.5 text-center text-[13px] font-semibold tracking-wide sm:justify-between sm:text-left sm:px-8">
        <p>
          <span className="font-serif text-sm italic">Town Centre Awards</span>
          <span className="mx-2 hidden text-white/50 sm:inline">·</span>
          <span className="text-white/90">
            Ceremony {TOWN_CENTRE_AWARDS.dateLabel.replace(" 2026", "")}, 5.30pm, Town Hall
          </span>
          <span className="ml-3 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em]">
            {countdown}
          </span>
        </p>
        <span className="flex items-center gap-3">
          <Link
            href="/awards"
            className="rounded-full bg-white px-3.5 py-1 text-[12px] font-bold text-secondary transition-colors hover:bg-cream"
          >
            Find out more
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss awards notice"
            className="flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </span>
      </div>
    </aside>
  );
}