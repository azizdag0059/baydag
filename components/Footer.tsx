import Link from "next/link";
import { Hammer, Flame, ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08090c] border-t border-[#181d24] text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#181d24] border border-[#ff5e14]/60 flex items-center justify-center">
                <Hammer className="w-4 h-4 text-[#ff5e14]" />
              </div>
              <span className="text-lg font-black text-white uppercase tracking-wider">
                BAYDAĞ <span className="text-[#ff5e14]">DEMİR</span>
              </span>
            </div>
            <p className="text-xs text-[#8b9bb0] leading-relaxed mb-4">
              Tekirdağ ve Trakya bölgesinde özel çelik merdiven, ferforje bahçe/bina kapıları, lazer kesim korkuluklar ve ağır sanayi asma kat imalatında 25 yıllık zanaat güvencesi.
            </p>
            <div className="text-[11px] text-gray-500">
              Domain: <span className="text-gray-300">baydagdemir.com.tr</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-[#1f242d] pb-2">
              İmalat Hizmetlerimiz
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Özel Tasarım Çelik Merdivenler
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Lazer Kesim Balkon & Teras Korkulukları
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Motorlu Villa Bahçe & Garaj Kapıları
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Çelik Asma Kat & Platform İmalatı
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Çelik Çatı & Modern Sundurma Sistemleri
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-[#1f242d] pb-2">
              Hizmet Bölgelerimiz (Tekirdağ & Trakya)
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
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
                "Edirne",
                "Kırklareli",
              ].map((area) => (
                <span
                  key={area}
                  className="px-2 py-1 bg-[#12151a] border border-[#28303d] text-gray-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: AI & GEO Direct Link */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-[#1f242d] pb-2">
              Teknoloji & AI Arama Motorları
            </h4>
            <p className="text-xs text-[#8b9bb0] mb-3 leading-relaxed">
              Bu platform GEO (Generative Engine Optimization) standartlarında yapılandırılmıştır.
            </p>
            <a
              href="/llms.txt"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs text-[#f59e0b] hover:underline mb-2"
            >
              <span>llms.txt (LLM Model Özeti)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="pt-2 text-[11px] text-gray-500">
              OpenRouter Model Entegrasyonu & 7/24 Kesintisiz Vercel Edge Dağıtımı.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181d24] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Baydağ Demir (baydagdemir.com.tr) - Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>Tekirdağ Demir Doğrama & Çelik Konstrüksiyon</span>
            <span>•</span>
            <a href="#before-after" className="hover:text-white">Vitrin</a>
            <span>•</span>
            <a href="#ai-assistant" className="hover:text-white">AI Danışman</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
