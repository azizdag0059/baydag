import { SITE, BUSINESS_ID } from "@/lib/site-config";
import { SERVICES, type ServiceFaq } from "@/lib/services-data";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": BUSINESS_ID,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/projects/after/1.jpg`,
  logo: `${SITE.url}/icon.png`,
  description:
    "Tekirdağ Süleymanpaşa merkezli demir doğrama ve çelik imalat atölyesi: çelik merdiven, lazer kesim korkuluk, villa ve bahçe kapıları, kanopi ve pergola, bungalov/A-Frame çelik ev, çelik hangar ve asma kat.",
  telephone: SITE.phone,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.district,
    addressRegion: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: SITE.hours.days,
    opens: SITE.hours.opens,
    closes: SITE.hours.closes,
  },
  areaServed: [...SITE.areas, ...SITE.wider].map((name) => ({ "@type": "Place", name })),
  sameAs: [SITE.instagram],
  knowsAbout: [
    "Demir doğrama", "Çelik merdiven", "Lazer kesim korkuluk", "Ferforje",
    "Çelik konstrüksiyon", "Çelik kanopi", "Pergola", "A-Frame ev", "Çelik hangar", "Asma kat",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Demir Doğrama ve Çelik İmalat Hizmetleri",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.summary,
        url: `${SITE.url}/hizmetler/${s.slug}`,
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "tr-TR",
  publisher: { "@id": BUSINESS_ID },
};

export const faqSchema = (faqs: ServiceFaq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
