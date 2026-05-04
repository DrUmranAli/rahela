export interface GalleryImage {
  path: string;
  url: string;
  isStar: boolean;
  filename: string;
}

export function parseGlobImages(globResult: Record<string, string>): GalleryImage[] {
  return Object.entries(globResult).map(([path, url]) => {
    const filename = path.split('/').pop() || '';
    const isStar = filename.toLowerCase().includes('_star');
    return {
      path,
      url,
      isStar,
      filename
    };
  });
}
