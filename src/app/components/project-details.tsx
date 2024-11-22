"use client";

import Gallery from "./gallery";
import { Link } from "@/navigation";
import {
  DescriptionWp,
  GalleryProjectWp,
} from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  first_gallery: GalleryProjectWp[];
  second_galley: GalleryProjectWp[];
  prevProject: { slug: string } | null;
  nextProject: { slug: string } | null;
  allCategories: string[];
  currentCategories: { id: number; name: string; slug: string }[];
  information: DescriptionWp;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const {
    second_galley,
    prevProject,
    nextProject,
    allCategories,
    currentCategories,
    first_gallery,
    information,
  } = props;

  const t = useTranslations();

  return (
    <div className="flex flex-col">
      {first_gallery.length > 0 && (
        <section>
          <Gallery gallery={first_gallery} />
        </section>
      )}
      <div className="pt-[20px] lg:pt-[30px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <h3 className="font-mediumFont tracking-[-0.01em]">{information.title}</h3>
        <div
          className="font-regularFont lg:w-[670px]"
          dangerouslySetInnerHTML={{
            __html: information.description,
          }}
        />
      </div>
      {second_galley.length > 0 && (
        <section className="pt-[25px] lg:pt-[120px]">
          <Gallery gallery={second_galley} />
        </section>
      )}
      <section className="hidden lg:block pt-[30px] pb-[65px]">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            {/* {prevProject && ( */}
            <Link href={`/projects/${prevProject?.slug}`}>
              <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                ANTERIOR
              </button>
            </Link>
            {/* )} */}
          </div>
          <div className="flex items-start">
            {/* {nextProject && ( */}
            <Link href={`/projects/${nextProject?.slug || ""}`}>
              <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                SIGUIENTE
              </button>
            </Link>
            {/* )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
