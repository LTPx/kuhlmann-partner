"use client";

import Gallery from "./gallery";
import { Link } from "@/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  DescriptionWp,
  GalleryProjectWp,
} from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";

interface ProjectDetailsProps {
  first_gallery: GalleryProjectWp[];
  second_galley: GalleryProjectWp[];
  prevProject: { slug: string } | null;
  nextProject: { slug: string } | null;
  information: DescriptionWp;
  first_section: DescriptionWp;
  allProjects: WordPressFrontendPage[];
  slug: string;
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const {
    second_galley,
    prevProject,
    nextProject,
    first_gallery,
    information,
    first_section,
    allProjects,
    slug
  } = props;

  const t = useTranslations();
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      offset: 80,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col">
      <section data-aos="fade-up" className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <h3 className="font-mediumFont tracking-[-0.01em]">
          {first_section.title}
        </h3>
        <div
          className="font-regularFont lg:w-[670px]"
          dangerouslySetInnerHTML={{
            __html: first_section.description,
          }}
        />
      </section>
      {first_gallery.length > 0 && (
        <section className="pt-[20px] lg:pt-[120px]">
          <Gallery gallery={first_gallery} />
        </section>
      )}
      <div data-aos="fade-up" className="pt-[20px] lg:pt-[30px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <h3 className="font-mediumFont tracking-[-0.01em]">
          {information.title}
        </h3>
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
      <section data-aos="fade-up" className="hidden lg:block pt-[30px] pb-[65px]">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            {prevProject && (
              <Link href={`/projects/${prevProject?.slug}`}>
                <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                  {t("projects-page.prev")}
                </button>
              </Link>
            )}
          </div>
          <div className="flex items-start">
            {nextProject && (
              <Link href={`/projects/${nextProject?.slug || ""}`}>
                <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                  {t("projects-page.next")}
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
            <section className="pt-[55px] pb-[47px] lg:hidden">
        <p className="pl-[12px] font-mediumFont pb-[15px]">
        {`${t("projects-page.all_projects")}`}
        </p>
        {allProjects.map((project, index) => (
          <Link key={index} href={`/projects/${project?.slug}`}>
            <div
              className={`h-[65px] flex items-center border-1 border-black border-t ${
                index === allProjects.length - 1 ? "border-b" : ""
              } ${project.slug === slug ? "bg-black text-white" : ""}`}
            >
              <p className="font-mediumFont container text-[20px] leading-[40px]">
                <span className="opacity-25">
                  {project.acf.individual_project.date}
                </span>
                {"  "}
                {project.acf.individual_project.title}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default ProjectDetails;
