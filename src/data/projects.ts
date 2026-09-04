export interface ProjectMediaAsset {
  projectSlug: string;
  folder: string;
  filename: string;
  url: string;
  mediaType: 'image' | 'video';
  extension: string;
  isImage: boolean;
  isVideo: boolean;
  role: 'primary' | 'gallery' | 'video-poster';
  verified: boolean;
}

export type ProjectMediaStatus = 
  | 'verified-project-media' 
  | 'awaiting-bunny-sync' 
  | 'media-missing' 
  | 'video-only';

export interface ProjectRecord {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  locationAr: string;
  locationEn: string;
  category: 'afforestation' | 'care-and-maintenance' | 'vegetation-development';
  categoryAr: string;
  categoryEn: string;
  bunnyFolder: string;
  primaryImage: string | null;
  media: ProjectMediaAsset[];
  videos: ProjectMediaAsset[];
  gallery: ProjectMediaAsset[];
  mediaStatus: ProjectMediaStatus;
}

export const PROJECTS_DATA: ProjectRecord[] = [
  {
    id: "project-01-saiysad",
    slug: "saiysad-national-park-taif",
    nameAr: "مشروع تشجير منتزه سيسد الوطني – الطائف",
    nameEn: "Afforestation Project – Saiysad National Park, Taif",
    locationAr: "الطائف",
    locationEn: "Taif",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/saiysad-national-park-taif",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-02-khulais-university",
    slug: "university-of-khulais",
    nameAr: "مشروع تشجير جامعة خليص",
    nameEn: "Afforestation Project – University of Khulais",
    locationAr: "خليص",
    locationEn: "Khulais",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/university-of-khulais",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-03-makkah-desalination",
    slug: "makkah-desalination-plant",
    nameAr: "مشروع تشجير محطة التحلية – مكة المكرمة",
    nameEn: "Afforestation Project – Desalination Plant, Makkah",
    locationAr: "مكة المكرمة",
    locationEn: "Makkah",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/makkah-desalination-plant",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-04-al-shuqaiq-desalination",
    slug: "al-shuqaiq-desalination-plant",
    nameAr: "مشروع تشجير محطة التحلية – الشقيق",
    nameEn: "Afforestation Project – Desalination Plant, Al Shuqaiq",
    locationAr: "الشقيق",
    locationEn: "Al Shuqaiq",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/al-shuqaiq-desalination-plant",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-05-al-tumayrat",
    slug: "al-tumayrat-al-jouf",
    nameAr: "مشروع تشجير محطة التمريات – الجوف",
    nameEn: "Afforestation Project – Al Tumayrat Station, Al Jouf",
    locationAr: "الجوف",
    locationEn: "Al Jouf",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/al-tumayrat-al-jouf",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-06-umm-al-hamam",
    slug: "umm-al-hamam-al-asyah",
    nameAr: "مشروع فيضة أم حمام – الأسياح",
    nameEn: "Umm Al-Hamam Fayda Project – Al Asyah",
    locationAr: "الأسياح",
    locationEn: "Al Asyah",
    category: "vegetation-development",
    categoryAr: "تنمية الغطاء النباتي",
    categoryEn: "Greening / Vegetation Development",
    bunnyFolder: "03-projects/umm-al-hamam-al-asyah",
    primaryImage: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/umm-al-hamam-al-asyah/DJI_0446.jpg",
    media: [
      {
        projectSlug: "umm-al-hamam-al-asyah",
        folder: "03-projects/umm-al-hamam-al-asyah",
        filename: "DJI_0446.jpg",
        url: "https://nmolabs-cdn.b-cdn.net/Rayat-najd/03-projects/umm-al-hamam-al-asyah/DJI_0446.jpg",
        mediaType: "image",
        extension: "jpg",
        isImage: true,
        isVideo: false,
        role: "primary",
        verified: true
      }
    ],
    videos: [],
    gallery: [],
    mediaStatus: "verified-project-media"
  },
  {
    id: "project-07-umm-shalhah",
    slug: "umm-shalhah-al-asyah",
    nameAr: "مشروع فيضة أم شلفح – الأسياح",
    nameEn: "Umm Shalhah Fayda Project – Al Asyah",
    locationAr: "الأسياح",
    locationEn: "Al Asyah",
    category: "vegetation-development",
    categoryAr: "تنمية الغطاء النباتي",
    categoryEn: "Greening / Vegetation Development",
    bunnyFolder: "03-projects/umm-shalhah-al-asyah",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-08-al-owaisi",
    slug: "al-owaisi-care-maintenance",
    nameAr: "أعمال رعاية وصيانة مشروع العويصي",
    nameEn: "Care & Maintenance Works – Al Owaisi Project",
    locationAr: "العويصي",
    locationEn: "Al Owaisi",
    category: "care-and-maintenance",
    categoryAr: "رعاية وصيانة",
    categoryEn: "Care & Maintenance",
    bunnyFolder: "03-projects/al-owaisi-care-maintenance",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-09-umm-hamam-shalhah-maintenance",
    slug: "umm-al-hamam-umm-shalhah-care-maintenance",
    nameAr: "أعمال رعاية وصيانة مشروعي أم حمام وأم شلفح",
    nameEn: "Care & Maintenance Works – Umm Al-Hamam & Umm Shalhah Projects",
    locationAr: "الأسياح",
    locationEn: "Al Asyah",
    category: "care-and-maintenance",
    categoryAr: "رعاية وصيانة",
    categoryEn: "Care & Maintenance",
    bunnyFolder: "03-projects/umm-al-hamam-umm-shalhah-care-maintenance",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-10-al-jumum",
    slug: "al-jumum-afforestation",
    nameAr: "مشروع التشجير في الجموم",
    nameEn: "Afforestation Project – Al Jumum",
    locationAr: "الجموم",
    locationEn: "Al Jumum",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/al-jumum-afforestation",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-11-khulais-afforestation",
    slug: "khulais-afforestation",
    nameAr: "مشروع التشجير في خليص",
    nameEn: "Afforestation Project – Khulais",
    locationAr: "خليص",
    locationEn: "Khulais",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/khulais-afforestation",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-12-al-nafthah",
    slug: "al-nafthah-afforestation",
    nameAr: "مشروع التشجير في النفذة",
    nameEn: "Afforestation Project – Al Nafthah",
    locationAr: "النفذة",
    locationEn: "Al Nafthah",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/al-nafthah-afforestation",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  },
  {
    id: "project-13-al-aflaj",
    slug: "al-aflaj-afforestation",
    nameAr: "مشروع التشجير في الأفلاج",
    nameEn: "Afforestation Project – Al Aflaj",
    locationAr: "الأفلاج",
    locationEn: "Al Aflaj",
    category: "afforestation",
    categoryAr: "تشجير",
    categoryEn: "Afforestation",
    bunnyFolder: "03-projects/al-aflaj-afforestation",
    primaryImage: null,
    media: [],
    videos: [],
    gallery: [],
    mediaStatus: "awaiting-bunny-sync"
  }
];

/**
 * Root CDN URL for Rayat Najd Project Assets on Bunny CDN.
 * Provide root URL here when ready to synchronize media.
 */
export const BUNNY_PROJECTS_ROOT = "";

/**
 * Discovered project media manifest.
 * When sync is executed, this list is populated with discovered assets.
 */
export const PROJECT_MEDIA_MANIFEST: ProjectMediaAsset[] = [
  // Populated during Bunny CDN media synchronization
];

/**
 * Resolves a project's media assets from the manifest and root URL.
 */
export function getProjectWithSyncedMedia(project: ProjectRecord): ProjectRecord {
  if (!BUNNY_PROJECTS_ROOT) {
    return project;
  }

  const projectAssets = PROJECT_MEDIA_MANIFEST.filter(
    (asset) => asset.projectSlug === project.slug || asset.folder === project.bunnyFolder
  );

  if (projectAssets.length === 0) {
    return project;
  }

  const images = projectAssets.filter((a) => a.isImage);
  const videos = projectAssets.filter((a) => a.isVideo);
  const primaryAsset = images.find((a) => a.role === 'primary') || images[0];

  return {
    ...project,
    primaryImage: primaryAsset ? primaryAsset.url : null,
    media: projectAssets,
    videos: videos,
    gallery: images.filter((img) => img !== primaryAsset),
    mediaStatus: primaryAsset ? 'verified-project-media' : videos.length > 0 ? 'video-only' : 'media-missing'
  };
}

/**
 * Returns all projects with media synchronized if manifest and CDN root are available.
 */
export function getAllProjectsWithMedia(): ProjectRecord[] {
  return PROJECTS_DATA.map(getProjectWithSyncedMedia);
}
