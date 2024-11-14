import { ImageAcf } from "./wordpress-page";

export interface MediaFileWp {
  url: string;
  type: 'video' | 'image';
}

export interface GalleryProjectWp {
  image: ImageAcf;
  layout: string;
}