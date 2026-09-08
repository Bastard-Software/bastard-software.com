import type { MetadataRoute } from "next";

const BASE = "https://bastard-software.com";

// Language is a client-side preference on the same URL, so there are no locale alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/platform`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/technology`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
