// Teknik Bilgi Rehberleri & Blog İçerik Veri Modeli
export interface GuideSection {
  heading: string;
  content: string[];
  tips?: string[];
  checklist?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Demir Doğrama" | "Çelik Konstrüksiyon" | "Merdiven & Korkuluk" | "Kapı & Lazer Kesim" | "Çatı, Pergola & Yaşam";
  readTime: string;
  publishDate: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: GuideSection[];
  keyTakeaways: string[];
  relatedServices: { name: string; slug: string }[];
  faqs: GuideFaq[];
}

export const GUIDES: GuideItem[] = [
  {
    slug: "demir-dograma-nedir",
    title: "Demir Doğrama Nedir? Kullanım Alanları, İmalat Aşamaları ve Fiyat Faktörleri",
    metaTitle: "Demir Doğrama Nedir? Kullanım Alanları ve İmalat | Baydağ Demir",
    metaDescription: "Demir doğrama nedir, nerelerde kullanılır, nasıl üretilir? Profil seçimi, kaynak teknikleri, korozyon koruması ve atölye işçiliği rehberi.",
    category: "Demir Doğrama",
    readTime: "5 dk",
    publishDate: "2026-03-15",
    summary: "Demir doğrama; demir, çelik profil, sac ve lamaların kesme, bükme, kaynak ve fırın boya süreçleriyle bina, bahçe ve sanayi elemanlarına dönüştürülmesidir.",
    heroImage: "/projects/after/1.jpg",
    heroImageAlt: "Demir doğrama atölyesinde çelik profil kaynak ve imalat aşaması",
    intro: [
      "Demir doğrama; kaba inşaattan iç dekorasyona, bahçe çevrelemesinden fabrika yapılarına kadar modern mimarinin en temel taşıyıcı ve güvenlik disiplinlerinden biridir.",
      "Demir ve çelik alaşımlı hammaddelerin (kutu profil, NPU, HEA, dolu kare demir, sac) proje ölçülerine göre kesilmesi, gazaltı kaynağı ile birleştirilmesi, taşlanması ve paslanmaya karşı koruyucu astar/fırın boya ile işlenmesi demir doğramanın temelini oluşturur.",
      "Tekirdağ ve Marmara sahil şeridinde demir doğrama yaptırırken malzeme kalitesi kadar deniz havasına dayanıklılık (korozyon direnci) ve statik mukavemet kritik önem taşır."
    ],
    sections: [
      {
        heading: "1. Demir Doğramanın Başlıca Kullanım Alanları",
        content: [
          "Demir doğrama sanatı ve mühendisliği, hem estetik hem de yüksek güvenlik gerektiren alanlarda tercih edilir:",
          "• Yapısal Elemanlar: Çelik merdiven omurgaları, asma kat taşıyıcıları, çatı makasları ve güçlendirme karkasları.",
          "• Güvenlik ve Çevreleme: Bina giriş kapıları, otomatik sürgülü bahçe kapıları, pencere korkulukları ve bahçe duvarı üstü paneller.",
          "• Mimari ve Dekoratif Uygulamalar: CNC lazer kesim teras korkulukları, cam kanopi karkasları, loft tarzı metal cam bölme duvarlar.",
          "• Tarım ve Sanayi Yapıları: Traktör garajları, depo hangarları, fabrika servis platformları ve endüstriyel seksiyonel kapı karkasları."
        ]
      },
      {
        heading: "2. Demir Doğrama İmalat Süreci Nasıl İşler?",
        content: [
          "Kaliteli bir demir doğrama işi 5 temel aşamada hayata geçer:",
          "1. Yerinde Lazerli Ölçü & Keşif: Kot farkları, duvar gönyeleri ve montaj ankraj noktaları milimetrik olarak tespit edilir.",
          "2. Statik Planlama & Tasarım: Taşınacak ağırlık ve rüzgar yüküne göre profil et kalınlıkları (2mm, 3mm, 4mm veya ağır çelik) belirlenir.",
          "3. Atölye Kesim ve Gazaltı (MIG/MAG) Kaynağı: Kesilen profiller şablon masalarında kaynatılır, kaynak cürufları temizlenerek pürüzsüz taşlama yapılır.",
          "4. Yüzey Koruma & Elektrostatik Fırın Boya: Pas önleyici antipas astarın ardından elektrostatik toz boya ile 200°C fırında pişirilir.",
          "5. Şantiyede Montaj: Çelik dübel veya kimyasal ankrajlarla yapıya sabitlenir."
        ],
        tips: [
          "İpucu: Dış mekanda kullanılacak demir doğramalarda profil et kalınlığının en az 2.5 mm olması ve kapalı profillerin iç hava tahliyesinin doğru yapılması çürüme riskini önler."
        ]
      },
      {
        heading: "3. Fiyatı Belirleyen Temel Kriterler",
        content: [
          "Demir doğrama fiyatları sadece metrekareye göre değil; kullanılan çeliğin kilogram ağırlığı, kaynak işçiliği yoğunluğu, CNC lazer detayları, boya kalitesi ve montaj zorluğuna göre hesaplanır."
        ],
        checklist: [
          "Kullanılan profilin et kalınlığı (örneğin 1.5mm yerine 3mm)",
          "Boya tipi (Sıradan sprey boya yerine elektrostatik fırın boya)",
          "Kilit, menteşe ve otomasyon motoru markaları",
          "Montaj zemininde kimyasal ankraj kullanımı"
        ]
      }
    ],
    keyTakeaways: [
      "Demir doğrama, ahşap veya plastiğe göre katlarca yüksek mukavemet ve onlarca yıl ömür sunar.",
      "Marmara ve Trakya bölgesinde nem ve deniz havası nedeniyle fırın boya standart olmalıdır.",
      "İmalat öncesi yerinde keşif ve statik profil seçimi hayati önemdedir."
    ],
    relatedServices: [
      { name: "Tekirdağ Demir Doğrama İmalatı", slug: "demir-dograma-tekirdag" },
      { name: "Çelik Merdiven İmalatı", slug: "celik-merdiven-tekirdag" },
      { name: "Demir ve Ferforje Korkuluk", slug: "demir-korkuluk-tekirdag" }
    ],
    faqs: [
      {
        q: "Demir doğrama paslanmaya karşı nasıl korunur?",
        a: "Önce yüzey temizliği ve korozyon önleyici antipas uygulanır, ardından elektrostatik toz boya ile 200°C'de fırınlanır. Dış mekan bahçe kapısı ve sahil korkuluklarında bu işlem 15-20 yıla kadar pas koruması sağlar."
      },
      {
        q: "Demir doğrama ile ferforje arasındaki fark nedir?",
        a: "Demir doğrama genellikle düz profiller, kutu demirler ve modern geometrik tasarımları kapsar. Ferforje ise sıcak veya soğuk dövülerek bükülen dekoratif ve klasik kıvrımlı demir işçiliğidir."
      }
    ]
  },
  {
    slug: "celik-konstruksiyon-nedir",
    title: "Çelik Konstrüksiyon Nedir? Avantajları, Deprem Güvenliği ve Dayanım Prensipleri",
    metaTitle: "Çelik Konstrüksiyon Nedir? Avantajları ve Deprem Güvenliği | Baydağ Demir",
    metaDescription: "Çelik konstrüksiyon yapı nedir, betonarmeye göre neden daha güvenlidir? Statik dayanım, hafiflik, hızlı montaj ve sanayi/konut kullanım avantajları.",
    category: "Çelik Konstrüksiyon",
    readTime: "6 dk",
    publishDate: "2026-03-12",
    summary: "Çelik konstrüksiyon; ana taşıyıcı kolon, kiriş ve makasların tamamen yüksek mukavemetli çelik profillerden (HEA, IPE, NPU) üretildiği ileri mühendislik yapı sistemidir.",
    heroImage: "/projects/after/celik-konstruksiyon.jpg",
    heroImageAlt: "Tekirdağ Baydağ Demir çelik konstrüksiyon yapı ve çatı makası montajı",
    intro: [
      "Çelik konstrüksiyon sistemler, deprem kuşağında yer alan Türkiye'de can güvenliği, geniş açıklık geçebilme kapasitesi ve montaj hızı açısından inşaat sektörünün en güvenilir çözümüdür.",
      "Betonarmenin ağır ve kırılgan yapısına karşılık çelik, elastik deformasyon yeteneği sayesinde deprem enerjisini sönümler ve göçme riskini en aza indirir.",
      "Baydağ Demir olarak Tekirdağ, Çorlu ve Çerkezköy sanayi havzalarında fabrika hangarlarından A-Frame çelik evlere kadar statik projeli çelik konstrüksiyon imalatı gerçekleştiriyoruz."
    ],
    sections: [
      {
        heading: "1. Çelik Konstrüksiyonun Temel Avantajları",
        content: [
          "• Yüksek Taşıma Gücü & Düşük Ağırlık: Çelik, betonarmeye göre yaklaşık 10 kat daha hafiftir. Yapı ağırlığı azaldıkça depremde maruz kaldığı atalet kuvvetleri de o oranda düşer.",
          "• Kolonsuz Geniş Açıklıklar: Fabrika, depo ve spor salonu gibi mekanlarda 20-40 metreye varan kolon aralıkları çelik makaslarla kolayca geçilir.",
          "• Hızlı İmalat ve Montaj: Parçalar atölyede milimetrik toleransla üretilir ve sahada cıvatalı/kaynaklı bağlantılarla birkaç hafta içinde monte edilir.",
          "• %100 Geri Dönüştürülebilir ve Çevre Dostu: Çelik yapı gerektiğinde sökülebilir, büyütülebilir veya başka bir arsaya taşınabilir."
        ]
      },
      {
        heading: "2. Nerelerde Tercih Edilir?",
        content: [
          "1. Endüstriyel Tesisler: Depolar, lojistik antrepolar, fabrikalar ve hangarlar.",
          "2. Ticari Binalar: Dükkan asma katları, showroomlar ve AVM çatı karkasları.",
          "3. Konut ve Turizm: A-Frame villalar, çelik karkas bungalovlar ve prefabrik yapılar.",
          "4. Altyapı ve Geçişler: Çelik yaya köprüleri, otopark sundurmaları ve yangın merdivenleri."
        ],
        tips: [
          "Çelik konstrüksiyonda birleşim noktalarındaki flanş sacı kalınlığı, 8.8 / 10.9 kalite cıvata kullanımı ve kimyasal ankraj derinliği yapının tüm statiğini taşır."
        ]
      }
    ],
    keyTakeaways: [
      "Çelik konstrüksiyon, deprem bölgelerinde hafifliği ve esnekliği ile en güvenli yapı modelidir.",
      "Atölyede ön üretimli yapısı sayesinde hava koşullarından etkilenmeden çok hızlı inşa edilir.",
      "İç alanda kolonsuz ferah kullanım alanları sunar."
    ],
    relatedServices: [
      { name: "Çelik Konstrüksiyon İmalatı", slug: "celik-konstruksiyon-tekirdag" },
      { name: "Çelik Hangar ve Depo Yapıları", slug: "hangar-tekirdag" },
      { name: "Çelik Asma Kat İmalatı", slug: "asma-kat-tekirdag" }
    ],
    faqs: [
      {
        q: "Çelik konstrüksiyon yapı paslanır mı?",
        a: "Doğru korozyon astarı, epoksi ve elektrostatik fırın boya uygulandığında çelik konstrüksiyon onlarca yıl paslanmadan dayanır. Açık alanlarda galvaniz kaplama da tercih edilir."
      },
      {
        q: "Çelik ev veya hangar için statik proje zorunlu mu?",
        a: "Evet. Bölgenin kar yükü, rüzgar yükü ve deprem katsayısına göre mühendislik statik hesabı yapılmalı ve imalat buna göre gerçekleştirilmelidir."
      }
    ]
  },
  {
    slug: "celik-kapi-secerken-nelere-dikkat-edilmeli",
    title: "Çelik Villa ve Bina Giriş Kapısı Seçerken Nelere Dikkat Edilmeli? (Kapsamlı Rehber)",
    metaTitle: "Çelik Villa & Bina Kapısı Seçim Rehberi | Baydağ Demir",
    metaDescription: "Villa ve bina giriş kapısı seçerken saç kalınlığı, kilit mekanizması, pivot menteşe, yalıtım ve fırın boya detayları. Doğru kapı seçim rehberi.",
    category: "Kapı & Lazer Kesim",
    readTime: "5 dk",
    publishDate: "2026-03-10",
    summary: "Güvenli ve estetik bir çelik kapı seçerken sac et kalınlığı, kilit mekanizması, dış hava koşullarına dayanıklı fırın boya ve ısı/ses yalıtım dolgusu belirleyici faktörlerdir.",
    heroImage: "/projects/after/villa-kapi.jpeg",
    heroImageAlt: "Modern pivot mekanizmalı çelik villa giriş kapısı",
    intro: [
      "Bina veya villa giriş kapısı, bir yapının hem ilk estetik imzası hem de ailenizin ve mülkünüzün ana güvenlik kalkanıdır.",
      "Piyasada 'çelik kapı' adı altında satılan ancak sac kalınlığı 0.8 mm olan zayıf kapılar yerine, gerçek atölye imalatı ağır profil karkaslı kapılar tercih edilmelidir.",
      "Tekirdağ gibi hem rüzgarlı hem de sahil nemi alan bölgelerde kapı seçimi yaparken dikkat edilmesi gereken teknik detayları derledik."
    ],
    sections: [
      {
        heading: "1. Sac ve Profil Et Kalınlığı",
        content: [
          "Kaliteli bir çelik kapıda dış sac kalınlığı en az 2 mm, iç karkas kutu profili ise en az 40x40x2 mm olmalıdır. Sacın ince olması durumunda levyeyle esnetilme veya darbelere karşı zafiyet oluşur."
        ]
      },
      {
        heading: "2. Kilit Sistemleri ve Güvenlik Sınıfı",
        content: [
          "• Monoblok & Merkezi Kilit: Kapının 3 ayrı noktasından kasaya geçen çok milli kilitler en yüksek hırsızlık direncini sunar.",
          "• Akıllı Kilit & Parmak İzi: Modern villa kapılarında motorlu otomasyon, parmak izi okuyucu ve şifreli geçiş sistemleri standart hale gelmektedir.",
          "• Barel Koruyucu Zırh: Kilidin kırılarak açılmasını engelleyen çelik rozetler mutlaka bulunmalıdır."
        ]
      },
      {
        heading: "3. Dış Mekan Kaplaması ve Yalıtım",
        content: [
          "Doğrudan yağmura ve güneşe maruz kalan villa kapılarında iç mekan MDF'si kullanılmamalıdır. Bunun yerine:",
          "• Kompozit panel kaplama",
          "• Emprenyeli fırınlanmış masif ahşap / marin kontra",
          "• Elektrostatik fırın boyalı CNC lazer kesim çelik levhalar",
          "Ayrıca kapı kanadı içinde taş yünü yalıtımı ve çift sıra EPDM fitil ısı ve ses sızdırmazlığı sağlar."
        ],
        checklist: [
          "En az 2 mm gövde sacı ve 40x40 ağır profil iskelet",
          "Gövde içi taşyünü dolgusu ve kauçuk fitiller",
          "Pivot kapılarda bilyalı ağır yük menteşe aksı",
          "Korozyona dayanıklı elektrostatik fırın boya"
        ]
      }
    ],
    keyTakeaways: [
      "Dış mekan kapılarında iç mekan malzemeleri (ucuz kaplamalar) 1-2 yılda kabarma yapar; marin veya fırın boyalı çelik tercih edilmelidir.",
      "Pivot kapılar 150-200 cm gibi devasa açıklıkların tek parça ve hafifçe açılmasını sağlar.",
      "Kasa ile duvar arasına montajda kimyasal harç ve çelik dübel sıkılmalıdır."
    ],
    relatedServices: [
      { name: "Çelik Villa ve Bina Giriş Kapısı", slug: "celik-kapi-tekirdag" },
      { name: "Bahçe ve Sürgülü Demir Kapı", slug: "bahce-kapisi-tekirdag" }
    ],
    faqs: [
      {
        q: "Pivot villa kapısı nedir, normal kapıdan farkı nedir?",
        a: "Pivot kapı, kasadaki standart yan menteşeler yerine tavan ve zemindeki tek bir dikey eksen (mil) üzerinde döner. Bu sayede 1.5 - 2 metre genişliğindeki ağır kapılar bile tek parmakla sessizce açılır."
      }
    ]
  },
  {
    slug: "celik-merdiven-nasil-yapilir",
    title: "Çelik Merdiven Nasıl Yapılır? İmalat, Omurga Kaynağı ve Montaj Aşamaları",
    metaTitle: "Çelik Merdiven Nasıl Yapılır? İmalat & Montaj Rehberi | Baydağ Demir",
    metaDescription: "Çelik merdiven nasıl yapılır? Rıht ve basamak hesabı, omurga kaynağı, titreşim önleme, ahşap basamak montajı ve korkuluk detayları.",
    category: "Merdiven & Korkuluk",
    readTime: "6 dk",
    publishDate: "2026-03-08",
    summary: "Çelik merdiven; kat yüksekliği ve rıht açısına göre tasarlanan NPU/kutu profil omurganın atölyede kaynatılıp şantiyede ankrajlanması ve basamak kaplamalarıyla tamamlanmasıdır.",
    heroImage: "/projects/after/1.jpg",
    heroImageAlt: "Tekirdağ'da yapılan omurgalı ahşap basamaklı çelik villa merdiveni",
    intro: [
      "Dubleks daireler, villalar, loft mekanlar ve iş yerleri için çelik merdiven; hem yer tasarrufu sağlayan hem de mimari şıklık katan bir yapı elemanıdır.",
      "Betonarme merdivenlerin kaba ve hantal yapısına karşılık çelik merdiven; hava geçirgenliği yüksek, ışığı kesmeyen ve esnek tasarımlara imkan veren bir form sunar.",
      "Peki kaliteli ve sallanmayan bir çelik merdiven hangi mühendislik adımlarıyla üretilir?"
    ],
    sections: [
      {
        heading: "1. 2R + G Ergonomi Formülü ve Lazerli Kot Ölçümü",
        content: [
          "Merdiven tasarımının ilk şartı çıkış konforudur. Fransız mimar Blondel'in '2Rıht + 1Basamak = 60-64 cm' formülüne göre kat yüksekliği eşit basamaklara bölünür.",
          "Şantiyede bitmiş zemin ve üst kat parke kotları lazer nivo ile ölçülür. Milimetrik sapmalar basamak yüksekliklerinin farklılaşmasına neden olacağından ölçüm en kritik adımdır."
        ]
      },
      {
        heading: "2. Taşıyıcı Omurga Tipleri",
        content: [
          "• Tek Orta Omurga: 150x150 veya 200x100 kalın etli kutu profilin zig-zag kesilerek basamak saclarının kaynatılmasıyla üretilir. Modern ve minimalisttir.",
          "• Çift Yan Kiriş (Limonluk): Merdivenin iki yanında uzanan NPU veya lazer kesim sac kirişler arasına basamaklar yerleştirilir.",
          "• Konsol (Yüzen) Basamaklar: Basamaklar doğrudan betonarme perde duvara çelik kutularla gömülür; altı tamamen boştur ve havada süzülüyormuş hissi verir."
        ]
      },
      {
        heading: "3. Titreşim ve Esneme Önleme Teknikleri",
        content: [
          "Çelik merdivenlerde kullanıcıların en büyük korkusu basıldığında esnemesi veya ses yapmasıdır. Bunu önlemek için:",
          "• Omurga et kalınlığı en az 4–5 mm seçilmelidir.",
          "• Zemin ve tavan flanşları M16 kimyasal ankrajlarla betonarmeye kilitlenmelidir.",
          "• Ahşap basamak altına titreşim emici kauçuk conta yerleştirilmelidir."
        ]
      }
    ],
    keyTakeaways: [
      "Çelik omurga mutlaka kaba inşaat sırasında monte edilmeli, ahşap basamaklar boya-badana sonrası takılmalıdır.",
      "Rıht yüksekliği 17-18 cm, basamak derinliği 28-30 cm konfor standarttır.",
      "Gizli LED kanalları basamak altına atölyede açılmalıdır."
    ],
    relatedServices: [
      { name: "Çelik Merdiven İmalatı", slug: "celik-merdiven-tekirdag" },
      { name: "Çelik Korkuluk İmalatı", slug: "celik-korkuluk-tekirdag" }
    ],
    faqs: [
      {
        q: "Çelik merdiven yürürken ses yapar mı?",
        a: "Doğru statik hesap, kalın etli omurga ve basamak altı kauçuk/silikon yalıtım uygulandığında çelik merdiven kesinlikle esneme ve gıcırtı sesi yapmaz."
      }
    ]
  },
  {
    slug: "demir-korkuluk-ve-celik-korkuluk-farki",
    title: "Demir Korkuluk ile Çelik Korkuluk Arasındaki Farklar Nelerdir?",
    metaTitle: "Demir Korkuluk ile Çelik Korkuluk Farkı | Baydağ Demir",
    metaDescription: "Demir ferforje korkuluk ile çelik lazer kesim korkuluk arasındaki farklar. Dayanıklılık, estetik, bakım kolaylığı ve fiyat karşılaştırması.",
    category: "Merdiven & Korkuluk",
    readTime: "4 dk",
    publishDate: "2026-03-05",
    summary: "Demir korkuluklar geleneksel dövme ve ferforje motifleriyle öne çıkarken; çelik korkuluklar CNC lazer kesim paneller, dikey lama profiller ve minimalist modern hatlar sunar.",
    heroImage: "/projects/after/balkon-korkuluk.jpeg",
    heroImageAlt: "Modern lazer kesim çelik balkon korkuluğu montajı",
    intro: [
      "Balkon, teras, merdiven veya Fransız pencereniz için korkuluk yaptırırken klasik demir ferforje mi yoksa modern çelik/lazer kesim mi seçmelisiniz?",
      "Her iki model de yüksek güvenlik sağlasa da mimari tarz, rüzgar direnci ve bakım gereksinimleri açısından belirgin farklara sahiptir."
    ],
    sections: [
      {
        heading: "1. Tasarım ve Mimari Uyum",
        content: [
          "• Demir Korkuluk (Ferforje): Kıvrımlı motifler, mızrak uçları, yaprak ve rozet işlemeleriyle klasik taş, tuğla ve geleneksel villa mimarisine mükemmel uyum sağlar.",
          "• Çelik Korkuluk (Lazer & Dikey Lama): Düz hatlar, antrasit tonlar, geometrik CNC desenler veya ince dikey lamalarla modern, brütalist ve minimalist projelere hitap eder."
        ]
      },
      {
        heading: "2. Korozyon Direnci ve Bakım",
        content: [
          "Geleneksel demir korkuluklarda kaynak ek yerleri girintili çıkıntılı olduğu için boyasız noktalar kalabilir. Çelik lazer kesim paneller ise tek parça sacdan kesildiği için elektrostatik fırın boyayı homojen şekilde alır ve sahil şeridinde paslanmaya karşı daha yüksek direnç gösterir."
        ]
      }
    ],
    keyTakeaways: [
      "Modern mimaride dikey lama ve CNC sac korkuluklar değer katar.",
      "Klasik yapılarda ferforje motifler geleneksel şıklığı korur.",
      "Her iki seçenekte de fırın boya pas önlemenin anahtarıdır."
    ],
    relatedServices: [
      { name: "Demir ve Ferforje Korkuluk", slug: "demir-korkuluk-tekirdag" },
      { name: "Çelik ve Lazer Kesim Korkuluk", slug: "celik-korkuluk-tekirdag" }
    ],
    faqs: [
      {
        q: "Balkon korkuluğu standart yüksekliği kaç cm olmalıdır?",
        a: "Türkiye bina yönetmeliklerine göre balkon ve teras korkuluklarının bitmiş zemin yüksekliği en az 90 cm (tercihen 100-110 cm) olmalı ve dikey açıklıklar 11 cm'yi aşmamalıdır."
      }
    ]
  },
  {
    slug: "lazer-kesim-nedir",
    title: "CNC Lazer Kesim Sac ve Demir Nedir? Mimari Korkuluk ve Kapılarda Kullanımı",
    metaTitle: "CNC Lazer Kesim Nedir? Mimari Demir Uygulamaları | Baydağ Demir",
    metaDescription: "CNC fiber lazer kesim sac ve demir nedir? Balkon korkuluğu, bahçe kapısı, cephe paneli ve dekoratif metal kesim avantajları rehberi.",
    category: "Kapı & Lazer Kesim",
    readTime: "5 dk",
    publishDate: "2026-03-01",
    summary: "CNC fiber lazer kesim; yüksek yoğunluklu lazer ışını ile çelik sacların bilgisayar destekli CAD çizimlerine göre sıfır hata ve çapaksız olarak kesilmesidir.",
    heroImage: "/projects/after/balkon-korkuluk.jpeg",
    heroImageAlt: "CNC lazer kesim dekoratif geometrik desenli balkon korkuluğu",
    intro: [
      "Mimarlık ve demir doğrama sektöründe devrim yaratan CNC lazer kesim teknolojisi; standart korkuluk ve kapı modellerini kişiye özel birer sanat eserine dönüştürür.",
      "1 mm'den 20 mm'ye kadar siyah sac, DKP sac ve galvanizli levhalar üzerine istenen her türlü motif, logo veya geometrik desen mikron mertebesinde işlenebilir."
    ],
    sections: [
      {
        heading: "1. CNC Lazer Kesimin Demir İşlerindeki Avantajları",
        content: [
          "• Sınırsız Tasarım Özgürlüğü: Geometrik çizgilerden bitkisel motiflere, firma logolarından soyut desenlere kadar her vektör çizim kesilebilir.",
          "• Çapaksız ve Pürüzsüz Kenarlar: Geleneksel oksijen veya plazma kesimin aksine lazer kesimde kenarlarda erime veya cüruf oluşmaz.",
          "• Kaynaksız Bütünlük: Çok sayıda parça kaynatmak yerine tek parça sacdan korkuluk paneli üretilerek mukavemet artırılır."
        ]
      },
      {
        heading: "2. Nerelerde Kullanılır?",
        content: [
          "• Villa ve bina giriş kapısı kanat panelleri",
          "• Balkon, teras ve Fransız pencere korkulukları",
          "• Bahçe duvarı üzeri dekoratif mahremiyet çitleri",
          "• Bina dış cephe güneş kırıcıları ve klima kamufle kutuları"
        ]
      }
    ],
    keyTakeaways: [
      "Lazer kesim saclarda rüzgar geçirgenliği ve mahremiyet dengesi doğru hesaplanmalıdır.",
      "Sac kalınlığı korkuluklarda en az 3–4 mm seçilmelidir.",
      "Kesim sonrası kenar yuvarlama ve fırın boya pas direncini maksimize eder."
    ],
    relatedServices: [
      { name: "CNC Lazer Kesim İmalatı", slug: "lazer-kesim-tekirdag" },
      { name: "Çelik ve Lazer Kesim Korkuluk", slug: "celik-korkuluk-tekirdag" }
    ],
    faqs: [
      {
        q: "Lazer kesim korkuluklar rüzgarda uğultu yapar mı?",
        a: "Desen tasarımı yapılırken hava kanalları dengeli dağıtıldığında ve sac kalınlığı yeterli seçildiğinde (3-4 mm) kesinlikle ses veya titreşim yapmaz."
      }
    ]
  },
  {
    slug: "celik-cati-nedir",
    title: "Çelik Çatı Nedir? Ahşap Çatıya Göre Neden Daha Güvenli ve Uzun Ömürlüdür?",
    metaTitle: "Çelik Çatı Nedir? Ahşap Çatı ile Farkları | Baydağ Demir",
    metaDescription: "Çelik çatı ve çatı makası nedir? Kar ve rüzgar yükü dayanımı, yangın güvenliği, trapez/sandviç panel kaplama ve imalat aşamaları rehberi.",
    category: "Çatı, Pergola & Yaşam",
    readTime: "5 dk",
    publishDate: "2026-02-26",
    summary: "Çelik çatı; taşıyıcı makas ve aşık sistemlerinin çelik profillerden üretildiği, yangına, fırtınaya ve kar yüküne karşı en dayanıklı çatı konstrüksiyonudur.",
    heroImage: "/projects/after/celik-konstruksiyon.jpg",
    heroImageAlt: "Tekirdağ Baydağ Demir çelik çatı makası ve konstrüksiyon montajı",
    intro: [
      "Trakya bölgesinin sert kış şartları, lodos fırtınaları ve yoğun kar yağışları çatı sistemlerinin mukavemetini doğrudan sınar.",
      "Geleneksel ahşap çatıların zamanla kurtlanması, eğrilmesi, yangın riski taşıması ve lodos fırtınasında uçması gibi risklere karşı çelik çatı kesin çözümdür."
    ],
    sections: [
      {
        heading: "1. Çelik Çatının Ahşap Çatıya Göre Üstünlükleri",
        content: [
          "• Sıfır Yangın Riski: Çelik A1 sınıfı yanmaz malzemedir; elektrik kontağı veya kıvılcımlarla alev almaz.",
          "• Eğim ve Sehim Yapmaz: Ahşap gibi nemle çürümez, esnemez veya böceklenmez.",
          "• Yüksek Rüzgar ve Fırtına Direnci: Çelik makaslar betonarme kolon ve kirişlere kimyasal çelik pabuçlarla ankrajlandığı için çatının uçma riski ortadan kalkar.",
          "• Kolonsuz Geniş Açıklık: Çatı arasında kolon kalabalığı olmadan geniş depolama veya yaşam alanı kazandırır."
        ]
      },
      {
        heading: "2. Kaplama Seçenekleri",
        content: [
          "• Poliüretan/PIR Sandviç Panel: Isı ve su yalıtımını tek katmanda sağlayan modern fabrika ve ev çatısı kaplaması.",
          "• Kenet Çatı & Trapez Sac: Şık modern mimari villalar için antrasit metal kaplama.",
          "• Shingle & Kiremit Altı Çelik Karkas: Klasik kiremit estetiğini çelik iskelet sağlamlığıyla birleştirir."
        ]
      }
    ],
    keyTakeaways: [
      "Çelik çatı makasları bölgesel kar ve rüzgar yükü haritasına göre hesaplanmalıdır.",
      "Korozyona karşı makas profilleri daldırma astar ve boya ile korunmalıdır.",
      "Sandviç panel çatı altında mükemmel ısı tasarrufu sağlar."
    ],
    relatedServices: [
      { name: "Çelik Çatı ve Sundurma İmalatı", slug: "celik-cati-tekirdag" },
      { name: "Çelik Konstrüksiyon İmalatı", slug: "celik-konstruksiyon-tekirdag" }
    ],
    faqs: [
      {
        q: "Çelik çatı yağmurda çok ses yapar mı?",
        a: "Taşyünü veya poliüretan dolgulu sandviç paneller ve tavan içi ses yalıtım katmanları uygulandığında yağmur sesi tamamen absorbe edilir."
      }
    ]
  },
  {
    slug: "celik-ev-yaptirirken-nelere-dikkat-edilmeli",
    title: "Çelik Ev ve Bungalov Yaptırırken Nelere Dikkat Edilmeli? (Kritik Kontrol Listesi)",
    metaTitle: "Çelik Ev & Bungalov Yaptırma Rehberi | Baydağ Demir",
    metaDescription: "Çelik ev ve A-Frame bungalov yaptırırken temel betonu, çelik karkas kalitesi, yalıtım detayları, rüzgar hesabı ve ruhsat süreci rehberi.",
    category: "Çelik Konstrüksiyon",
    readTime: "7 dk",
    publishDate: "2026-02-22",
    summary: "Çelik ev yaptırırken taşıyıcı profil kesitleri, su basman ankrajları, 3 katmanlı ısı/nem yalıtımı ve çatı rüzgar mukavemeti en kritik başarı faktörleridir.",
    heroImage: "/projects/after/3.jpeg",
    heroImageAlt: "Doğa içinde çelik konstrüksiyon A-Frame ev projesi",
    intro: [
      "Son yıllarda doğayla iç içe yaşam, müstakil arsa projeleri ve turizm yatırımlarında çelik evler ve A-Frame bungalovlar ilk sıraya yerleşti.",
      "Ancak hafif profil yerine ağır çelik karkas kullanılmaması veya yalıtım detaylarının atlanması kışın ısınamayan, yazın aşırı ısınan yapılar doğurabilir.",
      "İşte Tekirdağ ve Trakya arazilerinde çelik ev yaptıracakların mutlaka bilmesi gerekenler."
    ],
    sections: [
      {
        heading: "1. Temel Betonu (Su Basman) ve Çelik Ankraj Detayı",
        content: [
          "Çelik evin toprağa tutunması su basman betonu içine gömülen galvanizli ankraj pabuçları ile sağlanır. Çelik kolonlar bu pabuçlara en az 8.8 kalite çelik cıvatalarla kilitlenir."
        ]
      },
      {
        heading: "2. Isı, Ses ve Buhar Yalıtımı Formülü",
        content: [
          "Çelik evlerde konforlu 4 mevsim yaşamın sırrı katmanlı cephe sistemidir:",
          "• Dış Katman: Kenet sac veya ahşap emprenye yalı baskı + nem bariyeri (Tyvek).",
          "• Orta Katman: Çelik karkas arasına 100 mm 50 yoğunluklu taş yünü dolgusu.",
          "• İç Katman: OSB/Alçıpan kaplama üzeri boya veya lambri."
        ],
        checklist: [
          "Ağır profil (IPE / HEA / Kutu Karkas) kullanımı",
          "Çift cam konfor özellikli ısıcamlı cephe doğramaları",
          "Çatı ve zemin tabanında yüksek yoğunluklu taş yünü",
          "Rüzgar çaprazları ile deprem ve fırtına rijitliği"
        ]
      }
    ],
    keyTakeaways: [
      "Çelik karkas A-Frame ve bungalovlar 2-3 hafta gibi rekor sürede kurulur.",
      "Doğru yalıtımla betonarmeden daha yüksek ısı tasarrufu elde edilir.",
      "Temel ankrajı fırtına güvenliğinin en önemli parçasıdır."
    ],
    relatedServices: [
      { name: "Bungalov ve Çelik Ev İmalatı", slug: "celik-ev-tekirdag" },
      { name: "Çelik Asma Kat İmalatı", slug: "asma-kat-tekirdag" }
    ],
    faqs: [
      {
        q: "Çelik ev kışın soğuk olur mu?",
        a: "Hayır. Doğru projelendirilmiş 10 cm taş yünü yalıtımı ve nem bariyeri ile çelik evler betonarme binalara göre çok daha hızlı ısınır ve ısıyı içeride tutar."
      }
    ]
  },
  {
    slug: "celik-yapi-ile-betonarme-yapi-farki",
    title: "Çelik Yapı ile Betonarme Yapı Arasındaki Farklar (Maliyet, Süre ve Güvenlik)",
    metaTitle: "Çelik Yapı ile Betonarme Farkı | Hangisi Daha Mantıklı?",
    metaDescription: "Çelik yapı mı betonarme mi? İnşa süresi, deprem güvenliği, temel maliyeti, geniş açıklık ve geri dönüşüm karşılaştırma rehberi.",
    category: "Çelik Konstrüksiyon",
    readTime: "5 dk",
    publishDate: "2026-02-18",
    summary: "Çelik yapılar betonarmeye göre 3 kat daha hızlı inşa edilir, deprem yüklerine karşı katlarca daha esnektir ve kolonsuz geniş iç alan imkanı sunar.",
    heroImage: "/projects/after/celik-konstruksiyon.jpg",
    heroImageAlt: "Tekirdağ Baydağ Demir çelik konstrüksiyon yapı karkası",
    intro: [
      "Depo, hangar, fabrika, villa veya dükkan inşa etmeyi planlayanların en çok ikilemde kaldığı soru: Çelik mi, betonarme mi?",
      "Her iki yapı türünün mühendislik, maliyet ve kullanım ömrü farklarını şeffafça karşılaştırdık."
    ],
    sections: [
      {
        heading: "1. Deprem Davranışı ve Yapı Ağırlığı",
        content: [
          "Deprem kuvveti yapının toplam kütlesiyle doğru orantılıdır (F = m.a). Betonarme bina ağır olduğu için deprem anında devasa yatay yüklere maruz kalır ve kolon-kiriş birleşimlerinde kırılgan çatlaklar oluşabilir. Çelik ise hafif ve sünektir; salınım yaparak enerjiyi yutar, göçmez."
        ]
      },
      {
        heading: "2. İnşa Süresi ve Hava Koşulları",
        content: [
          "Betonarmede kalıp çakma, demir bağlama ve 28 günlük beton priz süreleri inşaatı aylarca uzatır. Çelik yapıda ise tüm parçalar atölyede hazırlanır ve sahada sadece montaj yapılır; kış ortasında bile inşaat durmaz."
        ]
      }
    ],
    keyTakeaways: [
      "Çelik yapı hız ve deprem güvenliğinde tartışmasız öndedir.",
      "Sanayi ve ticari yapılarda yatırımın geri dönüş süresini yarı yarıya kısaltır.",
      "Gerektiğinde sökülüp taşınabilir veya büyütülebilir."
    ],
    relatedServices: [
      { name: "Çelik Konstrüksiyon İmalatı", slug: "celik-konstruksiyon-tekirdag" },
      { name: "Çelik Hangar ve Depo", slug: "hangar-tekirdag" }
    ],
    faqs: [
      {
        q: "Çelik yapı betonarmeden daha mı pahalıdır?",
        a: "İlk hammadde bazında yakın olsa da; hızlı bitmesi (kira/işletme geliri başlangıcı), daha küçük temel hafriyatı ve sıfır kalıp maliyeti sayesinde toplam proje maliyetinde genellikle daha ekonomiktir."
      }
    ]
  },
  {
    slug: "asma-kat-nedir",
    title: "Asma Kat Nedir? Dükkan, Mağaza ve Depolarda Alan Kazanımı ve Statik Detaylar",
    metaTitle: "Asma Kat Nedir? Dükkan & Depo Çelik Asma Kat Rehberi | Baydağ Demir",
    metaDescription: "Çelik asma kat nedir, nasıl yapılır? NPU/IPE kiriş hesabı, zemin taşıma kapasitesi, merdiven ve korkuluk entegrasyonu rehberi.",
    category: "Çelik Konstrüksiyon",
    readTime: "5 dk",
    publishDate: "2026-02-15",
    summary: "Çelik asma kat; yüksek tavanlı dükkan, fabrika ve depolarda ana yapıya zarar vermeden bağımsız çelik kolon ve kirişlerle oluşturulan ara kat sistemidir.",
    heroImage: "/projects/after/celik-konstruksiyon-iskelet.jpg",
    heroImageAlt: "Sanayi dükkanında çelik asma kat ve platform montajı",
    intro: [
      "Yüksek tavanlı bir ticari alanınız veya deponuz varsa, dikey hacmi kullanmamak ciddi bir alan israfıdır.",
      "Çelik asma kat; işletmenize yeni bir ofis, personel odası, showroom veya stok depolama katı kazandırarak mülkünüzün değerini ikiye katlar."
    ],
    sections: [
      {
        heading: "1. Taşıma Kapasitesi (m² Yük Hesabı)",
        content: [
          "Asma kat tasarımı kullanım amacına göre planlanır:",
          "• Ofis ve İdari Alanlar: 200–250 kg/m² hareketli yük.",
          "• Genel Depolama ve Hafif Sanayi: 350–500 kg/m² yük.",
          "• Ağır Paletli İstif ve Makine Alanı: 750–1500 kg/m² yük.",
          "Bu hesaba göre IPE, HEA veya NPU çelik kiriş aralıkları belirlenir."
        ]
      },
      {
        heading: "2. Zemin Kaplama Seçenekleri",
        content: [
          "• Çelik Baklavalı Sac Zemin: Sanayi ve depo için kaymaz ve aşınmaz çözüm.",
          "• Trapez Sac Üzeri Hafif Beton: Titreşimsiz ve sessiz ofis zeminleri için ideal.",
          "• Çift Kat OSB + Laminat Parke: Hızlı ve ekonomik showroom/ofis katları."
        ]
      }
    ],
    keyTakeaways: [
      "Mevcut binanın kolonlarına yük bindirmeden kendi çelik ayakları üzerine kurulabilir.",
      "İşletme faaliyetini durdurmadan birkaç gün içinde monte edilir.",
      "Merdiven ve korkulukla eksiksiz bir takım olarak planlanmalıdır."
    ],
    relatedServices: [
      { name: "Çelik Asma Kat İmalatı", slug: "asma-kat-tekirdag" },
      { name: "Çelik Merdiven İmalatı", slug: "celik-merdiven-tekirdag" }
    ],
    faqs: [
      {
        q: "Asma kat için tavan yüksekliği en az kaç metre olmalıdır?",
        a: "Konforlu bir kullanım için asma kat altı en az 2.20 m, asma kat üstü en az 2.10 m olmak üzere toplam tavan yüksekliğinin en az 4.50 - 5.00 metre olması idealdir."
      }
    ]
  },
  {
    slug: "kanopi-nedir",
    title: "Çelik Kanopi Nedir? Modern Giriş Sundurması ve Ticari Saçak Çözümleri",
    metaTitle: "Çelik Kanopi Nedir? Modern Giriş Sundurması | Baydağ Demir",
    metaDescription: "Çelik ve cam kanopi nedir? Bina ve AVM giriş sundurması, askılı gergi çubukları, lamine cam taşıyıcıları ve rüzgar mukavemeti rehberi.",
    category: "Çatı, Pergola & Yaşam",
    readTime: "4 dk",
    publishDate: "2026-02-10",
    summary: "Kanopi; bina, villa ve ticari tesis girişlerini yağmur, kar ve güneşten koruyan, çelik karkas ve lamine camla inşa edilen mimari saçak sistemidir.",
    heroImage: "/projects/after/avm-kanopi.jpeg",
    heroImageAlt: "Modern çelik ve cam giriş kanopisi uygulaması",
    intro: [
      "Bir binaya adım atarken karşılaşılan ilk mimari detay giriş kanopisidir. Kanopi hem gelen misafirleri yağmurdan korur hem de yapıya prestijli ve kurumsal bir kimlik kazandırır."
    ],
    sections: [
      {
        heading: "1. Kanopi Çeşitleri",
        content: [
          "• Çelik-Cam Askılı Kanopi: Paslanmaz çelik gergi rotları ile duvara asılan hafif ve şeffaf cam saçaklar.",
          "• Kolonlu Ağır Çelik Kanopiler: AVM, otel ve hastane girişlerinde araç yanaşma alanını da örten geniş saçaklar.",
          "• Kompozit Panel Kaplamalı Gizli Kanopiler: İçinde gizli yağmur oluğu ve spot aydınlatma barındıran modern kutu saçaklar."
        ]
      },
      {
        heading: "2. Emniyet Camı ve Statik Kriterler",
        content: [
          "Kanopilerde kesinlikle normal cam kullanılmaz. Kırılsa dahi dağılmayan temperli lamine emniyet camları (genellikle 8+8 mm veya 10+10 mm) ve rüzgar emme kuvvetine dayanıklı çelik taşıyıcılar kullanılır."
        ]
      }
    ],
    keyTakeaways: [
      "Bina girişine prestij ve hava koruması kazandırır.",
      "Gizli su oluğu ile giriş kapısının önünde su birikmesini önler.",
      "Lamine temperli camlar maksimum can güvenliği sunar."
    ],
    relatedServices: [
      { name: "Çelik Kanopi ve Cam Sundurma", slug: "canopi-tekirdag" },
      { name: "Çelik Pergola ve Veranda", slug: "pergola-tekirdag" }
    ],
    faqs: [
      {
        q: "Kanopi kar yüküne dayanır mı?",
        a: "Evet. Kanopi çelik kolları ve cam kalınlığı bölgenin maksimum kar yüküne (örneğin Tekirdağ için 120 kg/m²) göre hesaplanarak üretilir."
      }
    ]
  },
  {
    slug: "pergola-ve-kanopi-farki",
    title: "Pergola ile Kanopi Arasındaki Farklar Nelerdir? (Doğru Sistem Seçimi)",
    metaTitle: "Pergola ile Kanopi Farkı Nedir? | Baydağ Demir",
    metaDescription: "Pergola ve kanopi arasındaki farklar nelerdir? Kullanım amacı, karkas yapısı, gölgelendirme ve su yalıtımı karşılaştırma rehberi.",
    category: "Çatı, Pergola & Yaşam",
    readTime: "4 dk",
    publishDate: "2026-02-05",
    summary: "Kanopi genellikle bina girişlerini koruyan sabit bir saçak iken; pergola bahçe, teras ve açık alanlarda oturma alanı oluşturan gölgelendirme ve yaşam sistemidir.",
    heroImage: "/projects/after/avm-kanopi.jpeg",
    heroImageAlt: "Çelik pergola ve kanopi sistemleri karşılaştırması",
    intro: [
      "Bahçeniz, verandanız veya bina girişiniz için koruma çözümü ararken pergola ile kanopi kavramları sıkça karıştırılır. İhtiyacınıza en uygun sistemi seçmek için temel farkları bilmek gerekir."
    ],
    sections: [
      {
        heading: "1. Temel İşlev ve Konum Farkı",
        content: [
          "• Kanopi: Giriş kapılarının üzerine monte edilir; temel amacı giriş-çıkış yapanları yağmur ve güneşten korumak, bina cephesine mimari derinlik katmaktır.",
          "• Pergola: Bahçe, teras, havuz başı veya veranda alanlarında dört ayak veya duvara yaslı olarak kurulur; amacı altında keyifli vakit geçirilecek bir dış mekan odası oluşturmaktır."
        ]
      },
      {
        heading: "2. Üst Örtü Malzemeleri",
        content: [
          "Kanopilerde çoğunlukla şeffaf lamine cam veya polikarbon kullanılırken; modern çelik pergolalarda motorlu açılır-kapanır bioklimatik alüminyum lameller veya ahşap/metal güneş kırıcılar tercih edilir."
        ]
      }
    ],
    keyTakeaways: [
      "Giriş kapısı için kanopi, bahçe ve teras oturma alanı için pergola seçilmelidir.",
      "Çelik iskeletli pergolalar rüzgarda sallanmaz ve ömür boyu dayanır.",
      "Her iki sistem de LED aydınlatma ve gizli dere drenajı ile donatılabilir."
    ],
    relatedServices: [
      { name: "Çelik Pergola ve Veranda", slug: "pergola-tekirdag" },
      { name: "Çelik Kanopi ve Cam Sundurma", slug: "canopi-tekirdag" }
    ],
    faqs: [
      {
        q: "Pergola altına kış bahçesi veya cam balkon yapılabilir mi?",
        a: "Evet. Çelik karkaslı pergolaların etrafına sürgülü veya giyotin cam balkon sistemleri entegre edilerek dört mevsim kullanılan harika bir kış bahçesi elde edilir."
      }
    ]
  }
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
