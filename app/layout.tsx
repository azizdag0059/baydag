import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/site-config";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Baydağ Demir | Tekirdağ Demir Doğrama & Çelik İmalat",
    template: "%s | Baydağ Demir",
  },
  description:
    "Tekirdağ Süleymanpaşa demir doğrama atölyesi: çelik merdiven, lazer kesim korkuluk, villa kapısı, kanopi, pergola ve çelik konstrüksiyon. Ücretsiz keşif.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "construction",
  formatDetection: { telephone: true, address: true },
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
    url: SITE.url,
    siteName: SITE.name,
    title: "Baydağ Demir | Tekirdağ Demir Doğrama & Çelik İmalat",
    description:
      "Kaba inşaattan anahtar teslime: çelik merdiven, lazer kesim korkuluk, villa kapısı, kanopi ve çelik konstrüksiyon. Tekirdağ & Trakya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baydağ Demir | Tekirdağ Demir Doğrama & Çelik İmalat",
    description: "Tekirdağ ve Trakya'da çelik merdiven, korkuluk, kapı ve çelik konstrüksiyon imalatı.",
  },
  alternates: { canonical: "/" },
  other: {
    "geo.region": "TR-59",
    "geo.placename": "Süleymanpaşa, Tekirdağ",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="antialiased bg-[#0d0f12] text-white">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
