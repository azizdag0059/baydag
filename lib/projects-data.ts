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
    title: "Çelik Konstrüksiyon Ticari Bina & Çatı Makası İmalatı",
    category: "asmakat",
    categoryLabel: "Çelik Konstrüksiyon",
    location: "Tekirdağ / Süleymanpaşa",
    duration: "18 Gün İmalat & Montaj",
    specs: ["Ağır Çelik Taşıyıcı Karkas", "Makaslı Çelik Çatı Konstrüksiyonu", "Baydağ Demir Şantiye İmalatı", "Statik Deprem & Rüzgar Hesabı"],
    beforeImage: "/projects/before/celik-konstruksiyon.jpg",
    afterImage: "/projects/after/celik-konstruksiyon.jpg",
    beforeDescription: "Zemin tabliyesi üzerinde ana taşıyıcı çelik kolonların dikimi, rüzgar çaprazları ve makas yerleşim aşaması.",
    afterDescription: "Baydağ Demir tarafından imal edilen yüksek mukavemetli çatı makasları ve çelik konstrüksiyon karkas montajının tamamlanmış hali.",
    dimensions: "Genişlik: 22m | Uzunluk: 45m | Yükseklik: 7.20m",
    materials: "HEA / IPE Ağır Çelik Profiller, Makas Konstrüksiyonu, Epoksi Antipas ve Fırın Boya",
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
    title: "Çelik Konstrüksiyon Ticari Bina & Çatı Makası",
    category: "asmakat",
    categoryLabel: "Çelik Konstrüksiyon",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["HEA Taşıyıcı Kolonlar", "Geniş Açıklıklı Çatı Makasları", "Baydağ Demir Şantiye İmalatı", "Epoksi Fırın Boya"],
    image: "/projects/after/celik-konstruksiyon.jpg",
    description: "Geniş açıklıklı çatı makasları ve ağır çelik kolon karkasıyla inşa edilen, statik deprem ve rüzgar hesaplarına uygun anahtar teslim çelik konstrüksiyon yapı.",
    aspectRatio: "4/3"
  },
  {
    id: 9,
    title: "Ahşap Kaplamalı & Ferforje Detaylı Motorlu Sürgülü Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Motorlu Bahçe Kapısı",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["Ağır Kutu Profil Karkas", "Doğal Ahşap Kompozit Panel", "Altın Varak Ferforje Motifler", "Motorlu Raylı Sürgü Mekanizması"],
    image: "/projects/after/bahce-kapisi.jpg",
    description: "Müstakil villa için özel olarak imal edilen, altın varak ferforje işlemeli, ahşap desen kompozit kaplamalı ve otomatik motorlu sürgülü bahçe kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 10,
    title: "CNC Lazer Kesim Motifli Modern Sürgülü Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Lazer Kesim Bahçe Kapısı",
    location: "Tekirdağ / Şarköy",
    specs: ["CNC Lazer Kesim Çelik Sac", "Kemerli Çelik Taşıyıcı Karkas", "Yüksek Güvenlikli Kilit Sistemi", "Elektrostatik Fırın Boya"],
    image: "/projects/after/bahce-kapisi-lazer-kesim-surkulu.jpg",
    description: "Geometrik CNC lazer kesim motifli, kemerli çelik üst taçlı ve ray üzerinde kayan modern villa bahçe kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 11,
    title: "Mızrak Başlıklı Klasik Ferforje Sürgülü Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Ferforje Bahçe Kapısı",
    location: "Tekirdağ / Malkara",
    specs: ["Dolu Dövme Kare Demir", "Altın Yaldız Mızrak Uçları", "Kavisli Üst Kemer Tasarımı", "Ağır Yük Zemin Ray Sistemi"],
    image: "/projects/after/bahce-kapisi-ferforje-malkara.jpg",
    description: "Geniş arsa ve çiftlik girişi için kavisli ferforje kemerli, altın yaldız süslemeli ve zemin raylı sürgülü klasik demir bahçe kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 12,
    title: "Otomatik Raylı Çift Sürgülü Site & Tesis Giriş Kapısı",
    category: "kapi",
    categoryLabel: "Otomatik Site Giriş Kapısı",
    location: "Tekirdağ / Çorlu",
    specs: ["Çift Yöne Açılır Sürgülü Ray", "Dairesel Motifli Ferforje Detaylar", "Merkezi Otomasyon Motoru", "Fotosel Emniyet Sensörleri"],
    image: "/projects/after/bahce-kapisi-otomatik-surkulu.jpg",
    description: "Site ve kurumsal tesis girişleri için çift kanatlı, fotoselli emniyet sistemli ve uzaktan kumandalı otomatik sürgülü demir kapı.",
    aspectRatio: "4/3"
  },
  {
    id: 13,
    title: "Kabartma Motifli Ağır Çelik Yana Kayar Otopark & Garaj Kapısı",
    category: "kapi",
    categoryLabel: "Endüstriyel Yana Kayar Kapı",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["Kabartma Pres Sac Paneller", "Üstten Askılı & Alttan Raylı Kılavuz", "Antrasit Fırın Boya", "Motorlu Otomasyon"],
    image: "/projects/after/bahce-kapisi-otopark-kayar.jpg",
    description: "Kapalı otopark ve garaj girişleri için kabartma klasik pres panelli, sağlam kılavuz ray sistemli yana kayar çelik kapı.",
    aspectRatio: "4/3"
  },
  {
    id: 14,
    title: "Kemerli Modern Villa Sürgülü Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Kemerli Bahçe Kapısı",
    location: "Tekirdağ / Süleymanpaşa",
    specs: ["Kavisli Çelik Üst Kemer", "Bronz Oluklu Panel Arka Zemin", "Perçinli Ağır Çelik Kasa", "Motorlu Raylı Sürgü Mekanizması"],
    image: "/projects/after/bahce-kapisi-kemerli-villa.jpg",
    description: "Lüks müstakil villa girişi için kavisli kemer mimarili, bronz oluklu panel zeminli ve perçin detaylı raylı motorlu bahçe kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 15,
    title: "CNC Lazer Kesim Yıldız Motifli Site & Bina Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Lazer Kesim Site Kapısı",
    location: "Tekirdağ / Çorlu",
    specs: ["CNC Lazer Yıldız Motifli Sac", "Üst Emniyet Mızrak Başlıkları", "Geniş Kanat Sürgü Mekanizması", "Mat Siyah Elektrostatik Fırın Boya"],
    image: "/projects/after/bahce-kapisi-lazer-bina.jpg",
    description: "Modern rezidans ve site girişleri için CNC lazer kesim geometrik yıldız motifli, mızraklı güvenlik başlıklı ve motorlu sürgülü bahçe kapısı.",
    aspectRatio: "4/3"
  },
  {
    id: 16,
    title: "Modern Antrasit Dikey Profilli Villa Bahçe Kapısı",
    category: "kapi",
    categoryLabel: "Modern Villa Bahçe Kapısı",
    location: "Tekirdağ / Marmaraereğlisi",
    specs: ["Üst Çelik Taç Karkas", "Dikey Kutu Profil Izgara", "Pirinç Aksesuar & Kilit", "Yana Kayar Motor Sistemi"],
    image: "/projects/after/bahce-kapisi-antrasit-modern.jpg",
    description: "Özel tasarım üst çelik taçlı, dikey profilli ve pirinç dairesel rozet detaylı modern antrasit sürgülü bahçe kapısı.",
    aspectRatio: "4/3"
  }
];
