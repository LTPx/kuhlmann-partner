"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DescriptionWp, WorkWp } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import Items from "./items";
import ProjectView from "./project-view";
import { getUniqueCategories } from "../utils";

interface ProjectsInformationDetails {
  information: DescriptionWp;
  work_processes: WorkWp;
  allProjects: WordPressFrontendPage[];
}

export function ProjectsInformation(props: ProjectsInformationDetails) {
  const { information, work_processes, allProjects } = props;
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [filteredProjects, setFilteredProjects] =
    useState<WordPressFrontendPage[]>(allProjects);
  const [isFiltered, setIsFiltered] = useState(true);
  const categories = getUniqueCategories(allProjects);
  const t = useTranslations();

  const handleClick = (id: number) => {
    setSelectedOption(id);
    const filterProjects = allProjects.filter((project) => {
      const categories = project._embedded["wp:term"].categories;
      return categories.find((category) => category.id === id);
    });
    const results = id === -1 ? allProjects : filterProjects;

    setIsFiltered(false);
    setTimeout(() => {
      setFilteredProjects(results);
      setIsFiltered(true);
    }, 300);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      offset: 80,
      once: false,
    });
  }, []);

  useEffect(() => {
    setFilteredProjects(allProjects);
    setIsFiltered(true);
  }, [allProjects]);

  return (
    <div className="container">
      <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <div
          data-aos="fade-up"
          className="wp-h3 lg:w-[97%]"
          dangerouslySetInnerHTML={{
            __html: information.title
              .replace(/<p>/g, "<h3>")
              .replace(/<\/p>/g, "</h3>"),
          }}
        />
        <div
          data-aos="fade-up"
          className="font-regularFont lg:pr-[160px]"
          dangerouslySetInnerHTML={{
            __html: information.description,
          }}
        />
      </section>
      <section data-aos="fade-up" className="pt-[30px] lg:pt-[80px]">
        <hr className="border-t border-black border-1 mb-[10px] lg:mb-[16px] hr-draw" />
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <h3
            data-aos="fade-up"
            className="font-mediumFont tracking-[-0.01em] pb-[15px] lg:pb-[0px]"
          >
            {work_processes.title}
          </h3>
          <div className="flex flex-col gap-[40px] lg:gap-[47px]">
            {work_processes.processes.map((process, index) => (
              <div key={index} data-aos="fade-up">
                <Items
                  count={index < 9 ? `0${index + 1}` : `${index + 1}`}
                  title={process.title}
                  description={process.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-[50px] lg:pt-[95px] pb-[50px] lg:pb-[0px]">
        <div data-aos="fade-up" className="w-full overflow-hidden">
          <div className="flex items-center gap-[14px] lg:gap-[11px] overflow-x-scroll no-scrollbar">
            <p className="font-mediumFont text-[16px] leading-[16px] uppercase lg:text-[18px] lg:leading-[18px]">
              {`${t("projects-page.projects")}`}
            </p>
            <button
              onClick={() => handleClick(-1)}
              className={`font-mediumFont uppercase hover:bg-black hover:text-white transition-colors duration-300 ease-in-out font-medium text-[15px] leading-[18px] lg:text-[18px] lg:leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] ${
                selectedOption === -1
                  ? "select-option rounded-full bg-black text-white"
                  : "text-black rounded-full"
              } whitespace-nowrap min-w-[120px]`}
            >
              {`${t("projects-page.all")}`}
            </button>
            {categories.map((option, index) => (
              <button
                key={index}
                onClick={() => handleClick(option.id)}
                className={`font-mediumFont hover:bg-black hover:text-white transition-colors duration-300 ease-in-out font-medium text-[15px] leading-[18px] lg:text-[18px] lg:leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] ${
                  selectedOption === option.id
                    ? "select-option rounded-full bg-black text-white"
                    : "text-black rounded-full"
                } whitespace-nowrap`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isFiltered ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div key={index} data-aos="fade-up">
              <hr
                className={`hr-draw border-t border-black border-1 ${
                  index === 0 ? "my-[16px]" : "mt-[25px] mb-[16px]"
                }`}
              />
              <ProjectView
                image={project.acf.preview_project.feature_image.url}
                title={project.acf.preview_project.title}
                category={
                  project._embedded?.["wp:term"]?.categories?.[0]?.title
                    ?.rendered || "Sin categoría"
                }
                date={project.acf.preview_project.date}
                url={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectsInformation;
