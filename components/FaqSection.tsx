import { HelpCircle } from "lucide-react";
import type { ServiceFaq } from "@/lib/services-data";
import { JsonLd, faqSchema } from "@/lib/schema";

// Sunucu bileşeni: cevaplar HTML'de hazır gelir (Google + AI motorları okur).
export default function FaqSection({
  faqs,
  title = "Sıkça Sorulan Sorular",
  id = "sss",
}: {
  faqs: ServiceFaq[];
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0c0f] border-t border-[#181d24]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>SSS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-8">{title}</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-[#12151a] border border-[#28303d] open:border-[#ff5e14]/60 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base">
                <h3>{f.q}</h3>
                <span className="text-[#ff5e14] text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#9ca3af] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
