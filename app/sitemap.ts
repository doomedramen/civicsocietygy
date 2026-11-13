import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/activities/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/events/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/join/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/our-people/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/reports/", changeFrequency: "yearly", priority: 0.8 },
  { path: "/newsletters/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/meetings/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies/", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  }));
}
