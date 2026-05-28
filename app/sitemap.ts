import type { MetadataRoute } from "next";

const SITE = "https://jasonbarrygolf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/work-with-me`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
