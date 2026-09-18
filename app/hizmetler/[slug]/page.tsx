import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, MessageSquare, Phone, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { SERVICES, getService } from "@/lib/services-data";
import { PORTFOLIO_PROJECTS } from "@/lib/projects-data";
import { SITE, BUSINESS_ID, waLink } from "@/lib/site-config";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const path = `/hizmetler/${s.slug}`;
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: path,
      siteName: SITE.name,
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.image, alt: s.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${SITE.url}/hizmetler/${s.slug}`;
  const projects = PORTFOLIO_PROJECTS.filter(
    (p) =>
      s.projectCategories.includes(p.category) &&
      (!s.projectTitleIncludes || s.projectTitleIncludes.some((t) => p.title.includes(t)))
  );
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.h1,
    serviceType: s.name,
    description: s.summary,
    url,
    image: `${SITE.url}${s.image}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: [...SITE.areas, ...SITE.wider].map((name) => ({ "@type": "Place", name })),
  };

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white selection:bg-[#ff5e14] selection:text-white">
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", url: SITE.url },
          { name: "Hizmetler", url: `${SITE.url}/#hizmetler` },
          { name: s.name, url },
        ])}
      />
      <Navbar />

      <article>
        <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 steel-grid-bg">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <nav aria-label="breadcrumb" className="flex items-center gap-1 text-[11px] text-[#8b9bb0] mb-5 uppercase tracking-wider">
                <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/#hizmetler" className="hover:text-white">Hizmetler</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#ff5e14]">{s.name}</span>
              </nav>
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-6">{s.h1}</h1>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-8">{s.summary}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(`Merhaba Baydağ Demir, "${s.name}" için keşif ve fiyat teklifi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp&apos;tan Teklif Al
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#181d24] border border-[#28303d] hover:border-[#ff5e14] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-[#ff5e14]" /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] border border-[#28303d] overflow-hidden bg-black">
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </header>

        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#181d24]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5 text-[#c3cad5] leading-relaxed">
              {s.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <h2 className="text-2xl font-black text-white uppercase pt-4">Yaptığımız İşler</h2>
              <ul className="space-y-2">
                {s.scope.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5e14] mt-1 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="bg-[#12151a] border border-[#28303d] p-6 h-fit space-y-6">
              <div>
                <h2 className="text-sm font-black text-white uppercase mb-3">Kullanılan Malzemeler</h2>
                <ul className="space-y-1.5 text-sm text-[#9ca3af]">
                  {s.materials.map((m) => (
                    <li key={m}>• {m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-black text-white uppercase mb-3">Hizmet Bölgesi</h2>
                <p className="text-sm text-[#9ca3af]">{SITE.areas.join(", ")} ve tüm Trakya.</p>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#9ca3af]">
                <MapPin className="w-4 h-4 text-[#ff5e14] mt-0.5 shrink-0" />
                <span>
                  Atölye: {SITE.address.display}
                  <br />
                  {SITE.hoursDisplay}
                </span>
              </div>
            </aside>
          </div>
        </section>

        {projects.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0c0f] border-t border-[#181d24]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8">
                Tamamlanan <span className="text-[#ff5e14]">Projeler</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <figure key={p.id} className="bg-[#12151a] border border-[#28303d] overflow-hidden">
                    <div className="relative w-full aspect-[4/3] bg-black">
                      <Image
                        src={p.image}
                        alt={`${p.title} – ${p.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-5">
                      <h3 className="font-bold text-white mb-1">{p.title}</h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#ff5e14] mb-2">{p.location}</p>
                      <p className="text-sm text-[#9ca3af]">{p.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection faqs={s.faqs} title={`${s.name}: Sık Sorulanlar`} />

        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#181d24]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-black uppercase mb-6">Diğer Hizmetlerimiz</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/hizmetler/${o.slug}`}
                    className="block p-4 bg-[#12151a] border border-[#28303d] hover:border-[#ff5e14]/70 text-sm font-bold text-gray-200 hover:text-white"
                  >
                    {o.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
