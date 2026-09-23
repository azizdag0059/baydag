import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { SERVICES } from "@/lib/services-data";
import { GUIDES } from "@/lib/guides-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    // Ana Sayfa
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Rehber Bilgi Merkezi Hub
    {
      url: `${SITE.url}/rehber`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // 14 Ayrı Odaklı Hizmet Sayfası
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/hizmetler/${s.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`${SITE.url}${s.image}`],
    })),
    // 12 Bilgi Rehberi & Blog Makalesi
    ...GUIDES.map((g) => ({
      url: `${SITE.url}/rehber/${g.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE.url}${g.heroImage}`],
    })),
  ];
}
