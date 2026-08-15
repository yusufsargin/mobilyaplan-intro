export interface ComparisonRow {
  criterion: string;
  traditional: string;
  brand: string;
  advantage: string;
}

export interface ComparisonHighlight {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

export interface TranslationKeys {
  common: {
    brandName: string;
    brandSubtitle: string;
    brandDomain: string;
    startTrialBtn: string;
    freeTrialDaysBadge: string;
    freeTrialPill: string;
    noCardRequired: string;
    watchVideoBtn: string;
    learnMore: string;
    currencySymbol: string;
    month: string;
    year: string;
    liveOnline: string;
    close: string;
    menu: string;
    backToTop: string;
    whatsappSupport: string;
    whatsappOnline: string;
  };
  nav: {
    aiRender: string;
    howItWorks: string;
    comparison: string;
    features: string;
    savingsCalc: string;
    pricing: string;
    blog: string;
    faq: string;
    quickMenu: string;
    statsHeadline: string;
    statsDesc: string;
    directContact: string;
  };
  hero: {
    statusBadge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    trustNote: string;
    userCount: string;
    videoTitle: string;
    audienceTag1: string;
    audienceTag1Desc: string;
    audienceTag2: string;
    audienceTag2Desc: string;
    audienceTag3: string;
    audienceTag3Desc: string;
  };
  comparison: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    colCriterion: string;
    colTraditional: string;
    colBrand: string;
    brandTag: string;
    highlights: ComparisonHighlight[];
    rows: ComparisonRow[];
    ctaBtn: string;
    ctaSubtext: string;
  };
  aiCompare: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    light45: string;
    lightStudio: string;
    lightTop: string;
    speedLabel: string;
    speedValue: string;
    sliderAria: string;
    cadBadge: string;
    aiBadge: string;
    telemetryTitle: string;
    footerNote: string;
    footerSubnote: string;
    ctaBtn: string;
    scenes: {
      v4wood: {
        title: string;
        tabTitle: string;
        tabSub: string;
        cadLabel: string;
        aiLabel: string;
        description: string;
        time: string;
        passes: string;
        diffuse: string;
        roughness: string;
        occlusion: string;
      };
      v4corner: {
        title: string;
        tabTitle: string;
        tabSub: string;
        cadLabel: string;
        aiLabel: string;
        description: string;
        time: string;
        passes: string;
        diffuse: string;
        roughness: string;
        occlusion: string;
      };
      v3drawers: {
        title: string;
        tabTitle: string;
        tabSub: string;
        cadLabel: string;
        aiLabel: string;
        description: string;
        time: string;
        passes: string;
        diffuse: string;
        roughness: string;
        occlusion: string;
      };
    };
  };
  renderShowcase: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    beforeBadge: string;
    afterBadge: string;
    dragHint: string;
    transformationLabel: string;
    lightingLabel: string;
    resolutionLabel: string;
    speedBadge: string;
    ctaPrimary: string;
    trustNote: string;
    features: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
    scenes: Array<{
      id: string;
      title: string;
      subtitle: string;
      roomType: string;
      materials: string;
      cadVisual: {
        title: string;
        dim: string;
        features: string[];
      };
      renderVisual: {
        title: string;
        lighting: string;
        atmosphere: string;
      };
    }>;
  };
  workflow: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    steps: {
      step1: { title: string; badge: string; shortDesc: string; tag: string; heading: string; desc: string };
      step2: { title: string; badge: string; shortDesc: string; tag: string; heading: string; desc: string };
      step3: { title: string; badge: string; shortDesc: string; tag: string; heading: string; desc: string };
      step4: { title: string; badge: string; shortDesc: string; tag: string; heading: string; desc: string };
    };
    sliderWidth: string;
    sliderHeight: string;
    sliderDepth: string;
    cadFeatureNote: string;
    drillingItems: { minifix: string; dowel: string; hinge: string };
    nestingStats: { efficiency: string; totalWaste: string; savedBoards: string };
    gcodeStats: { cncCompat: string; renderTime: string; downloadReady: string; ctaBtn: string };
  };
  features: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    items: Array<{
      id: string;
      icon: string;
      badge: string;
      title: string;
      description: string;
    }>;
    bottomBanner: {
      title: string;
      description: string;
      cta: string;
    };
  };
  video: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    mockupHeader: string;
    footerTitle: string;
    footerDesc: string;
    ctaBtn: string;
  };
  savings: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    quickSelect: string;
    preset1: string;
    preset2: string;
    preset3: string;
    slider1Label: string;
    slider1Unit: string;
    slider2Label: string;
    slider2Unit: string;
    infoTitle: string;
    infoDesc: string;
    estimatedTitle: string;
    estimatedSubtitle: string;
    statMonthlySavings: string;
    statBoardsSaved: string;
    statBoardsUnit: string;
    statCamTime: string;
    statCamUnit: string;
    statTreesSaved: string;
    statTreesUnit: string;
    ctaBtn: string;
  };
  pricing: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    monthlyToggle: string;
    annualToggle: string;
    annualDiscountBadge: string;
    periodMonthly: string;
    periodAnnual: string;
    noCardNeeded: string;
    popularBadge: string;
    guarantee: string;
    customSetupTitle: string;
    customSetupDesc: string;
    plans: {
      standard: {
        name: string;
        subtitle: string;
        monthlyPrice: number;
        annualPrice: number;
        currency: string;
        cta: string;
        features: string[];
      };
      cnc: {
        name: string;
        subtitle: string;
        monthlyPrice: number;
        annualPrice: number;
        currency: string;
        cta: string;
        features: string[];
      };
    };
  };
  testimonials: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    bottomNote: string;
    items: Array<{
      name: string;
      role: string;
      location: string;
      comment: string;
      rating: number;
      badge: string;
      avatarText: string;
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    noResults: string;
    helpBoxTitle: string;
    helpBoxDesc: string;
    helpBoxBtn: string;
    categories: Array<{ id: string; label: string }>;
    items: Array<{
      category: string;
      q: string;
      a: string;
    }>;
  };
  workshopGallery: {
    badge: string;
    title: string;
    subtitle: string;
    fbButtonText: string;
    fbButtonUrl: string;
    modalClose: string;
    zoomHint: string;
    verifiedProduction: string;
    ctaText: string;
    items: Array<{
      tag: string;
      title: string;
      desc: string;
      userComment: string;
      authorName: string;
      workshopName: string;
      postTime: string;
      likesCount: number;
      commentsCount: number;
      imageUrl: string;
      badge: string;
    }>;
    youtubeBadge: string;
    youtubeTitle: string;
    youtubeSubtitle: string;
    youtubeButtonText: string;
    youtubeButtonUrl: string;
    videos: Array<{
      id: string;
      title: string;
      desc: string;
      duration: string;
      views: string;
      thumbnail: string;
      badge: string;
      videoUrl: string;
      embedUrl: string;
    }>;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readTimeLabel: string;
    readArticleBtn: string;
    readFullArticleBtn: string;
    backToArticles: string;
    backToHome: string;
    allArticlesTitle: string;
    featuredBadge: string;
    keyTakeawaysTitle: string;
    proTipTitle: string;
    shareArticle: string;
    searchPlaceholder: string;
    allCategories: string;
    relatedTitle: string;
    posts: Array<{
      id: string;
      title: string;
      category: string;
      readTime: string;
      date: string;
      author: string;
      authorRole: string;
      excerpt: string;
      imageUrl: string;
      tags: string[];
      content: {
        lead: string;
        keyTakeaways: string[];
        sections: Array<{
          heading: string;
          paragraphs: string[];
        }>;
        proTip: string;
      };
    }>;
  };
  footer: {
    brandDesc: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    linkDrawOnline: string;
    linkAiRender: string;
    linkNesting: string;
    linkGcode: string;
    linkPricing: string;
    linkFaq: string;
    linkTryFree: string;
    copyright: string;
    legalNote: string;
  };
  trialModal: {
    badge: string;
    title: string;
    desc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cta: string;
    note: string;
  };
  videoModal: {
    title: string;
    footerNote: string;
    cta: string;
  };
}

export const translations: { tr: TranslationKeys; en: TranslationKeys } = {
  tr: {
    common: {
      brandName: 'MobilyaPlan',
      brandSubtitle: 'Web CAD/CAM & AI Render',
      brandDomain: 'mobilyaplan.com',
      startTrialBtn: 'Sistemde Ücretsiz Dene',
      freeTrialDaysBadge: '3 Gün Ücretsiz Dene',
      freeTrialPill: '3 Gün Sınırsız & Ücretsiz',
      noCardRequired: 'Kredi kartı gerekmez',
      watchVideoBtn: 'Tanıtım Videosu',
      learnMore: 'Daha Fazla Bilgi',
      currencySymbol: '₺',
      month: 'ay',
      year: 'yıl',
      liveOnline: 'Çevrimiçi',
      close: 'Kapat',
      menu: 'Menü',
      backToTop: 'Yukarı Çık',
      whatsappSupport: 'WhatsApp Destek Hattı',
      whatsappOnline: 'MobilyaPlan Teknik Ekibi Çevrimiçi',
    },
    nav: {
      aiRender: 'AI Render',
      howItWorks: 'Nasıl Çalışır?',
      comparison: 'Neden Biz?',
      features: 'Özellikler',
      savingsCalc: 'Tasarruf Hesaplayıcı',
      pricing: 'Fiyatlandırma',
      blog: 'Blog',
      faq: 'SSS',
      quickMenu: 'Hızlı Menü',
      statsHeadline: '2.000+ KULLANICI',
      statsDesc: '2.000’den fazla kullanıcı MobilyaPlan ile 3D tasarım, akıllı nesting ve yapay zeka render kullanıyor.',
      directContact: 'Doğrudan İletişim',
    },
    hero: {
      statusBadge: '✨ Yeni Nesil 3D Mobilya Çizim Aracı',
      titleLine1: 'Yeni Nesil Mobilya Çizim Programı',
      titleLine2: 'Herkes İçin Kolay, Hızlı ve Profesyonel 3D Tasarım',
      subtitle: 'Karmaşık teknik bilgi gerektirmez! Marangozlardan iç mimarlara, atölyelerden bireysel kullanıcılara kadar herkesin 10 dakikada öğrenip profesyonelce mobilya tasarlayabileceği bulut tabanlı çizim platformu.',
      ctaPrimary: 'Hemen Ücretsiz Başla',
      trustNote: '3 Gün Sınırsız Ücretsiz Deneme • Kredi Kartı Gerekmez • Sıfır Kurulum',
      userCount: '2.000+ kullanıcı MobilyaPlan ile çiziyor',
      videoTitle: 'MobilyaPlan • 2 Dakikada Tanıtım & Hızlı Başlangıç',
      audienceTag1: 'Marangoz & Atölyeler',
      audienceTag1Desc: 'Ölçü gir, anında parça listesi ve fire tasarrufu al',
      audienceTag2: 'İç Mimarlar & Tasarımcılar',
      audienceTag2Desc: 'Müşteriye saniyeler içinde 3D model ve render sun',
      audienceTag3: 'Bireysel Kullanıcılar',
      audienceTag3Desc: 'Kendi evinin mobilyasını 10 dakikada kolayca çiz',
    },
    comparison: {
      badge: 'Küresel Karşılaştırma & Değer Önerisi',
      titleLine1: 'Geleneksel Masaüstü CAD vs.',
      titleLine2: 'MobilyaPlan',
      subtitle: 'Hantal masaüstü lisansları, pahalı donanım yatırımları ve saatler süren render kuyrukları yerine yeni nesil bulut CAD/CAM.',
      colCriterion: 'Karşılaştırma Kriteri',
      colTraditional: 'Geleneksel Masaüstü CAD (Alphacam, Artcam, Cabinet Vision vb.)',
      colBrand: 'MobilyaPlan (Bulut CAD/CAM & AI)',
      brandTag: 'YENİ NESİL BULUT',
      highlights: [
        {
          icon: 'fa-cloud',
          title: '%100 Bulut Tabanlı',
          desc: 'Kurulum yok, donanım kilidi yok. Chrome, Safari, Mac, PC, iPad veya telefondan anında çalışın.',
          badge: 'Sıfır Kurulum',
        },
        {
          icon: 'fa-microchip',
          title: 'Pahalı GPU / Ağır PC Gerekmez',
          desc: 'Tüm ağır hesaplamalar ve AI çizim motoru bulutta çalışır. Standart bir ofis laptopunda bile maksimum hız.',
          badge: 'Düşük Donanım Maliyeti',
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'Yapay Zeka Destekli 4K AI Render',
          desc: 'Saatlerce render beklemek yok. Müşterinizin yanında 8-10 saniyede fotogerçekçi görsel üretin ve satışı kapatın.',
          badge: '8 Saniyede 4K',
        },
        {
          icon: 'fa-gears',
          title: 'Akıllı Nesting & Doğrudan CNC G-Code',
          desc: '%20 plaka fire tasarruflu otomatik yerleşim ve tek tıkla tezgaha hazır .NC, .TAP, .MPR çıktısı.',
          badge: '%20 Plaka Tasarrufu',
        },
      ],
      rows: [
        {
          criterion: 'Kurulum ve Erişim',
          traditional: '20 GB+ devasa masaüstü kurulumu, USB lisans kilitleri (dongle), tek bilgisayara bağımlılık.',
          brand: '%100 Web Tabanlı: Tarayıcıdan anında açılır; Mac, PC, tablet veya cep telefonundan çalışır.',
          advantage: 'Her Cihazdan Anında Erişim',
        },
        {
          criterion: 'Donanım & Ekran Kartı Maliyeti',
          traditional: 'Yüksek bütçeli masaüstü iş istasyonu ve pahalı profesyonel GPU zorunluluğu.',
          brand: 'Sıfır Donanım Yükü: Tüm motor bulut sunucularımızda işlenir, temel bir laptop yeterlidir.',
          advantage: 'Yüksek Donanım Yatırımı Yok',
        },
        {
          criterion: '3D Görselleştirme & Render Hızı',
          traditional: 'Saatler süren malzeme atama, ışık ayarlama ve GPU render bekleme süreleri.',
          brand: 'Yapay Zeka Destekli 4K Render: 8-10 saniyede mekana uyarlanmış fotogerçekçi müşteri sunumu.',
          advantage: '10x Daha Hızlı Satış',
        },
        {
          criterion: 'Nesting & Plaka Fire Oranı',
          traditional: 'Ayrı ve pahalı CAM eklentileri, manuel plaka yerleşimi ve ~%22 yüksek fire oranı.',
          brand: 'Akıllı Nesting Motoru: Parçaları en sıkı biçimde yerleştirir, fireyi %6 seviyesine düşürür (%20 tasarruf).',
          advantage: '%20 Plaka Tasarrufu',
        },
        {
          criterion: 'CNC Router G-Code Çıktısı',
          traditional: 'Karmaşık post processor ayarları, manuel takım yolu çizimleri, sıklıkla operatör hatası.',
          brand: 'Tek Tıkla Doğrudan G-Code: Minifix, kavela, menteşe ve kanal delikleri makineye tam hazır (.NC / .TAP).',
          advantage: 'Sıfır Hata / Tek Tık',
        },
        {
          criterion: 'Öğrenme Eğrisi & Eğitim',
          traditional: 'Haftalarca süren zorunlu kurslar, karmaşık menüler, yüksek eğitim maliyeti.',
          brand: '15 Dakikada Çizime Başlama: Marangoz ve atölye dostu sezgisel parametrik arayüz.',
          advantage: '15 Dk Hızlı Başlangıç',
        },
      ],
      ctaBtn: 'MobilyaPlan ile 3 Gün Ücretsiz Dene',
      ctaSubtext: 'Kredi kartı gerekmez • Anında hesabınızı açıp çizmeye başlayın',
    },
    aiCompare: {
      badge: 'Çizim Modundan -> Fotogerçekçi Render’a',
      titleLine1: 'Tek Tıkla Çizimden',
      titleLine2: 'Fotogerçekçi Render’a Dönüşüm',
      subtitle: 'MobilyaPlan’da çizdiğiniz dolapları saatlerce render beklemeden; ışık, ahşap dokusu ve yansımalarıyla anında fotogerçekçi görsellere dönüştürün. Kaydırıcıyı çekerek çizim modu ile render arasındaki farkı görün.',
      light45: '45° Açılı Işık',
      lightStudio: 'Stüdyo Işığı',
      lightTop: 'Tavan Spotu',
      speedLabel: 'İşlem Süresi:',
      speedValue: '0.08 Saniye',
      sliderAria: 'Karşılaştırma Kaydırıcısı',
      cadBadge: '1. Çizim Modu (Program Arayüzü)',
      aiBadge: '2. Fotogerçekçi 4K Render',
      telemetryTitle: '✨ RENDER DÖNÜŞÜMÜ',
      footerNote: 'Sol Taraf: MobilyaPlan 3D çizim ve ölçülendirme ekranı | Sağ Taraf: Tek tıkla fotogerçekçi render çıktısı',
      footerSubnote: 'Müşterinize anında fotogerçekçi render göstererek siparişi yerinde onaylatın.',
      ctaBtn: 'Kendi Çiziminizde Render’ı Deneyin',
      scenes: {
        v4wood: {
          title: 'MobilyaPlan v4 • Çıtalı Meşe & Mat Antrasit Boy Dolap (60x72 cm)',
          tabTitle: 'Çıtalı Ahşap Mutfak Dolabı',
          tabSub: '60x72 cm',
          cadLabel: '3D Çizim Arayüzü',
          aiLabel: 'Fotogerçekçi Render',
          description: 'MobilyaPlan’da çizilen 60x72 cm çıtalı dolap; ahşap dokusu, çıta derinlikleri ve mat antrasit kapak yansımasıyla anında fotogerçekçi görsele dönüştürülür.',
          time: '0.08 Sn',
          passes: '128 / 128 SPP',
          diffuse: 'Doğal Çıtalı Meşe Dokusu',
          roughness: '0.18 İpeksi Mat Yüzey',
          occlusion: 'Gerçekçi Kontak Gölgeleri',
        },
        v4corner: {
          title: 'MobilyaPlan v4 • Kör Köşe Mutfak Modülü (100x76x56 cm)',
          tabTitle: 'Kör Köşe Mutfak Modülü',
          tabSub: '100x76x56 cm',
          cadLabel: 'Kör Köşe Çizim Ekranı',
          aiLabel: 'Fotogerçekçi Render',
          description: 'Kör köşe modülü; kuvars tezgah, köşe birleşim çıtaları ve stüdyo aydınlatması ile tek tıkla müşteriye sunulacak render formatına geçer.',
          time: '0.09 Sn',
          passes: '128 / 128 SPP',
          diffuse: 'Kuvars Tezgah Damar Dokusu',
          roughness: '0.08 Parlak Yansıma',
          occlusion: 'Gövde Birleşim Gölgeleri',
        },
        v3drawers: {
          title: 'MobilyaPlan v3 • 4 Çekmeceli Kasa Modülü (60x78 cm)',
          tabTitle: '4 Çekmeceli Keson',
          tabSub: '60x78 cm',
          cadLabel: 'Dikey & Yatay Bölmeler',
          aiLabel: 'AI Nöral Raytraced Simülasyon',
          description: '60x78 cm gövdede 4 adet çekmece klapası; teleskopik ray boşlukları, fırçalanmış kulp metalleri ve yumuşak stüdyo yansımalarıyla görselleştirilmiştir.',
          time: '0.07 Sn',
          passes: '128 / 128 SPP',
          diffuse: 'Mat İpek Lake Yüzey',
          roughness: '0.22 Pürüzsüz Mat Doku',
          occlusion: 'Çekmece Rayı Derinlik Haritası',
        },
      },
    },
    renderShowcase: {
      badge: '✨ AI Render & Sinematik Görselleştirme',
      titleLine1: 'Çizimden Gerçeğe: Saniyeler İçinde Fotogerçekçi Render',
      titleLine2: 'Müşterinize hayalindeki mutfağı saniyeler içinde sunun.',
      subtitle: 'Karmaşık render motorlarıyla saatlerce uğraşmayın. 3D mutfak çiziminizi tek tıkla müşterinize sunabileceğiniz gerçekçi fotoğrafa dönüştürün.',
      beforeBadge: '3D Çizim Modu',
      afterBadge: 'Yapay Zeka Render',
      dragHint: 'Karşılaştırmak için Sürükleyin',
      transformationLabel: 'Çizimden Render’a Anında Geçiş',
      lightingLabel: 'Sıcak Gün Işığı & Doğal Yansıma',
      resolutionLabel: '4K Ultra HD • Fotogerçekçi',
      speedBadge: '8 Saniyede Hazır',
      ctaPrimary: 'Kendi Mutfak Tasarımında Render Al',
      trustNote: 'Sıfır Donanım Yükü • Bulut Tabanlı Render • Tek Tık',
      features: [
        {
          icon: 'fa-solid fa-sun',
          title: 'Sıcak Doğal Gün Işığı',
          desc: 'Pencereden süzülen yumuşak güneş ışıkları, gerçekçi ışık kırılmaları ve doğal kontak gölgeleri.',
        },
        {
          icon: 'fa-solid fa-tree',
          title: 'Zengin Ahşap & Mat Lake Doku',
          desc: 'Doğal çıtalı meşe, sıcak ceviz damarları ve fırçalanmış pirinç kulplarda mikroskobik detay derinliği.',
        },
        {
          icon: 'fa-solid fa-couch',
          title: 'İç Mekan Atmosferi',
          desc: 'Ada tezgah, boy dolaplar ve entegre LED aydınlatmalarla müşteriyi büyüleyen sinematik kompozisyon.',
        },
        {
          icon: 'fa-solid fa-bolt',
          title: 'Saniyeler İçinde Çıktı',
          desc: 'Saatlerce render sırası beklemeden, müşterinizin yanındayken saniyeler içinde sunuma hazır görsel.',
        },
      ],
      scenes: [
        {
          id: 'kitchen',
          title: 'Modern Çıtalı Meşe & Antrasit Ada Mutfak',
          subtitle: 'Geniş Ada Tezgah, Doğal Ahşap Çıtalar & Sıcak Gün Işığı',
          roomType: 'Açık Konsept Mutfak',
          materials: 'Doğal Meşe Ahşap + Mat Akrilik Antrasit + Calacatta Kuvars',
          cadVisual: {
            title: '3D CAD Çizim & Ölçü Planı',
            dim: '320 x 240 x 90 cm',
            features: ['Parametrik Boy Modüller', 'Ada Mutfak Çekmeceleri', 'Gömme LED Kanalları', 'Otomatik Parça Listesi'],
          },
          renderVisual: {
            title: 'Sinematik 4K AI Render Çıktısı',
            lighting: 'Pencere Açılı Sıcak Sabah Işığı (3200K Warm)',
            atmosphere: 'Calacatta Mermer Yansımaları & Çıta Kontak Gölgeleri',
          },
        },
        {
          id: 'vanity',
          title: 'Sıcak Ahşap & Mat Banyo Lavabo Ünitesi',
          subtitle: 'Kuvars Lavabo, Ahşap Gövde & Akrilik Yansımalar',
          roomType: 'Modern Banyo & Ebeveyn Odası',
          materials: 'Koyu Meşe Kaplama + Füme Cam + Mat Siyah Armatür',
          cadVisual: {
            title: '3D Banyo Modül Planı',
            dim: '140 x 85 x 52 cm',
            features: ['Gizli Sifon Boşluğu', 'Bas-Aç Ray Çekmeceler', 'Ayna Arkası Profil', 'Milimetrik Delik Şablonu'],
          },
          renderVisual: {
            title: 'Stüdyo Işıklı Fotogerçekçi Render',
            lighting: 'Ayna Arkası Yumuşak LED + Tepe Spot (4000K Neutral)',
            atmosphere: 'Kuvars Tezgah Işık Kırılması & İpeksi Ahşap Dokusu',
          },
        },
        {
          id: 'wardrobe',
          title: 'Minimalist Cam Kapaklı Giyinme Odası',
          subtitle: 'İç Aydınlatmalı Raflar, Füme Alüminyum & Ahşap Bölmeler',
          roomType: 'Giyinme Odası & Ray Dolap',
          materials: 'Füme Reflekte Cam + Fırçalanmış Bronz Kasa + Keten Doku',
          cadVisual: {
            title: '3D Ray Dolap Çizim Arayüzü',
            dim: '280 x 260 x 60 cm',
            features: ['Askılık & Pantolonluk Modülü', 'Çekmece İçi Takılık', 'Üst Baza & Yan Dikmeler', 'CNC Kesim Koordinatları'],
          },
          renderVisual: {
            title: 'Gece Modu Ambiyans Render',
            lighting: 'Raf İçi Gömme Sıcak LED (2700K Cosy)',
            atmosphere: 'Reflekte Cam Yansımaları & Keten Gövde Dokusu',
          },
        },
      ],
    },
    workflow: {
      badge: '4 Adımda Sıfır Hatalı Üretim',
      titleLine1: 'Tasarım Ekranından CNC Tezgaha',
      titleLine2: 'Uçtan Uca Dijital Üretim İş Akışı',
      subtitle: 'Karmaşık CAM programlarına, elle parça hesaplamaya ve hatalı kesimlere son verin.',
      steps: {
        step1: {
          title: '3D Parametrik Çizim',
          badge: 'CAD Motoru',
          shortDesc: 'Ölçüleri girin, dolap dinamik olarak anında boyutlansın.',
          tag: '[ADIM 01 // 3D CAD]',
          heading: 'Anında Parametrik Boyutlandırma',
          desc: 'Aşağıdaki kaydırıcıları hareket ettirerek dolap genişlik, yükseklik ve derinliğinin anlık olarak nasıl yeniden hesaplandığını görün.',
        },
        step2: {
          title: 'Minifix & Delik Planı',
          badge: 'Otomatik CAM',
          shortDesc: 'Minifix, kavela ve kanal delikleri milimetrik otomatik yerleşir.',
          tag: '[ADIM 02 // OTO DELİK]',
          heading: 'Akıllı Minifix & Kavela Delik Planı',
          desc: 'MobilyaPlan gövde birleşimlerini otomatik hesaplar. 15mm gövde delikleri, 8mm kavela delikleri ve 35mm menteşe yuvaları makine koordinatlarına dökülür.',
        },
        step3: {
          title: 'Akıllı Nesting & Tasarruf',
          badge: '%20 Tasarruf',
          shortDesc: 'Parçalar plakaya en az fire verecek şekilde sıkıştırılır.',
          tag: '[ADIM 03 // AKILLI NESTING]',
          heading: '%20 Plaka Fire Tasarrufu',
          desc: 'Nesting algoritması, standart 2800x2100mm veya 3660x1830mm plakalara parçaları suyuna uygun biçimde yerleştirir ve fireyi minimuma indirir.',
        },
        step4: {
          title: 'CNC G-Code & AI Render',
          badge: 'CNC & 4K Render',
          shortDesc: 'Tek tıkla tezgaha hazır makine dosyası ve müşteri görseli.',
          tag: '[ADIM 04 // CNC KODU & AI]',
          heading: 'Tek Tıkla CNC G-Code & AI Görseli',
          desc: 'Çiziminiz bittiğinde tezgahınız için hazır G-Code (.NC / .TAP) ve müşteriniz için 4K fotogerçekçi sunum dosyaları tek tuşla hazır.',
        },
      },
      sliderWidth: 'Genişlik (G):',
      sliderHeight: 'Yükseklik (Y):',
      sliderDepth: 'Derinlik (D):',
      cadFeatureNote: 'Gövde: 18mm Beyaz Suntalam • 2 Kapak, 1 Hareketli Raf',
      drillingItems: {
        minifix: '15.0 mm (Derinlik: 12.5mm)',
        dowel: '8.0 mm (Derinlik: 28.0mm)',
        hinge: '35.0 mm (Derinlik: 11.5mm)',
      },
      nestingStats: {
        efficiency: '%94.2 Verimlilik',
        totalWaste: 'Toplam Fire: %5.8',
        savedBoards: 'Tasarruf: ~2 Plaka/Mutfak',
      },
      gcodeStats: {
        cncCompat: 'Tüm CNC Router & İşleme Merkezleri',
        renderTime: 'Ortalama 7-10 Saniye',
        downloadReady: 'İndirmeye Hazır',
        ctaBtn: 'Sistemde Canlı Test Edin',
      },
    },
    features: {
      badge: 'Neden MobilyaPlan?',
      titleLine1: 'Eski Nesil CAD/CAM Yazılımlarını Unutun,',
      titleLine2: 'Üretiminizi 10 Kat Hızlandırın',
      subtitle: 'Marangoz atölyelerinden büyük mobilya fabrikalarına kadar, çizimden CNC kesime tüm süreci yapay zekayla otomatikleştirin.',
      items: [
        {
          id: 'web-based',
          icon: 'fa-globe',
          title: '%100 Bulut & Web Tabanlı',
          badge: 'Her Yerden Erişim',
          description: 'İnternet olan her yerden bağlanın. Kurulum, lisans anahtarı veya donanım kilidi olmadan cep telefonunuzdan, tabletinizden veya bilgisayarınızdan anında çizim yapın.',
        },
        {
          id: 'smart-nesting',
          icon: 'fa-vector-square',
          title: 'Akıllı Nesting (Plaka Optimizasyonu)',
          badge: '%20 Fire Tasarrufu',
          description: 'Parçaları plakaya minimum fireyle dizer. Ayda yüzlerce plaka tasarrufu sağlayarak yazılım maliyetini ilk günden amorti eder.',
        },
        {
          id: 'ai-render',
          icon: 'fa-wand-magic-sparkles',
          title: 'Yapay Zeka Destekli 4K Render',
          badge: 'Fotogerçekçi Sunum',
          description: 'Saniyeler içinde mekana uyarlanmış fotogerçekçi görseller oluşturun. Müşterilerinize mekanlarında gösterip satışı yerinde kapatın.',
        },
        {
          id: 'module-library',
          icon: 'fa-boxes-stacked',
          title: 'Zengin Parametrik Modül Kütüphanesi',
          badge: 'Mutfak, Ray Dolap, Banyo',
          description: 'Mutfak alt/üst dolapları, köşe modülleri, ray dolaplar ve banyo mobilyaları hazır kütüphanede sizi bekliyor. Ölçüyü girin, modül anında güncellensin.',
        },
        {
          id: 'drilling-labels',
          icon: 'fa-barcode',
          title: 'Delik Şablonları & Barkod Etiket',
          badge: 'Minifix & Menteşe Delikleri',
          description: 'Minifix, kavela ve menteşe delikleri otomatik yerleşir. CNC sonrası montajı kolaylaştıran parça etiket ve barkod çıktıları anında alınır.',
        },
        {
          id: 'fast-presentation',
          icon: 'fa-bolt-lightning',
          title: 'Hızlı Müşteri Sunumu & Fiyatlandırma',
          badge: 'Yerinde Satış Kapatma',
          description: 'Müşteri yanında ölçüleri girip 3D olarak gösterin, malzeme maliyetini anında hesaplayıp teklifinizi dakikalar içinde sunun.',
        },
      ],
      bottomBanner: {
        title: 'CNC Tezgahınızla %100 Uyumlu!',
        description: 'Biesse, Homag, SCM, Felder, AES, Turanlar, Makser veya özel üretim Mach3/Syntec üniteli tüm CNC router tezgahlara tam uyumlu G-Code çıktısı.',
        cta: 'Tezgahınızı Test Edin',
      },
    },
    video: {
      badge: 'Video Rehber & İnceleme',
      titleLine1: 'MobilyaPlan Nasıl Çalışır?',
      titleLine2: 'Detaylı Tanıtım Videosunu İzleyin',
      subtitle: 'Kurulumsuz, hızlı ve parametrik dolap çizimi ile CNC hazırlık sürecini adım adım görün.',
      mockupHeader: 'MobilyaPlan Tanıtım Videosu',
      footerTitle: '30 Dakikada Sistemi Kullanmaya Başlayın',
      footerDesc: 'Karmaşık eğitimler yok. Tarayıcınızdan hemen girip ilk mutfak projenizi çizin.',
      ctaBtn: 'Sistemde Ücretsiz Deneyin',
    },
    savings: {
      badge: 'Akıllı Nesting Tasarruf Hesaplayıcı',
      titleLine1: 'Ayda Kaç Bin Lira Tasarruf',
      titleLine2: 'Cebinizde Kalacak?',
      subtitle: 'Aylık kullandığınız plaka adedini seçin, MobilyaPlan’ın Akıllı Nesting algoritmasıyla ne kadar hammadde tasarrufu yapacağınızı hesaplayın.',
      quickSelect: 'Hızlı Seçim:',
      preset1: 'Butik Atölye (40 Plaka)',
      preset2: 'Orta Ölçekli Atölye (150 Plaka)',
      preset3: 'Büyük İmalathane (450 Plaka)',
      slider1Label: 'Aylık Kullanılan MDF / Suntalam Plaka Adedi:',
      slider1Unit: 'Plaka / Ay',
      slider2Label: 'Ortalama 1 Plaka Maliyeti (₺):',
      slider2Unit: '₺ / Plaka',
      infoTitle: 'Akıllı Nesting Nasıl Para Kazandırır?',
      infoDesc: 'Geleneksel yatar testere veya basit optimizasyonlarda fire oranı ~%22 seviyesindedir. MobilyaPlan’ın akıllı yerleşim algoritması bu fireyi ~%6 seviyesine indirir. Kazandığınız %16 doğrudan net kârdır.',
      estimatedTitle: 'TAHMİNİ YILLIK NET TASARRUF',
      estimatedSubtitle: 'Çöpe gitmekten kurtarılan hammadde değeri',
      statMonthlySavings: 'Aylık Net Kazanç',
      statBoardsSaved: 'Kurtarılan Plaka',
      statBoardsUnit: 'Plaka / Yıl',
      statCamTime: 'Kazanılan Çizim Süresi',
      statCamUnit: 'Saat / Ay',
      statTreesSaved: 'Korunan Ağaç',
      statTreesUnit: 'Ağaç / Yıl',
      ctaBtn: 'Bu Tasarrufu Atölyenize Kazandırın',
    },
    pricing: {
      badge: 'Şeffaf & Uygun Fiyatlandırma',
      titleLine1: 'Atölyenize En Uygun Paketi Seçin,',
      titleLine2: '3 Gün Ücretsiz Denemeyle Başlayın',
      subtitle: 'Gizli ücret yok, taahhüt yok. 3 gün boyunca tüm özellikleri ücretsiz test edin.',
      monthlyToggle: 'Aylık Ödeme',
      annualToggle: 'Yıllık Ödeme',
      annualDiscountBadge: '2 Ay Ücretsiz',
      periodMonthly: '/ ay',
      periodAnnual: '/ yıl',
      noCardNeeded: 'Kredi kartı gerekmez',
      popularBadge: 'EN ÇOK TERCİH EDİLEN',
      guarantee: 'Tüm paketlerde kesintisiz teknik destek ve güncellemeler dahildir.',
      customSetupTitle: 'Özel CNC Entegrasyonu veya Kurumsal Çözüm mü Gerekiyor?',
      customSetupDesc: 'Çoklu kullanıcı lisansları, özel makine post processor ayarları ve atölye içi yerinde kurulum desteği için WhatsApp üzerinden anında görüşelim.',
      plans: {
        standard: {
          name: 'Standart Sürüm',
          subtitle: 'Butik marangozlar, iç mimarlar ve özel tasarım atölyeleri için',
          monthlyPrice: 500,
          annualPrice: 5000,
          currency: '₺',
          cta: 'Standart Sürümü Başlat',
          features: [
            '%100 Web Tabanlı (Kurulumsuz, Her Cihazda)',
            'Mutfak, Ray Dolap, Banyo ve Giysi Odası Modülleri',
            '3D Etkileşimli Çizim & Müşteri Sunumu',
            'Doğru Ölçülendirme ve Otomatik Parça Kesim Listesi',
            'Sürükle-Bırak Parametrik Dolap Kütüphanesi',
            'Yapay Zeka Destekli Sesli & Yazılı Tasarım Asistanı',
            'Sınırsız Bulut Proje Kaydı ve Görsel Çıktı',
          ],
        },
        cnc: {
          name: 'CNC Post Sürümü',
          subtitle: 'CNC router tezgahı olan ve seri üretim yapan atölyeler için',
          monthlyPrice: 2000,
          annualPrice: 20000,
          currency: '₺',
          cta: 'CNC Sürümünü Başlat',
          features: [
            'Standart Sürümdeki TÜM Özellikler',
            'Tam CNC Tezgah Uyumluluğu (AES, Biesse, Homag, SCM, Turanlar vb.)',
            'Hazır G-Code (.NC, .TAP, .DXF, .CIX, .MPG) Post Çıktıları',
            '%20 Plaka Tasarrufu Sağlayan Akıllı Nesting Motoru',
            'Otomatik Parça Barkodlama ve Etiket Basımı',
            'Kavela, Minifix, Kanal ve Kenar Bandı Bilgileri',
            'Öncelikli 7/24 WhatsApp & Canlı Destek',
          ],
        },
      },
    },
    testimonials: {
      badge: 'Atölye Deneyimleri',
      titleLine1: 'Mobilya Üreticileri',
      titleLine2: 'MobilyaPlan Hakkında Ne Diyor?',
      subtitle: '2.000’den fazla kullanıcı ve atölye üretimini MobilyaPlan ile hızlandırdı.',
      bottomNote: 'Siz de 2.000+ kullanıcının arasına katılın.',
      items: [
        {
          name: 'Ahmet Yılmaz',
          role: 'Yılmaz Mobilya & Dekorasyon',
          location: 'Bursa / İnegöl',
          comment: 'MobilyaPlan’ın akıllı nesting özelliği sayesinde aylık plaka firemiz %18 azaldı. Yazılım kendi parasını ilk aydan katbekat çıkardı.',
          rating: 5,
          badge: '%18 Fire Tasarrufu',
          avatarText: 'AY',
        },
        {
          name: 'Mehmet Kaplan',
          role: 'Kaplan Mutfak Tasarım',
          location: 'İstanbul / Ümraniye',
          comment: 'Müşterinin evinde tabletten 5 dakikada mutfağı çizip AI render ile gösteriyorum. Müşteri daha evden çıkmadan sözleşmeyi imzalıyor.',
          rating: 5,
          badge: '5 Dk Müşteri Sunumu',
          avatarText: 'MK',
        },
        {
          name: 'Mustafa Demir',
          role: 'Demir CNC Ahşap İşleme',
          location: 'Kayseri Organize Sanayi',
          comment: 'CNC’ye G-Code göndermek tek tık. Delik yerleri, minifix yuvaları ve etiketler sıfır hatayla çıkıyor. Atölyemizin üretim kapasitesi üçe katlandı.',
          rating: 5,
          badge: '3 Kat Üretim Kapasitesi',
          avatarText: 'MD',
        },
      ],
    },
    faq: {
      badge: 'Sıkça Sorulan Sorular',
      title: 'Aklınıza Takılan Tüm Sorular',
      subtitle: 'MobilyaPlan kullanımı, CNC uyumluluğu ve abonelik hakkında merak edilenler.',
      searchPlaceholder: 'Soru veya konu ara (örn. CNC, G-Code, Nesting, Render, Fiyat...)',
      noResults: 'Aradığınız kriterlere uygun soru bulunamadı. Lütfen başka bir kelime deneyin veya WhatsApp hattımızdan bize yazın.',
      helpBoxTitle: 'Başka bir sorunuz veya özel CNC tezgahınız mı var?',
      helpBoxDesc: 'Teknik ekibimiz WhatsApp üzerinden tüm sorularınızı yanıtlamaktan memnuniyet duyar.',
      helpBoxBtn: 'WhatsApp Destek Hattı',
      categories: [
        { id: 'all', label: 'Tüm Sorular' },
        { id: 'web', label: 'Kurulum & Web' },
        { id: 'cnc', label: 'CNC & G-Code' },
        { id: 'nesting', label: 'Nesting & Fire' },
        { id: 'ai', label: 'AI 4K Render' },
        { id: 'fiyat', label: 'Fiyat & Lisans' },
      ],
      items: [
        {
          category: 'web',
          q: 'Bilgisayarıma herhangi bir program yüklemem gerekiyor mu?',
          a: 'Hayır, MobilyaPlan %100 web tabanlıdır. Google Chrome, Safari veya Edge tarayıcınızdan doğrudan giriş yaparak Mac, PC, tablet veya cep telefonunuzdan kullanabilirsiniz.',
        },
        {
          category: 'cnc',
          q: 'Hangi marka CNC router tezgahlarını destekliyor?',
          a: 'MobilyaPlan; AES, Biesse, Homag, SCM, Felder, Masterwood, Turanlar, Makser, Özçelik ve Syntec/Mach3/Siemens kontrol üniteli tüm CNC router makinelerle %100 uyumludur.',
        },
        {
          category: 'cnc',
          q: 'Alphacam veya Artcam yerine tek başına MobilyaPlan yeterli mi?',
          a: 'Evet! MobilyaPlan doğrudan makineye hazır G-Code (.NC, .TAP) üretir. Ek bir CAM programına ihtiyaç duymadan delik, kanal ve kesim işlemlerini otomatik tamamlar.',
        },
        {
          category: 'nesting',
          q: 'Akıllı Nesting plaka firesini nasıl azaltıyor?',
          a: 'Algoritma, dolap parçalarını ahşap suyuna dikkat ederek plakaya en sıkı şekilde yerleştirir. Geleneksel kesimdeki %22’lik fireyi %6 seviyesine indirerek plaka tasarrufu sağlar.',
        },
        {
          category: 'ai',
          q: 'Yapay Zeka 4K Render için pahalı bir ekran kartı gerekir mi?',
          a: 'Gerekmez! Tüm render işlemleri MobilyaPlan’ın güçlü bulut sunucularında saniyeler içinde işlenir. Standart bir laptop veya telefon ile 8-10 saniyede 4K render alabilirsiniz.',
        },
        {
          category: 'fiyat',
          q: '3 günlük ücretsiz deneme için kredi kartı gerekiyor mu?',
          a: 'Kesinlikle hayır! Kredi kartı girmeden hemen 3 günlük ücretsiz deneme hesabınızı oluşturabilir ve tüm özellikleri test edebilirsiniz.',
        },
        {
          category: 'fiyat',
          q: 'Teknik destek ve eğitim hizmeti var mı?',
          a: 'Evet! WhatsApp destek hattımız (+90 532 715 33 56) ve video eğitim kütüphanemiz üzerinden tüm kullanıcılarımıza doğrudan destek sağlıyoruz.',
        },
      ],
    },
    footer: {
      brandDesc: 'Mobilya üreticileri, marangozlar ve CNC atölyeleri için bulut tabanlı 3D parametrik dolap CAD/CAM tasarımı, Akıllı Nesting ve Yapay Zeka render platformu.',
      col1Title: 'Özellikler',
      col2Title: 'Hızlı Bağlantılar',
      col3Title: 'Destek & İletişim',
      linkDrawOnline: '3D CAD & Çizim',
      linkAiRender: 'AI 4K Render',
      linkNesting: 'Akıllı Nesting',
      linkGcode: 'CNC G-Code Çıktısı',
      linkPricing: 'Fiyatlandırma',
      linkFaq: 'Sıkça Sorulan Sorular',
      linkTryFree: 'Sistemde 3 Gün Ücretsiz Dene',
      copyright: '© 2026 MobilyaPlan. Tüm hakları saklıdır.',
      legalNote: 'Furnituredraw bulut CAD/CAM teknolojisi ile güçlendirilmiştir.',
    },
    trialModal: {
      badge: '3 Gün Sınırsız & Ücretsiz',
      title: "MobilyaPlan'ı Hemen Deneyin",
      desc: 'Kurulum gerektirmeyen %100 web tabanlı CAD/CAM platformumuzda 3 gün boyunca tüm özellikleri ücretsiz test edin.',
      bullet1: 'Mutfak, Ray Dolap ve Banyo modülleri',
      bullet2: '%20 Fire tasarruflu Akıllı Nesting',
      bullet3: 'Tek tıkla CNC G-Code ve AI 4K Render',
      cta: "mobilyaplan.com'a Git ve Başla",
      note: '🔒 3 günlük ücretsiz deneme için kredi kartı veya kurulum gerekmez.',
    },
    videoModal: {
      title: 'MobilyaPlan Tanıtım Videosu',
      footerNote: 'Atölyeniz için 3 gün ücretsiz deneyin.',
      cta: 'Hemen Başla',
    },
    workshopGallery: {
      badge: 'Facebook Topluluk & Atölye Paylaşımları',
      title: 'Atölyelerden & Facebook Topluluğumuzdan Gerçek Kareler',
      subtitle: 'MobilyaPlan kullanıcılarının kendi atölyelerinde kesip montajını tamamladığı gerçek projeler.',
      fbButtonText: 'Facebook Grubumuzdaki Tüm Paylaşımları Gör ↗',
      fbButtonUrl: 'https://www.facebook.com/MobilyaPlan/',
      modalClose: 'Kapat',
      zoomHint: 'Büyütmek için fotoğrafa tıklayın',
      verifiedProduction: 'Onaylı Atölye İmalatı',
      ctaText: '3 Gün Ücretsiz Dene & Üretime Başla',
      items: [
        {
          tag: 'CNC Sıfır Fire Kesimi - Atölye İmalatı',
          title: 'Akıllı Nesting ile Plaka Kesimi',
          desc: '18mm MDF ve Suntalam levhalarda %94 doluluk oranıyla minimum talaş ve sıfır fireye yakın temiz plaka kesimi.',
          userComment: 'MobilyaPlan ile ilk defa nesting ve delik koordinatlarını tek seferde çıkarttık. 6 plaka MDFLam kesiminde sıfır hata! Tezgaha atarken hiçbir ekstra G-Code düzenlemesi gerekmedi.',
          authorName: 'Ahmet Özkan',
          workshopName: 'Özkan Ahşap & Tasarım / Bursa',
          postTime: '2 gün önce paylaşıldı',
          likesCount: 84,
          commentsCount: 19,
          imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
          badge: 'CNC Üretim',
        },
        {
          tag: 'Montajı Tamamlanan Akıllı Mutfak',
          title: 'Kusursuz Milimetrik Montaj',
          desc: 'MobilyaPlan bulut ortamında çizilen ada tezgahlı akıllı mutfak projesinin yerinde montajı 1 günde sıfır hatayla bitti.',
          userComment: 'Müşteriye 3D render üzerinden gösterdiğimiz ada mutfağı ertesi gün kurduk. Bütün modül ölçüleri ve ray payları milimetrik oturdu, ustalarımız montajda hiç zorlanmadı.',
          authorName: 'Mehmet Ali Yıldız',
          workshopName: 'Artı Mutfak / Ankara',
          postTime: 'Dün paylaşıldı',
          likesCount: 112,
          commentsCount: 27,
          imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
          badge: 'Yerinde Montaj',
        },
        {
          tag: 'Ray Dolap ve Modül Toplama Aşaması',
          title: 'Hızlı Karkas & Gövde Toplama',
          desc: 'Minifiks, kavela delik koordinatları ve kanal payları otomatik çıkarılarak atölyede rekor sürede kasa montajı.',
          userComment: 'Minifiks ve arkalık kanal delikleri tam otomatik çıktı. Montaj şeması sayesinde çıraklar bile gövdeleri 10 dakikada topladı. Zamandan muazzam tasarruf sağladık.',
          authorName: 'Serdar Çetin',
          workshopName: 'Modern Line Marangozluk / İstanbul',
          postTime: '3 gün önce paylaşıldı',
          likesCount: 96,
          commentsCount: 14,
          imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
          badge: 'Modül Toplama',
        },
        {
          tag: '3D Çizimden Birebir Üretime',
          title: 'Müşteri Onayından Üretime Sıfır Hata',
          desc: '3D render sunumunda müşterinin onayladığı ölçü, renk ve kulp detayları atölye kesiminde birebir hayata geçirildi.',
          userComment: 'Müşteriye önce render gösterip siparişi aldık, tek tıkla malzeme listesini ve kesim planını çıkardık. Teslimatta müşterimiz hayran kaldı. Teşekkürler MobilyaPlan!',
          authorName: 'Hakan Kaya',
          workshopName: 'Kaya Mobilya & Dekorasyon / İzmir',
          postTime: '5 gün önce paylaşıldı',
          likesCount: 143,
          commentsCount: 38,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          badge: 'Birebir Teslim',
        },
      ],
      youtubeBadge: 'YouTube Kanalımız (@mobilyaplan)',
      youtubeTitle: 'YouTube İmalat ve Eğitim Videolarımız',
      youtubeSubtitle: 'Atölyenizde hemen uygulayabileceğiniz pratik video dersleri, CNC işleme taktikleri ve 3D tasarım tüyoları.',
      youtubeButtonText: 'Tüm Videoları YouTube Kanalımızda İzle ↗',
      youtubeButtonUrl: 'https://www.youtube.com/@mobilyaplan',
      videos: [
        {
          id: 'yt-render-ai',
          title: "MobilyaPlan ile Yapay Zeka Destekli Render: Türkiye'de Bir İlk!",
          desc: '3D mobilya çiziminizi tek tıkla fotogerçekçi, sinematik müşteri sunum görseline dönüştürme.',
          duration: '04:15',
          views: '14.2K izlenme',
          thumbnail: 'https://img.youtube.com/vi/qeGl89AOR0E/hqdefault.jpg',
          badge: 'Yapay Zeka Render',
          videoUrl: 'https://youtu.be/qeGl89AOR0E',
          embedUrl: 'https://www.youtube.com/embed/qeGl89AOR0E',
        },
        {
          id: 'yt-smart-nesting',
          title: 'Yeni Nesil Akıllı Ebatlama (Nesting) Özelliği: Malzemeniz Çöp Olmasın!',
          desc: 'Kabin üretiminde plaka dizilimini otomatik optimize ederek sıfır fire ile tasarruf sağlayın.',
          duration: '07:30',
          views: '28.5K izlenme',
          thumbnail: 'https://img.youtube.com/vi/e42LszyhtSA/hqdefault.jpg',
          badge: 'Akıllı Nesting & Ebatlama',
          videoUrl: 'https://youtu.be/e42LszyhtSA',
          embedUrl: 'https://www.youtube.com/embed/e42LszyhtSA',
        },
        {
          id: 'yt-kabin-baglanti',
          title: 'Yeni Özellik: Dolap Kabin Bağlantılarını ve Özelliklerini Otomatik Değiştir!',
          desc: 'Tasarım üzerindeki tüm modül bağlantı elemanlarını ve kabin detaylarını tek hamlede güncelleyin.',
          duration: '05:45',
          views: '19.8K izlenme',
          thumbnail: 'https://img.youtube.com/vi/1BXuadM_1HA/hqdefault.jpg',
          badge: 'Otomatik Kabin & Bağlantı',
          videoUrl: 'https://youtu.be/1BXuadM_1HA',
          embedUrl: 'https://www.youtube.com/embed/1BXuadM_1HA',
        },
      ],
    },
    blog: {
      badge: 'Mobilya & Üretim Blogu',
      title: 'Atölyenizi Büyütecek Uzman Rehberler',
      subtitle: 'Fire oranlarını düşürmek, 3D müşteri sunumlarıyla satışları hızlandırmak ve dijitalleşme sürecini yönetmek için pratik sektörel tüyolar.',
      readTimeLabel: 'Okuma Süresi',
      readArticleBtn: 'Özeti Oku',
      readFullArticleBtn: 'Makalenin Tamamını Oku ->',
      backToArticles: 'Tüm Makalelere Dön',
      backToHome: 'Ana Sayfaya Dön',
      allArticlesTitle: 'Tüm Sektörel Rehberler & Makaleler',
      featuredBadge: 'Öne Çıkan Rehber',
      keyTakeawaysTitle: 'Önemli Çıkarımlar',
      proTipTitle: 'Atölye Usta Tavsiyesi',
      shareArticle: 'Makaleyi Paylaş',
      searchPlaceholder: 'Rehberlerde, konularda veya etiketlerde ara...',
      allCategories: 'Tüm Kategoriler',
      relatedTitle: 'İlgili Diğer Rehberler',
      posts: [
        {
          id: 'ai-render-satis-taktikleri',
          title: "Müşteriyi İlk Görüşte Bağlayan AI Render: Saatlerce Beklemeye Son!",
          category: '🎨 AI Sunum & Satış Taktikleri',
          readTime: '3 dk okuma',
          date: 'Güncel Rehber',
          author: 'MobilyaPlan Tasarım Ekibi',
          authorRole: '3D Görselleştirme & AI Uzmanı',
          excerpt: "Ağır bilgisayarlarla saatlerce render bekleme çilesi bitti. MobilyaPlan ile 3D mutfak çizimini tek tıkla sinematik fotoğrafa çevirip müşteriye anında 'Evet' dedirtin.",
          imageUrl: '/blog/ai-render-kitchen.jpg',
          tags: ['Yapay Zeka', 'AI Render', 'Mutfak Tasarımı', 'Hızlı Satış'],
          content: {
            lead: "Eski usul 3D programlarında bir render almak saatler sürerdi, bazen bilgisayar donar bütün emek çöp olurdu. MobilyaPlan ile Türkiye'de bir ilk olan Yapay Zeka Render özelliği geldi!",
            keyTakeaways: [
              '1. Modülünüzü veya mutfağınızı dakikalar içinde 3D olarak çizin.',
              "2. Üst menüden 'Yapay Zeka Render' butonuna tek tıkla basın.",
              '3. Saniyeler içinde gün ışığı alan, lüks ahşap dokularına sahip 4K fotoğrafınız hazır!',
            ],
            sections: [
              {
                heading: 'Nasıl Kullanılır?',
                paragraphs: [
                  '1. Modülünüzü veya mutfağınızı dakikalar içinde 3D olarak çizin.',
                  "2. Üst menüden 'Yapay Zeka Render' butonuna tek tıkla basın.",
                  '3. Saniyeler içinde gün ışığı alan, lüks ahşap dokularına sahip 4K fotoğrafınız hazır!',
                ],
              },
              {
                heading: 'Ne Kolaylaştı?',
                paragraphs: [
                  'Müşterinin yanındayken tabletten veya laptoptan çizimi yapıp anında gerçeğe yakın fotoğrafını gösteriyorsunuz, müşteri hayal etmek zorunda kalmıyor ve işi anında size veriyor.',
                ],
              },
            ],
            proTip: "Müşterinin yanındayken tabletten veya laptoptan çizimi yapıp anında gerçeğe yakın fotoğrafını gösteriyorsunuz, müşteri hayal etmek zorunda kalmıyor ve işi anında size veriyor.",
          },
        },
        {
          id: 'akilli-nesting-sifir-fire',
          title: 'Plakalarınız Çöp Olmasın: Yeni Nesil Akıllı Nesting ile Sıfır Fire',
          category: '⚙️ CNC & Akıllı Nesting',
          readTime: '4 dk okuma',
          date: 'Güncel Rehber',
          author: 'MobilyaPlan Üretim Ekibi',
          authorRole: 'CNC & Nesting Optimizasyon Uzmanı',
          excerpt: "Her ay fazladan kesilen MDF ve suntalamlar cüzdanınızı yakmasın. MobilyaPlan parçaları plakaya milimetrik yerleştirir, fireyi %20'ye kadar düşürür.",
          imageUrl: '/blog/smart-nesting-cnc.jpg',
          tags: ['Akıllı Nesting', 'Sıfır Fire', 'CNC Kesim', 'MDF Tasarrufu'],
          content: {
            lead: "Geleneksel ebatlama programlarında parçaları plakaya oturtmak için usta ayrı bir mesai harcardı. MobilyaPlan'ın Akıllı Nesting motoru bu yükü tamamen üzerinizden alıyor.",
            keyTakeaways: [
              "1. Tasarımı tamamlayıp 'Otomatik Ebatla' seçeneğini seçin.",
              '2. Sistem saniyeler içinde tüm kabin ve kapak parçalarını plakalara en az fire çıkacak şekilde otomatik dizer.',
              '3. Tek tuşla CNC G-Code çıktınızı alın ve tezgaha gönderin!',
            ],
            sections: [
              {
                heading: 'Nasıl Kullanılır?',
                paragraphs: [
                  "1. Tasarımı tamamlayıp 'Otomatik Ebatla' seçeneğini seçin.",
                  '2. Sistem saniyeler içinde tüm kabin ve kapak parçalarını plakalara en az fire çıkacak şekilde otomatik dizer.',
                  '3. Tek tuşla CNC G-Code çıktınızı alın ve tezgaha gönderin!',
                ],
              },
              {
                heading: 'Ne Kolaylaştı?',
                paragraphs: [
                  'Manuel hesaplama hatası yok, malzeme israfı yok. Sadece kurtarılan plaka parasıyla program kendi abonelik ücretini fazlasıyla çıkarıyor.',
                ],
              },
            ],
            proTip: 'Manuel hesaplama hatası yok, malzeme israfı yok. Sadece kurtarılan plaka parasıyla program kendi abonelik ücretini fazlasıyla çıkarıyor.',
          },
        },
        {
          id: 'kabin-baglanti-otomatik-degistirme',
          title: 'Tüm Kabin Bağlantılarını Tek Tıkla Değiştir: Tek Tek Düzenleme Devri Bitti!',
          category: '🛠️ Pratik Atölye İpuçları',
          readTime: '3 dk okuma',
          date: 'Güncel Rehber',
          author: 'MobilyaPlan Atölye Destek Ekibi',
          authorRole: 'Marangozluk & Donanım Danışmanı',
          excerpt: "Minifix'ten kavelyaya, çekmece rayından arkalık kanalına... Bütün projenin bağlantı ayarlarını tek hamlede güncelleyin, atölyede montajı hızlandırın.",
          imageUrl: '/blog/cabinet-joinery.jpg',
          tags: ['Kabin Bağlantıları', 'Minifix & Kavela', 'Otomatik Delik', 'Hızlı Montaj'],
          content: {
            lead: "Proje bittikten sonra müşterinin veya ustanın 'Bağlantıları minifix değil de kavela yapalım' demesi eskiden kabustu; tek tek tüm modüllere girmek gerekirdi. MobilyaPlan'ın yeni özelliğiyle bu dert tamamen tarih oldu!",
            keyTakeaways: [
              "1. Çizim ekranında 'Kabin & Bağlantı Yöneticisi'ni açın.",
              '2. İster tüm projedeki ister sadece seçtiğiniz dolaptaki bağlantı tipini (minifix, vida, kavelalı vb.) seçin.',
              "3. 'Uygula' dediğiniz anda bütün delik ve bağlantı yerleri otomatik olarak yenilenir.",
            ],
            sections: [
              {
                heading: 'Nasıl Kullanılır?',
                paragraphs: [
                  "1. Çizim ekranında 'Kabin & Bağlantı Yöneticisi'ni açın.",
                  '2. İster tüm projedeki ister sadece seçtiğiniz dolaptaki bağlantı tipini (minifix, vida, kavelalı vb.) seçin.',
                  "3. 'Uygula' dediğiniz anda bütün delik ve bağlantı yerleri otomatik olarak yenilenir.",
                ],
              },
              {
                heading: 'Ne Kolaylaştı?',
                paragraphs: [
                  'Saatler sürecek revize işi 5 saniyeye indi. Atölyede delik kaçıklığı veya yanlış bağlantı sürprizi yaşamadan, parçaları doğrudan montaja hazır hale getiriyorsunuz.',
                ],
              },
            ],
            proTip: 'Saatler sürecek revize işi 5 saniyeye indi. Atölyede delik kaçıklığı veya yanlış bağlantı sürprizi yaşamadan, parçaları doğrudan montaja hazır hale getiriyorsunuz.',
          },
        },
      ],
    },
  },
  en: {
    common: {
      brandName: 'FurnitureDraw',
      brandSubtitle: 'Cloud CAD/CAM & AI Render',
      brandDomain: 'furnituredraw.com',
      startTrialBtn: 'Try Free in Browser',
      freeTrialDaysBadge: '3 Days Free Trial',
      freeTrialPill: '3-Day Unlimited Free Trial',
      noCardRequired: 'No credit card required',
      watchVideoBtn: 'Watch Product Demo',
      learnMore: 'Learn More',
      currencySymbol: '$',
      month: 'mo',
      year: 'yr',
      liveOnline: 'Online',
      close: 'Close',
      menu: 'Menu',
      backToTop: 'Back to Top',
      whatsappSupport: 'WhatsApp Support Line',
      whatsappOnline: 'FurnitureDraw Technical Team Online',
    },
    nav: {
      aiRender: 'AI Render',
      howItWorks: 'How It Works',
      comparison: 'Why Us',
      features: 'Features',
      savingsCalc: 'Savings Calculator',
      pricing: 'Pricing',
      blog: 'Blog',
      faq: 'FAQ',
      quickMenu: 'Quick Menu',
      statsHeadline: '2,000+ USERS',
      statsDesc: 'More than 2,000 users design, nest, and render with FurnitureDraw every day.',
      directContact: 'Direct Contact',
    },
    hero: {
      statusBadge: '✨ Next-Gen 3D Furniture Design Tool',
      titleLine1: 'FurnitureDraw • Next-Gen 3D Furniture Design Tool',
      titleLine2: 'Fast, Easy & Professional CAD for Everyone',
      subtitle: 'No complex CAD training required. From carpenters to interior designers, custom woodshops to DIY home creators — anyone can master and design bespoke cabinetry in just 10 minutes.',
      ctaPrimary: 'Start Free Trial',
      trustNote: '3-Day Unlimited Free Trial • No Credit Card Required • Zero Installation',
      userCount: '2,000+ users design with FurnitureDraw',
      videoTitle: 'FurnitureDraw • Quick Start & 2-Minute Demo',
      audienceTag1: 'Carpenters & Workshops',
      audienceTag1Desc: 'Input dimensions, get instant cutting lists and scrap savings',
      audienceTag2: 'Interior Designers & Architects',
      audienceTag2Desc: 'Present 3D models and photorealistic renders in seconds',
      audienceTag3: 'DIY & Home Creators',
      audienceTag3Desc: 'Design your own custom home furniture easily in 10 minutes',
    },
    comparison: {
      badge: 'Global Comparison & Value Proposition',
      titleLine1: 'Heavy Desktop CAD vs.',
      titleLine2: 'FurnitureDraw',
      subtitle: 'Why modern cabinetmakers, interior architects, and CNC woodshops are switching from bloated desktop software to next-gen cloud CAD/CAM.',
      colCriterion: 'Comparison Metric',
      colTraditional: 'Heavy Desktop CAD (Alphacam, Artcam, Cabinet Vision, etc.)',
      colBrand: 'FurnitureDraw (100% Cloud CAD/CAM & AI)',
      brandTag: '100% CLOUD & AI',
      highlights: [
        {
          icon: 'fa-cloud',
          title: '100% Cloud-Based',
          desc: 'Zero installation. Runs smoothly on Google Chrome, Apple Safari, Mac, PC, iPad or smartphones without USB dongles.',
          badge: 'Zero Installation',
        },
        {
          icon: 'fa-microchip',
          title: 'No GPU / Heavy PC Required',
          desc: 'All heavy geometric and rendering calculations take place on high-speed cloud clusters. Runs fast on any budget laptop.',
          badge: 'Low Hardware Cost',
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'AI-Powered Photorealistic Rendering',
          desc: 'Generate stunning, raytraced client presentations in under 10 seconds right in front of homeowners to close sales immediately.',
          badge: '10-Second 4K Renders',
        },
        {
          icon: 'fa-gears',
          title: 'Smart Nesting & Direct CNC G-Code Export',
          desc: 'Automatic 20% sheet scrap reduction with millimetric part joinery and one-click machine-ready .NC, .TAP, and .MPR exports.',
          badge: '20% Material Savings',
        },
      ],
      rows: [
        {
          criterion: 'Installation & Device Mobility',
          traditional: '20GB+ heavy downloads, single-workstation hardware locks, proprietary USB dongles.',
          brand: '100% Web-Based: Instant browser login from Mac, PC, iPad, tablet, or smartphone anywhere.',
          advantage: 'Instant Multi-Device Access',
        },
        {
          criterion: 'Hardware & GPU Investment',
          traditional: 'Requires $3,000+ gaming GPU workstations and dedicated CAD computer towers.',
          brand: 'Zero GPU Dependency: Powered by high-speed cloud servers; runs smoothly on lightweight laptops.',
          advantage: 'No Expensive Workstations',
        },
        {
          criterion: '3D Photorealistic Rendering',
          traditional: 'Hours spent tweaking lighting, complex texture maps, and waiting for slow CPU render queues.',
          brand: 'AI-Powered 4K Renders: Instant raytraced scene simulations generated in 8-10 seconds.',
          advantage: '10x Faster Client Sign-Off',
        },
        {
          criterion: 'Sheet Nesting & Material Yield',
          traditional: 'Separate expensive CAM software, manual panel nesting, and typical ~22% high scrap rates.',
          brand: 'Integrated Smart Nesting: Optimized polygon packing reducing sheet scrap to ~6% (20% material savings).',
          advantage: '20% Sheet Good Savings',
        },
        {
          criterion: 'CNC Router G-Code Output',
          traditional: 'Complex post-processor configurations, manual toolpath generation, high risk of operator error.',
          brand: '1-Click Clean G-Code: Auto-placed minifix, dowel, shelf pin, and hinge hole coordinates (.NC / .TAP).',
          advantage: 'Zero-Defect 1-Click Export',
        },
        {
          criterion: 'Learning Curve & Onboarding',
          traditional: 'Weeks of classroom training courses, steep learning curve, high onboarding friction.',
          brand: '15-Minute Productivity: Intuitive, cabinetmaker-centric interface designed for immediate shop output.',
          advantage: '15-Min Fast Setup',
        },
      ],
      ctaBtn: 'Start Your 3-Day Free Trial of FurnitureDraw',
      ctaSubtext: 'No credit card required • Instant browser access',
    },
    aiCompare: {
      badge: 'From CAD Drawing -> Photorealistic Render',
      titleLine1: 'Instant Transformation from',
      titleLine2: '3D CAD to Photorealistic Render',
      subtitle: 'Transform your cabinet CAD drawings into stunning photorealistic renders with realistic lighting, wood textures, and reflections in seconds without waiting hours. Drag the slider to see the difference.',
      light45: '45° Light',
      lightStudio: 'Studio Light',
      lightTop: 'Top Spotlight',
      speedLabel: 'Process Speed:',
      speedValue: '0.08 Seconds',
      sliderAria: 'Comparison Slider',
      cadBadge: '1. CAD Drawing Mode (Real Interface)',
      aiBadge: '2. Photorealistic 4K Render',
      telemetryTitle: '✨ RENDER TRANSFORMATION',
      footerNote: 'Left: FurnitureDraw 3D CAD drawing workspace | Right: Instant photorealistic raytraced render output',
      footerSubnote: 'Present photorealistic environments to clients on-site within seconds.',
      ctaBtn: 'Try Render on Your Own Design',
      scenes: {
        v4wood: {
          title: 'FurnitureDraw v4 • Slatted Wood & Matte Anthracite Cabinet (60x72 cm)',
          tabTitle: 'Slatted Wood Cabinet',
          tabSub: '60x72 cm',
          cadLabel: '3D Drawing Interface',
          aiLabel: 'Photorealistic Render',
          description: 'Parametric 60x72 cm fluted wood slatted panel drawn in FurnitureDraw; instantly transformed into a photorealistic visual with realistic wood grain, shadow depths, and matte reflections.',
          time: '0.08 Sec',
          passes: '128 / 128 SPP',
          diffuse: 'Natural Slatted Oak Texture',
          roughness: '0.18 Silk Matte Acrylic',
          occlusion: 'Contact Shadows & Depth',
        },
        v4corner: {
          title: 'FurnitureDraw v4 • Blind Corner Kitchen Module (100x76x56 cm)',
          tabTitle: 'Blind Corner Kitchen Module',
          tabSub: '100x76x56 cm',
          cadLabel: 'Blind Corner Drawing View',
          aiLabel: 'Photorealistic Render',
          description: 'Blind corner carcass module; instantly converted into presentation-ready photorealistic format with quartz countertop and studio lighting.',
          time: '0.09 Sec',
          passes: '128 / 128 SPP',
          diffuse: 'Quartz Countertop Texture',
          roughness: '0.08 Glossy Specular',
          occlusion: 'Carcass Joint Shadows',
        },
        v3drawers: {
          title: 'FurnitureDraw v3 • 4-Drawer Pedestal Cabinet (60x78 cm)',
          tabTitle: '4-Drawer Pedestal Unit',
          tabSub: '60x78 cm',
          cadLabel: 'Vertical & Horizontal Partitions',
          aiLabel: 'AI Neural Raytraced Simulation',
          description: '4 drawer facades on a 60x78 cm carcass; simulated with telescopic slide clearances, brushed hardware pulls, and soft studio ambient reflections.',
          time: '0.07 Sec',
          passes: '128 / 128 SPP',
          diffuse: 'Matte Lacquer Finish',
          roughness: '0.22 Smooth Matte Surface',
          occlusion: 'Slide Rail Depth Map',
        },
      },
    },
    renderShowcase: {
      badge: '✨ AI Rendering & Cinematic Visualization',
      titleLine1: 'From 3D Wireframe to Photorealistic Render in Seconds',
      titleLine2: 'Present the kitchen of your client’s dreams in seconds.',
      subtitle: 'No more hours wasted on complex rendering engines. Transform your 3D kitchen design into client-ready photorealistic imagery with a single click.',
      beforeBadge: '3D Wireframe Mode',
      afterBadge: 'AI Photorealistic Render',
      dragHint: 'Drag Slider to Compare',
      transformationLabel: 'Instant CAD to Photorealistic Transformation',
      lightingLabel: 'Warm Ambient Daylight & Bounces',
      resolutionLabel: '4K Ultra HD • True-to-Scale',
      speedBadge: 'Ready in 8 Seconds',
      ctaPrimary: 'Render Your Own Kitchen Design',
      trustNote: 'Zero Hardware Overhead • Cloud GPU Powered • One-Click',
      features: [
        {
          icon: 'fa-solid fa-sun',
          title: 'Warm Ambient Daylight',
          desc: 'Sunbeams filtering through windows with natural specular highlights, ray bounces, and contact occlusion.',
        },
        {
          icon: 'fa-solid fa-tree',
          title: 'Tactile Wood & Matte Lacquer',
          desc: 'Authentic fluted oak textures, warm walnut grains, and brushed brass details with micro-surface depth.',
        },
        {
          icon: 'fa-solid fa-couch',
          title: 'Modern Interior Ambience',
          desc: 'Captivating architectural arrangements across open kitchens, vanity suites, and custom walk-in closets.',
        },
        {
          icon: 'fa-solid fa-bolt',
          title: 'Instant Client Presentation',
          desc: 'Generate pitch-winning 4K visual assets in seconds right in front of your client without heavy desktop rigs.',
        },
      ],
      scenes: [
        {
          id: 'kitchen',
          title: 'Modern Fluted Oak & Matte Anthracite Island',
          subtitle: 'Expansive Countertop, Slatted Natural Oak & Warm Daylight',
          roomType: 'Open Concept Kitchen',
          materials: 'Natural Oak Wood + Matte Acrylic Anthracite + Calacatta Quartz',
          cadVisual: {
            title: '3D CAD Sizing & Module Blueprint',
            dim: '320 x 240 x 90 cm',
            features: ['Parametric Tall Cabinets', 'Island Drawer System', 'Integrated LED Channels', 'Auto Cutlist Sizing'],
          },
          renderVisual: {
            title: 'Cinematic 4K AI Render Scene',
            lighting: 'Window-Angle Morning Sunbeam (3200K Warm)',
            atmosphere: 'Calacatta Vein Reflections & Slatted Shadow Depths',
          },
        },
        {
          id: 'vanity',
          title: 'Warm Walnut & Quartz Bathroom Vanity',
          subtitle: 'Stone Basin, Ribbed Wood Body & Satin Acrylic Reflections',
          roomType: 'Master Suite & Luxury Bath',
          materials: 'Smoked Oak Veneer + Smoked Glass + Matte Black Hardware',
          cadVisual: {
            title: '3D Vanity Module Layout',
            dim: '140 x 85 x 52 cm',
            features: ['Plumbing Cutout Clearance', 'Push-to-Open Slide Drawers', 'Backlit Mirror Profile', 'Accurate Boring Coordinates'],
          },
          renderVisual: {
            title: 'Studio Illuminated Photorealistic Render',
            lighting: 'Diffused Backlit LED + Overhead Downlight (4000K Neutral)',
            atmosphere: 'Quartz Counter Refraction & Tactile Wood Relief',
          },
        },
        {
          id: 'wardrobe',
          title: 'Minimalist Smoked Glass Walk-in Wardrobe',
          subtitle: 'Integrated Shelf Lighting, Bronze Aluminum & Fabric Carcass',
          roomType: 'Walk-in Closet & Wardrobe',
          materials: 'Reflective Smoked Glass + Brushed Bronze Frame + Linen Texture',
          cadVisual: {
            title: '3D Wardrobe CAD Workspace',
            dim: '280 x 260 x 60 cm',
            features: ['Hanging Rod & Trouser Rack', 'Jewelry Drawer Organizer', 'Top Fascia & Uprights', 'CNC Cut Coordinates'],
          },
          renderVisual: {
            title: 'Ambient Evening Mood Render',
            lighting: 'Warm Recessed Shelf Strip (2700K Cosy)',
            atmosphere: 'Glass Translucency & Woven Texture Depth',
          },
        },
      ],
    },
    workflow: {
      badge: '4-Step Zero-Error Manufacturing',
      titleLine1: 'From Design Canvas to CNC Router',
      titleLine2: 'Seamless End-to-End Digital Workflow',
      subtitle: 'Eliminate complex legacy CAM software, tedious manual part sizing, and expensive cutting errors.',
      steps: {
        step1: {
          title: '3D Parametric CAD',
          badge: 'CAD Engine',
          shortDesc: 'Enter dimensions, cabinet resizes dynamically in real-time.',
          tag: '[STEP 01 // 3D CAD]',
          heading: 'Instant Parametric Sizing',
          desc: 'Adjust the sliders below to watch cabinet width, height, and depth recompute dynamically.',
        },
        step2: {
          title: 'Minifix & Joint Boring',
          badge: 'Automated CAM',
          shortDesc: 'Minifix, dowel, and groove holes placed with millimetric precision.',
          tag: '[STEP 02 // AUTO BORING]',
          heading: 'Smart Minifix & Dowel Hole Mapping',
          desc: 'FurnitureDraw automatically calculates carcass joints. 15mm cam holes, 8mm dowel borings, and 35mm hinge cups are auto-mapped to machine coordinates.',
        },
        step3: {
          title: 'Smart Nesting & Waste Savings',
          badge: '20% Savings',
          shortDesc: 'Panels packed tightly onto sheet goods with minimal scrap.',
          tag: '[STEP 03 // SMART NESTING]',
          heading: '20% Material Scrap Optimization',
          desc: 'The nesting engine packs panels onto standard sheets (e.g. 4x8 ft, 5x10 ft, 2800x2100 mm) preserving wood grain direction and tool kerf.',
        },
        step4: {
          title: 'G-Code & AI Render Export',
          badge: 'CNC & 4K Render',
          shortDesc: 'One-click machine-ready files and photorealistic customer presentations.',
          tag: '[STEP 04 // CNC G-CODE & AI]',
          heading: 'One-Click CNC G-Code & AI Visuals',
          desc: 'Once your design is finalized, export clean machine-ready G-Code (.NC / .TAP) and stunning 4K photorealistic client presentations.',
        },
      },
      sliderWidth: 'Width (W):',
      sliderHeight: 'Height (H):',
      sliderDepth: 'Depth (D):',
      cadFeatureNote: 'Carcass: 18mm White Melamine MDF • 2 Doors, 1 Adjustable Shelf',
      drillingItems: {
        minifix: '15.0 mm (Depth: 12.5mm)',
        dowel: '8.0 mm (Depth: 28.0mm)',
        hinge: '35.0 mm (Depth: 11.5mm)',
      },
      nestingStats: {
        efficiency: '94.2% Yield',
        totalWaste: 'Total Waste: 5.8%',
        savedBoards: 'Saved: ~2 Sheets/Kitchen',
      },
      gcodeStats: {
        cncCompat: 'All CNC Routers & Nested Base Centers',
        renderTime: 'Avg 7-10 Seconds',
        downloadReady: 'Ready for Download',
        ctaBtn: 'Try Live in Browser',
      },
    },
    features: {
      badge: 'Why FurnitureDraw?',
      titleLine1: 'Forget Legacy CAD/CAM Packages,',
      titleLine2: 'Accelerate Production by 10x',
      subtitle: 'From custom carpentry studios to industrial cabinet factories, automate design, nesting, and CNC machining with AI.',
      items: [
        {
          id: 'web-based',
          icon: 'fa-globe',
          title: '100% Cloud Web-Based',
          badge: 'Anywhere Access',
          description: 'Access from anywhere with an internet connection. Design instantly on your smartphone, tablet, Mac, or PC without downloads.',
        },
        {
          id: 'smart-nesting',
          icon: 'fa-vector-square',
          title: 'Smart Nesting (Yield Optimization)',
          badge: '20% Material Savings',
          description: 'Packs panels with minimal waste, saving up to 20% in sheet goods. Recovers software subscription costs in saved raw materials.',
        },
        {
          id: 'ai-render',
          icon: 'fa-wand-magic-sparkles',
          title: 'AI-Powered 4K Render Simulation',
          badge: 'Photorealistic Presentations',
          description: 'Generate photorealistic interior scene visuals in one click. Impress clients on-site and close sales on the spot.',
        },
        {
          id: 'module-library',
          icon: 'fa-boxes-stacked',
          title: 'Rich Parametric Module Library',
          badge: 'Kitchen, Wardrobe & Bath',
          description: 'Assemble custom kitchens, closets, wardrobes, and bathroom vanities in minutes from a fully parametric library.',
        },
        {
          id: 'drilling-labels',
          icon: 'fa-barcode',
          title: 'Drilling Templates & Barcode Labels',
          badge: 'Minifix & Hinge Patterns',
          description: 'Minifix and hinge holes are placed automatically. Generate CNC part labels and barcodes instantly for your shop floor.',
        },
        {
          id: 'fast-presentation',
          icon: 'fa-bolt-lightning',
          title: 'Rapid Client Presentation',
          badge: 'On-Site Sales Closing',
          description: 'Input room dimensions in front of the homeowner, visualize in 3D, and secure approval right at the client appointment.',
        },
      ],
      bottomBanner: {
        title: '100% Compatible with Your CNC Router Machine!',
        description: 'Biesse, Homag, SCM, Felder, AES, Anderson, or custom Mach3/Syntec controllers—FurnitureDraw speaks your machine’s language.',
        cta: 'Test Your Machine Now',
      },
    },
    video: {
      badge: 'Video Tour & Walkthrough',
      titleLine1: 'How Does FurnitureDraw Work?',
      titleLine2: 'Watch the Official Product Demo',
      subtitle: 'See our zero-install, high-speed parametric CAD, Smart Nesting, and CNC preparation workflow in action.',
      mockupHeader: 'FurnitureDraw Product Demo',
      footerTitle: 'Get Started in Under 15 Minutes',
      footerDesc: 'Connect straight from your browser without tedious desktop setups or hardware dongles.',
      ctaBtn: 'Start Free on Our Web App',
    },
    savings: {
      badge: 'Smart Nesting Savings Calculator',
      titleLine1: 'How Many Thousands in Savings',
      titleLine2: 'Will Stay in Your Pocket?',
      subtitle: 'Enter your monthly sheet consumption to calculate how much raw material and scrap you will save with FurnitureDraw.',
      quickSelect: 'Quick Presets:',
      preset1: 'Custom Atelier (40 Sheets)',
      preset2: 'Medium Workshop (150 Sheets)',
      preset3: 'Serial Factory (450 Sheets)',
      slider1Label: 'Monthly MDF / Particle Board Consumption:',
      slider1Unit: 'Sheets / Month',
      slider2Label: 'Average Price per Sheet ($):',
      slider2Unit: '$ / Sheet',
      infoTitle: 'How Smart Nesting Delivers Pure Profit?',
      infoDesc: 'Manual beam-saw or panel-saw cutting yields ~22% waste. FurnitureDraw’s intelligent puzzle packing reduces scrap to ~6%. That 16% difference turns directly into bottom-line profit.',
      estimatedTitle: 'ESTIMATED ANNUAL NET SAVINGS',
      estimatedSubtitle: 'Raw material value recovered from scrap waste',
      statMonthlySavings: 'Monthly Net Savings',
      statBoardsSaved: 'Saved Sheets',
      statBoardsUnit: 'Sheets / Year',
      statCamTime: 'Saved CAM Time',
      statCamUnit: 'Hours / Month',
      statTreesSaved: 'Trees Conserved',
      statTreesUnit: 'Trees / Year',
      ctaBtn: 'Start Saving on Materials Now',
    },
    pricing: {
      badge: 'Transparent Global Pricing',
      titleLine1: 'Choose the Right Plan for Your Shop,',
      titleLine2: 'Start Your 3-Day Free Trial',
      subtitle: 'No hidden fees, no lock-in contracts. Get started in seconds with no credit card required.',
      monthlyToggle: 'Monthly Billing',
      annualToggle: 'Annual Billing',
      annualDiscountBadge: '2 Months Free',
      periodMonthly: '/ mo',
      periodAnnual: '/ yr',
      noCardNeeded: 'No credit card required',
      popularBadge: 'MOST POPULAR',
      guarantee: 'All plans include 24/7 dedicated support and continuous cloud updates.',
      customSetupTitle: 'Need a Custom CNC Integration or Enterprise Setup?',
      customSetupDesc: 'Contact us via WhatsApp for multi-user volume licensing, proprietary machine post processors, and customized workshop onboarding.',
      plans: {
        standard: {
          name: 'Standard Edition',
          subtitle: 'For custom cabinetmakers, carpenters, and design ateliers',
          monthlyPrice: 15,
          annualPrice: 150,
          currency: '$',
          cta: 'Start Standard Edition',
          features: [
            '100% Web-Based (Zero Install, Runs on Any Device)',
            'Kitchen, Sliding Wardrobe, Vanity & Closet Modules',
            'Interactive 3D CAD & Real-Time Client Presentation',
            'Accurate Sizing & Automated Part Cut Lists',
            'Drag-and-Drop Parametric Cabinet Library',
            'AI Voice & Text Design Assistant',
            'Unlimited Cloud Project Storage & Full Visuals',
          ],
        },
        cnc: {
          name: 'CNC Post Processor Edition',
          subtitle: 'For professional cabinet shops, CNC routers, and high-volume factories',
          monthlyPrice: 60,
          annualPrice: 600,
          currency: '$',
          cta: 'Try CNC Edition',
          features: [
            'EVERYTHING in Standard Edition',
            'Full CNC Machine Compatibility (AES, Biesse, Homag, SCM, Felder, etc.)',
            'Ready G-Code (.NC, .TAP, .DXF, .CIX, .MPG) Post Processor Exports',
            'Smart Nesting Engine with 20% Raw Material Savings',
            'Automated Part Barcoding & Label Printing',
            'Boring, Pocketing, Groove & Edge Banding Data',
            'Priority 24/7 Live Support & Onboarding Assistance',
          ],
        },
      },
    },
    testimonials: {
      badge: 'Cabinetmaker Case Studies',
      titleLine1: 'What Furniture Producers',
      titleLine2: 'Are Saying About FurnitureDraw?',
      subtitle: 'More than 2,000 users and workshops have accelerated production with FurnitureDraw.',
      bottomNote: 'Join 2,000+ users — try free for 3 days.',
      items: [
        {
          name: 'John Miller',
          role: 'Miller Millwork & Cabinetry',
          location: 'Austin, TX',
          comment: 'Thanks to FurnitureDraw’s smart nesting, our monthly sheet scrap dropped by 18%. The raw material savings alone paid for the subscription in the very first months.',
          rating: 5,
          badge: '18% Material Waste Reduction',
          avatarText: 'JM',
        },
        {
          name: 'David Rossi',
          role: 'Rossi Kitchen Design Studio',
          location: 'Chicago, IL',
          comment: 'I design custom 3D kitchens on a tablet in 5 minutes right in front of the homeowner and show photorealistic AI renders. Clients sign the contract on the spot.',
          rating: 5,
          badge: '5-Minute On-Site Closing',
          avatarText: 'DR',
        },
        {
          name: 'Robert Schmidt',
          role: 'Schmidt CNC Woodcraft',
          location: 'Munich, Germany',
          comment: 'Generating CNC G-Code is literally one click. Toolpaths, minifix pockets, and part labels come out with zero defect. Our shop output tripled.',
          rating: 5,
          badge: '3x Shop Productivity',
          avatarText: 'RS',
        },
      ],
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Everything You Need to Know',
      subtitle: 'Common technical, compatibility, and workflow questions answered.',
      searchPlaceholder: 'Search question or topic (e.g. CNC, G-Code, Nesting, Renders...)',
      noResults: 'No questions found matching your query. Please try another search term or contact our WhatsApp team directly.',
      helpBoxTitle: 'Have a custom machine controller or special inquiry?',
      helpBoxDesc: 'Our technical support engineers are available on WhatsApp to answer your questions.',
      helpBoxBtn: 'WhatsApp Support Line',
      categories: [
        { id: 'all', label: 'All Questions' },
        { id: 'web', label: 'Setup & Web' },
        { id: 'cnc', label: 'CNC & G-Code' },
        { id: 'nesting', label: 'Nesting & Yield' },
        { id: 'ai', label: 'AI 4K Render' },
        { id: 'fiyat', label: 'Pricing & Licensing' },
      ],
      items: [
        {
          category: 'web',
          q: 'Do I need to install any heavy software on my computer?',
          a: 'No, FurnitureDraw is 100% cloud-based. You can log in through Google Chrome, Apple Safari, Microsoft Edge, or Firefox on any Mac, PC, tablet, or smartphone without hardware dongles.',
        },
        {
          category: 'cnc',
          q: 'Which CNC router brands and controllers are supported?',
          a: 'FurnitureDraw outputs clean standard G-Code (.NC, .TAP, .MPG, .DXF, .CIX, .XXL, etc.) compatible with AES, Biesse, Homag, SCM, Felder, Masterwood, Anderson, and all Syntec, Mach3, Siemens, or Fanuc based routers.',
        },
        {
          category: 'cnc',
          q: 'Can I completely replace Alphacam or Artcam with FurnitureDraw?',
          a: 'Yes! FurnitureDraw generates machine-ready post-processed files directly. Tool radius compensation, drilling cycles, minifix sockets, and grooving passes are calculated automatically without manual CAM drafting.',
        },
        {
          category: 'nesting',
          q: 'How does the Smart Nesting algorithm reduce material scrap?',
          a: 'FurnitureDraw respects wood grain direction and packs cabinet panels tightly using advanced polygon nesting heuristics, reducing typical shop waste from 22% down to 6%.',
        },
        {
          category: 'ai',
          q: 'Do I need an expensive dedicated graphics card (GPU) for AI 4K Renders?',
          a: 'No! All neural rendering computations run on FurnitureDraw’s high-performance cloud servers. You can generate stunning 4K client presentations in 8-10 seconds even on a budget laptop or phone.',
        },
        {
          category: 'fiyat',
          q: 'Is a credit card required for the free trial?',
          a: 'Not at all! You can start your 3-day free trial immediately without entering any payment information, and test all 3D CAD, Nesting, and G-Code features on your own shop jobs.',
        },
        {
          category: 'fiyat',
          q: 'Is technical support and onboarding included?',
          a: 'Yes! All users have access to our direct WhatsApp line (+90 532 715 33 56), video tutorials, and dedicated technical assistance.',
        },
      ],
    },
    footer: {
      brandDesc: 'Cloud-based 3D parametric furniture CAD/CAM design, Smart Nesting, and CNC manufacturing software for custom cabinetmakers, interior architects, and woodworking factories.',
      col1Title: 'Features',
      col2Title: 'Quick Links',
      col3Title: 'Support & Contact',
      linkDrawOnline: '3D CAD & Design',
      linkAiRender: 'AI 4K Render',
      linkNesting: 'Smart Nesting',
      linkGcode: 'CNC G-Code Export',
      linkPricing: 'Pricing Plans',
      linkFaq: 'Frequently Asked Questions',
      linkTryFree: 'Try 3 Days Free in Browser',
      copyright: '© 2026 FurnitureDraw. All rights reserved.',
      legalNote: 'Powered by Furnituredraw cloud CAD/CAM technology.',
    },
    trialModal: {
      badge: '3-Day Unlimited Free Trial',
      title: 'Experience FurnitureDraw Today',
      desc: 'Test all features for 3 full days on our 100% web-based CAD/CAM platform with zero installation required.',
      bullet1: 'Kitchen, Wardrobe, and Vanity parametric modules',
      bullet2: 'Smart Nesting with 20% raw material savings',
      bullet3: 'One-click CNC G-Code and 4K AI Renders',
      cta: 'Go to furnituredraw.com & Start',
      note: '🔒 No credit card or installation required for the 3-day trial.',
    },
    videoModal: {
      title: 'FurnitureDraw Product Walkthrough',
      footerNote: 'Try free for 3 days in your shop.',
      cta: 'Start Now',
    },
    workshopGallery: {
      badge: 'Facebook Community & Workshop Feed',
      title: 'Real Workshop Projects & Community Feed',
      subtitle: 'Real custom cabinetry projects designed, cut, assembled, and installed by FurnitureDraw community members in their own workshops.',
      fbButtonText: 'Join Facebook Group ↗',
      fbButtonUrl: 'https://www.facebook.com/MobilyaPlan/',
      modalClose: 'Close',
      zoomHint: 'Click to view full photo',
      verifiedProduction: 'Verified Shop Production',
      ctaText: 'Test 3 Days Free & Start Manufacturing',
      items: [
        {
          tag: 'CNC Zero-Waste Cut - Workshop Production',
          title: 'Smart Nesting Sheet Cutting',
          desc: '18mm MDF and particle board sheet cutting with 94% yield optimization, minimal scrap, and zero tool collision.',
          userComment: 'Generated nesting toolpaths and drilling coordinates in one shot. Flawless cutting across 6 MDF panels with zero manual G-code adjustments required!',
          authorName: 'Ahmet Özkan',
          workshopName: 'Özkan Woodcraft & Design / Bursa',
          postTime: 'Posted 2 days ago',
          likesCount: 84,
          commentsCount: 19,
          imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
          badge: 'CNC Production',
        },
        {
          tag: 'Assembled Smart Kitchen',
          title: 'Precision Millimetric Assembly',
          desc: 'Island kitchen and tall cabinet layout designed in FurnitureDraw cloud and installed on site in one day with zero re-cuts.',
          userComment: 'Installed the custom island kitchen presented to the client in 3D the day after cutting. All module clearances and drawer slides aligned down to the millimeter.',
          authorName: 'Mehmet Ali Yıldız',
          workshopName: 'Artı Kitchens / Ankara',
          postTime: 'Posted yesterday',
          likesCount: 112,
          commentsCount: 27,
          imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
          badge: 'On-Site Installation',
        },
        {
          tag: 'Sliding Wardrobe & Module Assembly Stage',
          title: 'Fast Carcass & Module Assembly',
          desc: 'Automatic extraction of minifix, dowel holes, and back grooves enables lightning-fast cabinet box assembly.',
          userComment: 'Minifix holes and back panel grooves were generated automatically. Even apprentices were able to assemble the carcasses in 10 minutes flat.',
          authorName: 'Serdar Çetin',
          workshopName: 'Modern Line Joinery / Istanbul',
          postTime: 'Posted 3 days ago',
          likesCount: 96,
          commentsCount: 14,
          imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
          badge: 'Module Assembly',
        },
        {
          tag: 'Direct from 3D CAD to Final Production',
          title: 'Zero Errors from Client Sign-off to Delivery',
          desc: 'Dimensions, hardware placements, and material colors approved in the 3D presentation matched the final installation exactly.',
          userComment: 'Showed the client the 3D model, closed the contract, and exported cutting lists in 1 click. Zero discrepancies on installation day!',
          authorName: 'Hakan Kaya',
          workshopName: 'Kaya Furniture & Living / Izmir',
          postTime: 'Posted 5 days ago',
          likesCount: 143,
          commentsCount: 38,
          imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          badge: 'Exact Delivery',
        },
      ],
      youtubeBadge: 'YouTube Channel (@mobilyaplan)',
      youtubeTitle: 'YouTube Manufacturing & Tutorial Videos',
      youtubeSubtitle: 'Practical video lessons, CNC routing strategies, and 3D modeling tips you can apply immediately in your shop.',
      youtubeButtonText: 'Watch on YouTube Channel ↗',
      youtubeButtonUrl: 'https://www.youtube.com/@mobilyaplan',
      videos: [
        {
          id: 'yt-render-ai',
          title: 'AI-Powered Photorealistic Rendering with MobilyaPlan',
          desc: 'Convert your 3D cabinet CAD models into cinematic, photorealistic client presentations with one click.',
          duration: '04:15',
          views: '14.2K views',
          thumbnail: 'https://img.youtube.com/vi/qeGl89AOR0E/hqdefault.jpg',
          badge: 'AI Rendering',
          videoUrl: 'https://youtu.be/qeGl89AOR0E',
          embedUrl: 'https://www.youtube.com/embed/qeGl89AOR0E',
        },
        {
          id: 'yt-smart-nesting',
          title: 'Next-Gen Smart Nesting: Stop Wasting Your Material!',
          desc: 'Automatically optimize sheet layout nesting to eliminate waste and maximize shop profitability.',
          duration: '07:30',
          views: '28.5K views',
          thumbnail: 'https://img.youtube.com/vi/e42LszyhtSA/hqdefault.jpg',
          badge: 'Smart Nesting',
          videoUrl: 'https://youtu.be/e42LszyhtSA',
          embedUrl: 'https://www.youtube.com/embed/e42LszyhtSA',
        },
        {
          id: 'yt-kabin-baglanti',
          title: 'New Feature: Auto-Update Cabinet Joinery & Properties!',
          desc: 'Update all cabinet hardware fasteners, dowels, and carcass parameters in a single batch action.',
          duration: '05:45',
          views: '19.8K views',
          thumbnail: 'https://img.youtube.com/vi/1BXuadM_1HA/hqdefault.jpg',
          badge: 'Batch Joinery & Carcass',
          videoUrl: 'https://youtu.be/1BXuadM_1HA',
          embedUrl: 'https://www.youtube.com/embed/1BXuadM_1HA',
        },
      ],
    },
    blog: {
      badge: 'Furniture & Production Blog',
      title: 'Expert Guides to Scale Your Shop',
      subtitle: 'Practical industry tips to minimize scrap waste, close client sales faster with 3D models, and transition to cloud-based manufacturing.',
      readTimeLabel: 'Reading Time',
      readArticleBtn: 'Read Summary',
      readFullArticleBtn: 'Read Full Article ->',
      backToArticles: 'Back to Articles',
      backToHome: 'Back to Home',
      allArticlesTitle: 'All Industry Guides & Articles',
      featuredBadge: 'Featured Guide',
      keyTakeawaysTitle: 'Key Takeaways',
      proTipTitle: 'Workshop Pro Tip',
      shareArticle: 'Share Article',
      searchPlaceholder: 'Search guides, topics, or tags...',
      allCategories: 'All Categories',
      relatedTitle: 'Related Guides',
      posts: [
        {
          id: 'ai-render-satis-taktikleri',
          title: 'Close Clients on First Sight with AI Render: No More Waiting for Hours!',
          category: '🎨 AI Presentation & Sales',
          readTime: '3 min read',
          date: 'Latest Guide',
          author: 'MobilyaPlan Design Team',
          authorRole: '3D Visualization & AI Specialist',
          excerpt: "Stop waiting hours for heavy renders on expensive PCs. Convert your 3D cabinet models into cinematic photorealistic images with one click in MobilyaPlan and get instant client approval.",
          imageUrl: '/blog/ai-render-kitchen.jpg',
          tags: ['AI Render', '3D Presentation', 'Kitchen Design', 'Fast Sales'],
          content: {
            lead: "Traditional 3D software used to take hours to render a single scene, often crashing your PC and wasting all your effort. MobilyaPlan introduces built-in AI Rendering—a breakthrough for furniture designers!",
            keyTakeaways: [
              '1. Model your cabinet or entire kitchen in 3D within minutes.',
              "2. Click the 'AI Render' button in the top toolbar.",
              '3. Get your 4K daylight photorealistic photo with rich wood textures in seconds!',
            ],
            sections: [
              {
                heading: 'How to Use?',
                paragraphs: [
                  '1. Model your cabinet or entire kitchen in 3D within minutes.',
                  "2. Click the 'AI Render' button in the top toolbar.",
                  '3. In seconds, your 4K daylight photorealistic photo with rich wood textures is ready!',
                ],
              },
              {
                heading: 'What Gets Easier?',
                paragraphs: [
                  "While standing next to your client, design on a tablet or laptop and show them lifelike photos immediately. Clients don't have to guess or imagine—they say yes on the spot.",
                ],
              },
            ],
            proTip: "While standing next to your client, design on a tablet or laptop and show them lifelike photos immediately. Clients don't have to guess or imagine—they say yes on the spot.",
          },
        },
        {
          id: 'akilli-nesting-sifir-fire',
          title: 'Stop Material Waste: Zero Scrap with Next-Gen Smart Nesting',
          category: '⚙️ CNC & Smart Nesting',
          readTime: '4 min read',
          date: 'Latest Guide',
          author: 'MobilyaPlan Production Team',
          authorRole: 'CNC & Nesting Specialist',
          excerpt: 'Don’t burn money on extra MDF and chipboard sheets every month. MobilyaPlan arranges parts with millimeter precision, cutting waste by up to 20%.',
          imageUrl: '/blog/smart-nesting-cnc.jpg',
          tags: ['Smart Nesting', 'Zero Waste', 'CNC Machining', 'Material Savings'],
          content: {
            lead: "In traditional nesting programs, operators spent hours manually arranging parts on panels. MobilyaPlan's Smart Nesting engine eliminates this burden completely.",
            keyTakeaways: [
              "1. Finish your design and select 'Auto Nesting'.",
              '2. The system automatically places all cabinet and door parts across panels with minimal scrap in seconds.',
              '3. Export ready-to-run CNC G-Code with one click and send it to your machine!',
            ],
            sections: [
              {
                heading: 'How to Use?',
                paragraphs: [
                  "1. Complete the design and click 'Auto Nesting'.",
                  '2. The system calculates the optimal sheet layout in seconds to minimize scrap.',
                  '3. Export CNC G-Code with one click and send it straight to your machine!',
                ],
              },
              {
                heading: 'What Gets Easier?',
                paragraphs: [
                  'No manual calculation errors, no wasted material. The saved sheet costs alone pay for your subscription many times over.',
                ],
              },
            ],
            proTip: 'No manual calculation errors, no wasted material. The saved sheet costs alone pay for your subscription many times over.',
          },
        },
        {
          id: 'kabin-baglanti-otomatik-degistirme',
          title: 'Change All Cabinet Fasteners in One Click: No More Manual Editing!',
          category: '🛠️ Practical Workshop Tips',
          readTime: '3 min read',
          date: 'Latest Guide',
          author: 'MobilyaPlan Workshop Support',
          authorRole: 'Cabinetry & Hardware Consultant',
          excerpt: 'From minifix to dowels, drawer slides to back panel grooves... Update the entire project’s joinery in a single action and speed up shop assembly.',
          imageUrl: '/blog/cabinet-joinery.jpg',
          tags: ['Cabinet Joinery', 'Minifix & Dowels', 'Automatic Drilling', 'Fast Assembly'],
          content: {
            lead: "When a customer or shop master asked to switch from minifix to dowels after completing a design, you had to manually edit every module. MobilyaPlan makes this frustration a thing of the past!",
            keyTakeaways: [
              "1. Open 'Cabinet & Joinery Manager' in the design interface.",
              '2. Choose fastener type (minifix, screws, dowels, etc.) for the entire project or specific modules.',
              "3. Click 'Apply' to automatically regenerate all drill holes and joint coordinates.",
            ],
            sections: [
              {
                heading: 'How to Use?',
                paragraphs: [
                  "1. Open 'Cabinet & Joinery Manager' on the drawing canvas.",
                  '2. Select the joinery type (minifix, screws, dowels, etc.) for all or selected cabinets.',
                  "3. Hit 'Apply' and all joint holes are updated instantly!",
                ],
              },
              {
                heading: 'What Gets Easier?',
                paragraphs: [
                  'Hours of tedious revisions take just 5 seconds. Avoid mismatched holes in the shop and have parts pre-drilled and ready for immediate assembly.',
                ],
              },
            ],
            proTip: 'Hours of tedious revisions take just 5 seconds. Avoid mismatched holes in the shop and have parts pre-drilled and ready for immediate assembly.',
          },
        },
      ],
    },
  },
};
