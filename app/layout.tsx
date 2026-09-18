import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://baydagdemir.com.tr"),
  title: "Baydağ Demir | Tekirdağ Özel Tasarım Çelik Merdiven, Ferforje & Demir Doğrama",
  description:
    "Tekirdağ ve Trakya genelinde özel çelik villa merdivenleri, lazer kesim korkuluklar, motorlu bahçe kapıları ve asma kat imalatı. 25 yıllık tecrübe ve ücretsiz yerinde keşif.",
  keywords: [
    "Tekirdağ demir doğrama",
    "Tekirdağ çelik merdiven",
    "Çorlu ferforje kapı",
    "Süleymanpaşa demir ustası",
    "Lazer kesim balkon korkuluğu",
    "Çelik asma kat imalatı Tekirdağ",
    "Omurgalı ahşap basamaklı merdiven",
    "Baydağ Demir",
    "Trakya demir atölyesi",
  ],
  authors: [{ name: "Baydağ Demir" }],
  creator: "Baydağ Demir",
  publisher: "Baydağ Demir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://baydagdemir.com.tr",
    title: "Baydağ Demir | Tekirdağ Çelik & Demir Doğrama Zanaatı",
    description:
      "Kaba inşaat aşamasından bitmiş lüks projelere: Özel tasarım çelik merdivenler, lazer kesim korkuluklar ve ferforje kapılar.",
    siteName: "Baydağ Demir",
    images: [
      {
        url: "/projects/after/1.jpg",
        width: 1200,
        height: 630,
        alt: "Baydağ Demir - Özel Tasarım Çelik Merdiven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baydağ Demir | Çelik & Ferforje İmalatı",
    description: "Tekirdağ ve Trakya genelinde özel çelik ve demir doğrama çözümleri.",
    images: ["/projects/after/1.jpg"],
  },
  alternates: {
    canonical: "https://baydagdemir.com.tr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Baydağ Demir",
  "image": "https://baydagdemir.com.tr/projects/after/1.jpg",
  "@id": "https://baydagdemir.com.tr",
  "url": "https://baydagdemir.com.tr",
  "telephone": "+905348748713",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100. Yıl Sanayi Sitesi No: 48",
    "addressLocality": "Süleymanpaşa",
    "addressRegion": "Tekirdağ",
    "postalCode": "59100",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.9780,
    "longitude": 27.5110
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "19:30"
  },
  "areaServed": [
    "Tekirdağ",
    "Süleymanpaşa",
    "Çorlu",
    "Çerkezköy",
    "Kapaklı",
    "Marmaraereğlisi",
    "Muratlı",
    "Şarköy",
    "Hayrabolu",
    "Ergene",
    "Malkara",
    "Trakya"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Demir Doğrama ve Çelik İmalat Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Özel Tasarım Çelik Villa Merdiveni İmalatı",
          "description": "NPU ve kutu profil omurgalı, masif ahşap basamaklı, gizli LED aydınlatmalı lüks merdiven sistemleri."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lazer Kesim Ferforje Korkuluk",
          "description": "CNC lazer motifli, korozyona dayanıklı elektrostatik fırın boyalı balkon ve teras korkulukları."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Endüstriyel Çelik Asma Kat ve Platform",
          "description": "Fabrika, depo ve dükkanlar için yüksek taşıma kapasiteli statik hesaplı çelik asma kat yapımı."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motorlu Otomatik Villa Bahçe ve Garaj Kapıları",
          "description": "Paslanmaz galvaniz kaplamalı sürgülü ve kanatlı uzaktan kumandalı bahçe kapısı çözümleri."
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0d0f12] text-white">
        {children}
      </body>
    </html>
  );
}
