// Tek kaynak: İsim / Adres / Telefon (NAP) tutarlılığı yerel SEO için kritik.
// Adres, telefon veya saat değişirse SADECE burayı güncelle.
export const SITE = {
  name: "Baydağ Demir",
  legalName: "Baydağ Demir",
  url: "https://baydagdemir.com.tr",
  phone: "+905348748713",
  phoneDisplay: "0534 874 87 13",
  whatsapp: "905348748713",
  instagram: "https://www.instagram.com/Baydag_59",
  address: {
    street: "Karadeniz Mah., Dumansız Sk.",
    district: "Süleymanpaşa",
    city: "Tekirdağ",
    postalCode: "59030",
    country: "TR",
    display: "Karadeniz, Dumansız Sk., 59030 Süleymanpaşa / Tekirdağ",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Karadeniz+dumans%C4%B1z+sk+59030+S%C3%BCleymanpa%C5%9Fa+Tekirda%C4%9F",
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "19:30" },
  hoursDisplay: "Pazartesi – Cumartesi 08:00 – 19:30",
  areas: [
    "Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Marmaraereğlisi", "Muratlı",
    "Şarköy", "Hayrabolu", "Ergene", "Malkara",
  ],
  wider: ["Tekirdağ", "Edirne", "Kırklareli", "Trakya"],
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const BUSINESS_ID = `${SITE.url}/#business`;
