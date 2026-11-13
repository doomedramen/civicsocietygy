"use client";

import { TOWN_CENTRE_AWARDS, hasCeremonyPassed } from "./awards";
import { useTodayInGreatYarmouth } from "./useAwardsActive";

// Shown at the top of the awards page once the ceremony day has passed,
// so the page no longer reads as though the event is still to come.
export default function AwardsAfterNotice() {
  const today = useTodayInGreatYarmouth();
  if (!hasCeremonyPassed(today)) return null;

  return (
    <div
      role="status"
      className="mb-8 rounded-lg border border-secondary/30 bg-cream p-5 text-base leading-relaxed text-gray-700"
    >
      <p className="font-bold text-primary">
        The {TOWN_CENTRE_AWARDS.name} ceremony took place on{" "}
        {TOWN_CENTRE_AWARDS.dateLabel}.
      </p>
      <p className="mt-1">
        Thank you to everyone who took part. The details below describe how
        this year&rsquo;s awards were run.
      </p>
    </div>
  );
}
