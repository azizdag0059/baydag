// Hizmet landing sayfaları (/hizmetler/[slug]) için zengin içerik modeli.
// Her sayfa tek bir arama niyetini ve yerel SEO sorgularını hedefler: "<hizmet> Tekirdağ".
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

export const commonFaqs: ServiceFaq[] = [
  {
    q: "Keşif ve ölçü ücretli mi?",
    a: "Tekirdağ merkez (Süleymanpaşa) ve ilçelerinde (Çorlu, Çerkezköy, Kapaklı, Marmaraereğlisi, Muratlı, Şarköy, Hayrabolu, Ergene, Malkara) yerinde ölçü ve keşif ücretsizdir. Randevu için 0534 874 87 13 numarasından arayabilir veya WhatsApp'tan yazabilirsiniz.",
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Atölyemiz Süleymanpaşa / Tekirdağ'dadır. Çorlu, Çerkezköy, Kapaklı, Marmaraereğlisi, Muratlı, Şarköy, Hayrabolu, Ergene ve Malkara başta olmak üzere tüm Tekirdağ ile Edirne ve Kırklareli'ne imalat ve anahtar teslim montaj yapıyoruz.",
  },
  {
    q: "Fiyat teklifi nasıl alabilirim?",
    a: "Uygulama yapılacak alanın fotoğrafını, yaklaşık ölçülerini ve istediğiniz modeli WhatsApp hattımızdan (0534 874 87 13) bize ileterek aynı gün içinde ön fiyat alabilirsiniz. Kesin teklif ücretsiz keşif sonrası sunulur.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "demir-dograma-tekirdag",
    name: "Demir Doğrama İmalatı",
    h1: "Tekirdağ Demir Doğrama ve Ferforje İmalatı",
    metaTitle: "Tekirdağ Demir Doğrama & Ferforje İmalatı | Baydağ Demir",
    metaDescription:
      "Tekirdağ Süleymanpaşa, Çorlu ve Çerkezköy'de ölçüye özel demir doğrama, ferforje, pencere demiri ve bahçe demirleri imalatı. Ücretsiz yerinde keşif.",
    summary:
      "Baydağ Demir, Tekirdağ Süleymanpaşa'daki atölyesinde villa, konut ve sanayi tesisleri için ölçüye özel demir doğrama, pencere korkulukları, bahçe demirleri ve ferforje imalatı yapar.",
    intro: [
      "Demir doğrama; yüksek mukavemetli çelik profil, lama ve dolu kare demirlerin projeye özel kesilmesi, gazaltı kaynağıyla birleştirilmesi ve elektrostatik fırın boya ile uzun yıllar paslanmadan kullanılacak hale getirilmesidir.",
      "Tekirdağ sahil şeridi (Süleymanpaşa, Marmaraereğlisi, Şarköy) ve sanayi bölgelerinde (Çorlu, Çerkezköy) nem ve dış ortam şartlarına dayanıklı korozyon önleyici astar ve fırın boya standart olarak uygulanır.",
      "Atölyemizde imal edilen tüm demir doğrama ürünleri şantiyede kendi usta kadromuzla titizlikle monte edilir.",
    ],
    scope: [
      "Pencere korkulukları ve emniyet demirleri",
      "Bahçe çevreleme demir panelleri ve ferforje çitler",
      "Ölçüye özel demir bina giriş ve depo kapıları",
      "Klima, kombi ve jeneratör koruma demir kafesleri",
      "Dekoratif loft metal mobilya ve cam bölme karkasları",
      "Sanayi dükkanları için güvenlik kepenk ve demir ızgaralar",
    ],
    materials: [
      "Ağır etli kutu profil (2.5mm - 4mm)",
      "Dolu kare ve lama demir",
      "CNC lazer kesim sac paneller",
      "Epoksi antipas ve elektrostatik fırın boya",
    ],
    image: "/projects/after/1.jpg",
    imageAlt: "Tekirdağ Süleymanpaşa'da atölye imalatı demir doğrama ve çelik yapı işçiliği",
    projectCategories: ["merdiven", "korkuluk", "kapi"],
    faqs: [
      {
        q: "Demir doğrama ne kadar sürede teslim edilir?",
        a: "İşin büyüklüğüne göre değişir. Standart bir villa pencere ve balkon demir doğraması genellikle ölçü alındıktan sonra 4-7 iş günü içerisinde imal edilip monte edilir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-konstruksiyon-tekirdag",
    name: "Çelik Konstrüksiyon",
    h1: "Tekirdağ Çelik Konstrüksiyon İmalatı",
    metaTitle: "Tekirdağ Çelik Konstrüksiyon İmalatı | Sanayi & Konut",
    metaDescription:
      "Tekirdağ, Çorlu ve Çerkezköy'de statik hesaplı çelik konstrüksiyon, fabrika binaları, çatı makasları ve karkas imalatı. Uzman mühendislik ve montaj.",
    summary:
      "Baydağ Demir, Tekirdağ ve Trakya genelinde sanayi tesisleri, depolar, ticari binalar ve konutlar için statik hesaplı, depreme dayanıklı çelik konstrüksiyon yapı üretir.",
    intro: [
      "Deprem kuşağında yer alan Tekirdağ ve sanayi havzası Çorlu-Çerkezköy'de çelik konstrüksiyon; hafifliği, yüksek taşıma gücü ve elastik yapısıyla en güvenli inşaat yöntemidir.",
      "HEA, IPE, NPU gibi ağır çelik profiller atölyemizde CNC kesim ve sertifikalı gazaltı kaynaklarıyla işlenir; sahada cıvatalı ve flanşlı bağlantılarla hızlıca dikilir.",
      "Temel ankrajından çatı makasına, rüzgar çaprazlarından cephe karkasına kadar tüm taşıyıcı sistem mühendislik hesaplarına uygun olarak üretilir.",
    ],
    scope: [
      "Fabrika, imalathane ve lojistik depo çelik karkasları",
      "Kolonsuz geniş açıklıklı çelik çatı makasları",
      "Sanayi tesisleri için çelik asma kat ve platformlar",
      "Çelik yaya üst geçitleri ve boru köprüleri",
      "Ağır çelik ve hafif çelik villa konstrüksiyonları",
    ],
    materials: [
      "HEA / HEB / IPE / NPU ağır çelik profiller",
      "8.8 ve 10.9 kalite yüksek mukavemetli çelik cıvatalar",
      "Kimyasal ankraj pabuçları ve flanş plakaları",
      "Endüstriyel epoksi ve korozyon önleyici astar boyalar",
    ],
    image: "/projects/after/4.jpeg",
    imageAlt: "Tekirdağ Çorlu sanayi bölgesinde çelik konstrüksiyon depo ve karkas montajı",
    projectCategories: ["asmakat", "cati"],
    faqs: [
      {
        q: "Çelik konstrüksiyon inşaatı betonarmeye göre ne kadar hızlıdır?",
        a: "Çelik parçalar atölyede eş zamanlı üretildiği için beton dökme ve kuruma süreleri beklenmez; toplam inşa süresi betonarmeye kıyasla yaklaşık %60 daha hızlı tamamlanır.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-cati-tekirdag",
    name: "Çelik Çatı & Sundurma",
    h1: "Tekirdağ Çelik Çatı ve Sundurma İmalatı",
    metaTitle: "Tekirdağ Çelik Çatı & Sundurma İmalatı | Fırtınaya Dayanıklı",
    metaDescription:
      "Tekirdağ, Çorlu ve Şarköy'de fırtınaya dayanıklı çelik çatı makası, sandviç panel kaplama ve çelik sundurma imalatı. Yangına dayanıklı ve garantili.",
    summary:
      "Baydağ Demir, Tekirdağ'da villa, fabrika, depo ve apartmanlar için kar ve lodos fırtınasına dayanıklı çelik çatı makasları, sundurmalar ve panel kaplamalar üretir.",
    intro: [
      "Trakya'nın şiddetli lodos fırtınaları ve kar yağışları çatı sistemlerini doğrudan test eder. Çürüyen, esneyen veya fırtınada uçma riski taşıyan ahşap çatılara karşı çelik çatı kesin ve kalıcı çözümdür.",
      "Çelik çatı makasları betonarme döşemeye kimyasal dübeller ve çelik pabuçlarla ankrajlanır; sandviç panel veya kenet sac ile kaplanarak tam su ve ısı yalıtımı sağlanır.",
    ],
    scope: [
      "Apartman ve müstakil ev çelik çatı konstrüksiyonu",
      "Fabrika ve depo çatı makasları ve aşık imalatı",
      "Giriş sundurmaları ve araç otopark sundurma karkasları",
      "Teras kapatma ve çelik sundurma sistemleri",
      "Sandviç panel, trapez sac ve kenet çatı kaplama montajı",
    ],
    materials: [
      "Kutu profil ve NPU çatı makasları",
      "Galvanizli C ve Z aşık profilleri",
      "Poliüretan/PIR dolgulu sandviç çatı panelleri",
      "Galvanizli yağmur oluğu ve dere sistemleri",
    ],
    image: "/projects/after/4.jpeg",
    imageAlt: "Tekirdağ'da çelik çatı makası ve sandviç panel montajı",
    projectCategories: ["cati"],
    faqs: [
      {
        q: "Eski ahşap çatıyı çeliğe dönüştürmek mümkün mü?",
        a: "Evet. Mevcut ahşap çatı iskeleti sökülerek binanın betonarme tabliyesine doğrudan çelik makaslar monte edilir ve üzerine sandviç panel veya kiremit altı kaplama yapılır.",
      },
      ...commonFaqs,
    ],
  },
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
    materials: [
      "NPU / kutu profil çelik omurga",
      "Lazer kesim sac basamak taşıyıcı",
      "Masif meşe veya ceviz basamak",
      "Elektrostatik fırın boya",
    ],
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
    slug: "demir-korkuluk-tekirdag",
    name: "Demir Korkuluk İmalatı",
    h1: "Tekirdağ Demir ve Ferforje Korkuluk İmalatı",
    metaTitle: "Tekirdağ Demir Korkuluk & Ferforje İmalatı | Baydağ Demir",
    metaDescription:
      "Tekirdağ, Çorlu ve Marmaraereğlisi'nde balkon, merdiven, teras ve pencere demir korkuluk imalatı. Paslanmaz fırın boya, estetik ferforje desenler.",
    summary:
      "Baydağ Demir, Tekirdağ'da balkon, merdiven, teras ve pencereler için sağlam, güvenli ve estetik demir ferforje korkuluklar üretip monte eder.",
    intro: [
      "Demir korkuluklar hem ailenizin güvenliğini sağlar hem de binanızın dış cephesine ve iç mekanına klasik veya modern bir mimari zarafet katar.",
      "Dolu demir çubuklar, dövme ferforje motifler ve mukavemetli kutu profillerle ürettiğimiz korkuluklar; paslanmaya karşı daldırma antipas ve elektrostatik fırın boya ile korunur.",
    ],
    scope: [
      "Balkon ve teras demir korkulukları",
      "İç ve dış mekan merdiven korkulukları",
      "Pencere güvenlik demirleri ve Fransız balkon korkulukları",
      "Bahçe duvarı üstü demir ferforje korkuluk panelleri",
      "Havuz kenarı ve istinat duvarı güvenlik çitleri",
    ],
    materials: [
      "Dolu kare demir (12x12, 14x14, 16x16 mm)",
      "Dövme ferforje motifler ve mızrak başlıklar",
      "Kutu profil babalar ve küpeşteler",
      "Elektrostatik fırın boya",
    ],
    image: "/projects/after/balkon-korkuluk.jpeg",
    imageAlt: "Tekirdağ'da demir balkon ve teras korkuluğu montajı",
    projectCategories: ["korkuluk"],
    faqs: [
      {
        q: "Pencere korkuluğu montajı duvara nasıl sabitlenir?",
        a: "Pencere mermeri ve yan kolonlara çelik ankraj milleri çakılarak kaynak yapılır veya çelik kimyasal dübellerle duvardan sökülemeyecek şekilde sabitlenir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-korkuluk-tekirdag",
    name: "Çelik Korkuluk İmalatı",
    h1: "Tekirdağ Çelik ve Lazer Kesim Korkuluk",
    metaTitle: "Tekirdağ Çelik Korkuluk & Lazer Kesim | Modern Balkon",
    metaDescription:
      "Tekirdağ'da modern dikey lama, CNC lazer kesim sac ve camlı çelik korkuluk imalatı. Şık, paslanmaz fırın boyalı, rüzgara dayanıklı tasarımlar.",
    summary:
      "Baydağ Demir, Tekirdağ'da modern villalar ve yeni yapılar için dikey lama, CNC lazer kesim panelli ve camlı çelik korkuluk sistemleri üretir.",
    intro: [
      "Modern mimaride klasik ferforjelerin yerini ince dikey lamalı ve CNC lazer kesim desenli çelik korkuluklar almıştır.",
      "Minimalist hatları, antrasit tonları ve yüksek rijitliği ile villa teraslarında ve iç mekan galeri boşluklarında ferah ve prestijli bir görünüm sunar.",
    ],
    scope: [
      "Dikey lama çelik villa merdiven ve balkon korkulukları",
      "CNC lazer kesim dekoratif sac panel korkuluklar",
      "Paslanmaz aksesuarlı çelik-cam korkuluk sistemleri",
      "Galeri boşluğu ve asma kat güvenlik korkulukları",
    ],
    materials: [
      "Lazer kesim 3-5 mm çelik sac",
      "40x10, 50x10 dikey çelik lamalar",
      "Kutu profil çerçeveler",
      "200°C elektrostatik fırın boya",
    ],
    image: "/projects/after/balkon-korkuluk.jpeg",
    imageAlt: "Tekirdağ Şarköy'de deniz manzaralı villada geometrik desenli lazer kesim teras korkuluğu",
    projectCategories: ["korkuluk"],
    faqs: [
      {
        q: "Lazer kesim korkuluk rüzgara dayanır mı?",
        a: "Evet. Desen tasarımı rüzgar geçirgenliğini sağlayacak şekilde hesaplanır ve alt-üst profil ankrajları deniz kenarındaki sert fırtınalara tam dayanacak şekilde güçlendirilir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-kapi-tekirdag",
    name: "Çelik Villa & Bina Kapısı",
    h1: "Tekirdağ Çelik Villa ve Bina Giriş Kapısı",
    metaTitle: "Tekirdağ Çelik Villa Kapısı & Bina Giriş Kapısı İmalatı",
    metaDescription:
      "Tekirdağ'da pivot mekanizmalı çelik villa kapısı ve apartman bina giriş kapısı imalatı. Ağır çelik karkas, akıllı kilit, üstün ısı/ses yalıtımı.",
    summary:
      "Baydağ Demir, Tekirdağ'da villalar ve apartmanlar için ağır profil karkaslı, pivot menteşeli, ahşap/kompozit kaplamalı yüksek güvenlikli çelik giriş kapıları üretir.",
    intro: [
      "Giriş kapısı binanın kartvizitidir. Standart fabrikasyon ince sac kapılar yerine; ağır çelik karkas, taş yünü yalıtım dolgusu ve özel tasarım kaplamalarla kişiye özel üretim yapıyoruz.",
      "Geniş villa girişleri için pivot menteşe sistemleri sayesinde 1.5 - 2 metre genişliğindeki kapılar tek parmak dokunuşuyla sessizce açılır.",
    ],
    scope: [
      "Pivot mekanizmalı modern çelik villa giriş kapıları",
      "Apartman ve bina ana giriş kapıları (camlı ve ferforjeli)",
      "Akıllı parmak izi, şifreli ve motorlu kilit entegrasyonu",
      "Marin ahşap, kompozit ve lazer sac dış cephe kaplamaları",
    ],
    materials: [
      "Ağır çelik kutu profil iskelet (2.5mm et kalınlığı)",
      "2 mm gövde sacı ve zırhlı kilit yuvaları",
      "Taş yünü ısı ve ses yalıtım dolgusu",
      "Ağır yük bilyalı pivot mekanizması",
    ],
    image: "/projects/after/villa-kapi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ahşap ve antrasit kombinasyonlu pivot çelik villa giriş kapısı",
    projectCategories: ["kapi"],
    faqs: [
      {
        q: "Pivot kapı ne kadar genişlikte yapılabilir?",
        a: "Özel bilyalı pivot eksen mekanizmalarımız sayesinde 120 cm'den 220 cm genişliğe ve 3.5 metre yüksekliğe kadar tek kanat pivot villa kapısı üretebiliyoruz.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "bahce-kapisi-tekirdag",
    name: "Bahçe Kapısı İmalatı",
    h1: "Tekirdağ Demir ve Motorlu Sürgülü Bahçe Kapısı",
    metaTitle: "Tekirdağ Bahçe Kapısı İmalatı | Motorlu Sürgülü Demir Kapı",
    metaDescription:
      "Tekirdağ, Çorlu ve Çerkezköy'de motorlu otomatik sürgülü bahçe kapısı, çift kanatlı demir kapı ve yaya giriş kapısı imalatı. Atölyeden montaj.",
    summary:
      "Baydağ Demir, Tekirdağ'da müstakil villalar, siteler ve fabrikalar için motorlu sürgülü bahçe kapıları, ferforje kanatlı kapılar ve garaj kapıları üretir.",
    intro: [
      "Bahçe kapısı mülkünüzün dış sınır güvenliğini ve araç giriş-çıkış konforunu sağlar.",
      "Zemine gömülen ray üzerinde kayan sürgülü kapılardan, uzaktan kumandalı İtalyan motor otomasyonlu sistemlere kadar her türlü ölçü ve modelde üretim yapıyoruz.",
    ],
    scope: [
      "Motorlu otomatik sürgülü bahçe kapıları",
      "Çift kanatlı ferforje ve dikey lama bahçe giriş kapıları",
      "Yaya giriş kapıları ve elektrikli kilit karşılıkları",
      "Fabrika ve site girişleri için ağır tonajlı endüstriyel sürgülü kapılar",
    ],
    materials: [
      "Ağır ray profili ve çelik rulmanlı tekerler",
      "Kutu profil ve CNC lazer kesim paneller",
      "BFT / Nice / Somfy kapı motoru entegrasyonu",
      "Galvaniz kaplama ve elektrostatik fırın boya",
    ],
    image: "/projects/after/villa-kapi.jpeg",
    imageAlt: "Tekirdağ'da motorlu sürgülü demir bahçe kapısı imalatı",
    projectCategories: ["kapi"],
    faqs: [
      {
        q: "Bahçe kapısı elektrik kesilince nasıl açılır?",
        a: "Tüm motorlu kapı sistemlerimizde manuel boşa alma anahtarı bulunur; elektrik kesintisinde anahtarla mekanizma boşa alınarak kapı elle rahatça açılıp kapatılır.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "lazer-kesim-tekirdag",
    name: "Lazer Kesim İmalatı",
    h1: "Tekirdağ CNC Lazer Kesim Demir ve Sac İmalatı",
    metaTitle: "Tekirdağ CNC Lazer Kesim Sac & Demir | Baydağ Demir",
    metaDescription:
      "Tekirdağ'da CNC fiber lazer kesim sac, dekoratif metal korkuluk panelleri, bina cephe güneş kırıcıları ve özel parça kesimi. Hızlı ve hassas imalat.",
    summary:
      "Baydağ Demir, CNC fiber lazer kesim teknolojisi ile 1 mm'den 20 mm'ye kadar çelik sacları milimetrik hassasiyetle keserek dekoratif korkuluk, kapı ve yapı elemanları üretir.",
    intro: [
      "CNC fiber lazer kesim; bilgisayar ortamında hazırlanan CAD çizimlerinin sac levhalar üzerine sıfır hata ve çapaksız olarak aktarılmasını sağlar.",
      "Balkon korkuluk panelleri, villa giriş kapısı desenleri, bahçe çitleri, metal logo ve tabela karkasları gibi mimari projeleriniz için özel motif kesimi yapıyoruz.",
    ],
    scope: [
      "Balkon ve teras korkuluk sac panelleri",
      "Dekoratif bahçe kapısı ve duvar üzeri metal paneller",
      "Bina dış cephe güneş kırıcı ve kamufle panelleri",
      "Çelik konstrüksiyon flanş ve bayrak sacı kesimleri",
    ],
    materials: [
      "1 mm - 20 mm Siyah / DKP / Galvanizli çelik sac",
      "Cortex ve paslanmaz sac levhalar",
      "Elektrostatik fırın toz boya",
    ],
    image: "/projects/after/balkon-korkuluk.jpeg",
    imageAlt: "CNC lazer kesim dekoratif sac panel ve korkuluk imalatı",
    projectCategories: ["korkuluk", "kapi"],
    faqs: [
      {
        q: "Kendi çizdiğim deseni kestirebilir miyim?",
        a: "Evet. DWG, DXF, PDF veya yüksek çözünürlüklü vektör çizimlerinizi CNC lazer makinemize aktararak birebir kesim yapıyoruz.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "canopi-tekirdag",
    name: "Çelik Kanopi & Sundurma",
    h1: "Tekirdağ Çelik Kanopi ve Cam Sundurma",
    metaTitle: "Tekirdağ Çelik Kanopi & Cam Giriş Sundurması | Baydağ Demir",
    metaDescription:
      "Tekirdağ'da AVM, otel, villa ve iş yeri girişleri için çelik taşıyıcılı lamine cam kanopi ve sundurma imalatı. Şık ve rüzgara dayanıklı saçaklar.",
    summary:
      "Baydağ Demir, Tekirdağ'da bina, villa ve ticari işletmelerin ana girişleri için çelik konstrüksiyon karkaslı, lamine emniyet camlı modern kanopiler imal eder.",
    intro: [
      "Giriş kanopileri binaya prestijli bir mimari hava katarken ziyaretçileri yağmur, kar ve güneşten korur.",
      "Statik yük hesaplarına göre tasarlanan çelik taşıyıcı kollar, paslanmaz çelik gergi çubukları ve 10+10 mm temperli lamine cam kombinasyonu ile güvenli saçaklar inşa ediyoruz.",
    ],
    scope: [
      "Bina ve site ana giriş kanopileri",
      "AVM, mağaza ve showroom cam saçakları",
      "Paslanmaz gergi rotlu askılı cam sundurmalar",
      "Gizli yağmur deresi ve spot LED aydınlatmalı kanopiler",
    ],
    materials: [
      "HEA / kutu profil çelik taşıyıcılar",
      "8+8 mm / 10+10 mm temperli lamine emniyet camı",
      "Paslanmaz çelik spider tutucular ve gergi rotları",
      "Elektrostatik fırın boya",
    ],
    image: "/projects/after/avm-kanopi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ticari merkez girişine yapılan çelik taşıyıcılı cam kanopi",
    projectCategories: ["cati"],
    projectTitleIncludes: ["Kanopi"],
    faqs: [
      {
        q: "Kanopi camı kırılırsa düşer mi?",
        a: "Hayır. Kullandığımız camlar temperli lamine olduğu için kırılsa dahi aradaki PVB tabakası sayesinde tek parça halinde asılı kalır, dağılmaz ve can güvenliğini korur.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "pergola-tekirdag",
    name: "Çelik Pergola & Veranda",
    h1: "Tekirdağ Çelik Karkas Pergola ve Veranda",
    metaTitle: "Tekirdağ Çelik Pergola & Veranda İmalatı | 4 Mevsim Yaşam",
    metaDescription:
      "Tekirdağ ve Şarköy'de çelik karkaslı pergola, bahçe verandası ve bioklimatik sistem imalatı. Paslanmaz, rüzgarda sallanmayan sağlam yapılar.",
    summary:
      "Baydağ Demir, Tekirdağ'da bahçe, teras ve havuz başları için rüzgarda sallanmayan sağlam çelik karkaslı pergola, veranda ve kış bahçesi iskeletleri üretir.",
    intro: [
      "Bahçe ve teras keyfini dört mevsime yaymanın en konforlu yolu çelik karkaslı bir pergola veya veranda sistemidir.",
      "Ahşap pergolaların zamanla çatlaması ve alüminyum sistemlerin rüzgarda sallanması problemlerini sağlam çelik taşıyıcı kolon ve kirişlerle ortadan kaldırıyoruz.",
    ],
    scope: [
      "Müstakil villa bahçe ve teras çelik verandaları",
      "Motorlu açılır-kapanır bioklimatik alüminyum lamelli pergola karkasları",
      "Cam balkon veya giyotin cam kapatmaya uygun kış bahçesi iskeletleri",
      "Güneş kırıcı metal ve ahşap kompozit lamelli pergolalar",
    ],
    materials: [
      "100x100 / 120x120 kalın etli çelik taşıyıcı kolonlar",
      "Alüminyum hareketli lameller ve motorlu otomasyon",
      "Gizli yağmur oluğu profilleri",
      "Elektrostatik fırın boya",
    ],
    image: "/projects/after/avm-kanopi.jpeg",
    imageAlt: "Tekirdağ'da çelik karkaslı modern bahçe verandası ve pergola uygulaması",
    projectCategories: ["cati"],
    projectTitleIncludes: ["Pergola"],
    faqs: [
      {
        q: "Pergolamın etrafını sonradan camla kapatabilir miyim?",
        a: "Evet. İmal ettiğimiz tüm çelik pergola karkasları giyotin cam, sürgülü cam veya zip perde montajına uygun rijitlikte üretilir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "asma-kat-tekirdag",
    name: "Çelik Asma Kat",
    h1: "Tekirdağ Çelik Asma Kat ve Platform İmalatı",
    metaTitle: "Tekirdağ Çelik Asma Kat & Platform İmalatı | Baydağ Demir",
    metaDescription:
      "Çorlu, Çerkezköy ve Tekirdağ'da dükkan, fabrika ve depolara statik hesaplı çelik asma kat ve platform imalatı. Yüksek taşıma kapasitesi, hızlı montaj.",
    summary:
      "Baydağ Demir; Tekirdağ, Çorlu ve Çerkezköy'de dükkan, mağaza, depo ve sanayi tesisleri için yüksek taşıma kapasiteli çelik asma kat ve platformlar üretir.",
    intro: [
      "Yüksek tavanlı ticari alanlarda dikey hacmi kullanmak mülkünüze ekstra ofis, stok alanı veya showroom kazandırır.",
      "Mevcut binanın statiğine zarar vermeden bağımsız çelik ayaklar ve IPE/NPU ana kirişlerle yüksek taşıma kapasiteli asma katlar kuruyoruz.",
    ],
    scope: [
      "Dükkan ve mağazalar için ofis/showroom asma katı",
      "Fabrika ve lojistik depolar için ağır yük istif asma katı",
      "Makine bakım ve servis platformları",
      "Asma kata özel çelik omurgalı merdiven ve güvenlik korkulukları",
    ],
    materials: [
      "IPE / HEA / NPU çelik ana taşıyıcı kirişler",
      "Trapez sac üzeri hafif beton veya baklavalı çelik sac zemin",
      "M16 / M20 kimyasal ankraj pabuçları",
      "Elektrostatik fırın boya",
    ],
    image: "/projects/after/4.jpeg",
    imageAlt: "Sanayi dükkanında çelik asma kat ve platform montajı",
    projectCategories: ["asmakat"],
    faqs: [
      {
        q: "Asma kat montajı işletmemin çalışmasını ne kadar durdurur?",
        a: "Parçaların tamamı atölyemizde önceden hazırlanıp boyandığı için şantiyedeki montaj süresi dükkan büyüklüğüne göre sadece 2-4 gün sürer.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "hangar-tekirdag",
    name: "Çelik Hangar & Depo",
    h1: "Tekirdağ Çelik Hangar, Depo ve Fabrika Yapıları",
    metaTitle: "Tekirdağ Çelik Hangar & Depo İmalatı | Çorlu, Çerkezköy",
    metaDescription:
      "Tekirdağ, Çorlu ve Çerkezköy'de çelik hangar, fabrika binası, tahıl deposu ve traktör garajı imalatı. Geniş açıklıklı, anahtar teslim montaj.",
    summary:
      "Baydağ Demir, Tekirdağ ve Trakya genelinde tarım ve sanayi sektörüne yönelik geniş açıklıklı çelik hangarlar, depolar ve fabrika binaları inşa eder.",
    intro: [
      "Sanayi ve tarımın kalbi Trakya'da (Çorlu, Çerkezköy, Muratlı, Hayrabolu) malzeme depolama, tahıl ambarı ve fabrika binaları için çelik hangarlar en dayanıklı çözümdür.",
      "Kolonsuz 15 ila 35 metre açıklık geçebilen çelik makas sistemlerimiz; ağır rüzgar ve kar yüklerine tam mukavemet gösterir.",
    ],
    scope: [
      "Sanayi depolama hangarları ve fabrika binaları",
      "Tarımsal tahıl depoları ve samanlık hangarları",
      "Traktör, biçerdöver ve iş makinesi garajları",
      "Seksiyonel ve endüstriyel yana kayar hangar kapıları",
      "Sandviç panel çatı ve cephe kaplama işleri",
    ],
    materials: [
      "HEA / IPE çelik kolon ve makas profilleri",
      "PIR / EPS sandviç cephe ve çatı panelleri",
      "Ağır sanayi sürgülü kapı mekanizmaları",
      "Endüstriyel epoksi ve korozyon astarı",
    ],
    image: "/projects/after/4.jpeg",
    imageAlt: "Tekirdağ Çorlu sanayi bölgesinde çelik konstrüksiyon depo ve hangar binası",
    projectCategories: ["asmakat", "cati"],
    faqs: [
      {
        q: "Çelik hangar ne kadar sürede tamamlanır?",
        a: "Örneğin 300-500 m² büyüklüğündeki standart bir çelik depo/hangar projesi temel hazırlandıktan sonra 15-20 iş günü içerisinde anahtar teslim dikilir.",
      },
      ...commonFaqs,
    ],
  },
  {
    slug: "celik-ev-tekirdag",
    name: "Bungalov & Çelik Ev",
    h1: "Tekirdağ Bungalov, A-Frame ve Çelik Ev İmalatı",
    metaTitle: "Tekirdağ Çelik Ev & A-Frame Bungalov İmalatı | Baydağ Demir",
    metaDescription:
      "Tekirdağ, Şarköy ve Trakya'da depreme tam dayanıklı çelik karkas A-Frame ev, bungalov ve tiny house iskelet imalatı. Anahtar teslim montaj.",
    summary:
      "Baydağ Demir, Tekirdağ ve Trakya'da çelik karkaslı bungalovlar, A-Frame (üçgen çatılı) doğa evleri ve modern çelik konut iskeletleri üretir.",
    intro: [
      "Doğayla iç içe arsanızda hem depreme karşı %100 güvenli hem de modern bir yaşam alanı kurmanın en sağlam yolu çelik konstrüksiyondur.",
      "Ahşap karkasın zamanla dönmesi, böceklenmesi ve yangın riskine karşılık; ağır çelik taşıyıcı profillerle inşa ettiğimiz A-Frame ve bungalov evler nesiller boyu ayakta kalır.",
    ],
    scope: [
      "A-Frame (üçgen çatı) çelik karkas doğa evi imalatı",
      "Modern tek katlı veya asma katlı çelik bungalov karkasları",
      "Prefabrik ve hafif çelik ev iskelet montajı",
      "Sandviç panel çatı, ısıcamlı cephe ve ahşap teras entegrasyonu",
    ],
    materials: [
      "IPE / HEA çelik ana taşıyıcı kirişler",
      "Antipas astar ve elektrostatik koruma",
      "Taş yünü yüksek yoğunluklu yalıtım",
      "Kenet sac ve sandviç çatı kaplama",
    ],
    image: "/projects/after/3.jpeg",
    imageAlt: "Tekirdağ Şarköy Uçmakdere'de çelik konstrüksiyon A-Frame doğa evi",
    projectCategories: ["cati"],
    projectTitleIncludes: ["A-Frame"],
    faqs: [
      {
        q: "A-Frame çelik ev kaç günde kurulur?",
        a: "Şarköy Uçmakdere'de yaptığımız 80 m² A-Frame çelik ev atölye imalatı ve şantiye montajı dahil 21 günde tamamlandı.",
      },
      ...commonFaqs,
    ],
  },
  // Legacy aliases for backward compatibility with existing links
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
      "Lazer kesim korkuluk, sac plakanın CNC lazerle istenen desende kesilmesiyle yapılır; geometrik, bitkisel veya firmanıza özel desenler uygulanabilir.",
      "Şarköy, Marmaraereğlisi ve Süleymanpaşa sahil hattında tuzlu hava paslanmayı hızlandırır. Bu yüzden korozyon önleyici astar ve elektrostatik fırın boya uyguluyoruz.",
    ],
    scope: [
      "Balkon ve teras korkulukları",
      "Merdiven ve galeri boşluğu korkulukları",
      "Pencere demiri ve Fransız balkon korkulukları",
      "Bahçe duvarı üstü lazer kesim panel ve çitler",
    ],
    materials: ["3–8 mm lazer kesim çelik sac", "Kutu profil çerçeve", "Korozyon önleyici astar", "Elektrostatik fırın boya"],
    image: "/projects/after/balkon-korkuluk.jpeg",
    imageAlt: "Tekirdağ Şarköy'de lazer kesim teras korkuluğu",
    projectCategories: ["korkuluk"],
    faqs: [...commonFaqs],
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
      "Giriş kapısı binanın ilk izlenimidir. Pivot menteşeli geniş açıklıklı villa kapılarından apartman giriş kapılarına kadar üretim yapıyoruz.",
    ],
    scope: [
      "Pivot menteşeli çelik villa giriş kapıları",
      "Apartman ve bina giriş kapıları",
      "Motorlu sürgülü ve kanatlı bahçe kapıları",
    ],
    materials: ["Ağır kutu profil karkas", "Pivot mekanizma", "Elektrostatik fırın boya"],
    image: "/projects/after/villa-kapi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ahşap ve antrasit kombinasyonlu pivot çelik villa giriş kapısı",
    projectCategories: ["kapi"],
    faqs: [...commonFaqs],
  },
  {
    slug: "kanopi-pergola-veranda-tekirdag",
    name: "Kanopi, Sundurma & Pergola",
    h1: "Tekirdağ Çelik Kanopi, Sundurma ve Pergola",
    metaTitle: "Tekirdağ Çelik Kanopi, Sundurma & Pergola İmalatı",
    metaDescription:
      "Tekirdağ'da ticari giriş kanopisi, cam sundurma, çelik veranda ve motorlu bioklimatik pergola imalatı.",
    summary:
      "Baydağ Demir, Tekirdağ'da iş yerleri için çelik-cam giriş kanopileri ve sundurmalar, konutlar için çelik veranda sistemleri üretir.",
    intro: ["Kanopi ve sundurmalar giriş kapılarını yağmur ve kardan korurken binaya prestij katar."],
    scope: ["AVM ve ofis giriş kanopileri", "Lamine temperli camlı çelik sundurmalar", "Çelik veranda sistemleri"],
    materials: ["HEA / kutu profil çelik taşıyıcı", "Lamine temperli cam", "Fırın boya"],
    image: "/projects/after/avm-kanopi.jpeg",
    imageAlt: "Tekirdağ Süleymanpaşa'da ticari merkez girişine yapılan çelik taşıyıcılı cam kanopi",
    projectCategories: ["cati"],
    faqs: [...commonFaqs],
  },
  {
    slug: "bungalov-a-frame-celik-ev-tekirdag",
    name: "Bungalov & A-Frame Çelik Ev",
    h1: "Tekirdağ Bungalov ve A-Frame Çelik Ev",
    metaTitle: "Tekirdağ Bungalov & A-Frame Çelik Ev | Anahtar Teslim",
    metaDescription: "Tekirdağ'da çelik karkas bungalov, A-Frame ev ve prefabrik yapı imalatı.",
    summary: "Baydağ Demir, Tekirdağ ve Trakya'da çelik karkaslı bungalov ve A-Frame evler üretip monte eder.",
    intro: ["Çelik karkas, ahşap karkasa göre daha rijit ve depreme karşı daha güvenlidir."],
    scope: ["A-Frame çelik karkas ev imalatı", "Bungalov çelik iskelet", "Sandviç panel çatı"],
    materials: ["IPE / HEA çelik kiriş", "Sandviç çatı paneli", "Isıcam cephe"],
    image: "/projects/after/3.jpeg",
    imageAlt: "Tekirdağ Şarköy Uçmakdere'de çelik konstrüksiyon A-Frame doğa evi",
    projectCategories: ["cati"],
    faqs: [...commonFaqs],
  },
  {
    slug: "celik-konstruksiyon-hangar-asma-kat-tekirdag",
    name: "Çelik Konstrüksiyon, Hangar & Asma Kat",
    h1: "Tekirdağ Çelik Konstrüksiyon, Hangar ve Asma Kat",
    metaTitle: "Tekirdağ Çelik Konstrüksiyon, Hangar & Asma Kat İmalatı",
    metaDescription: "Çorlu, Çerkezköy ve Tekirdağ'da çelik hangar, depo, asma kat ve platform imalatı.",
    summary: "Baydağ Demir, Tekirdağ'da çelik hangar, depo binası, asma kat ve platform imal eder.",
    intro: ["Sanayi tesislerinde ek alan ihtiyacı çelik asma kat veya çelik depo ile çözülür."],
    scope: ["Çelik hangar ve depo binaları", "Çelik asma kat", "Endüstriyel platformlar"],
    materials: ["HEA / IPE çelik profil", "Sandviç panel", "Kimyasal ankraj"],
    image: "/projects/after/4.jpeg",
    imageAlt: "Tekirdağ Çorlu sanayi bölgesinde çelik konstrüksiyon depo ve hangar binası",
    projectCategories: ["asmakat"],
    faqs: [...commonFaqs],
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
    a: "Mekânın fotoğrafını ve yaklaşık ölçülerini WhatsApp'tan (0534 874 87 13) gönderirseniz ön fiyat veririz; kesin fiyat ücretsiz yerinde ölçüden sonra belirlenir.",
  },
];
