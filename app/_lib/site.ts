import type { Metadata } from "next";

export const SITE_URL = "https://civicsocietygy.uk";
export const SITE_NAME = "Civic Society of Great Yarmouth";
export const SITE_DESCRIPTION =
  "A society for everyone who cares about Great Yarmouth — its buildings, its streets, its story, and its future.";

export const SOCIAL_IMAGE = {
  url: "/images/gallery/header-image.jpg",
  width: 1700,
  height: 593,
  alt: "The historic Tollhouse Museum in Great Yarmouth",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: "en_GB",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}
