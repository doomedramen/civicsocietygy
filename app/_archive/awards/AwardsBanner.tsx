"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOWN_CENTRE_AWARDS, daysUntilCeremony } from "./awards";
import { readStorage, writeStorage } from "@/app/_lib/safeStorage";
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
  const pathname = usePathname();
  const [dismissedByUser, setDismissedByUser] = useState(false);
  const dismissedInSession = useSyncExternalStore(
    subscribeToDismissal,
    () => readStorage("sessionStorage", DISMISSED_KEY) === "true",
    () => false
  );

  if (!active || dismissedByUser || dismissedInSession) return null;

  const dismiss = () => {
    writeStorage("sessionStorage", DISMISSED_KEY, "true");
    setDismissedByUser(true);
  };

  // Already within the awards section: a link to it would be pointless.
  const onAwardsPage = pathname.startsWith("/awards");
  const days = daysUntilCeremony(today);
  const countdown =
    days === 0 ? "Tonight" : days === 1 ? "Tomorrow" : `In ${days} days`;

  return (
    <aside
      aria-label="Town Centre Awards notice"
      className="bg-secondary text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-3.5 text-center text-base font-semibold leading-snug sm:justify-between sm:text-left sm:px-8">
        <p>
          <span className="font-serif text-lg italic">Town Centre Awards</span>
          {" "}
          <span className="mx-1 hidden text-white/50 sm:inline" aria-hidden="true">·</span>
          <span className="text-white">
            Ceremony {TOWN_CENTRE_AWARDS.shortDateLabel}, {TOWN_CENTRE_AWARDS.timeLabel}, Town Hall
          </span>
          <span className="ml-3 inline-block rounded-full bg-primary px-3 py-0.5 text-sm font-bold">
            {countdown}
          </span>
        </p>
        <span className="flex items-center gap-3">
          {!onAwardsPage && (
            <Link
              href={TOWN_CENTRE_AWARDS.path}
              className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-base font-bold text-secondary transition-colors hover:bg-cream"
            >
              Find out more
            </Link>
          )}
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss awards notice"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </span>
      </div>
    </aside>
  );
}