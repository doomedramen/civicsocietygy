"use client";

import { useSyncExternalStore } from "react";
import { isAwardsActive } from "@/app/_lib/awards";
import { getTodayInGreatYarmouth } from "@/app/_lib/dates";

function subscribeToClock(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000);
  return () => window.clearInterval(id);
}

// The current date (YYYY-MM-DD) in Great Yarmouth, kept up to date.
// The prerendered markup uses the build-time date; hydration replaces it
// with the visitor's actual date without a mismatch.
export function useTodayInGreatYarmouth() {
  return useSyncExternalStore(
    subscribeToClock,
    getTodayInGreatYarmouth,
    getTodayInGreatYarmouth
  );
}

// True only while the current date (in Great Yarmouth) falls within the
// awards promotion window.
export function useAwardsActive() {
  const today = useTodayInGreatYarmouth();
  return isAwardsActive(today);
}
