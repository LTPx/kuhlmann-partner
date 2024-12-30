"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BannerHomeWp,
  DescriptionWp,
} from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";
import { ImageAcf, WordPressFrontendPage } from "../_interfaces/wordpress-page";
import ProjectCard from "./project-card";

interface HomeInformationDetails {
  first_section: DescriptionWp;
  second_section: DescriptionWp;
  image: ImageAcf;
  last_image: ImageAcf;
  projects: WordPressFrontendPage[];
  banner: BannerHomeWp;
  work_with_us: DescriptionWp[];
}

export function HomeInformation(props: HomeInformationDetails) {
  const {
    first_section,
    second_section,
    image,
    last_image,
    projects,
    banner,
    work_with_us,
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
    <div className="container">
      <section
        className="pt-[31px] lg:pt-[41px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2"
      >
        <div
          data-aos="fade-up"
          className="wp-h3 lg:w-[97%]"
          dangerouslySetInnerHTML={{
            __html: first_section.title,
          }}
        />
        <div
          data-aos="fade-up"
          className="font-regularFont"
          dangerouslySetInnerHTML={{
            __html: first_section.description,
          }}
        />
      </section>
      <section data-aos="fade-up" className="hidden lg:block pt-[40px]">
        <img src={image.url} className="home-image" />
      </section>
      <section
        className="pt-[31px] lg:pt-[40px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2"
      >
        <div
          data-aos="fade-up"
          className="wp-h3 lg:w-[97%]"
          dangerouslySetInnerHTML={{
            __html: second_section.title,
          }}
        />
        <div
          data-aos="fade-up"
          className="font-regularFont lg:pr-[160px]"
          dangerouslySetInnerHTML={{
            __html: second_section.description,
          }}
        />
      </section>
      <section className="pt-[48px] lg:pt-[83px]">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={index !== 0 ? "mt-[25px]" : ""}
          >
            <hr className="border-t border-black border-1 mb-[16px] lg:mb-[25px] hr-draw" />
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
      <section data-aos="fade-up" className="pt-[55px] lg:pt-[40px]">
        <hr className="border-t border-black border-1 mb-[21px] lg:block lg:mb-[45px] hr-draw" />
        <p data-aos="fade-up" className="font-mediumFont text-[40px] leading-[45px] lg:text-[75px] lg:leading-[78px] tracking-[-0.03em]">
          {banner.title}
          <br />
          <span className="opacity-30">{banner.date} </span>
        </p>
      </section>
      <section data-aos="fade-up" className="pt-[21px] lg:pt-[58px]">
        <hr className="border-t border-black border-1 mb-[21px] lg:mb-[32px] hr-draw" />
        <p className="font-mediumFont text-[20px] leading-[26px] lg:text-[32px] lg:leading-[40px] tracking-[-0.01em]">
          {`${t("home-page.work-with-us")}`}
        </p>
        <div className="flex flex-col gap-[22px] lg:gap-[0px] lg:grid lg:grid-cols-2 lg:gap-y-[50px] pt-[25px] lg:pt-[45px]">
          {work_with_us.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col gap-[22px] lg:gap-[50px]"
            >
              <div className="flex flex-col">
                <p className="font-semiBoldFont">{item.title}</p>
                <div
                  className="work-information font-regularFont lg:pr-[160px]"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="pt-[20px] lg:pt-[40px] pb-[30px] lg:pb-[0px]"
      >
        <img
          src={last_image.url}
          className="object-cover h-[270px] lg:h-[965px] w-full"
        />
      </section>
    </div>
  );
}

export default HomeInformation;
