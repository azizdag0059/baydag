import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { SERVICES } from "@/lib/services-data";

// Not: "#bolum" gibi hash URL'ler Google tarafından ayrı sayfa sayılmaz; sitemap'e sadece gerçek sayfalar girer.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/hizmetler/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE.url}${s.image}`],
    })),
  ];
}
