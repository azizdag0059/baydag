import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Lightbulb,
  MessageSquare,
  Phone,
  ArrowRight,
  ShieldCheck,
  Hammer,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { GUIDES, getGuide } from "@/lib/guides-data";
import { SITE, BUSINESS_ID, waLink } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const path = `/rehber/${guide.slug}`;
  return {
    title: { absolute: `${guide.metaTitle} | Baydağ Demir` },
    description: guide.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      url: path,
      siteName: SITE.name,
      title: guide.metaTitle,
      description: guide.metaDescription,
      publishedTime: guide.publishDate,
      authors: [SITE.name],
      images: [{ url: guide.heroImage, alt: guide.heroImageAlt }],
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE.url}/rehber/${guide.slug}`;
  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.summary,
    image: `${SITE.url}${guide.heroImage}`,
    datePublished: guide.publishDate,
    dateModified: guide.publishDate,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon.png`,
    },
    mainEntityOfPage: url,
  };

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white selection:bg-[#ff5e14] selection:text-white">
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Teknik Rehber", url: `${SITE.url}/rehber` },
          { name: guide.title, url },
        ])}
      />
      <Navbar />

      <article>
        {/* Hero Section */}
        <header className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 steel-grid-bg border-b border-[#181d24]">
          <div className="max-w-4xl mx-auto">
            <nav
              aria-label="breadcrumb"
              className="flex items-center flex-wrap gap-1 text-[11px] text-[#8b9bb0] mb-5 uppercase tracking-wider"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <Link href="/rehber" className="hover:text-white transition-colors">
                Teknik Rehber
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <span className="text-[#ff5e14] truncate max-w-[200px] sm:max-w-none">
                {guide.category}
              </span>
            </nav>

            <div className="flex items-center gap-4 text-xs text-[#8b9bb0] mb-4">
              <span className="px-2.5 py-1 bg-[#181d24] border border-[#28303d] text-[#ff5e14] font-black uppercase text-[10px] tracking-wider">
                {guide.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
                {guide.readTime} okuma süresi
              </span>
              <span className="flex items-center gap-1 hidden sm:flex">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                {guide.publishDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.15] mb-6">
              {guide.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 border-l-2 border-[#ff5e14] pl-4">
              {guide.summary}
            </p>

            <div className="relative w-full aspect-[16/9] border border-[#28303d] overflow-hidden bg-black shadow-2xl">
              <Image
                src={guide.heroImage}
                alt={guide.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content Body & Aside */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Article Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Introduction Paragraphs */}
              <div className="space-y-4 text-base text-[#c3cad5] leading-relaxed">
                {guide.intro.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Sections */}
              {guide.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-4 pt-4 border-t border-[#181d24]">
                  <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
                    {sec.heading}
                  </h2>

                  <div className="space-y-3 text-base text-[#c3cad5] leading-relaxed">
                    {sec.content.map((c, cIdx) => (
                      <p key={cIdx}>{c}</p>
                    ))}
                  </div>

                  {/* Tips Box */}
                  {sec.tips && sec.tips.length > 0 && (
                    <div className="bg-[#181d24] border-l-4 border-[#f59e0b] p-4 text-sm text-[#e5e7eb] space-y-1 my-4">
                      {sec.tips.map((tip, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Checklist */}
                  {sec.checklist && sec.checklist.length > 0 && (
                    <div className="bg-[#12151a] border border-[#28303d] p-5 my-4">
                      <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                        <span>Kritik Kontrol Listesi</span>
                      </h4>
                      <ul className="space-y-2">
                        {sec.checklist.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-[#d1d5db]">
                            <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Key Takeaways */}
              <div className="bg-[#12151a] border-2 border-[#ff5e14]/40 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5e14]/10 rounded-full blur-2xl" />
                <h3 className="text-lg font-black uppercase tracking-wide text-white mb-4 flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-[#ff5e14]" />
                  <span>Önemli Çıkarımlar & Usta Tavsiyeleri</span>
                </h3>
                <ul className="space-y-2.5">
                  {guide.keyTakeaways.map((takeaway, tkIdx) => (
                    <li key={tkIdx} className="flex items-start gap-2.5 text-sm text-[#e5e7eb]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e14] mt-2 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services CTA within text */}
              <div className="bg-[#12151a] border border-[#28303d] p-6">
                <h3 className="text-sm font-black uppercase tracking-wider text-white mb-3">
                  İlgili Atölye İmalat Hizmetlerimiz
                </h3>
                <p className="text-xs text-[#8b9bb0] mb-4">
                  Bu rehberdeki konular hakkında Tekirdağ Süleymanpaşa atölyemizde birebir imalat ve montaj gerçekleştiriyoruz.
                </p>
                <div className="flex flex-wrap gap-2">
                  {guide.relatedServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/hizmetler/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#181d24] hover:bg-[#ff5e14] border border-[#28303d] hover:border-[#ff5e14] text-xs font-bold text-gray-200 hover:text-white transition-all"
                    >
                      <span>{svc.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Author / Workshop Badge */}
              <div className="bg-[#12151a] border border-[#28303d] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#181d24] border border-[#ff5e14] flex items-center justify-center text-[#ff5e14]">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase text-white tracking-wide">Baydağ Demir</h4>
                    <p className="text-[11px] text-[#8b9bb0]">25 Yıllık Zanaat Güvencesi</p>
                  </div>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                  Tekirdağ Süleymanpaşa merkezli atölyemizde Trakya&apos;nın her noktasına çelik ve demir imalatı yapıyoruz.
                </p>
                <div className="pt-2 border-t border-[#1f242d] space-y-2">
                  <a
                    href={waLink(`Merhaba Baydağ Demir, "${guide.title}" rehberinizi okudum. Fiyat ve keşif almak istiyorum.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#10b981] hover:bg-[#059669] text-white py-2.5 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Keşif Hattı</span>
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#181d24] border border-[#28303d] hover:border-[#ff5e14] text-white py-2.5 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#ff5e14]" />
                    <span>{SITE.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-[#12151a] border border-[#28303d] p-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
                  Montaj Yaptığımız İlçeler
                </h4>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {SITE.areas.map((area) => (
                    <span key={area} className="px-2 py-1 bg-[#181d24] border border-[#28303d] text-gray-300">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <FaqSection faqs={guide.faqs} title="Sıkça Sorulan Sorular" />
        )}

        {/* Other Guides Carousel / Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0c0f] border-t border-[#181d24]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide mb-8">
              Diğer <span className="text-[#ff5e14]">Teknik Rehberler</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherGuides.map((item) => (
                <div key={item.slug} className="bg-[#12151a] border border-[#28303d] p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#ff5e14] tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-white text-sm hover:text-[#ff5e14] transition-colors mb-2">
                      <Link href={`/rehber/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-xs text-[#9ca3af] line-clamp-2">{item.summary}</p>
                  </div>
                  <Link
                    href={`/rehber/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#ff5e14] pt-4 mt-auto hover:underline"
                  >
                    <span>İncele</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
