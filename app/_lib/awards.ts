// Details for the Civic Society's annual Town Centre Awards.
//
// The awards recognise the shops, businesses, food and drink establishments
// and market stalls that keep the heart of Great Yarmouth looking its best.

export const TOWN_CENTRE_AWARDS = {
  name: "Town Centre Awards",
  path: "/awards/",
  ceremonyDate: "2026-11-12",
  dateLabel: "Thursday 12 November 2026",
  timeLabel: "5.30pm for 6pm",
  venue: "The Assembly Room, Great Yarmouth Town Hall",
  shortlistedCount: 40,
  categoryCount: 11,
  // The banner, homepage spotlight and first-visit modal are only shown
  // between these dates (London time, inclusive).
  visibleFrom: "2026-11-02",
  visibleUntil: "2026-11-13",
} as const;

export const awardCategories = [
  "Retail — Independent",
  "Retail — National",
  "Services — Independent",
  "Services — National",
  "Food and Drink — Independent",
  "Food and Drink — National",
  "Take-Away — Independent",
  "Take-Away — National",
  "Personal Services — National",
  "Charity Shop",
  "Market Stalls",
];

// Whole days from the given London-date string (YYYY-MM-DD) until the
// ceremony, or zero once the day has arrived.
export function daysUntilCeremony(today: string): number {
  const days =
    (Date.parse(`${TOWN_CENTRE_AWARDS.ceremonyDate}T00:00:00Z`) -
      Date.parse(`${today}T00:00:00Z`)) /
    86_400_000;
  return Math.max(0, Math.ceil(days));
}
