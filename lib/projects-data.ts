export interface ProjectItem {
  id: number;
  title: string;
  category: "merdiven" | "korkuluk" | "kapi" | "asmakat" | "cati";
  categoryLabel: string;
  location: string;
  duration: string;
  specs: string[];
  beforeImage: string;
  afterImage: string;
  beforeDescription: string;
  afterDescription: string;
  dimensions: string;
  materials: string;
  aspectRatio: "3/4" | "4/3";
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: "merdiven" | "korkuluk" | "kapi" | "asmakat" | "cati";
  categoryLabel: string;
  location: string;
  specs: string[];
  image: string;
  description: string;
  aspectRatio: "3/4" | "4/3";
}

// Before & After Vitrini (Dönüşüm Kartları)
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Özel Tasarım Omurgalı Çelik Villa Merdiveni",
    category: "merdiven",
    categoryLabel: "Lüks Villa Merdiveni",
    location: "Tekirdağ / Süleymanpaşa",
    duration: "12 Gün İmalat & Montaj",
    specs: ["NPU 160 Taşıyıcı Omurga", "Masif Meşe Basamak", "Lazer Kesim Dikey Korkuluk", "Gizli Sıcak LED Aydınlatma"],
    beforeImage: "/projects/before/1.jpg",
    afterImage: "/projects/after/1.jpg",
    beforeDescription: "Kaba inşaat aşamasında statik hesaplamaları yapılarak monte edilen monoblok çelik omurga ve basamak flanşları.",
    afterDescription: "Özel elektrostatik fırın boyalı dikey korkuluklar, entegre basamak LED aydınlatmaları ve 40mm doğal ahşap basamak kaplaması.",
    dimensions: "Yükseklik: 3.40m | 17 Basamak",
    materials: "NPU 160 Çelik Kiriş, 8mm Lazer Kesim Sac, Doğal Meşe, Elektrostatik Mat Siyah Boya",
    aspectRatio: "3/4"
  },
  {
    id: 2,
    title: "AVM & Ticari Merkez Çelik Cam Giriş Saçağı (Kanopi)",
    category: "cati",
    categoryLabel: "AVM Giriş Kanopisi",
    location: "Tekirdağ / Süleymanpaşa",
    duration: "14 Gün İmalat & Montaj",
    specs: ["HEA 200 Çelik Taşıyıcı Dikmeler", "Lamine Temperli Emniyet Camı", "Entegre Sıcak LED Hatları", "Statik Rüzgar ve Kar Yükü Hesabı"],
    beforeImage: "/projects/before/avm-kanopi.jpeg",
    afterImage: "/projects/after/avm-kanopi.jpeg",
    beforeDescription: "Ticari alan girişinde ağır çelik profil dikmeler ve poligon geometrili çatı iskeletinin vinçle montajı.",
    afterDescription: "Akşam aydınlatmalı, paslanmaz bağlantı elemanlı ve emniyet camlı prestijli AVM ana giriş kanopisi.",
    dimensions: "Açıklık: 18m | Derinlik: 8.5m | Alan: 153 m²",
    materials: "HEA Çelik Taşıyıcılar, 10+10mm Şeffaf Lamine Temperli Cam, Gizli Yağmur Oluğu, Elektrostatik Fırın Boya",
    aspectRatio: "3/4"
  },
  {
    id: 3,
    title: "Bioklimatik Çelik Karkas Villa Veranda & Pergola",
    category: "cati",
    categoryLabel: "Villa Veranda & Pergola",
    location: "Tekirdağ / Yeniçiftlik",
    duration: "7 Gün İmalat & Montaj",
    specs: ["150x150mm Taşıyıcı Çelik Kolonlar", "Motorlu Açılır-Kapanır Tavan", "Entegre Gizli Yağmur Drenajı", "Lineer Spot Aydınlatma"],
    beforeImage: "/projects/before/2.jpeg",
    afterImage: "/projects/after/2.jpeg",
    beforeDescription: "Ham betonarme zemin üzerinde taşıyıcı kolon yerleşimleri ve çelik karkas terazi montaj aşaması.",
    afterDescription: "Modern antrasit fırın boyalı, uzaktan kumandalı motorlu bioklimatik tavan panelleri ve entegre aydınlatmalı lüks yaşam alanı.",
    dimensions: "Genişlik: 6.50m | Derinlik: 4.20m (27.3 m²)",
    materials: "Ağır Çelik Kutu Profil, Ekstrüzyon Alüminyum Kanatlar, Somfy Otomasyon, Elektrostatik Fırın Boya",
    aspectRatio: "4/3"
  },
  {
    id: 4,
    title: "A-Frame Çelik Konstrüksiyon Dağ & Doğa Evi",
    category: "cati",
    categoryLabel: "A-Frame Çelik Yapı",
    location: "Tekirdağ / Şarköy - Uçmakdere",
    duration: "21 Gün İmalat & Montaj",
    specs: ["Ağır Çelik Üçgen Karkas", "Temperli Isıcamlı Cephe Sistemi", "Yüksek Isı & Ses Yalıtımı", "Doğal Ahşap & Çelik Hibrit"],
    beforeImage: "/projects/before/3.jpeg",
    afterImage: "/projects/after/3.jpeg",
    beforeDescription: "Eğimli arazide temel kotu düzleme ve radye temel üzerine çelik ankraj pabucu yerleşim aşaması.",
    afterDescription: "Panoramik deniz manzaralı, geniş ahşap teraslı, depreme tam dayanıklı anahtar teslim A-Frame çelik konstrüksiyon konut.",
    dimensions: "Taban Alanı: 54 m² | Asma Kat: 26 m² | Toplam: 80 m²",
    materials: "IPE/HEA Ağır Çelik Kirişler, Sandviç Çatı Paneli, 6+16+6 Konfor Isıcam, Emprenyeli Çam Cephe Kaplaması",
    aspectRatio: "4/3"
  },
  {
    id: 5,
    title: "Endüstriyel Çelik Konstrüksiyon Depo & Hangar",
    category: "asmakat",
    categoryLabel: "Endüstriyel Çelik Hangar",
    location: "Tekirdağ / Çorlu Sanayi Bölgesi",
    duration: "18 Gün İmalat & Montaj",
    specs: ["HEA Taşıyıcı Çelik Kolonlar", "Makaslı Çatı Konstrüksiyonu", "Poliüretan Sandviç Panel", "Endüstriyel Seksiyonel Kapı"],
    beforeImage: "/projects/before/4.jpeg",
    afterImage: "/projects/after/4.jpeg",
    beforeDescription: "Zemin betonarme pabuçlarına ankrajlanan ana taşıyıcı çelik kolonlar ve çatı makas kirişlerinin vinçle montajı.",
    afterDescription: "İzolasyonlu cephe ve çatı panelleriyle kaplanmış, doğal aydınlatma pencereleri ve geniş giriş kapısıyla kullanıma hazır sanayi yapısı.",
    dimensions: "Genişlik: 15m | Uzunluk: 28m | Yükseklik: 6.50m (420 m²)",
    materials: "HEA 240 Kolonlar, IPE 200 Çatı Kirişleri, 50mm PIR Sandviç Panel, Otomatik Seksiyonel Kapı",
    aspectRatio: "4/3"
  }
];

// Öne Çıkan Projeler Galerisi (Tüm Tamamlanmış İmalatlar)
export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 1,
    title: "Lüks Pivot Çelik Villa Giriş Kapısı",
    category: "kapi",
    categoryLabel: "Bina & Villa Giriş Kapısı",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["Ağır Çelik Pivot Mekanizma", "Doğal Ahşap & Antrasit Kombinasyon", "Entegre Sıcak LED Aydınlatma", "Parmak İzi / Akıllı Kilit"],
    image: "/projects/after/villa-kapi.jpeg",
    description: "Özel mimari tasarımlı, geniş açıklıklı pivot menteşe mekanizmalı, termal yalıtımlı ve lüks basamak LED aydınlatmalı çelik villa giriş kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 2,
    title: "Lazer Kesim Geometrik Teras & Balkon Korkuluğu",
    category: "korkuluk",
    categoryLabel: "Lazer Kesim Korkuluk",
    location: "Tekirdağ / Şarköy Sahil",
    specs: ["5mm CNC Lazer Çelik Plaka", "Çift Kat Epoksi Fırın Boya", "Gizli Taban Ankraj Sistemi", "Korozyon & Deniz Nemi Direnci"],
    image: "/projects/after/balkon-korkuluk.jpeg",
    description: "Panoramik deniz manzaralı villada rüzgar yükü hesaplanarak uygulanan, paslanmaz korozyon korumalı modern geometrik motifli teras korkuluk sistemi.",
    aspectRatio: "4/3"
  },
  {
    id: 3,
    title: "AVM & Ticari Merkez Çelik Cam Giriş Kanopisi",
    category: "cati",
    categoryLabel: "Giriş Saçağı & Kanopi",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["HEA Ağır Çelik Kolonlar", "10+10mm Emniyet Lamine Cam", "Gizli LED Hat Aydınlatması", "Paslanmaz Örümcek Tutucular"],
    image: "/projects/after/avm-kanopi.jpeg",
    description: "Yoğun ziyaretçi trafiğine sahip ticari alan için tasarlanan poligon çelik karkaslı, temperli cam örtülü ve aydınlatmalı modern giriş saçağı.",
    aspectRatio: "3/4"
  },
  {
    id: 4,
    title: "Endüstriyel Çelik Nehir & Vadi Yaya Geçiş Köprüsü",
    category: "asmakat",
    categoryLabel: "Çelik Köprü & Geçiş Sistemi",
    location: "Trakya / Doğa Parkı",
    specs: ["Kafes Kiriş Taşıyıcı Sistem", "Kaymaz Baklavalı Sac / Izgara Zemin", "Güvenlik Korkulukları", "Korozyon Önleyici Endüstriyel Boya"],
    image: "/projects/after/celik-kopru.jpeg",
    description: "Akarsu ve vadi geçişi için yüksek statik mukavemetli çelik profillerle inşa edilmiş, rijit temelli ve güvenlik bariyerli çelik yaya köprüsü.",
    aspectRatio: "3/4"
  },
  {
    id: 5,
    title: "Özel Tasarım Omurgalı Çelik Villa Merdiveni",
    category: "merdiven",
    categoryLabel: "Lüks Çelik Merdiven",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["NPU 160 Taşıyıcı Çelik Omurga", "Masif Meşe Basamaklar", "Dikey Mimari Korkuluklar", "Gizli Basamak LED'leri"],
    image: "/projects/after/1.jpg",
    description: "Dubleks villa için monoblok çelik omurga üzerine 40mm doğal masif ahşap basamaklar ve mat siyah elektrostatik fırın boyalı dikey korkuluklar.",
    aspectRatio: "3/4"
  },
  {
    id: 6,
    title: "Bioklimatik Çelik Karkas Villa Veranda & Pergola",
    category: "cati",
    categoryLabel: "Veranda & Pergola Sistemleri",
    location: "Tekirdağ / Yeniçiftlik",
    specs: ["Ağır Çelik Taşıyıcı Kutu Profil", "Motorlu Açılır-Kapanır Tavan", "Gizli Yağmur Tahliye Sistemi", "Spot LED Entegrasyonu"],
    image: "/projects/after/2.jpeg",
    description: "Dört mevsim kullanıma uygun, uzaktan kumandalı motorlu lamellerle gölgelendirme ve havalandırma sağlayan lüks çelik veranda sistemi.",
    aspectRatio: "4/3"
  },
  {
    id: 7,
    title: "A-Frame Çelik Konstrüksiyon Dağ & Doğa Evi",
    category: "cati",
    categoryLabel: "A-Frame & Bungalow Yapılar",
    location: "Tekirdağ / Şarköy - Uçmakdere",
    specs: ["Ağır Çelik Üçgen Taşıyıcı Karkas", "Konfor Isıcamlı Cephe", "Sandviç Panel Çatı", "Ahşap & Çelik Hibrit Mimari"],
    image: "/projects/after/3.jpeg",
    description: "Depreme tam dayanıklı çelik ana karkas, geniş ahşap teras ve panoramik doğa manzaralı cam cepheye sahip anahtar teslim çelik yapı.",
    aspectRatio: "4/3"
  },
  {
    id: 8,
    title: "Endüstriyel Çelik Konstrüksiyon Depo & Hangar",
    category: "asmakat",
    categoryLabel: "Sanayi Hangarı & Çelik Yapı",
    location: "Tekirdağ / Çorlu Sanayi",
    specs: ["HEA 240 Taşıyıcı Kolonlar", "Makaslı Çatı Konstrüksiyonu", "PIR Yalıtımlı Sandviç Panel", "Otomatik Seksiyonel Kapı"],
    image: "/projects/after/4.jpeg",
    description: "Sanayi ve lojistik tesisleri için geniş kolon aralıklarına sahip, yangına ve dış hava şartlarına dayanıklı prefabrike çelik depo binası.",
    aspectRatio: "4/3"
  }
];
