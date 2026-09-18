import Link from "next/link";
import { Hammer, MapPin, Phone, Navigation, Compass, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Footer() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Karadeniz+dumans%C4%B1z+sk+59030+S%C3%BCleymanpa%C5%9Fa+Tekirda%C4%9F";
  const appleMapsUrl = "https://maps.apple.com/?q=Karadeniz+dumans%C4%B1z+sk+59030+S%C3%BCleymanpa%C5%9Fa+Tekirda%C4%9F";
  const instagramUrl = "https://www.instagram.com/Baydag_59";

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
              Tekirdağ ve Trakya bölgesinde bungalow, çelik konstrüksiyon, bina giriş kapıları, lazer kesim korkuluklar ve endüstriyel hangar imalatında 25 yıllık zanaat güvencesi.
            </p>
            
            {/* Social & Maps Quick Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#12151a] hover:bg-[#e1306c] border border-[#28303d] hover:border-[#e1306c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram Sayfamız"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#12151a] hover:bg-[#ff5e14] border border-[#28303d] hover:border-[#ff5e14] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Google Haritalar Yol Tarifi"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#12151a] hover:bg-[#ff5e14] border border-[#28303d] hover:border-[#ff5e14] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Apple Haritalar Yol Tarifi"
              >
                <Compass className="w-4 h-4" />
              </a>
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
                  Bungalow & Prefabrik Ev Montajı
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Lüks Bina & Villa Giriş Kapıları
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Lazer Kesim Balkon & Pencere Korkulukları
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Uçak & Hangar Kapı Sistemleri
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Cam Balkon & PVC Sistemleri
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ff5e14] transition-colors">
                  Ağır Çelik Konstrüksiyon & Asma Kat
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
              İletişim & Konum
            </h4>
            <div className="space-y-2 text-xs text-[#8b9bb0] mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ff5e14] shrink-0 mt-0.5" />
                <span>Karadeniz, Dumansız Sk., 59030 Süleymanpaşa / Tekirdağ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff5e14] shrink-0" />
                <a href="tel:+905348748713" className="text-white font-bold hover:underline">
                  0534 874 87 13
                </a>
              </div>
            </div>
            <a
              href="/llms.txt"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs text-[#f59e0b] hover:underline mb-2"
            >
              <span>llms.txt (LLM Model Özeti)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181d24] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Baydağ Demir (baydagdemir.com.tr) - Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <a href="https://www.instagram.com/Baydag_59" target="_blank" rel="noopener noreferrer" className="hover:text-[#e1306c] flex items-center gap-1">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@Baydag_59</span>
            </a>
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
