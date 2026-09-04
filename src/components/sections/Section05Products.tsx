import React from 'react';
import { Leaf } from 'lucide-react';
import { Section, EditableText } from '../ui/Layouts';

export function ProductImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-brand-forest/10 border border-dashed border-brand-warm/30 rounded-xl ${className}`}>
      <Leaf className="w-8 h-8 text-brand-forest/40 mb-1" />
      <span className="text-[9px] uppercase tracking-widest text-brand-dark/40 font-sans font-semibold">Botanical Specimen</span>
    </div>
  );
}

interface ProductItem {
  titleEn: string;
  titleAr: string;
  scientific: string;
  indicators: string;
  indicatorsAr: string;
  img?: string;
}

interface CategoryData {
  en: string;
  ar: string;
  img: string;
  descEn: string;
  descAr: string;
  items: ProductItem[];
}

const categories: CategoryData[] = [
  {
    en: "Palm Trees", 
    ar: "أشجار النخيل",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-01.webp",
    descEn: "Acclimatized specimen date palms and architectural fan palms suited for urban plazas, royal avenues, and arid landscapes.",
    descAr: "أشجار نخيل التمر وأشجار النخيل المروحية المعمرة والمؤهلة هندسياً للمشاريع الحضرية والطرق الكبرى والمناظر الطبيعية.",
    items: [
      {
        titleEn: "Royal Palm", 
        titleAr: "نخل ملكي", 
        scientific: "Roystonea regia",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-59.webp",
        indicators: "Broad Crown | Luxury Landscaping | Cold Tolerant",
        indicatorsAr: "تاج عريض مميز | للمناظر الفاخرة | تحمل ممتاز للبرودة"
      },
      {
        titleEn: "Date Palm", 
        titleAr: "نخل عربي", 
        scientific: "Phoenix dactylifera",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-64.webp",
        indicators: "High Heat Tolerance | High Salinity Tolerance | Cultural Heritage",
        indicatorsAr: "تحمل عالي للحرارة | تحمل عالي للملوحة | إرث وطني"
      },
      {
        titleEn: "Mexican Fan Palm", 
        titleAr: "واشنطونيا روبستا", 
        scientific: "Washingtonia robusta",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-49.webp",
        indicators: "Fast Growing | Avenue Landscaping | Medium Drought Tolerance",
        indicatorsAr: "سريع النمو | لتشجير الشوارع والمحاور | تحمل متوسط للجفاف"
      },
      {
        titleEn: "California Fan Palm", 
        titleAr: "واشنطونيا فيليفيرا", 
        scientific: "Washingtonia filifera",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/palm-trees/rayat-najd-palm-tree-nursery-31.webp",
        indicators: "High Drought Tolerance | High Salinity Tolerance | Low Irrigation",
        indicatorsAr: "تحمل عالي للجفاف | تحمل عالي للملوحة | استهلاك ري منخفض"
      }
    ]
  },
  {
    en: "Shade Trees", 
    ar: "أشجار الظل",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/rayat-najd-tree-sapling-nursery-01.webp",
    descEn: "Dense-canopy shade trees providing natural cooling, heat island mitigation, and aesthetic framing for roadways and parks.",
    descAr: "أشجار ذات مظلات كثيفة تساهم في خفض درجات الحرارة الحضرية وتوفير الظل وتجميل الطرق والميادين والحدائق العامة.",
    items: [
      {
        titleEn: "Neem Tree", 
        titleAr: "شجرة النيم", 
        scientific: "Azadirachta indica",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shadow-tree/naim-tree.jpeg",
        indicators: "High Heat Tolerance | Evergreen | Natural Pest Repellent",
        indicatorsAr: "تحمل عالي للحرارة | دائم الخضرة | طارد طبيعي للآفات"
      },
      {
        titleEn: "Albizia Lebbeck", 
        titleAr: "البيزيا لبخ", 
        scientific: "Albizia lebbeck",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shadow-tree/albizia-lebbeck.webp",
        indicators: "Fast Growing Shade | High Drought Tolerance | Nitrogen Fixing",
        indicatorsAr: "شجرة ظل سريعة النمو | تحمل عالي للجفاف | مخصبة للتربة"
      },
      {
        titleEn: "Umbrella Tree", 
        titleAr: "تيرميناليا مانتالي", 
        scientific: "Terminalia mantaly",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shadow-tree/Terminalia-mantaly%20%20.jpg",
        indicators: "Architectural Tiered Canopy | Urban Landscapes | Fast Growing",
        indicatorsAr: "مظلة متدرجة هندسية | للمناظر الحضرية | سريع النمو"
      },
      {
        titleEn: "Pongam Tree", 
        titleAr: "بونجاميا (كارانج)", 
        scientific: "Pongamia pinnata",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/rayat-najd-tree-sapling-nursery-01.webp",
        indicators: "High Salinity Tolerance | High Drought Tolerance | Nitrogen Fixing",
        indicatorsAr: "تحمل شديد للملوحة | تحمل عالي للجفاف | مثبت للنيتروجين"
      }
    ]
  },
  {
    en: "Native Trees", 
    ar: "الأشجار المحلية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-05.webp",
    descEn: "Authentic indigenous flora of the Arabian Peninsula engineered for extreme aridity, zero fertilizer demand, and ecological restoration.",
    descAr: "أشجار أصيلة من بيئة شبه الجزيرة العربية متكيفة مع أقسى الظروف المناخية ومثالية لبرامج التشجير البيئي ومكافحة التصحر.",
    items: [
      {
        titleEn: "Ghaf / Prosopis", 
        titleAr: "الغاف", 
        scientific: "Prosopis cineraria",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-05.webp",
        indicators: "Deep Taproots | Extreme Arid Resilience | Sand Stabilizer",
        indicatorsAr: "جذور عميقة | أقصى درجات تحمل الجفاف | تثبيت الكثبان"
      },
      {
        titleEn: "Umbrella Thorn Acacia", 
        titleAr: "السمر", 
        scientific: "Acacia tortilis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/acacia-tortilis-umbrella-thorn.webp",
        indicators: "Iconic Desert Shape | Zero Maintenance | Native Biodiversity",
        indicatorsAr: "شكل صحراوي مميز | استهلاك مائي أدنى | تعزيز التنوع الحيوي"
      },
      {
        titleEn: "Salam Acacia", 
        titleAr: "السلم", 
        scientific: "Acacia ehrenbergiana",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/acacia-ehrenbergiana-salam.webp",
        indicators: "High Heat Tolerance | Low Water Demand | Wildlife Habitat",
        indicatorsAr: "تحمل عالي للحرارة | استهلاك مائي منخفض | بيئة للحياة الفطرية"
      },
      {
        titleEn: "Christ's Thorn Jujube", 
        titleAr: "السدر البري", 
        scientific: "Ziziphus spina-christi",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/ziziphus-spina-christi-sidr.webp",
        indicators: "Cultural Value | High Drought Tolerance | Dense Shade",
        indicatorsAr: "قيمة تراثية وبيئية | تحمل عالي للجفاف | ظل وفير"
      }
    ]
  },
  {
    en: "Ornamental Trees", 
    ar: "أشجار الزينة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/rayat-najd-tree-sapling-nursery-01.webp",
    descEn: "Vibrant flowering and sculptural ornamental trees selected to add visual prestige and seasonal color to institutional and residential projects.",
    descAr: "أشجار زينة مزهرة وهندسية مميزة تضفي طابعاً جمالياً راقياً وتنوعاً لونياً على المشاريع السكنية والمؤسسية.",
    items: [
      {
        titleEn: "Royal Poinciana / Gulmohar", 
        titleAr: "البوانسيانا الملكية", 
        scientific: "Delonix regia",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/ornamental-trees/delonix-regia-royal-poinciana.webp",
        indicators: "Vibrant Scarlet Flowers | Broad Umbrella Canopy | Fast Growing",
        indicatorsAr: "أزهار حمراء مميزة | مظلة خيمية واسعة | نمو سريع"
      },
      {
        titleEn: "Yellow Poinciana", 
        titleAr: "بيلتوفورم (البوانسيانا الصفراء)", 
        scientific: "Peltophorum pterocarpum",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/ornamental-trees/peltophorum-pterocarpum-yellow-poinciana.webp",
        indicators: "Golden Yellow Blooms | High Heat Tolerance | Street Tree",
        indicatorsAr: "أزهار صفراء ذهبية | تحمل عالي للحرارة | لتشجير الشوارع"
      },
      {
        titleEn: "Pink Poui / Tecoma", 
        titleAr: "تابيبويا الوردية", 
        scientific: "Handroanthus roseus",
        indicators: "Spectacular Pink Bloom | Feature Tree | Moderate Water",
        indicatorsAr: "إزهار وردي مبهر | شجرة مميزة للميادين | ري معتدل"
      },
      {
        titleEn: "Golden Shower Tree", 
        titleAr: "كاسيا فيستولا (خيار شمبر)", 
        scientific: "Cassia fistula",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/ornamental-trees/cassia-fistula-golden-shower-tree.webp",
        indicators: "Cascading Golden Flowers | High Heat Tolerance | Decorative",
        indicatorsAr: "عناقيد زهرية ذهبية | تحمل ممتاز للحرارة | قيمة تزيينية"
      }
    ]
  },
  {
    en: "Shrubs & Plants", 
    ar: "الشجيرات والنباتات",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-10.webp",
    descEn: "Hardy, sculptural shrubs and structural foliage for hedging, perimeter buffers, and layered understory planting.",
    descAr: "شجيرات قوية ونباتات مورقة تستخدم لتحديد المسارات وإنشاء الأسوار النباتية والتنسيق الطبقي للمساحات الخضراء.",
    items: [
      {
        titleEn: "Bougainvillea", 
        titleAr: "الجهنمية", 
        scientific: "Bougainvillea spectabilis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shrubs/bougainvillea-spectabilis-bougainvillea.webp",
        indicators: "Continuous Flowering | Extreme Drought Tolerance | Versatile",
        indicatorsAr: "إزهار مستمر | تحمل شديد للجفاف | متعددة الاستخدامات"
      },
      {
        titleEn: "Oleander", 
        titleAr: "الدفلة", 
        scientific: "Nerium oleander",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shrubs/nerium-oleander-oleander.webp",
        indicators: "High Heat & Salinity Tolerance | Highway Median Greening",
        indicatorsAr: "تحمل فائق للحرارة والملوحة | مثالية للجزر الوسطية"
      },
      {
        titleEn: "Yellow Bells", 
        titleAr: "تيكوما ستانس", 
        scientific: "Tecoma stans",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shrubs/tecoma-stans-yellow-bells.webp",
        indicators: "Yellow Bell Flowers | Fast Growing | Drought Hardy",
        indicatorsAr: "أزهار جرسية صفراء | نمو سريع | مقاومة للجفاف"
      },
      {
        titleEn: "Lantana Camara", 
        titleAr: "لانتانا كمارا", 
        scientific: "Lantana camara",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/shrubs/lantana-camara-lantana.webp",
        indicators: "Multicolor Blooms | Ground Coverage | Extremely Resilient",
        indicatorsAr: "أزهار متعددة الألوان | تغطية كثيفة | مقاومة عالية للظروف"
      }
    ]
  },
  {
    en: "Ground Covers", 
    ar: "مغطيات التربة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp",
    descEn: "Low-water carpeting plants providing soil temperature moderation, weed suppression, and lush green continuity.",
    descAr: "مغطيات تربة موفرة للمياه تساهم في خفض حرارة التربة ومنع انجرافها وإعطاء امتداد بصري أخضر مستدام.",
    items: [
      {
        titleEn: "Wedelia", 
        titleAr: "ويديليا (سفندر صخري)", 
        scientific: "Sphagneticola trilobata",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/ground-covers/sphagneticola-trilobata-wedelia.webp",
        indicators: "Dense Green Carpet | Yellow Daisy Flowers | Erosion Control",
        indicatorsAr: "سجادة خضراء كثيفة | أزهار صفراء | منع انجراف التربة"
      },
      {
        titleEn: "Portulacaria / Elephant Bush", 
        titleAr: "بورتولاكاريا (رجلة الشجر)", 
        scientific: "Portulacaria afra",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/ground-covers/portulacaria-afra-elephant-bush.webp",
        indicators: "Succulent Leaves | High Carbon Sequestration | Low Irrigation",
        indicatorsAr: "أوراق عصارية | امتصاص عالي للكربون | استهلاك ري قليل"
      },
      {
        titleEn: "Sesuvium", 
        titleAr: "سيسوفيوم (غاسول)", 
        scientific: "Sesuvium portulacastrum",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/ground-covers/sesuvium-portulacastrum-sesuvium.webp",
        indicators: "Extreme Salinity Tolerance | Coastal & Urban Landscapes",
        indicatorsAr: "تحمل فائق للملوحة | للمناطق الساحلية والحضرية"
      },
      {
        titleEn: "Purple Heart", 
        titleAr: "ستريبتوكاربوس / قلب أرجواني", 
        scientific: "Tradescantia pallida",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/ground-covers/tradescantia-pallida-purple-heart.webp",
        indicators: "Deep Purple Foliage | Contrast Accent | Easy Propagation",
        indicatorsAr: "أوراق أرجوانية مميزة | تباين لوني رائع | سهولة الإكثار"
      }
    ]
  },
  {
    en: "Seasonal Plants", 
    ar: "النباتات والزهور الموسمية",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-08.webp",
    descEn: "Dynamic seasonal annuals and flowering perennials cultivated to provide breathtaking color bursts for civic celebrations and formal gardens.",
    descAr: "زهور ونباتات موسمية متنوعة يتم إنتاجها لتوفير لوحات بصرية زاهية في الميادين العامة والحدائق النموذجية.",
    items: [
      {
        titleEn: "Petunia", 
        titleAr: "البتونيا", 
        scientific: "Petunia hybrida",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/seasonal-plants/petunia-hybrida-petunia.webp",
        indicators: "Vibrant Winter/Spring Colors | Flower Beds & Planters",
        indicatorsAr: "ألوان زاهية لموسم الشتاء والربيع | للأحواض والميادين"
      },
      {
        titleEn: "Marigold", 
        titleAr: "المخملية (الماريجولد)", 
        scientific: "Tagetes erecta",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/seasonal-plants/tagetes-erecta-marigold.webp",
        indicators: "Golden Orange Blooms | Pest Repellent | Heat Tolerant",
        indicatorsAr: "أزهار برتقالية وذهبية | طاردة للآفات | تحمل ممتاز"
      },
      {
        titleEn: "Vinca / Madagascar Periwinkle", 
        titleAr: "الونكا (عين البزون)", 
        scientific: "Catharanthus roseus",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/seasonal-plants/catharanthus-roseus-vinca.webp",
        indicators: "Summer Flowering | High Heat Tolerance | Low Maintenance",
        indicatorsAr: "إزهار صيفي وفير | تحمل فائق للحرارة | عناية ميسرة"
      },
      {
        titleEn: "Zinnia", 
        titleAr: "الزينيا", 
        scientific: "Zinnia elegans",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/seasonal-plants/zinnia-elegans-zinnia.webp",
        indicators: "Rich Color Palette | Sun Loving | Long Lasting Blooms",
        indicatorsAr: "تنوع لوني جذاب | محبة لأشعة الشمس | أزهار طويلة البقاء"
      }
    ]
  },
  {
    en: "Desert Plants & Succulents", 
    ar: "النباتات الصحراوية والعصاريات",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/trees/native-drought-tolerant/rayat-najd-native-drought-tolerant-tree-05.webp",
    descEn: "Sculptural xeriscape succulents and desert perennials requiring virtually zero irrigation once established.",
    descAr: "نباتات صحراوية وعصاريات متكيفة مع الجفاف التام تضفي لمسة جمالية هندسية بأقل استهلاك مائي ممكن.",
    items: [
      {
        titleEn: "Agave Americana", 
        titleAr: "الأجاف الأمريكي", 
        scientific: "Agave americana",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/desert-plants/agave-americana-century-plant.webp",
        indicators: "Sculptural Form | Extreme Drought Tolerance | Low Irrigation",
        indicatorsAr: "شكل هندسي فريد | أقصى درجات تحمل الجفاف | ري شحيح"
      },
      {
        titleEn: "Aloe Vera", 
        titleAr: "الصبار الطبي (ألوفيرا)", 
        scientific: "Aloe barbadensis",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/desert-plants/aloe-barbadensis-aloe-vera.webp",
        indicators: "Medicinal Foliage | Arid Architecture | Sun Hardy",
        indicatorsAr: "أوراق عصارية علاجية | مناسب للحدائق الجافة | محب للشمس"
      },
      {
        titleEn: "Desert Spoon / Dasylirion", 
        titleAr: "داسيليريون (ملعقة الصحراء)", 
        scientific: "Dasylirion wheeleri",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/desert-plants/dasylirion-wheeleri-desert-spoon.webp",
        indicators: "Fine Blue-Green Foliage | Modern Xeriscaping",
        indicatorsAr: "أوراق إبرية رمادية مزرقة | لتنسيق الحدائق الصحراوية"
      },
      {
        titleEn: "Red Yucca", 
        titleAr: "هسبيرالوي (اليوكا الحمراء)", 
        scientific: "Hesperaloe parviflora",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/desert-plants/hesperaloe-parviflora-red-yucca.webp",
        indicators: "Coral-Red Flower Spikes | Extreme Heat Hardy",
        indicatorsAr: "شماريخ زهرية حمراء | متانة فائقة في الصيف"
      }
    ]
  },
  {
    en: "Climbing Plants", 
    ar: "النباتات المتسلقة",
    img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-02.webp",
    descEn: "Vigorous wall-covering vines and trellis climbers providing vertical greenery, privacy screens, and shaded pergolas.",
    descAr: "متسلقات قوية لتغطية الجدران والبرجولات وإنشاء سواتر نباتية خضراء تعزز الخصوصية وتوفر الظل.",
    items: [
      {
        titleEn: "Rangoon Creeper", 
        titleAr: "ياسمين هندي (رنجون)", 
        scientific: "Combretum indicum",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/climbing-plants/combretum-indicum-rangoon-creeper.webp",
        indicators: "Fragrant Color-Changing Flowers | Pergola Shading",
        indicatorsAr: "أزهار عطرية متغيرة الألوان | مثالية لتغطية البرجولات"
      },
      {
        titleEn: "Climbing Bougainvillea", 
        titleAr: "الجهنمية المتسلقة", 
        scientific: "Bougainvillea glabra",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/climbing-plants/bougainvillea-glabra-climbing-bougainvillea.webp",
        indicators: "Massive Floral Display | Wall Coverage | Arid Hardy",
        indicatorsAr: "تغطية زهرية كثيفة | كسوة للجدران | متكيفة مع الجفاف"
      },
      {
        titleEn: "Star Jasmine", 
        titleAr: "الياسمين النجمي", 
        scientific: "Trachelospermum jasminoides",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/climbing-plants/trachelospermum-jasminoides-star-jasmine.webp",
        indicators: "Intensely Fragrant White Flowers | Evergreen Foliage",
        indicatorsAr: "أزهار بيضاء عطرية فواحة | دائم الخضرة"
      },
      {
        titleEn: "Bleeding Heart Vine", 
        titleAr: "كليرودندرون", 
        scientific: "Clerodendrum thomsoniae",
        img: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/04-products/climbing-plants/clerodendrum-thomsoniae-bleeding-heart-vine.webp",
        indicators: "Two-Tone Red & White Blooms | Shaded Walls",
        indicatorsAr: "أزهار ثنائية اللون مميزة | للجدران والممرات شبه المظللة"
      }
    ]
  }
];

export function Section05Products({ startPageNumber = 14 }: { startPageNumber?: number }) {
  return (
    <div className="bg-brand-beige print:bg-transparent">
      {/* 1. Plant Collection Intro Divider Page */}
      <Section 
        className="bg-brand-forest text-white border-b border-brand-warm/10 !p-0" 
        pageNumber={startPageNumber} 
        noSafeArea={true}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Dominant Hero Nursery Photography */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://nmolabs-cdn.b-cdn.net/Rayat-najd/06-media-library/nursery-photography-al-hair/rayat-najd-al-hair-nursery-riyadh-04.webp" 
              alt="Rayat Najd Plant Catalog Master Collection" 
              className="w-full h-full object-cover filter brightness-95 contrast-105" 
            />
            {/* Mode A Hero Dark: localized gradient preserving nursery clarity while keeping text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-black/35 to-brand-forest/85"></div>
          </div>

          {/* Structured Landscape Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-10 py-8 flex flex-col justify-between h-full">
            {/* Top Label */}
            <div className="flex items-center justify-between border-b border-brand-gold/40 pb-3">
              <span className="text-brand-gold font-sans text-xs tracking-[0.25em] uppercase font-bold">Part II — Botanical Catalog</span>
              <span className="text-brand-gold font-arabic text-sm font-bold" dir="rtl">الجزء الثاني — الكتالوج النباتي الشامل</span>
            </div>

            {/* Center Announcement */}
            <div className="text-center my-auto bg-black/45 backdrop-blur-xs p-6 rounded-2xl border border-white/20 shadow-2xl">
              <EditableText as="h1" className="text-white font-sans text-2xl font-bold tracking-wider uppercase mb-1">
                The Rayat Najd Plant Collection
              </EditableText>
              <EditableText as="h2" className="text-brand-gold font-arabic text-2xl font-bold mb-3" dir="rtl">
                المجموعة النباتية الشاملة — رايات نجد
              </EditableText>
              <div className="w-24 h-0.5 bg-brand-gold/60 mx-auto mb-3"></div>
              <div className="grid grid-cols-2 gap-8 text-[11.5px] text-brand-beige max-w-3xl mx-auto">
                <EditableText as="p" className="text-justify font-sans leading-relaxed">
                  A curated collection of climate-adapted flora cultivated in our Riyadh nurseries to support national afforestation, giga-projects, and municipal developments.
                </EditableText>
                <EditableText as="p" className="text-justify font-arabic leading-relaxed" dir="rtl">
                  مجموعة شاملة من النباتات والأشجار المتكيفة مناخياً، تم إكثارها وتأهيلها في مشاتلنا بالرياض لتلبية متطلبات المشاريع الكبرى ومبادرات التخضير الوطنية.
                </EditableText>
              </div>
            </div>

            {/* 9 Category Visual Badges Grid */}
            <div className="grid grid-cols-9 gap-2 text-center pt-3 border-t border-white/20">
              {categories.map((c, idx) => (
                <div key={idx} className="bg-black/30 backdrop-blur-sm p-1.5 rounded-lg border border-white/10 flex flex-col justify-center">
                  <span className="text-brand-gold font-arabic text-[10.5px] font-bold truncate" dir="rtl">{c.ar}</span>
                  <span className="text-white/80 font-sans text-[7.5px] uppercase tracking-wider truncate">{c.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Nine Categories (1 Category Cover + 1 Product Grid Page each = 18 Pages) */}
      {categories.map((cat, index) => {
        const coverPageNum = startPageNumber + 1 + (index * 2);
        const productPageNum = coverPageNum + 1;

        return (
          <React.Fragment key={index}>
            {/* Category Cover Page */}
            <Section 
              className="bg-brand-forest text-white !p-0" 
              pageNumber={coverPageNum} 
              noSafeArea={true}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Mode C: Dominant Category Plant Cover Photo with minimal overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.img} 
                    alt={cat.en} 
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-105" 
                  />
                  {/* Subtle edge gradients only: middle 60% is unobstructed photography */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/60"></div>
                </div>

                {/* Localized Category Title & Subtitle */}
                <div className="relative z-10 w-full max-w-4xl mx-auto px-8 flex flex-col items-center justify-center text-center">
                  <div className="bg-black/55 backdrop-blur-xs px-10 py-6 rounded-2xl border border-white/20 shadow-2xl">
                    <span className="text-brand-gold font-sans text-[10px] tracking-[0.3em] uppercase font-bold block mb-1">
                      Botanical Category 0{index + 1}
                    </span>
                    <EditableText as="h1" className="text-white font-sans text-3xl font-bold tracking-wide uppercase mb-1">
                      {cat.en}
                    </EditableText>
                    <EditableText as="h2" className="text-brand-gold font-arabic text-3xl font-bold mb-3" dir="rtl">
                      {cat.ar}
                    </EditableText>
                    <div className="w-20 h-0.5 bg-brand-gold/60 mx-auto mb-3"></div>
                    <div className="grid grid-cols-2 gap-6 text-[15px] text-brand-beige">
                      <EditableText as="p" className="text-justify font-sans leading-snug">{cat.descEn}</EditableText>
                      <EditableText as="p" className="text-justify font-arabic leading-snug" dir="rtl">{cat.descAr}</EditableText>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Product Grid Page: 4 Large, Image-Led Cards */}
            <Section 
              className="bg-brand-beige border-b border-brand-warm/10" 
              pageNumber={productPageNum} 
              bgType="pattern"
            >
              <div className="flex flex-col h-full justify-between py-2">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-gold/30 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-brand-forest font-bold font-sans">Category 0{index + 1} •</span>
                    <EditableText as="h3" className="typo-h1 !text-xl font-bold !mb-0">{cat.en}</EditableText>
                  </div>
                  <div className="flex items-center gap-2" dir="rtl">
                    <EditableText as="h3" className="typo-h1 font-arabic !text-xl font-bold !mb-0">{cat.ar}</EditableText>
                    <span className="text-xs font-arabic text-brand-forest font-bold">• رايات نجد</span>
                  </div>
                </div>

                {/* 4-Card Landscape Grid (RTL: Item 0 Rightmost -> Item 3 Leftmost) */}
                <div className="grid grid-cols-4 gap-4 my-auto items-stretch" dir="rtl">
                  {cat.items.map((item, i) => (
                    <ProductCard
                      key={i}
                      titleEn={item.titleEn}
                      titleAr={item.titleAr}
                      scientific={item.scientific}
                      descEn={item.indicators}
                      descAr={item.indicatorsAr}
                      imageUrl={item.img}
                    />
                  ))}
                </div>

                {/* Sub Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-warm/15 text-[9px] text-brand-dark/50 uppercase tracking-widest font-sans">
                  <span>Rayat Najd Verified Botanical Catalog</span>
                  <span className="font-arabic" dir="rtl">أصناف نباتية مؤهلة للمشاريع الكبرى</span>
                </div>
              </div>
            </Section>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function ProductCard({ 
  titleEn,
  titleAr,
  scientific,
  descEn,
  descAr,
  imageUrl
}: { 
  titleEn: string;
  titleAr: string;
  scientific: string;
  descEn: string;
  descAr: string;
  imageUrl?: string;
  key?: React.Key;
}) {
  return (
    <div className="card-surface card-surface-hover flex flex-col justify-between overflow-hidden">
      {/* 1. PHOTOGRAPH (top of card) */}
      <div className="h-36 relative bg-brand-light overflow-hidden shrink-0 border-b border-brand-warm/10">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={titleEn} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <ProductImagePlaceholder className="w-full h-full" />
        )}
      </div>

      {/* 2. Plant Information */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Names Row */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <EditableText as="h4" className="card-title-ar text-[13px]" dir="rtl">{titleAr}</EditableText>
            <EditableText as="h4" className="card-title-en text-[11.5px]">{titleEn}</EditableText>
          </div>

          {/* Scientific Botanical Name */}
          <EditableText as="p" className="card-scientific text-[12.5px] text-center my-1.5">
            {scientific}
          </EditableText>

          {/* Key Indicators / Characteristics */}
          <div className="space-y-1 pt-1.5 border-t border-brand-warm/10">
            <EditableText as="p" className="card-body-en text-[10px] leading-snug text-center">
              {descEn}
            </EditableText>
            <EditableText as="p" className="card-body-ar text-[11px] leading-snug text-center" dir="rtl">
              {descAr}
            </EditableText>
          </div>
        </div>

        {/* Bottom Tag / Verification */}
        <div className="mt-2.5 pt-1.5 border-t border-brand-warm/10 flex items-center justify-between text-[8px] uppercase tracking-widest text-brand-forest font-bold">
          <span>Acclimatized Variety</span>
          <span className="font-arabic" dir="rtl">صنف متكيف ومقسى</span>
        </div>
      </div>
    </div>
  );
}
