# Town Centre Awards (archived)

Everything that ran the 2026 Town Centre Awards promotion on the site: the
`/awards/` page, the banner above the header, the one-time homepage dialog
and the "ceremony has taken place" notice.

It is kept here, switched off, so it can be reused for a future ceremony.
Folders starting with `_` are ignored by the Next.js router, so nothing in
here is published. The tests still run with `npm test`, so the code stays
in working order.

## Bringing it back

1. Update `awards.ts` with the new date, time, venue, shortlist count,
   categories and the `visibleFrom` / `visibleUntil` promotion window.
2. In `AwardsModal.tsx`, change `SEEN_KEY` to the new year (for example
   `csgy-awards-modal-2027`) so returning visitors see the new dialog.
3. Check the wording in `page.tsx` and `AwardsModal.tsx` still fits.
4. Update the dates in the tests to match.
5. Publish the page: create `app/awards/page.tsx` containing

   ```tsx
   export { default, metadata } from "@/app/_archive/awards/page";
   ```

   or move this folder back out of `_archive`.
6. Wire it into the site:
   - `app/layout.tsx`: render `<AwardsBanner />` just above `<Header />`.
   - `app/page.tsx`: render `<AwardsModal />` at the end of the homepage.
   - `app/sitemap.ts`: add
     `{ path: "/awards/", changeFrequency: "monthly", priority: 0.8 }`.
   - `app/events/page.tsx`: add the ceremony to `upcomingTalks`:

     ```ts
     {
       date: TOWN_CENTRE_AWARDS.ceremonyDate,
       dateLabel: `${TOWN_CENTRE_AWARDS.dateLabel}, ${TOWN_CENTRE_AWARDS.timeLabel}`,
       title: "Town Centre Awards Ceremony",
       subtitle: "Winners of this year’s Town Centre Awards announced",
       speaker: "Hosted by the Civic Society",
       description: `In the Assembly Room at the Town Hall — all ${TOWN_CENTRE_AWARDS.shortlistedCount} shortlisted shops, businesses and market stalls are invited.`,
       href: TOWN_CENTRE_AWARDS.path,
     },
     ```

The banner and dialog only appear between `visibleFrom` and `visibleUntil`,
so they can be wired in ahead of time.
