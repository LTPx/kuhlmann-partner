import { ImageAcf } from "./wordpress-page";

export interface MediaFileWp {
  url: string;
  type: 'video' | 'image';
}

export interface GalleryProjectWp {
  image: ImageAcf;
  layout: string;
}

export interface HomePageWp {
  cover_page: MediaFileWp;
  first_section: DescriptionWp;
  image: ImageAcf;
  second_section: DescriptionWp;
  banner: BannerHomeWp
  work_with_us: DescriptionWp[];
  last_image: ImageAcf;
}

export interface DescriptionWp {
  title: string;
  description: string;
}

export interface BannerHomeWp {
  title: string;
  date: string;
}

export interface ProjectsPageWp {
  cover_page: MediaFileWp;
  information: DescriptionWp;
  work_processes: WorkWp;
}

export interface WorkWp {
  title: string;
  processes: DescriptionWp[];
}

export interface IndividualProjectWp {
  title: string;
  cover_page: MediaFileWp;
  first_section: DescriptionWp;
  first_gallery: GalleryProjectWp[];
  second_section: DescriptionWp;
  second_gallery: GalleryProjectWp[];
}

export interface AboutUsPageWp {
  cover_page: MediaFileWp;
  first_section: DescriptionWp;
  image: ImageAcf;
  second_section: DescriptionWp;
  last_image: ImageAcf;
}