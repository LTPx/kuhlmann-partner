import { ImageAcf, Project } from "./wordpress-page";

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
  projects: ProjectWp[];
  banner: BannerHomeWp
  work_with_us: DescriptionWp[];
  last_image: ImageAcf;
  feature_projects: FeatureProjectWp[];
}

export interface DescriptionWp {
  title: string;
  description: string;
}

export interface ProjectWp {
  project: string;
  title: string;
  feature_image: ImageAcf;
  hover_image: ImageAcf;
  date: string;
  short_description: string;
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
  date: string;
  cover_page: MediaFileWp;
  first_section: DescriptionWp;
  first_gallery: GalleryProjectWp[];
  second_section: DescriptionWp;
  second_gallery: GalleryProjectWp[];
  third_section: DescriptionWp;
  gif_process_images: ImageAcf;
}

export interface PreviewProyectWp {
  title: string;
  date: string;
  feature_image: ImageAcf;
  hover_image: ImageAcf;
  short_description: string;
}


export interface IndividualBlogWP {
  information: DescriptionWp;
}

export interface PreviewBlogWP {
  title_blog: string;
  image: ImageAcf;
  short_description: string;
}

export interface AboutUsPageWp {
  cover_page: MediaFileWp;
  first_section: DescriptionWp;
  image: ImageAcf;
  second_section: DescriptionWp;
  last_image: ImageAcf;
}

export interface FeatureProjectWp {
  project: ProjectPostWp;
}

export interface ProjectPostWp {
  ID: number;
  post_title: string;
  imageUrl: string;
}