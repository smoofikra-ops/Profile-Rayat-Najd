const fs = require('fs');

const categories = [
  {
    en: "Palm Trees", ar: "أشجار النخيل",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-01.webp",
    items: [
      {
        titleEn: "Date Palm", titleAr: "نخيل التمر", scientific: "Phoenix dactylifera",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/palm-tree-nursery-31.webp",
        indicators: "High Heat Tolerance | High Salinity Tolerance | Economic Crop",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للملوحة | محصول اقتصادي"
      },
      {
        titleEn: "Washingtonia robusta", titleAr: "واشنطونيا روبستا", scientific: "Washingtonia robusta",
        indicators: "Fast Growing | Street Landscaping | Medium Drought Tolerance",
        indicatorsAr: "سريع النمو | لتشجير الشوارع | تحمل متوسط للجفاف"
      },
      {
        titleEn: "Washingtonia filifera", titleAr: "واشنطونيا فيليفيرا", scientific: "Washingtonia filifera",
        indicators: "High Drought Tolerance | High Salinity Tolerance | Low Irrigation",
        indicatorsAr: "تحمل عالي للجفاف | تحمل عالي للملوحة | ري منخفض"
      },
      {
        titleEn: "Canary Island Date", titleAr: "النخيل الكناري", scientific: "Phoenix canariensis",
        indicators: "High Drought Tolerance | Luxury Landscaping | Medium Cold Tolerance",
        indicatorsAr: "تحمل عالي للجفاف | للمناظر الفاخرة | تحمل متوسط للبرودة"
      },
      {
        titleEn: "Royal Palm", titleAr: "النخل الملوكي", scientific: "Roystonea regia",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/palm-tree-nursery-58.webp",
        indicators: "Fast Growing | Urban Landscaping | Medium Irrigation",
        indicatorsAr: "سريع النمو | للمناظر الحضرية | ري متوسط"
      }
    ]
  },
  {
    en: "Shade Trees", ar: "أشجار الظل",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-02.webp",
    items: [
      {
        titleEn: "Pongam Tree", titleAr: "بونجاميا (كارانج)", scientific: "Pongamia pinnata",
        indicators: "Very High Salinity Tolerance | High Drought Tolerance | Nitrogen Fixing",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للجفاف | مثبت للنيتروجين"
      },
      {
        titleEn: "Umbrella Tree", titleAr: "تيرمينال-يا مانتالي", scientific: "Terminalia mantaly",
        indicators: "High Heat Tolerance | Urban Landscaping | Layered Canopy",
        indicatorsAr: "تحمل عالي للحرارة | للمناظر الحضرية | مظلة متدرجة"
      },
      {
        titleEn: "Indian Rosewood", titleAr: "دالبيرجيا سيسو", scientific: "Dalbergia sissoo",
        indicators: "Fast Growing | High Drought Tolerance | Windbreak",
        indicatorsAr: "سريع النمو | تحمل عالي للجفاف | مصد للرياح"
      },
      {
        titleEn: "Big-Leaf Mahogany", titleAr: "سويتينيا ماكروفيلا", scientific: "Swietenia macrophylla",
        indicators: "High Drought Tolerance | Urban Landscaping | Slow Growing",
        indicatorsAr: "تحمل عالي للجفاف | للمناظر الحضرية | بطيء النمو"
      },
      {
        titleEn: "Neem", titleAr: "النيم", scientific: "Azadirachta indica",
        indicators: "High Heat Tolerance | Fast Growing | Windbreak",
        indicatorsAr: "تحمل عالي للحرارة | سريع النمو | مصد للرياح"
      },
      {
        titleEn: "Casuarina", titleAr: "الكازورينا", scientific: "Casuarina equisetifolia",
        indicators: "High Salinity Tolerance | High Wind Tolerance | Sand Stabilization",
        indicatorsAr: "تحمل عالي للملوحة | تحمل عالي للرياح | تثبيت الرمال"
      },
      {
        titleEn: "Ficus nitida", titleAr: "فيكس نيتيدا", scientific: "Ficus microcarpa",
        indicators: "High Heat Tolerance | Dense Canopy | Urban Landscaping",
        indicatorsAr: "تحمل عالي للحرارة | مظلة كثيفة | للمناظر الحضرية"
      },
      {
        titleEn: "Ficus religiosa", titleAr: "فيكس لسان العصفور", scientific: "Ficus religiosa",
        indicators: "High Heat Tolerance | High Drought Tolerance | Deep Roots",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | جذور عميقة"
      },
      {
        titleEn: "Lubakh", titleAr: "اللبخ", scientific: "Albizia lebbeck",
        indicators: "High Drought Tolerance | Nitrogen Fixing | Fast Growing",
        indicatorsAr: "تحمل عالي للجفاف | مثبت للنيتروجين | سريع النمو"
      }
    ]
  },
  {
    en: "Native Trees", ar: "الأشجار المحلية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-03.webp",
    items: [
      {
        titleEn: "Ghaf", titleAr: "الغاف", scientific: "Prosopis cineraria",
        indicators: "Very High Drought Tolerance | High Salinity Tolerance | Deep Root System",
        indicatorsAr: "تحمل شديد للجفاف | تحمل عالي للملوحة | جذور عميقة"
      },
      {
        titleEn: "Farsetia burtoniae", titleAr: "فارسيتيا بورتونيا", scientific: "Farsetia burtoniae",
        indicators: "Very High Drought Tolerance | Sand Stabilization | Low Irrigation",
        indicatorsAr: "تحمل شديد للجفاف | تثبيت الرمال | ري منخفض"
      },
      {
        titleEn: "Samar", titleAr: "السمر", scientific: "Vachellia tortilis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-49.webp",
        indicators: "Very High Heat Tolerance | High Drought Tolerance | Sand Stabilization",
        indicatorsAr: "تحمل شديد للحرارة | تحمل عالي للجفاف | تثبيت الرمال"
      },
      {
        titleEn: "Najdi Talh", titleAr: "الطلح النجدي", scientific: "Vachellia gerrardii",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-28.webp",
        indicators: "High Drought Tolerance | Biodiversity Support | Low Irrigation",
        indicatorsAr: "تحمل عالي للجفاف | دعم التنوع البيولوجي | ري منخفض"
      },
      {
        titleEn: "Salam", titleAr: "السلم", scientific: "Vachellia flava",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-27.webp",
        indicators: "Very High Drought Tolerance | Desert Greening | Camel Fodder",
        indicatorsAr: "تحمل شديد للجفاف | تخضير الصحراء | علف للإبل"
      },
      {
        titleEn: "Sayal", titleAr: "السيال", scientific: "Vachellia tortilis subsp. raddiana",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-03.webp",
        indicators: "High Drought Tolerance | Windbreak | Broad Canopy",
        indicatorsAr: "تحمل عالي للجفاف | مصد للرياح | مظلة واسعة"
      },
      {
        titleEn: "Qarad", titleAr: "القرض", scientific: "Vachellia nilotica",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-10.webp",
        indicators: "High Drought Tolerance | High Salinity Tolerance | Mountain Slopes",
        indicatorsAr: "تحمل عالي للجفاف | تحمل عالي للملوحة | للمنحدرات الجبلية"
      },
      {
        titleEn: "Sidr", titleAr: "السدر", scientific: "Ziziphus spina-christi",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-34.webp",
        indicators: "High Heat Tolerance | High Drought Tolerance | Honey Production",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | إنتاج العسل"
      },
      {
        titleEn: "Athel Tamarisk", titleAr: "الأثل", scientific: "Tamarix aphylla",
        indicators: "High Salinity Tolerance | High Drought Tolerance | Windbreak",
        indicatorsAr: "تحمل عالي للملوحة | تحمل عالي للجفاف | مصد للرياح"
      }
    ]
  },
  {
    en: "Ornamental Trees", ar: "أشجار الزينة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-04.webp",
    items: [
      {
        titleEn: "Kurrajong", titleAr: "براكيكيتون", scientific: "Brachychiton populneus",
        indicators: "Very High Drought Tolerance | High Frost Tolerance | Bottle Trunk",
        indicatorsAr: "تحمل شديد للجفاف | تحمل عالي للصقيع | جذع زجاجي"
      },
      {
        titleEn: "Pink Shower Tree", titleAr: "كاسيا جافانيكا", scientific: "Cassia javanica",
        indicators: "High Heat Tolerance | Ornamental Flowering | Urban Landscaping",
        indicatorsAr: "تحمل عالي للحرارة | مزهرة للزينة | للمناظر الحضرية"
      },
      {
        titleEn: "Geiger Tree", titleAr: "كورديا سيبستينا", scientific: "Cordia sebestena",
        indicators: "Very High Salinity Tolerance | Vivid Orange Flowers | Coastal Planting",
        indicatorsAr: "تحمل شديد للملوحة | زهور برتقالية زاهية | زراعة ساحلية"
      },
      {
        titleEn: "Peltophorum", titleAr: "بيلتوفوروم", scientific: "Peltophorum pterocarpum",
        indicators: "High Drought Tolerance | Golden Yellow Flowers | Umbrella Canopy",
        indicatorsAr: "تحمل عالي للجفاف | زهور صفراء ذهبية | مظلة خيمية"
      },
      {
        titleEn: "Tipuana tipu", titleAr: "تيبوانا تيبو", scientific: "Tipuana tipu",
        indicators: "Very High Heat Tolerance | Medium Drought Tolerance | Fast Growing",
        indicatorsAr: "تحمل شديد للحرارة | تحمل متوسط للجفاف | سريع النمو"
      },
      {
        titleEn: "Poinciana", titleAr: "البونسيانا", scientific: "Delonix regia",
        indicators: "High Drought Tolerance | Broad Canopy | Fiery Red Flowers",
        indicatorsAr: "تحمل عالي للجفاف | مظلة واسعة | زهور حمراء نارية"
      },
      {
        titleEn: "Jacaranda", titleAr: "الجاكرندا", scientific: "Jacaranda mimosifolia",
        indicators: "Medium Drought Tolerance | Low Frost Tolerance | Purple Flowers",
        indicatorsAr: "تحمل متوسط للجفاف | تحمل منخفض للصقيع | زهور أرجوانية"
      },
      {
        titleEn: "Tabebuia", titleAr: "التابوبيا", scientific: "Tabebuia rosea",
        indicators: "High Drought Tolerance | Pink Flowers | Urban Landscaping",
        indicatorsAr: "تحمل عالي للجفاف | زهور وردية | للمناظر الحضرية"
      },
      {
        titleEn: "Acacia Glauca", titleAr: "الأكاسيا جلوكا", scientific: "Senna surattensis",
        indicators: "Very High Heat Tolerance | Evergreen | Yellow Flowers",
        indicatorsAr: "تحمل شديد للحرارة | دائم الخضرة | زهور صفراء"
      }
    ]
  },
  {
    en: "Shrubs & Plants", ar: "الشجيرات والنباتات",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-05.webp",
    items: [
      {
        titleEn: "Yellow Bells", titleAr: "التيكوما", scientific: "Tecoma stans",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-67.webp",
        indicators: "Very High Heat Tolerance | High Drought Tolerance | Hedge",
        indicatorsAr: "تحمل شديد للحرارة | تحمل عالي للجفاف | سياج"
      },
      {
        titleEn: "French Lavender", titleAr: "اللافندر الفرنسي", scientific: "Lavandula dentata",
        indicators: "High Drought Tolerance | Aromatic | Full Sun",
        indicatorsAr: "تحمل عالي للجفاف | عطري | شمس كاملة"
      },
      {
        titleEn: "Rosemary", titleAr: "إكليل الجبل", scientific: "Salvia rosmarinus",
        indicators: "High Drought Tolerance | Aromatic | Low Maintenance",
        indicatorsAr: "تحمل عالي للجفاف | عطري | قليل العناية"
      },
      {
        titleEn: "Cardboard Palm", titleAr: "زاميا فورفوراسيا", scientific: "Zamia furfuracea",
        indicators: "High Heat Tolerance | High Drought Tolerance | Low Maintenance",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | قليل العناية"
      },
      {
        titleEn: "Lantana", titleAr: "اللانتانا", scientific: "Lantana camara",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-14.webp",
        indicators: "High Heat Tolerance | High Drought Tolerance | Multicolor Flowers",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | زهور متعددة الألوان"
      },
      {
        titleEn: "Crown of Thorns", titleAr: "تاج المسيح", scientific: "Euphorbia milii",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-50.webp",
        indicators: "High Heat Tolerance | Medium Drought Tolerance | Thorny Succulent",
        indicatorsAr: "تحمل عالي للحرارة | تحمل متوسط للجفاف | عصاري شوكي"
      },
      {
        titleEn: "Peacock Flower", titleAr: "برية الطاووس", scientific: "Caesalpinia pulcherrima",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-18.webp",
        indicators: "High Heat Tolerance | High Drought Tolerance | Red/Yellow Flowers",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | زهور حمراء/صفراء"
      },
      {
        titleEn: "Chinese Hibiscus", titleAr: "الكركديه", scientific: "Hibiscus rosa-sinensis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-32.webp",
        indicators: "Medium Heat Tolerance | High Irrigation | Flowering Hedge",
        indicatorsAr: "تحمل متوسط للحرارة | ري عالي | سياج مزهر"
      },
      {
        titleEn: "Oleander", titleAr: "الدفلة", scientific: "Nerium oleander",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-57.webp",
        indicators: "Very High Heat Tolerance | High Drought Tolerance | Municipal Hedge",
        indicatorsAr: "تحمل شديد للحرارة | تحمل عالي للجفاف | سياج بلدي"
      }
    ]
  },
  {
    en: "Ground Covers", ar: "مغطيات التربة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-06.webp",
    items: [
      {
        titleEn: "Moss Rose", titleAr: "الفرفحين", scientific: "Portulaca grandiflora",
        indicators: "Very High Heat Tolerance | Very High Drought Tolerance | Succulent Cover",
        indicatorsAr: "تحمل شديد للحرارة | تحمل شديد للجفاف | غطاء عصاري"
      },
      {
        titleEn: "Winged Sea Lavender", titleAr: "ليمونيوم لوباتوم", scientific: "Limonium lobatum",
        indicators: "Very High Salinity Tolerance | High Drought Tolerance | Coastal Planting",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للجفاف | زراعة ساحلية"
      },
      {
        titleEn: "White Mexican Petunia", titleAr: "رويليا سيمبلكس", scientific: "Ruellia simplex",
        indicators: "High Heat Tolerance | High Drought Tolerance | Flowering",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | مزهر"
      },
      {
        titleEn: "European Sea-Heath", titleAr: "فرانكينيا", scientific: "Frankenia pulverulenta",
        indicators: "Very High Salinity Tolerance | High Drought Tolerance | Coastal Planting",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للجفاف | زراعة ساحلية"
      },
      {
        titleEn: "Umbrella Sedge", titleAr: "السعد المظلي", scientific: "Cyperus alternifolius",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-22.webp",
        indicators: "High Water Need | Water Features | Full Sun",
        indicatorsAr: "احتياج عالي للماء | معالم مائية | شمس كاملة"
      },
      {
        titleEn: "Sand Couch Grass", titleAr: "سبوروبولوس فيرجينيكوس", scientific: "Sporobolus virginicus",
        indicators: "Very High Salinity Tolerance | High Heat Tolerance | Coastal Stabilization",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للحرارة | تثبيت ساحلي"
      },
      {
        titleEn: "Fever Root", titleAr: "رويليا توبيروزا", scientific: "Ruellia tuberosa",
        indicators: "High Drought Tolerance | Full Sun | Flowering",
        indicatorsAr: "تحمل عالي للجفاف | شمس كاملة | مزهر"
      },
      {
        titleEn: "Beach Morning Glory", titleAr: "صباح الخير الشاطئي", scientific: "Ipomoea pes-caprae",
        indicators: "Very High Salinity Tolerance | High Wind Tolerance | Dune Stabilization",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للرياح | تثبيت الكثبان"
      },
      {
        titleEn: "Treasure Flower", titleAr: "الجازانيا", scientific: "Gazania rigens",
        indicators: "High Heat Tolerance | High Drought Tolerance | Flowering",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | مزهر"
      }
    ]
  },
  {
    en: "Seasonal Plants", ar: "النباتات الموسمية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-07.webp",
    items: [
      {
        titleEn: "Barbary Nut", titleAr: "موريا سيسيرينكيوم", scientific: "Moraea sisyrinchium",
        indicators: "High Drought Tolerance | Full Sun | Seasonal Bulb",
        indicatorsAr: "تحمل عالي للجفاف | شمس كاملة | بصيلة موسمية"
      },
      {
        titleEn: "Common Zinnia", titleAr: "الزينيا", scientific: "Zinnia elegans",
        indicators: "Medium Heat Tolerance | Summer Annual | Full Sun",
        indicatorsAr: "تحمل متوسط للحرارة | حولي صيفي | شمس كاملة"
      },
      {
        titleEn: "Cockscomb", titleAr: "عرف الديك", scientific: "Celosia cristata",
        indicators: "High Heat Tolerance | Summer Annual | Distinctive Blooms",
        indicatorsAr: "تحمل عالي للحرارة | حولي صيفي | زهور مميزة"
      },
      {
        titleEn: "African Marigold", titleAr: "القطيفة", scientific: "Tagetes erecta",
        indicators: "Medium Heat Tolerance | Summer Annual | Pest Repellent",
        indicatorsAr: "تحمل متوسط للحرارة | حولي صيفي | طارد للآفات"
      },
      {
        titleEn: "Sunflower", titleAr: "عباد الشمس", scientific: "Helianthus annuus",
        indicators: "Medium Heat Tolerance | Summer Annual | Fast Growing",
        indicatorsAr: "تحمل متوسط للحرارة | حولي صيفي | سريع النمو"
      },
      {
        titleEn: "Pansy", titleAr: "البانسيه", scientific: "Viola wittrockiana",
        indicators: "High Cold Tolerance | Winter Annual | Medium Irrigation",
        indicatorsAr: "تحمل عالي للبرودة | حولي شتوي | ري متوسط"
      },
      {
        titleEn: "China Aster", titleAr: "الأستر", scientific: "Callistephus chinensis",
        indicators: "Medium Cold Tolerance | Winter Annual | Cut Flower",
        indicatorsAr: "تحمل متوسط للبرودة | حولي شتوي | قطف الزهور"
      },
      {
        titleEn: "Garden Mum", titleAr: "الأقحوان", scientific: "Chrysanthemum morifolium",
        indicators: "Low Heat Tolerance | High Irrigation | Dense Flowers",
        indicatorsAr: "تحمل منخفض للحرارة | ري عالي | زهور كثيفة"
      },
      {
        titleEn: "Petunia", titleAr: "البيتونيا", scientific: "Petunia hybrida",
        indicators: "Medium Heat Tolerance | High Irrigation | Hanging Pots",
        indicatorsAr: "تحمل متوسط للحرارة | ري عالي | أصص معلقة"
      }
    ]
  },
  {
    en: "Desert Plants", ar: "نباتات صحراوية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-08.webp",
    items: [
      {
        titleEn: "Saad Sedge", titleAr: "السعد", scientific: "Cyperus conglomeratus",
        indicators: "Very High Drought Tolerance | High Salinity Tolerance | Native Sand Binder",
        indicatorsAr: "تحمل شديد للجفاف | تحمل عالي للملوحة | مثبت رمال محلي"
      },
      {
        titleEn: "Harmal", titleAr: "الحرمل", scientific: "Rhazya stricta",
        indicators: "Very High Drought Tolerance | High Salinity Tolerance | Native Medicinal",
        indicatorsAr: "تحمل شديد للجفاف | تحمل عالي للملوحة | طبي محلي"
      },
      {
        titleEn: "Syrian Rue", titleAr: "الحرمل السوري", scientific: "Peganum harmala",
        indicators: "Very High Drought Tolerance | High Salinity Tolerance | Cultural Heritage",
        indicatorsAr: "تحمل شديد للجفاف | تحمل عالي للملوحة | تراث ثقافي"
      },
      {
        titleEn: "Ghada", titleAr: "الغضا", scientific: "Haloxylon persicum",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/drought-tolerant-trees/rayat-najd-drought-tolerant-tree-54.webp",
        indicators: "Very High Drought Tolerance | Sand Stabilization | Native Shrub",
        indicatorsAr: "تحمل شديد للجفاف | تثبيت الرمال | شجيرة محلية"
      },
      {
        titleEn: "Arta", titleAr: "الأرطى", scientific: "Calligonum comosum",
        indicators: "High Drought Tolerance | High Salinity Tolerance | Native Sand Binder",
        indicatorsAr: "تحمل عالي للجفاف | تحمل عالي للملوحة | مثبت رمال محلي"
      },
      {
        titleEn: "Arfaj", titleAr: "العرفج", scientific: "Rhanterium epapposum",
        indicators: "Medium Salinity Tolerance | Grazing Use | Native Shrub",
        indicatorsAr: "تحمل متوسط للملوحة | استخدام للرعي | شجيرة محلية"
      },
      {
        titleEn: "Arak (Miswak)", titleAr: "الأراك (شجرة السواك)", scientific: "Salvadora persica",
        indicators: "Very High Heat Tolerance | Very High Drought Tolerance | Native Medicinal",
        indicatorsAr: "تحمل شديد للحرارة | تحمل شديد للجفاف | طبي محلي"
      },
      {
        titleEn: "Shih (Wormwood)", titleAr: "الشيح", scientific: "Artemisia sieberi",
        indicators: "High Heat Tolerance | Very High Drought Tolerance | Native Aromatic",
        indicatorsAr: "تحمل عالي للحرارة | تحمل شديد للجفاف | عطري محلي"
      },
      {
        titleEn: "Qaysoum", titleAr: "القيصوم", scientific: "Achillea fragrantissima",
        indicators: "High Heat Tolerance | Very High Drought Tolerance | Native Medicinal",
        indicatorsAr: "تحمل عالي للحرارة | تحمل شديد للجفاف | طبي محلي"
      }
    ]
  },
  {
    en: "Indoor Plants", ar: "نباتات داخلية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-01.webp",
    items: [] // Empty per requirement
  },
  {
    en: "Outdoor Plants", ar: "نباتات خارجية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-02.webp",
    items: [] // Empty per requirement
  },
  {
    en: "Climbing Plants", ar: "النباتات المتسلقة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-03.webp",
    items: [
      {
        titleEn: "Bougainvillea", titleAr: "الجهنمية", scientific: "Bougainvillea spectabilis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/mixed-nursery-stock/rayat-najd-young-nursery-stock-30.webp",
        indicators: "Very High Heat Tolerance | High Drought Tolerance | Flowering Climber",
        indicatorsAr: "تحمل شديد للحرارة | تحمل عالي للجفاف | متسلق مزهر"
      },
      {
        titleEn: "Royal Jasmine", titleAr: "الياسمين الملكي", scientific: "Jasminum grandiflorum",
        indicators: "Medium Heat Tolerance | Medium Irrigation | Highly Aromatic",
        indicatorsAr: "تحمل متوسط للحرارة | ري متوسط | شديد العطرية"
      },
      {
        titleEn: "Indian Jasmine", titleAr: "الياسمين الهندي", scientific: "Jasminum sambac",
        indicators: "High Heat Tolerance | Medium Irrigation | Aromatic",
        indicatorsAr: "تحمل عالي للحرارة | ري متوسط | عطري"
      },
      {
        titleEn: "Cape Plumbago", titleAr: "بلمبجو", scientific: "Plumbago auriculata",
        indicators: "High Heat Tolerance | Medium Drought Tolerance | Flowering Hedge",
        indicatorsAr: "تحمل عالي للحرارة | تحمل متوسط للجفاف | سياج مزهر"
      },
      {
        titleEn: "Star Jasmine", titleAr: "الياسمين النجمي", scientific: "Trachelospermum jasminoides",
        indicators: "Medium Heat Tolerance | Medium Drought Tolerance | Fragrant",
        indicatorsAr: "تحمل متوسط للحرارة | تحمل متوسط للجفاف | عطري"
      },
      {
        titleEn: "Creeping Fig", titleAr: "فيكس الجداري الزاحف", scientific: "Ficus pumila",
        indicators: "Medium Heat Tolerance | Fast Growing | Green Wall",
        indicatorsAr: "تحمل متوسط للحرارة | سريع النمو | جدار أخضر"
      },
      {
        titleEn: "Blue Trumpet Vine", titleAr: "الثنبرجيا", scientific: "Thunbergia grandiflora",
        indicators: "Medium Heat Tolerance | Low Drought Tolerance | Fast Growing",
        indicatorsAr: "تحمل متوسط للحرارة | تحمل منخفض للجفاف | سريع النمو"
      },
      {
        titleEn: "Golden Trumpet", titleAr: "البوق الذهبي", scientific: "Allamanda cathartica",
        indicators: "High Heat Tolerance | Medium Drought Tolerance | Full Sun",
        indicatorsAr: "تحمل عالي للحرارة | تحمل متوسط للجفاف | شمس كاملة"
      },
      {
        titleEn: "Coral Vine", titleAr: "كرمة المرجان", scientific: "Antigonon leptopus",
        indicators: "High Heat Tolerance | High Drought Tolerance | Very Fast Growing",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للجفاف | سريع النمو جداً"
      }
    ]
  }
];

let fileContent = `import { Section } from "../layout/Section";
import { EditableText } from "../ui/EditableText";
import { ProductImagePlaceholder, ImagePlaceholder } from "../ui/Placeholders";
import { BilingualContainer, EnglishContent, ArabicContent } from "../layout/BilingualContainer";

const categories = ${JSON.stringify(categories, null, 2)};

export function Section05Products({ startPageNumber = 14 }: { startPageNumber?: number }) {
  return (
    <div className="bg-brand-beige print:bg-transparent">
       <Section className="bg-white !mb-0 border-b border-brand-warm/10" pageNumber={startPageNumber} bgType="pattern" bgImage="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp">
          <BilingualContainer className="mb-16">
             <EnglishContent>
                <EditableText as="h3" className="typo-eyebrow">Nursery Products</EditableText>
                <EditableText as="h2" className="typo-h1 text-left">Plant Collection</EditableText>
                <div className="typo-body-en">
                   <EditableText as="p">
                     An exquisite selection of flora cultivated to the highest standards, ready to breathe life into any landscape.
                   </EditableText>
                </div>
             </EnglishContent>
             <ArabicContent>
                <EditableText as="h3" className="typo-eyebrow font-arabic text-right">منتجات المشتل</EditableText>
                <EditableText as="h2" className="typo-h1 font-arabic text-right">مجموعة النباتات</EditableText>
                <div className="typo-body-ar">
                   <EditableText as="p">
                     مجموعة رائعة من النباتات المزروعة وفقاً لأعلى المعايير، جاهزة لبث الحياة في أي منظر طبيعي.
                   </EditableText>
                </div>
             </ArabicContent>
          </BilingualContainer>
       </Section>

       {categories.map((cat, index) => {
         const catPageStart = startPageNumber + 1 + (index * 2);
         return (
           <div key={index}>
             <CategoryDivider en={cat.en} ar={cat.ar} img={cat.img} pageNum={catPageStart} />
             <Section pageNumber={catPageStart + 1} bgType="pattern">
                <SectionDivider />
                <div className="text-center mb-8">
                   <EditableText as="h3" className="typo-h3 mb-2">{cat.en}</EditableText>
                   <EditableText as="h3" className="typo-h3 font-arabic" dir="rtl">{cat.ar}</EditableText>
                </div>
                
                {cat.items && cat.items.length > 0 ? (
                  <div className="grid grid-cols-3 gap-3 h-[calc(100%-120px)]">
                     {cat.items.map((item, i) => (
                         <ProductCard
                            key={i}
                            categoryEn={cat.en}
                            categoryAr={cat.ar}
                            isSmall={true}
                            titleEn={item.titleEn}
                           titleAr={item.titleAr}
                           scientific={item.scientific}
                           descEn={item.indicators}
                           descAr={item.indicatorsAr}
                           imageUrl={item.img}
                         />
                     ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[calc(100%-120px)] border border-dashed border-brand-warm/30 rounded-xl bg-brand-warm/5">
                     <EditableText as="p" className="typo-body-en text-brand-dark/50 mb-2">CATEGORY DATA GAP — DATA REQUIRED</EditableText>
                     <EditableText as="p" className="typo-body-ar text-brand-dark/50" dir="rtl">فجوة بيانات الفئة — مطلوب بيانات</EditableText>
                  </div>
                )}
             </Section>
           </div>
         );
       })}
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex justify-center mb-8 opacity-20">
      <div className="w-16 h-px bg-brand-forest"></div>
      <div className="w-2 h-2 rounded-full bg-brand-gold mx-2 -mt-1"></div>
      <div className="w-16 h-px bg-brand-forest"></div>
    </div>
  );
}

function CategoryDivider({ en, ar, img, pageNum }: { en: string, ar: string, img: string, pageNum: number }) {
  return (
    <Section className="bg-brand-forest !p-0" pageNumber={pageNum}>
        <div className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
               <ImagePlaceholder title={\`\${en} Cover\`} specs="Upload Category Cover Image" className="w-full h-full opacity-40 mix-blend-overlay object-cover border-none !shadow-none" />
               <img src={img} alt="Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            </div>
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center text-center">
               <div className="bg-black/40 backdrop-blur-md px-12 py-8 rounded-3xl border border-white/20 shadow-2xl">
                 <EditableText as="h2" className="typo-h1 !text-brand-beige tracking-wide drop-shadow-lg !mb-4">{en}</EditableText>
                 <EditableText as="h2" className="typo-h1 !text-brand-gold font-arabic drop-shadow-lg !mb-0">{ar}</EditableText>
               </div>
            </div>
        </div>
    </Section>
  );
}

function ProductCard({ 
  categoryEn, 
  categoryAr, 
  isSmall,
  titleEn = "Product Name",
  titleAr = "اسم المنتج",
  scientific = "Scientific Name",
  descEn,
  descAr,
  imageUrl
}: { 
  categoryEn: string, 
  categoryAr: string, 
  isSmall?: boolean,
  titleEn?: string,
  titleAr?: string,
  scientific?: string,
  descEn?: string,
  descAr?: string,
  imageUrl?: string
}) {
  return (
    <div className={\`flex flex-col bg-white border border-brand-warm/10 rounded-lg overflow-hidden group shadow-3d shadow-3d-hover transition-all duration-700 h-[calc(100%-1rem)] break-inside-avoid \${isSmall ? 'max-h-[240px]' : 'max-h-[300px]'}\`}>
       {imageUrl ? (
         <div className={\`w-full flex-1 border-b border-brand-warm/10 overflow-hidden \${isSmall ? 'min-h-[90px]' : 'min-h-[140px]'}\`}>
           <img src={imageUrl} alt={titleEn} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
         </div>
       ) : (
         <ProductImagePlaceholder className={\`w-full flex-1 border-b border-brand-warm/10 \${isSmall ? 'min-h-[90px]' : 'min-h-[140px]'}\`} />
       )}
       
       <div className={\`\${isSmall ? 'p-2.5' : 'p-4'} relative z-10 bg-white flex flex-col shrink-0\`}>
          <div className="flex justify-between items-end mb-1">
             <EditableText as="h4" className={\`typo-h4 font-bold \${isSmall ? 'text-xs' : 'text-sm'}\`}>{titleEn}</EditableText>
             <EditableText as="h4" className={\`typo-h4 font-bold font-arabic \${isSmall ? 'text-xs' : 'text-sm'}\`} dir="rtl">{titleAr}</EditableText>
          </div>
          <EditableText as="p" className={\`text-brand-olive \${isSmall ? 'text-[8px] mb-1' : 'text-[9px] mb-2'} italic font-serif text-center\`}>{scientific}</EditableText>
          
          <div className={\`grid grid-cols-1 gap-1 \${isSmall ? 'pt-1' : 'pt-2'} border-t border-brand-warm/10\`}>
             <EditableText as="p" className={\`\${isSmall ? 'text-[7px]' : 'text-[9px]'} text-brand-dark/80 font-light leading-snug line-clamp-2 text-center\`}>{descEn}</EditableText>
             <EditableText as="p" className={\`\${isSmall ? 'text-[7px]' : 'text-[9px]'} font-arabic text-brand-dark/80 font-light leading-snug line-clamp-2 text-center\`} dir="rtl">{descAr}</EditableText>
          </div>
       </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/sections/Section05Products.tsx', fileContent);
