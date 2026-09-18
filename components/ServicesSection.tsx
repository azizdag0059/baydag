import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/services-data";

// Sunucu bileşeni: hizmet sayfalarına taranabilir iç linkler üretir (SEO).
export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0f12] relative border-t border-[#181d24]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>İMALAT HİZMETLERİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            TEKİRDAĞ <span className="text-[#ff5e14]">DEMİR DOĞRAMA</span> HİZMETLERİMİZ
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] max-w-3xl">
            Süleymanpaşa&apos;daki atölyemizde ölçüye özel üretiyor, Tekirdağ&apos;ın tüm ilçelerinde ve Trakya genelinde montajını yapıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group bg-[#12151a] border border-[#28303d] hover:border-[#ff5e14]/70 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff5e14] transition-colors">
                  {s.h1}
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed flex-1">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#ff5e14]">
                  Detaylar <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
