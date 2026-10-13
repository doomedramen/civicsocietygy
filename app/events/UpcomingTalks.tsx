"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/app/_components/Card";

type Talk = {
  date: string;
  dateLabel: string;
  title: string;
  subtitle?: string;
  speaker: string;
  description: string;
};

function getTodayInGreatYarmouth() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const part = (type: string) => parts.find((item) => item.type === type)?.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

export default function UpcomingTalks({ talks }: { talks: Talk[] }) {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    const updateToday = () => setToday(getTodayInGreatYarmouth());
    updateToday();
    const interval = window.setInterval(updateToday, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const visibleTalks = today ? talks.filter((talk) => talk.date >= today) : talks;

  if (visibleTalks.length === 0) {
    return <p className="text-sm leading-relaxed text-gray-500">No upcoming talks are currently scheduled.</p>;
  }

  return (
    <div className="space-y-4">
      {visibleTalks.map((talk) => (
        <article
          key={talk.date}
          className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
        >
          <Badge variant="secondary">{talk.dateLabel}</Badge>
          <h3 className="mt-3 text-xl font-bold text-primary">{talk.title}</h3>
          {talk.subtitle && <p className="mt-1 italic text-gray-600">{talk.subtitle}</p>}
          <p className="mt-2 text-sm font-medium text-secondary">{talk.speaker}</p>
          <p className="mt-2 leading-relaxed text-gray-600">{talk.description}</p>
        </article>
      ))}
    </div>
  );
}
