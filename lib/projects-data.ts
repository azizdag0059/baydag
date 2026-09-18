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
    id: 3,
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
    id: 4,
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
