import React from "react";
import Cover from "../components/cover";
import ProjectCard from "../components/project-card";
import { HomePageWp } from "../_interfaces/wordpress-components";
import { getTranslations } from "next-intl/server";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import { WordPressProject } from "../_interfaces/wordpress-project";

interface Props {
  home_information: HomePageWp;
  projects: WordPressFrontendPage[];
}

async function Home(props: Props) {
  const { home_information, projects } = props;
  const t = await getTranslations();

  return (
    <div className="flex flex-col">
      <Cover media={home_information.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">Kuhlmann & Partner</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[31px] lg:pt-[41px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <div
            className="wp-h3"
            dangerouslySetInnerHTML={{
              __html: home_information.first_section.title,
            }}
          />
          <div
            className="font-regularFont"
            dangerouslySetInnerHTML={{
              __html: home_information.first_section.description,
            }}
          />
        </section>
        <section className="hidden lg:block pt-[40px]">
          <img
            src={home_information.image.url}
            className="object-cover h-[800px] w-full"
          />
        </section>
        <section className="pt-[31px] lg:pt-[40px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <div
            className="wp-h3"
            dangerouslySetInnerHTML={{
              __html: home_information.second_section.title,
            }}
          />
          <div
            className="font-regularFont lg:w-[590px]"
            dangerouslySetInnerHTML={{
              __html: home_information.second_section.description,
            }}
          />
        </section>
        <section className="pt-[48px] lg:pt-[83px]">
          {projects.map((project, index) => (
            <div key={index} className={index !== 0 ? "mt-[25px]" : ""}>
              <hr className="border-t border-black border-1 mb-[16px] lg:mb-[20px]" />
              <ProjectCard
                image={project.acf.preview_project.feature_image.url}
                imageHover={project.acf.preview_project.hover_image.url}
                title={project.acf.preview_project.title}
                description={project.acf.preview_project.short_description}
                date={project.acf.preview_project.date}
                url={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </section>
        <section className="pt-[55px] lg:pt-[40px]">
          <hr className="border-t border-black border-1 hidden lg:block lg:mb-[45px]" />
          <p className="font-mediumFont text-[40px] leading-[45px] lg:text-[75px] lg:leading-[78px] tracking-[-0.03em]">
            {home_information.banner.title}
            <br />
            <span className="opacity-30">{home_information.banner.date} </span>
          </p>
        </section>
        <section className="pt-[21px] lg:pt-[58px]">
          <hr className="border-t border-black border-1 mb-[21px] lg:mb-[32px]" />
          <p className="font-mediumFont text-[20px] leading-[26px] lg:text-[32px] lg:leading-[40px] tracking-[-0.01em]">
            {`${t("home-page.work-with-us")}`}
          </p>
          <div className="flex flex-col gap-[22px] lg:gap-[0px] lg:grid lg:grid-cols-2 lg:gap-y-[50px] pt-[25px] lg:pt-[45px]">
            {home_information.work_with_us.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:w-[550px] gap-[22px] lg:gap-[50px]"
              >
                <div className="flex flex-col">
                  <p className="font-semiBoldFont">{item.title}</p>
                  <div
                    className="font-regularFont"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-[20px] lg:pt-[40px] pb-[30px] lg:pb-[0px]">
          <img
            src={home_information.last_image.url}
            className="object-cover h-[270px] lg:h-[965px] w-full"
          />
        </section>
      </div>
    </div>
  );
}

function getSlugUrlWordPress(url: string) {
  const match = url.match(/\/([^\/]+)\/?$/);
  const slug = match ? match[1] : null;
  return slug || '#';
}

export default Home;
