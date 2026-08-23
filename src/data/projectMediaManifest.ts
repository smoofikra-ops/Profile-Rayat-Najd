import { ProjectRecord, ProjectMediaAsset, PROJECTS_DATA } from './projects';

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
