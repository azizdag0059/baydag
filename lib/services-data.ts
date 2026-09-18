// Hizmet landing sayfaları (/hizmetler/[slug]) için içerik.
// Her sayfa tek bir arama niyetini hedefler: "<hizmet> Tekirdağ".
export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceItem {
  slug: string;
  name: string; // kısa hizmet adı (menü, schema)
  h1: string;
  metaTitle: string; // ~60 karakter
  metaDescription: string; // ~150 karakter
  summary: string; // AI motorlarının alıntılayabileceği 1-2 cümlelik net tanım
  intro: string[];
  scope: string[]; // yapılan işler
  materials: string[];
  image: string;
  imageAlt: string;
  projectCategories: string[]; // projects-data eşleşmesi
  projectTitleIncludes?: string[];
  faqs: ServiceFaq[];
}

const commonFaqs: ServiceFaq[] = [
  {
    q: "Keşif ve ölçü ücretli mi?",
    a: "Tekirdağ merkez (Süleymanpaşa) ve ilçelerinde yerinde ölçü ve keşif ücretsizdir. Randevu için 0534 874 87 13 numarasından arayabilir veya WhatsApp'tan yazabilirsiniz.",
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Atölyemiz Süleymanpaşa / Tekirdağ'dadır. Çorlu, Çerkezköy, Kapaklı, Marmaraereğlisi, Muratlı, Şarköy, Hayrabolu, Ergene ve Malkara başta olmak üzere tüm Tekirdağ ile Edirne ve Kırklareli'ne imalat ve montaj yapıyoruz.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "celik-merdiven-tekirdag",
    name: "Çelik Merdiven İmalatı",
    h1: "Tekirdağ Çelik Merdiven İmalatı",
    metaTitle: "Tekirdağ Çelik Merdiven İmalatı | Omurgalı Villa Merdiveni",
    metaDescription:
      "Tekirdağ'da omurgalı, konsol ve ahşap basamaklı çelik merdiven imalatı ve montajı. Ücretsiz yerinde ölçü, fırın boya, atölyeden direkt fiyat.",
    summary:
      "Baydağ Demir, Tekirdağ Süleymanpaşa'daki atölyesinde villa ve dubleks daireler için ölçüye özel omurgalı, konsol ve ahşap basamaklı çelik merdivenler üretip monte eder.",
    intro: [
      "Çelik merdiven, kaba inşaat aşamasında taşıyıcı omurga olarak monte edilir; ince işler bittikten sonra ahşap basamak, korkuluk ve aydınlatma ile tamamlanır. Bu yüzden merdiven işini binanın en başında planlamak hem maliyeti hem süreyi düşürür.",
      "Mekânı yerinde ölçüyor, kat yüksekliği ve basamak sayısına göre çizim hazırlıyor, taşıyıcı profili (NPU, kutu profil vb.) yüke göre seçiyoruz. İmalat atölyemizde yapılır, montaj şantiyede tamamlanır.",
    ],
    scope: [
      "Tek omurgalı (orta kirişli) ve çift omurgalı villa merdivenleri",
      "Duvara gömme konsol (yüzen) basamaklı merdivenler",
      "Döner / spiral çelik merdivenler",
      "Masif ahşap basamak kaplama ve gizli LED basamak aydınlatması",
      "Merdivene uygun dikey lama, cam veya lazer kesim korkuluk",
    ],
    materials: ["NPU / kutu profil çelik omurga", "Lazer kesim sac basamak taşıyıcı", "Masif meşe veya ceviz basamak", "Elektrostatik fırın boya"],
    image: "/projects/after/1.jpg",
    imageAlt: "Tekirdağ Süleymanpaşa'da yapılan omurgalı çelik villa merdiveni, ahşap basamaklı ve dikey korkuluklu",
    projectCategories: ["merdiven"],
    faqs: [
      {
        q: "Çelik merdiven kaç günde yapılır?",
        a: "Süre merdivenin tipine ve ölçüsüne göre değişir. Örnek olarak Süleymanpaşa'da yaptığımız 17 basamaklı, 3,40 m yüksekliğindeki omurgalı villa merdiveni imalat ve montaj dahil 12 günde teslim edildi.",
      },
      {
        q: "Çelik merdiven kaba inşaatta mı yapılmalı?",
        a: "Evet, taşıyıcı çelik omurganın kaba inşaat aşamasında monte edilmesi önerilir. Ahşap basamak, korkuluk ve aydınlatma ince işlerden sonra takılır.",
      },
      {
        q: "Çelik merdiven fiyatı neye göre belirlenir?",
        a: "Kat yüksekliği, basamak sayısı, omurga tipi, basamak malzemesi (ahşap türü) ve korkuluk modeli fiyatı belirler. Net fiyat ücretsiz yerinde ölçüden sonra verilir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "lazer-kesim-korkuluk-tekirdag",
    name: "Lazer Kesim & Ferforje Korkuluk",
    h1: "Tekirdağ Lazer Kesim ve Ferforje Korkuluk",
    metaTitle: "Tekirdağ Lazer Kesim Korkuluk & Ferforje | Balkon, Teras",
    metaDescription:
      "Tekirdağ'da balkon, teras, merdiven ve pencere için lazer kesim ve ferforje korkuluk imalatı. Deniz havasına dayanıklı fırın boya, ücretsiz keşif.",
    summary:
      "Baydağ Demir, Tekirdağ ve ilçelerinde balkon, teras, merdiven ve pencere için CNC lazer kesim desenli ve klasik ferforje korkuluklar üretip monte eder.",
    intro: [
      "Lazer kesim korkuluk, sac plakanın CNC lazerle istenen desende kesilmesiyle yapılır; geometrik, bitkisel veya firmanıza özel desenler uygulanabilir. Ferforje ise dövme ve bükme detaylı klasik korkuluk tipidir.",
      "Şarköy, Marmaraereğlisi ve Süleymanpaşa sahil hattında tuzlu hava paslanmayı hızlandırır. Bu yüzden korozyon önleyici astar ve elektrostatik fırın boya uyguluyor, ankrajları rüzgâr yüküne göre planlıyoruz.",
    ],
    scope: [
      "Balkon ve teras korkulukları",
      "Merdiven ve galeri boşluğu korkulukları",
      "Pencere demiri ve Fransız balkon korkulukları",
      "Bahçe duvarı üstü lazer kesim panel ve çitler",
      "Dikey lama modern villa korkulukları",
    ],
    materials: ["3–8 mm lazer kesim çelik sac", "Kutu profil çerçeve", "Korozyon önleyici astar", "Elektrostatik fırın boya"],
    image: "/projects/after/balkon-korkuluk.jpeg",
    imageAlt: "Tekirdağ Şarköy'de deniz manzaralı villada geometrik desenli lazer kesim teras korkuluğu",
    projectCategories: ["korkuluk"],
    faqs: [
      {
        q: "Lazer kesim korkuluk paslanır mı?",
        a: "Doğru astar ve elektrostatik fırın boya uygulandığında çelik korkuluk uzun yıllar paslanmadan kullanılır. Sahil bölgelerinde çift kat koruma öneriyoruz.",
      },
      {
        q: "Kendi desenimi yaptırabilir miyim?",
        a: "Evet. Desen, logo veya çizimi dijital dosyaya çevirip CNC lazerde birebir kesiyoruz.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-kapi-bahce-kapisi-tekirdag",
    name: "Villa Giriş & Bahçe Kapıları",
    h1: "Tekirdağ Çelik Villa Giriş ve Bahçe Kapısı",
    metaTitle: "Tekirdağ Çelik Villa Kapısı & Bahçe Kapısı İmalatı",
    metaDescription:
      "Tekirdağ'da pivot çelik villa giriş kapısı, bina giriş kapısı ve motorlu bahçe kapısı imalatı. Ölçüye özel tasarım, fırın boya, ücretsiz keşif.",
    summary:
      "Baydağ Demir, Tekirdağ'da villa ve apartmanlar için ölçüye özel pivot çelik giriş kapıları, bina giriş kapıları ve sürgülü/kanatlı bahçe kapıları imal eder.",
    intro: [
      "Giriş kapısı binanın ilk izlenimidir. Pivot menteşeli geniş açıklıklı villa kapılarından apartman giriş kapılarına ve motorlu bahçe kapılarına kadar ölçüye özel üretim yapıyoruz.",
      "Kapı kanadı, kasa ve kaplama malzemesi (ahşap, kompozit, lazer kesim sac) projeye göre seçilir; akıllı kilit ve otomasyon motoru entegrasyonu yapılabilir.",
    ],
    scope: [
      "Pivot menteşeli çelik villa giriş kapıları",
      "Apartman ve bina giriş kapıları",
      "Motorlu sürgülü ve kanatlı bahçe kapıları",
      "Garaj ve yaya kapıları",
      "Akıllı kilit ve uzaktan kumanda entegrasyonu",
    ],
    materials: ["Ağır kutu profil karkas", "Pivot mekanizma", "Ahşap veya kompozit kaplama", "Galvaniz + fırın boya"],
    image: "/projects/after/villa-kapi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ahşap ve antrasit kombinasyonlu pivot çelik villa giriş kapısı",
    projectCategories: ["kapi"],
    faqs: [
      {
        q: "Pivot kapı nedir?",
        a: "Pivot kapı, menteşe yerine kapının üst ve alt noktasındaki eksen mekanizması üzerinde dönen kapıdır. Çok geniş ve ağır kanatların rahat açılmasını sağlar.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "kanopi-pergola-veranda-tekirdag",
    name: "Kanopi, Sundurma & Pergola",
    h1: "Tekirdağ Çelik Kanopi, Sundurma ve Pergola",
    metaTitle: "Tekirdağ Çelik Kanopi, Sundurma & Pergola İmalatı",
    metaDescription:
      "Tekirdağ'da ticari giriş kanopisi, cam sundurma, çelik veranda ve motorlu bioklimatik pergola imalatı. Statik hesaplı, anahtar teslim montaj.",
    summary:
      "Baydağ Demir, Tekirdağ'da iş yerleri için çelik-cam giriş kanopileri ve sundurmalar, konutlar için çelik veranda ve bioklimatik pergola sistemleri üretip monte eder.",
    intro: [
      "Kanopi ve sundurmalar giriş kapılarını yağmur ve kardan korurken binaya prestij katar. Çelik taşıyıcıların rüzgâr ve kar yüküne göre hesaplanması bu işin en kritik kısmıdır.",
      "Konutlarda ise çelik karkaslı veranda ve motorlu lamelli bioklimatik pergola ile bahçe ve teras dört mevsim kullanılabilir hale gelir.",
    ],
    scope: [
      "AVM, mağaza ve ofis giriş kanopileri",
      "Lamine temperli camlı çelik sundurmalar",
      "Çelik karkas veranda ve teras kapatma",
      "Motorlu açılır-kapanır bioklimatik pergola",
      "Gizli yağmur oluğu ve LED aydınlatma entegrasyonu",
    ],
    materials: ["HEA / kutu profil çelik taşıyıcı", "Lamine temperli emniyet camı", "Alüminyum lamel", "Elektrostatik fırın boya"],
    image: "/projects/after/avm-kanopi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ticari merkez girişine yapılan çelik taşıyıcılı cam kanopi",
    projectCategories: ["cati"],
    projectTitleIncludes: ["Kanopi", "Pergola"],
    faqs: [
      {
        q: "Cam kanopi kar yükünü taşır mı?",
        a: "Evet, taşıyıcı çelik ve cam kalınlığı bölgenin rüzgâr ve kar yüküne göre seçilir. Örneğin Süleymanpaşa'daki ticari kanopi projemizde 10+10 mm lamine temperli cam ve HEA çelik taşıyıcı kullanıldı.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "bungalov-a-frame-celik-ev-tekirdag",
    name: "Bungalov & A-Frame Çelik Ev",
    h1: "Tekirdağ Bungalov ve A-Frame Çelik Ev",
    metaTitle: "Tekirdağ Bungalov & A-Frame Çelik Ev | Anahtar Teslim",
    metaDescription:
      "Tekirdağ, Şarköy ve Trakya'da çelik karkas bungalov, A-Frame ev ve prefabrik yapı imalatı ve montajı. Depreme dayanıklı çelik taşıyıcı sistem.",
    summary:
      "Baydağ Demir, Tekirdağ ve Trakya'da çelik karkaslı bungalov, A-Frame (üçgen çatılı) ev ve küçük prefabrik yapıları temel ankrajından çatısına kadar üretip monte eder.",
    intro: [
      "Çelik karkas, ahşap karkasa göre daha rijit ve depreme karşı daha güvenlidir; kısa sürede kurulur. Bu nedenle bungalov ve A-Frame evlerde taşıyıcı sistem olarak tercih edilir.",
      "Temel ankraj pabuçlarından çatı paneline, ısıcam cepheden ahşap teras kaplamasına kadar projeyi uçtan uca planlıyoruz.",
    ],
    scope: [
      "A-Frame çelik karkas ev imalatı",
      "Bungalov ve tiny house çelik iskelet",
      "Prefabrik ev montajı",
      "Sandviç panel çatı ve cephe kaplama",
      "Ahşap teras ve çelik merdiven entegrasyonu",
    ],
    materials: ["IPE / HEA çelik kiriş", "Sandviç çatı paneli", "Isıcam cephe", "Emprenyeli ahşap kaplama"],
    image: "/projects/after/3.jpeg",
    imageAlt: "Tekirdağ Şarköy Uçmakdere'de çelik konstrüksiyon A-Frame doğa evi",
    projectCategories: ["cati"],
    projectTitleIncludes: ["A-Frame"],
    faqs: [
      {
        q: "A-Frame çelik ev kaç günde kurulur?",
        a: "Büyüklüğe göre değişir. Şarköy Uçmakdere'de yaptığımız 80 m² (54 m² taban + 26 m² asma kat) A-Frame çelik ev 21 günde imalat ve montajla tamamlandı.",
      },
      {
        q: "Bungalov için ruhsat gerekir mi?",
        a: "Kalıcı yapılar için imar ve yapı ruhsatı gerekir; arazinin imar durumunu belediyeden öğrenmenizi öneriyoruz. Statik ve uygulama tarafında proje ekibinize destek veriyoruz.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-konstruksiyon-hangar-asma-kat-tekirdag",
    name: "Çelik Konstrüksiyon, Hangar & Asma Kat",
    h1: "Tekirdağ Çelik Konstrüksiyon, Hangar ve Asma Kat",
    metaTitle: "Tekirdağ Çelik Konstrüksiyon, Hangar & Asma Kat İmalatı",
    metaDescription:
      "Çorlu, Çerkezköy ve Tekirdağ'da çelik hangar, depo, asma kat, platform ve çelik köprü imalatı. Statik hesaplı, sanayi tesislerine anahtar teslim.",
    summary:
      "Baydağ Demir, Tekirdağ'ın Çorlu ve Çerkezköy sanayi bölgelerindeki tesisler başta olmak üzere çelik hangar, depo binası, asma kat, platform ve yaya köprüsü imal eder.",
    intro: [
      "Sanayi tesislerinde ek alan ihtiyacı çoğu zaman çelik asma kat veya çelik depo ile hızlı ve ekonomik şekilde çözülür. Taşıyıcı profiller kullanım yüküne göre hesaplanır ve kolonlara kimyasal ankrajla sabitlenir.",
      "Çelik hangar ve depo binalarında kolon, makas, çatı ve cephe paneli ile endüstriyel kapıyı tek elden yapıyoruz.",
    ],
    scope: [
      "Çelik hangar ve depo binaları",
      "Fabrika ve dükkan için çelik asma kat",
      "Endüstriyel platform ve servis merdivenleri",
      "Hangar ve seksiyonel endüstriyel kapılar",
      "Çelik yaya köprüsü ve geçiş sistemleri",
    ],
    materials: ["HEA / IPE çelik profil", "Makaslı çatı sistemi", "PIR / poliüretan sandviç panel", "Kimyasal ankraj"],
    image: "/projects/after/4.jpeg",
    imageAlt: "Tekirdağ Çorlu sanayi bölgesinde çelik konstrüksiyon depo ve hangar binası",
    projectCategories: ["asmakat"],
    faqs: [
      {
        q: "Çelik hangar ne kadar sürede biter?",
        a: "Ölçüye göre değişir. Çorlu'da yaptığımız 15 × 28 m (420 m²) çelik depo imalat ve montajla 18 günde tamamlandı.",
      },
      {
        q: "Asma katın taşıma kapasitesi nasıl belirlenir?",
        a: "Kullanım amacına (depolama, ofis, üretim) göre m² başına yük belirlenir ve kiriş/kolon profilleri buna göre hesaplanır.",
      },
      ...commonFaqs,
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

// Ana sayfa SSS (GEO: AI motorlarının doğrudan alıntılayacağı kısa, net cevaplar)
export const HOME_FAQS: ServiceFaq[] = [
  {
    q: "Baydağ Demir nerede?",
    a: "Atölyemiz Karadeniz Mahallesi, Dumansız Sokak, 59030 Süleymanpaşa / Tekirdağ adresindedir. Pazartesi–Cumartesi 08:00–19:30 arası açığız.",
  },
  {
    q: "Baydağ Demir hangi işleri yapar?",
    a: "Çelik merdiven, lazer kesim ve ferforje korkuluk, villa ve bahçe kapıları, kanopi–sundurma–pergola, bungalov ve A-Frame çelik ev, çelik hangar, depo ve asma kat imalatı ve montajı yapıyoruz.",
  },
  {
    q: "Tekirdağ'da demir doğramacı arıyorum, keşif ücretli mi?",
    a: "Hayır. Tekirdağ merkez ve ilçelerinde yerinde ölçü ve keşif ücretsizdir. 0534 874 87 13'ü arayabilir veya WhatsApp'tan fotoğraf göndererek ön fiyat alabilirsiniz.",
  },
  {
    q: "Çorlu, Çerkezköy ve Şarköy'e de geliyor musunuz?",
    a: "Evet. Çorlu, Çerkezköy, Kapaklı, Marmaraereğlisi, Muratlı, Şarköy, Hayrabolu, Ergene ve Malkara dahil tüm Tekirdağ'a, ayrıca Edirne ve Kırklareli'ne hizmet veriyoruz.",
  },
  {
    q: "Fiyat teklifi nasıl alırım?",
    a: "Mekânın fotoğrafını ve yaklaşık ölçülerini WhatsApp'tan gönderirseniz ön fiyat veririz; kesin fiyat ücretsiz yerinde ölçüden sonra belirlenir. Sitedeki teklif formunu da kullanabilirsiniz.",
  },
];
