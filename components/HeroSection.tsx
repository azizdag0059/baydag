"use client";

import { Flame, ShieldCheck, ArrowRight, Sparkles, Compass, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden steel-grid-bg">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#ff5e14]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#f59e0b]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Decorative Steel Lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-[#28303d] to-transparent hidden lg:block opacity-40" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-gradient-to-b from-transparent via-[#28303d] to-transparent hidden lg:block opacity-40" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(255,94,20,0.15)]">
          <Flame className="w-3.5 h-3.5 text-[#ff5e14] animate-pulse" />
          <span>Süleymanpaşa Atölyesi · Tekirdağ & Trakya Geneli Montaj</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.1] mb-6">
          <span className="block text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-[#9ca3af] mb-4">
            Tekirdağ Demir Doğrama & Çelik İmalat
          </span>
          HAM ÇELİKTEN <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e14] via-[#f59e0b] to-[#ff5e14] drop-shadow-[0_0_35px_rgba(255,94,20,0.4)]">
            MİMARİ SANAT ESERİNE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9ca3af] font-normal leading-relaxed mb-10">
          Kaba inşaat aşamasındaki çelik taşıyıcı omurgalardan, lüks villa merdivenlerine; lazer kesim mimari kapılardan ağır sanayi asma katlarına kadar 
          <strong className="text-white font-semibold"> sıfır hata toleransı</strong> ve usta zanaatkarlıkla üretiyoruz.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#before-after"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#ff5e14] hover:bg-[#e04e0b] text-white px-8 py-4 text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(255,94,20,0.4)] hover:shadow-[0_0_40px_rgba(255,94,20,0.7)] border border-[#ff5e14] group"
          >
            <span>Dönüşüm Vitrinini İncele (Öncesi & Sonrası)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#ai-assistant"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#181d24] hover:bg-[#202731] text-gray-200 hover:text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200 border border-[#28303d] hover:border-[#ff5e14]/60 group"
          >
            <Sparkles className="w-4 h-4 text-[#f59e0b] group-hover:rotate-12 transition-transform" />
            <span>AI Proje & Malzeme Danışmanı</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-4 bg-[#12151a]/80 border border-[#28303d] hover:border-[#ff5e14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#ff5e14] mb-1 font-black text-2xl">
              <span>25+</span>
              <span className="text-xs text-gray-400 font-normal uppercase tracking-wider">Yıl</span>
            </div>
            <p className="text-xs text-[#9ca3af] font-medium">Demir & Çelik İşleme Tecrübesi</p>
          </div>

          <div className="p-4 bg-[#12151a]/80 border border-[#28303d] hover:border-[#ff5e14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#ff5e14] mb-1 font-black text-2xl">
              <span>850+</span>
              <span className="text-xs text-gray-400 font-normal uppercase tracking-wider">Proje</span>
            </div>
            <p className="text-xs text-[#9ca3af] font-medium">Tekirdağ & Trakya Genelinde Teslimat</p>
          </div>

          <div className="p-4 bg-[#12151a]/80 border border-[#28303d] hover:border-[#ff5e14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#ff5e14] mb-1 font-black text-2xl">
              <span>%100</span>
              <span className="text-xs text-gray-400 font-normal uppercase tracking-wider">Statik</span>
            </div>
            <p className="text-xs text-[#9ca3af] font-medium">Mühendislik & Yük Taşıma Garantisi</p>
          </div>

          <div className="p-4 bg-[#12151a]/80 border border-[#28303d] hover:border-[#ff5e14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#ff5e14] mb-1 font-black text-2xl">
              <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
              <span className="text-lg text-white font-bold">Ücretsiz</span>
            </div>
            <p className="text-xs text-[#9ca3af] font-medium">Yerinde Lazer Ölçü & Keşif Hizmeti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
