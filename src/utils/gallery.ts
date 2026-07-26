export type GalleryCategory = "exterior" | "fence" | "kitchen";

export interface GalleryPhoto {
  image: ImageMetadata;
  category: GalleryCategory;
  alt: string;
}

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "../../pictures/{Exterior Painting,Fence Painting,Kitchen}/*.{jpg,jpeg,png}",
  { eager: true },
);

const CATEGORY_BY_FOLDER: Record<string, GalleryCategory> = {
  "Exterior Painting": "exterior",
  "Fence Painting": "fence",
  Kitchen: "kitchen",
};

function toAlt(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

export const galleryPhotos: GalleryPhoto[] = Object.entries(modules)
  .map(([path, mod]) => {
    const match = path.match(/pictures\/([^/]+)\/([^/]+)$/);
    const folder = match?.[1] ?? "";
    const filename = match?.[2] ?? "";
    return {
      image: mod.default,
      category: CATEGORY_BY_FOLDER[folder] ?? "exterior",
      alt: toAlt(filename),
    };
  })
  .sort((a, b) => a.alt.localeCompare(b.alt));

export function byCategory(category: GalleryCategory | "all"): GalleryPhoto[] {
  return category === "all"
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === category);
}
