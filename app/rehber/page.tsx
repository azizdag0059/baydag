import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, Sparkles, MessageSquare, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GUIDES } from "@/lib/guides-data";
import { SITE, BUSINESS_ID, waLink } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Teknik Rehber & Blog | Demir Doğrama ve Çelik Yapı Bilgi Merkezi",
  description:
    "Demir doğrama, çelik konstrüksiyon, çelik merdiven, lazer kesim korkuluk, çelik ev ve kapı sistemleri hakkında uzman teknik makaleler, rehberler ve ipuçları.",
  alternates: { canonical: "/rehber" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${SITE.url}/rehber`,
    siteName: SITE.name,
    title: "Teknik Rehber & Blog | Baydağ Demir",
    description:
      "Demir ve çelik imalatına dair aradığınız tüm teknik bilgiler, malzeme seçimleri ve mühendislik ipuçları.",
    images: [{ url: `${SITE.url}/projects/after/1.jpg`, alt: "Baydağ Demir Teknik Rehber" }],
  },
};

export default function GuideHubPage() {
  const categories = [
    "Tümü",
    "Demir Doğrama",
    "Çelik Konstrüksiyon",
    "Merdiven & Korkuluk",
    "Kapı & Lazer Kesim",
    "Çatı, Pergola & Yaşam",
  ];

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE.url}/rehber#webpage`,
    url: `${SITE.url}/rehber`,
    name: "Baydağ Demir Teknik Rehber ve Blog",
    description: "Demir doğrama, çelik konstrüksiyon ve mimari metal imalatı teknik bilgi merkezi.",
    publisher: { "@id": BUSINESS_ID },
  };

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white selection:bg-[#ff5e14] selection:text-white">
      <JsonLd data={hubSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Teknik Rehber & Blog", url: `${SITE.url}/rehber` },
        ])}
      />
      <Navbar />

      {/* Header Section */}
      <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 steel-grid-bg border-b border-[#181d24]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Baydağ Demir Bilgi & Danışmanlık Merkezi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.15] mb-6">
            Demir Doğrama & Çelik Yapı <span className="text-[#ff5e14]">Teknik Rehberi</span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Doğru malzeme seçimi, statik güvenlik kriterleri, imalat teknikleri ve bakım püf noktaları.
            Tekirdağ ve Trakya bölgesindeki projeleriniz için 25 yıllık atölye deneyimimizi paylaşıyoruz.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Quick Stats / Highlights */}
          <div className="flex items-center justify-between border-b border-[#28303d] pb-4 mb-10">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff5e14]" />
              Yayınlanan <span className="text-[#ff5e14]">Uzman Makaleler</span> ({GUIDES.length})
            </h2>
            <span className="text-xs text-[#8b9bb0] uppercase font-bold tracking-wider hidden sm:inline">
              Güncel Teknik Bilgiler
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES.map((guide) => (
              <article
                key={guide.slug}
                className="group bg-[#12151a] border border-[#28303d] hover:border-[#ff5e14]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(255,94,20,0.15)]"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-black overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={guide.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#0d0f12]/90 border border-[#28303d] text-[#ff5e14] text-[10px] font-black uppercase px-2.5 py-1 tracking-wider backdrop-blur-sm">
                      {guide.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#8b9bb0] mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
                        {guide.readTime} okuma
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#ff5e14] transition-colors leading-snug mb-3">
                      <Link href={`/rehber/${guide.slug}`}>{guide.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed line-clamp-3 mb-4">
                      {guide.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-[#1f242d]">
                  <Link
                    href={`/rehber/${guide.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase text-white group-hover:text-[#ff5e14] transition-colors pt-4"
                  >
                    <span>Rehberi İncele</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#08090c] border-t border-[#181d24]">
        <div className="max-w-4xl mx-auto bg-[#12151a] border border-[#28303d] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff5e14]/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
            Projeniz İçin Teknik Danışmanlık ve <span className="text-[#ff5e14]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-sm text-[#9ca3af] max-w-xl mx-auto mb-8 leading-relaxed">
            Aklınızdaki modelin statiği, profil seçimi ve fiyatı hakkında ustalarımızla doğrudan görüşün.
            Tekirdağ ve Trakya genelinde yerinde ölçü ve keşif tamamen ücretsizdir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink("Merhaba Baydağ Demir, rehber sayfanızı inceledim. Projem için teknik bilgi ve fiyat teklifi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-7 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp&apos;tan Hızlı Fiyat Al
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 bg-[#181d24] border border-[#28303d] hover:border-[#ff5e14] text-white px-7 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#ff5e14]" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
