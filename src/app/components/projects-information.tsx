"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { DescriptionWp, WorkWp } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import Items from "./items";
import ProjectView from "./project-view";

interface ProjectsInformationDetails {
  information: DescriptionWp;
  work_processes: WorkWp;
  allProjects: WordPressFrontendPage[];
}

export function ProjectsInformation(props: ProjectsInformationDetails) {
  const { information, work_processes, allProjects } = props;

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
    <div className="container">
      <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <div
          data-aos="fade-up"
          className="wp-h3"
          dangerouslySetInnerHTML={{
            __html: information.title,
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
        <p
          data-aos="fade-up"
          className="font-semiBoldFont text-[16px] leading-[16px] uppercase lg:normal-case lg:text-[20px] lg:leading-[27px]"
        >
          {`${t("projects-page.projects")}`}
        </p>
        {allProjects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <hr
              className={`hr-draw border-t border-black border-1 ${
                index === 0 ? "my-[16px]" : "mt-[25px] mb-[16px]"
              }`}
            />{" "}
            <ProjectView
              image={project.acf.preview_project.feature_image.url}
              title={project.acf.preview_project.title}
              date={project.acf.preview_project.date}
              url={`/projects/${project.slug}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectsInformation;
