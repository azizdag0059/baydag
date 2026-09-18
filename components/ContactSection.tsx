"use client";

import { useState } from "react";
import { Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Süleymanpaşa",
    projectType: "Özel Çelik Merdiven",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba Baydağ Demir, web sitenizden keşif talebi oluşturuyorum:%0A%0A👤 İsim: ${encodeURIComponent(
      formData.name
    )}%0A📞 Telefon: ${encodeURIComponent(
      formData.phone
    )}%0A📍 Konum: Tekirdağ / ${encodeURIComponent(
      formData.district
    )}%0A🏗️ Proje Türü: ${encodeURIComponent(
      formData.projectType
    )}%0A📝 Açıklama: ${encodeURIComponent(formData.message || "Detaylar telefonda görüşülecektir.")}`;

    window.open(`https://wa.me/905348748713?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0f12] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#181d24] border border-[#ff5e14]/40 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>İLETİŞİM & ÜCRETSİZ KEŞİF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            PROJENİZ İÇİN <span className="text-[#ff5e14]">KEŞİF VE TEKLİF</span> ALIN
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            Tekirdağ ve tüm Trakya bölgesinde yerinde lazer ölçüm ve teknik danışmanlık için bize dilediğiniz an ulaşabilirsiniz.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Details & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-6 bg-[#12151a] border border-[#28303d]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff5e14]/20 border border-[#ff5e14] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">Atölye & İmalat Merkezi</h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                      Karadeniz, Dumansız Sk., 59030 Süleymanpaşa / Tekirdağ
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#12151a] border border-[#28303d]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff5e14]/20 border border-[#ff5e14] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">Telefon & WhatsApp Hattı</h4>
                    <p className="text-xs text-[#9ca3af] mb-1">Doğrudan Atölye Şefi & Keşif Koordinatörü</p>
                    <a
                      href="tel:+905348748713"
                      className="text-base font-black text-[#ff5e14] hover:underline font-mono tracking-wider"
                    >
                      0534 874 87 13
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#12151a] border border-[#28303d]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#ff5e14]/20 border border-[#ff5e14] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#ff5e14]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">Çalışma & Keşif Saatleri</h4>
                    <p className="text-xs text-[#9ca3af]">
                      Pazartesi - Cumartesi: 08:00 - 19:30 <br />
                      Pazar: Acil Keşif & WhatsApp Destek
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <a
              href="https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20h%C4%B1zl%C4%B1%20ke%C5%9Fif%20ve%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#059669] text-white py-4 text-xs uppercase font-black tracking-wider transition-all duration-200 shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Tek Tıkla WhatsApp Keşif Hattına Bağlan</span>
            </a>
          </div>

          {/* Right: Fast Request Form */}
          <div className="lg:col-span-7 bg-[#12151a] border-2 border-[#28303d] p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-black text-white uppercase mb-2">
              HIZLI KEŞİF & FİYAT TEKLİFİ TALEBİ
            </h3>
            <p className="text-xs text-[#8b9bb0] mb-6">
              Aşağıdaki formu doldurun; projenize özel ön fiyatlandırma ve yerinde keşif randevusu için en kısa sürede dönüş yapalım.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5e14]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Örn: 0534 874 87 13"
                    className="w-full bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5e14]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                    Tekirdağ İlçesi
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5e14]"
                  >
                    <option value="Süleymanpaşa">Süleymanpaşa (Merkez)</option>
                    <option value="Çorlu">Çorlu</option>
                    <option value="Çerkezköy">Çerkezköy</option>
                    <option value="Kapaklı">Kapaklı</option>
                    <option value="Marmaraereğlisi">Marmaraereğlisi</option>
                    <option value="Muratlı">Muratlı</option>
                    <option value="Şarköy">Şarköy</option>
                    <option value="Hayrabolu">Hayrabolu</option>
                    <option value="Ergene">Ergene</option>
                    <option value="Malkara">Malkara</option>
                    <option value="Diğer (Trakya)">Diğer (Edirne / Kırklareli / İstanbul)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                    Proje Türü
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5e14]"
                  >
                    <option value="Özel Çelik Merdiven">Özel Çelik Merdiven</option>
                    <option value="Bahçe / Garaj Kapısı">Bahçe / Garaj Kapısı</option>
                    <option value="Lazer Kesim Korkuluk">Lazer Kesim Korkuluk</option>
                    <option value="Çelik Asma Kat & Platform">Çelik Asma Kat & Platform</option>
                    <option value="Sundurma & Çelik Çatı">Sundurma & Çelik Çatı</option>
                    <option value="Özel Ferforje İmalatı">Özel Ferforje İmalatı</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-300 mb-1.5">
                  Proje Detayları / Ölçüler (Opsiyonel)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Örn: Dubleks villa için 16 basamak omurgalı merdiven ve dikey korkuluk keşfi..."
                  className="w-full bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff5e14]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff5e14] hover:bg-[#e04e0b] text-white py-4 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(255,94,20,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>Teklif & Keşif Talebini Gönder (WhatsApp İle Doğrula)</span>
              </button>

              {submitted && (
                <div className="p-3 bg-[#10b981]/10 border border-[#10b981] text-[#10b981] text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Talebiniz hazırlandı ve WhatsApp hattımıza yönlendirildi.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
