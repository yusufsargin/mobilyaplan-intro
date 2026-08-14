import { PricingPlan, ComparisonRow, CncBrand, PresetCommand } from '../types';

export const PRESET_COMMANDS: PresetCommand[] = [
  {
    label: 'Mutfak Dolabı (Alt)',
    prompt: '180x90 cm 3 kapaklı 2 raflı beyaz meşe alt mutfak dolabı çiz',
    dimensions: { width: 180, height: 90, depth: 60 },
    type: 'Mutfak Alt Modülü',
    material: '18mm Beyaz MDF Lam',
    panelsCount: 12,
    estimatedGcodeLines: 142,
  },
  {
    label: 'Sürgülü Gardırop',
    prompt: '200x240 cm 2 sürgü kapaklı çekmeceli gardırop çiz',
    dimensions: { width: 200, height: 240, depth: 65 },
    type: 'Gardırop',
    material: '18mm Ceviz Suntalam',
    panelsCount: 22,
    estimatedGcodeLines: 288,
  },
  {
    label: 'Çalışma Masası',
    prompt: '140x75 cm çekmeceli ve kablo kanallı modern çalışma masası çiz',
    dimensions: { width: 140, height: 75, depth: 70 },
    type: 'Çalışma Masası',
    material: '18mm Antrasit MDF',
    panelsCount: 8,
    estimatedGcodeLines: 96,
  },
  {
    label: 'Banyo Dolabı',
    prompt: '80x110 cm aynalı bas-aç kapaklı banyo dolabı çiz',
    dimensions: { width: 80, height: 110, depth: 40 },
    type: 'Banyo Dolabı',
    material: '18mm Parlak Beyaz MDF',
    panelsCount: 9,
    estimatedGcodeLines: 110,
  },
  {
    label: 'TV Ünitesi',
    prompt: '220x50 cm konsollu ahşap kapaklı TV ünitesi çiz',
    dimensions: { width: 220, height: 50, depth: 45 },
    type: 'TV Ünitesi',
    material: '18mm Meşe & Siyah Metal',
    panelsCount: 14,
    estimatedGcodeLines: 175,
  }
];

export const FEATURES_LIST = [
  {
    id: 'web-based',
    icon: 'fa-globe',
    title: 'Kurulumsuz Web Tabanlı',
    badge: 'Kesintisiz Erişim',
    description: 'İnternet olan her yerden kesintisiz erişim. Kurulum gerektirmeden cep telefonunuzdan, tabletinizden veya bilgisayarınızdan anında tasarlayın.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  },
  {
    id: 'smart-nesting',
    icon: 'fa-vector-square',
    title: 'Akıllı Nesting (Fire Optimizasyonu)',
    badge: '%20 Malzeme Tasarrufu',
    description: 'Plakaları en az zayiatla dizer, %20’ye varan malzeme tasarrufu sağlar. Fireyi sıfıra indirerek kendi maliyetini aylar içinde çıkarır.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  },
  {
    id: 'ai-render',
    icon: 'fa-wand-magic-sparkles',
    title: 'AI İle 4K Render Simülasyonu',
    badge: 'Fotogerçekçi Müşteri Sunumu',
    description: 'Tek tıkla yapay zeka destekli, fotogerçekçi müşteri sunum görselleri oluşturun. Müşterilerinize mekan tasarımını saniyeler içinde sunun.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  },
  {
    id: 'module-library',
    icon: 'fa-boxes-stacked',
    title: 'Zengin Modül Kütüphanesi',
    badge: 'Mutfak, Ray Dolap & Banyo',
    description: 'Mutfak, Ray Dolap, Vestiyer ve Banyo mobilya tasarımlarını dakikalar içinde parametrik kütüphaneden seçerek hazırlayın.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  },
  {
    id: 'drilling-labels',
    icon: 'fa-barcode',
    title: 'Delik Şablonları & Etiketleme',
    badge: 'Minifix & Menteşe Delikleri',
    description: 'Minifix ve menteşe delikleri otomatik yerleşir. Üretim bandı için CNC parça etiketleri ve barkodlar anında hazır çıkar.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  },
  {
    id: 'fast-presentation',
    icon: 'fa-bolt-lightning',
    title: 'Hızlı Müşteri Sunumu',
    badge: 'Yerinde Satış Kapatma',
    description: 'Müşteri yanındayken ölçüleri girin, tasarımı anında 3D olarak görselleştirin ve onay alarak satışı yerinde kapatın.',
    color: 'from-zinc-800 to-zinc-900',
    borderColor: 'border-zinc-800'
  }
];

export const TESTIMONIALS_LIST = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Yılmaz Mobilya & Dekorasyon',
    location: 'Bursa / İnegöl',
    comment: 'MobilyaPlan’ın akıllı nesting özelliği sayesinde aylık MDF plaka firemiz %18 oranında düştü. Sadece malzeme tasarrufu bile programın lisansını ilk aylarda amorti etti.',
    rating: 5,
    badge: 'Fire Oranı %18 Düştü',
    avatarText: 'AY'
  },
  {
    name: 'Mehmet Kaplan',
    role: 'Kaplan Mutfak & Mimarlık',
    location: 'İstanbul / Ümraniye',
    comment: 'Sahada müşteri yanında tablet üzerinden 5 dakikada 3D mutfak çizip AI render simülasyonu alıyorum. Müşteri daha sunum bitmeden siparişi onaylıyor.',
    rating: 5,
    badge: '5 Dakikada Satış Kapatma',
    avatarText: 'MK'
  },
  {
    name: 'Mustafa Demir',
    role: 'Demir CNC & Ahşap İşleme',
    location: 'Kayseri Organize Sanayi',
    comment: 'CNC tezgahımız için G-Code çıktısı almak artık tek tık. Bıçak rotaları, minifix delikleri ve parça etiketleri sıfır hatayla çıkıyor. Atölye hızımız 3 katına çıktı.',
    rating: 5,
    badge: '3 Kat Atölye Hızı',
    avatarText: 'MD'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    criterion: 'Donanım / Bilgisayar Gücü',
    traditional: 'Pahalı ekran kartı ve güçlü masaüstü PC şart.',
    mobilyaPlan: 'Sıradan bir telefon, tablet veya laptop yeterli.',
    advantage: 'Donanım Özgürlüğü'
  },
  {
    criterion: 'Kullanım Kolaylığı & Eğitim',
    traditional: 'Karmaşık CAD programları için aylarca eğitim gerekir.',
    mobilyaPlan: '30 dakikada öğrenilir, usta bağımlılığını azaltır.',
    advantage: '30 Dakikada Öğrenim'
  },
  {
    criterion: 'Sahada / Müşteri Yanında Kullanım',
    traditional: 'İmkansız, çizimler atölyede masaüstü PC’de yapılmalıdır.',
    mobilyaPlan: 'Müşterinin evinde tablet/telefondan 3D çizim ve anında teklif.',
    advantage: 'Yerinde Anında Teklif'
  },
  {
    criterion: 'Entegrasyon & AI Render',
    traditional: 'Tasarım, render ve CNC için 3-4 farklı program gerekir.',
    mobilyaPlan: 'Tasarım, AI Render, Akıllı Nesting ve CNC G-Code tek sistemde.',
    advantage: 'Hepsi Bir Arada Platform'
  }
];

export const CNC_BRANDS: CncBrand[] = [
  { name: 'AES Group', logoText: 'AES', country: 'Türkiye / Global', description: 'Sirius, Raptor, Extreme serisi G-Code tam uyum' },
  { name: 'Biesse', logoText: 'BIESSE', country: 'İtalya', description: 'Rover ve Woodpecker serilerine doğrudan aktarım' },
  { name: 'Homag', logoText: 'HOMAG', country: 'Almanya', description: 'Centateq ve Vantage CNC işleme merkezleri' },
  { name: 'MSTekno', logoText: 'MST', country: 'Türkiye', description: 'Yerli CNC tezgahları ile tam entegrasyon' },
  { name: 'Makser', logoText: 'MAKSER', country: 'Türkiye', description: 'Tüm kapı ve gövde ebatlama tezgahları' },
  { name: 'Info CNC', logoText: 'INFO', country: 'Türkiye', description: 'G-Code tabanlı nesting router tezgahları' },
  { name: 'SCM Group', logoText: 'SCM', country: 'İtalya', description: 'Pratix ve Morbidelli serisi tam destek' },
  { name: 'Felder Group', logoText: 'FELDER', country: 'Avusturya', description: 'Format4 ve Profit nesting çözümleri' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standart Sürüm',
    subtitle: 'Atölyeler, marangozlar ve tasarım odaklı imalatçılar',
    monthlyPrice: 500,
    annualPrice: 5000,
    popular: false,
    ctaText: 'Standart Sürümü Başlat',
    features: [
      'Web Tabanlı Kullanım (Kurulumsuz, Her Cihazda)',
      'Mutfak, Ray Dolap, Vestiyer & Banyo Modülleri',
      '3D Tasarım & Hızlı Müşteri Sunum Ekranı',
      'Net Ölçülendirme & Parça Kesim Listesi',
      'Sürükle-Bırak Hazır Modül Kütüphanesi',
      'Sesli & Yazılı AI Tasarım Asistanı',
      'Sınırsız Proje Kaydetme & İçi Dışı Görselleme'
    ]
  },
  {
    id: 'cnc',
    name: 'CNC Sürümü',
    subtitle: 'CNC Tezgahı kullanan profesyonel mobilya üreticileri ve fabrikalar',
    monthlyPrice: 2000,
    annualPrice: 20000,
    popular: true,
    badge: 'EN ÇOK TERCİH EDİLEN',
    ctaText: 'CNC Sürümünü Dene',
    features: [
      'Standart Sürümdeki HER ŞEY',
      'Tüm CNC Makine Markalarıyla Entegrasyon (AES, Biesse, Homag, SCM vb.)',
      'Kesim / Ebatlama G-Code Çıktıları (.NC / .TAP)',
      'Akıllı Nesting & %20 Malzeme Fire Tasarrufu',
      'Otomatik Parça Etiketleme & Barkod Basımı',
      'Detaylı Üretim & Delik Dosyaları',
      'Öncelikli 7/24 Canlı Destek & Kurulum Rehberi'
    ]
  }
];

export const FAQS = [
  {
    category: 'web',
    q: 'MobilyaPlan kullanmak için bilgisayara kurulum yapmam gerekiyor mu?',
    a: 'Hayır, MobilyaPlan %100 bulut tabanlıdır. Google Chrome, Safari veya Microsoft Edge gibi herhangi bir internet tarayıcısı üzerinden bilgisayarınızdan, tabletinizden hatta akıllı telefonunuzdan anında erişebilirsiniz. Ağır bilgisayar veya donanım yatırımı gerektirmez.'
  },
  {
    category: 'cnc',
    q: 'Hangi CNC tezgah markaları ile uyumludur?',
    a: 'G-Code (.NC, .TAP, .MPG, .DXF, .CIX, .XXL vb.) kabul eden tüm CNC router ve işleme merkezleriyle %100 uyumludur. AES Group, Biesse, Homag, SCM, MSTekno, Makser, Info CNC, Masterwood, Felder, Turanlar, Özçelik ve tüm Syntec/Mach3/Siemens tabanlı yerli ve yabancı tezgahlar desteklenir.'
  },
  {
    category: 'cnc',
    q: 'Alphacam veya Artcam kullanmayı tamamen bırakabilir miyim?',
    a: 'Evet! MobilyaPlan doğrudan tezgahınızın okuyabileceği hazır G-Code dosyasını üretir. Bıçak yolu çap telafisi, minifix delikleri, kavela yerleri, kanal açma ve kesim rotaları otomatik hesaplandığı için ek bir CAM programına saatler harcamanıza gerek kalmaz.'
  },
  {
    category: 'nesting',
    q: 'Akıllı Nesting algoritması nasıl fire tasarrufu sağlıyor?',
    a: 'MobilyaPlan, ahşap deseni (su damarı) yönünü otomatik algılayarak parçaları plaka üzerine en sıkı yapboz geometrisiyle yerleştirir. Manuel yatay ebatlamada %22 seviyesinde olan ortalama fireyi %6 seviyesine düşürür ve ayda yüzlerce plaka tasarruf ettirir.'
  },
  {
    category: 'ai',
    q: 'AI 4K Render özelliği için güçlü ekran kartı (GPU) gerekir mi?',
    a: 'Hayır! Tüm yapay zeka render hesaplamaları MobilyaPlan bulut sunucularında saniyeler içinde tamamlanır. Standart bir ofis laptopu veya akıllı telefonunuzdan bile müşterinize 10 saniyede fotogerçekçi 4K yaşam alanı sunumu yapabilirsiniz.'
  },
  {
    category: 'fiyat',
    q: 'Ücretsiz deneme süresince kredi kartı gerekiyor mu?',
    a: 'Kesinlikle hayır! 3 günlük ücretsiz denemenizi hiçbir kredi kartı bilgisi girmeden anında başlatabilir, tüm 3D çizim, Nesting ve G-Code özelliklerini kendi projelerinizde test edebilirsiniz.'
  },
  {
    category: 'fiyat',
    q: 'Teknik destek ve eğitim hizmeti veriliyor mu?',
    a: 'Evet! WhatsApp hattımız (+90 532 715 33 56) ve online video kütüphanemiz üzerinden tüm kullanıcılarımıza kesintisiz teknik danışmanlık ve kullanım desteği sunulmaktadır.'
  }
];
