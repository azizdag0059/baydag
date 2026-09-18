"use client";

import { ShieldCheck, Compass, Sparkles, Award, CheckCircle, Wrench, Factory, Hammer } from "lucide-react";

export default function AboutCraftsmanship() {
  const steps = [
    {
      num: "01",
      title: "Yerinde Lazer Ölçüm & Statik Analiz",
      desc: "Tekirdağ ve çevre illerde mekanınıza gelerek lazerli cihazlarla milimetrik ölçü alıyor, yük taşıma kapasitelerini hesaplıyoruz.",
    },
    {
      num: "02",
      title: "CNC Lazer Kesim & Usta Kaynak İmalatı",
      desc: "NPU putreller, kutu profiller ve sac plakalar CNC makinelerde kesilip atölyemizde sertifikalı ustalarımızca gazaltı kaynakla birleştirilir.",
    },
    {
      num: "03",
      title: "Galvaniz Astar & Elektrostatik Fırın Boya",
      desc: "Paslanmaya ve neme karşı korozyon önleyici astar uygulandıktan sonra 200°C fırınlarda elektrostatik toz boya ile fırınlanır.",
    },
    {
      num: "04",
      title: "Hilti Epoksi Ankraj & Titiz Montaj",
      desc: "Kimyasal epoksi dübellerle duvara ve zemine sıfır salınımla monte edilir, ahşap/LED aksesuarları takılarak teslim edilir.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0c0f] border-t border-[#181d24] relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Story & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-4">
              <Hammer className="w-3.5 h-3.5" />
              <span>Zanaat, Güven & Statik Ustalığı</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              25 YILDIR DEMİRİ <span className="text-[#ff5e14]">GÜVEN VE ZARAFETLE</span> ŞEKİLLENDİRİYORUZ
            </h2>
            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-6">
              Baydağ Demir olarak Tekirdağ merkezli atölyemizde geleneksel demir doğrama zanaatini, modern mimari trendler ve ileri teknoloji CNC lazer kesim sistemleriyle harmanlıyoruz.
            </p>
            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-8">
              Her projeyi bir sanat eseri titizliğiyle ele alıyor; estetik görünümün arkasında deprem ve yük şartnamelerine tam uyumlu <strong className="text-white">maksimum statik dayanıklılık</strong> sağlıyoruz.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#12151a] border border-[#28303d]">
                <ShieldCheck className="w-6 h-6 text-[#ff5e14] mb-2" />
                <h4 className="text-white font-bold text-xs uppercase mb-1">Sıfır Esneme Garantisi</h4>
                <p className="text-[11px] text-[#8b9bb0]">Ağır yük altında salınım yapmayan rijit çelik karkas.</p>
              </div>

              <div className="p-4 bg-[#12151a] border border-[#28303d]">
                <Award className="w-6 h-6 text-[#f59e0b] mb-2" />
                <h4 className="text-white font-bold text-xs uppercase mb-1">10 Yıl Boya Koruması</h4>
                <p className="text-[11px] text-[#8b9bb0]">Tuzlu deniz havası ve dış hava şartlarına tam direnç.</p>
              </div>

              <div className="p-4 bg-[#12151a] border border-[#28303d]">
                <Factory className="w-6 h-6 text-[#10b981] mb-2" />
                <h4 className="text-white font-bold text-xs uppercase mb-1">Doğrudan İmalatçı</h4>
                <p className="text-[11px] text-[#8b9bb0]">Aracısız atölye fiyatı ve doğrudan usta muhataplığı.</p>
              </div>
            </div>
          </div>

          {/* Right Visual Pillar */}
          <div className="lg:col-span-5 bg-[#12151a] border-2 border-[#28303d] p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5e14]/10 blur-3xl pointer-events-none" />
            <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#ff5e14]" />
              <span>Neden Baydağ Demir?</span>
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#ff5e14] shrink-0 mt-0.5" />
                <span><strong>Lazer Hassasiyeti:</strong> Milimetrik yerleşim ile boşluksuz ve kusursuz montaj.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#ff5e14] shrink-0 mt-0.5" />
                <span><strong>Özel Mimari Tasarımlar:</strong> Standart hazır kalıplar yerine mekanınıza özel projelendirme.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#ff5e14] shrink-0 mt-0.5" />
                <span><strong>Zamanında Teslimat:</strong> Belirlenen gün ve saatte anahtar teslim montaj.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#ff5e14] shrink-0 mt-0.5" />
                <span><strong>Trakya Bölge Hizmeti:</strong> Tekirdağ, Çorlu, Çerkezköy, Kapaklı, Şarköy ve tüm köylere servis.</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#28303d]">
              <div className="text-xs text-[#8b9bb0] uppercase tracking-wider mb-2 font-bold">Atölye Danışma & Keşif</div>
              <div className="text-2xl font-black text-white tracking-wider font-mono">
                0534 874 87 13
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Production Process */}
        <div className="border-t border-[#1f242d] pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              4 ADIMDA <span className="text-[#ff5e14]">KUSURSUZ İMALAT</span> SÜRECİ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#12151a] border border-[#28303d] p-6 hover:border-[#ff5e14] transition-colors relative group"
              >
                <span className="text-4xl font-black text-[#28303d] group-hover:text-[#ff5e14]/40 transition-colors block mb-4 font-mono">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#ff5e14] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-[#8b9bb0] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
