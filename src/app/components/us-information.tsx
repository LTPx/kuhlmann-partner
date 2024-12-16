"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  DescriptionWp,
} from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ImageAcf, WordPressFrontendPage } from "../_interfaces/wordpress-page";

interface UsInformationProps {
  first_image: ImageAcf;
  first_section: DescriptionWp;
  second_section: DescriptionWp;
  last_image: ImageAcf;
}

export function UsInformation(props: UsInformationProps) {
  const {
    first_section,
    first_image,
    last_image,
    second_section
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
    <section data-aos="fade-up" className="pt-[30px] lg:pt-[27px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
      <h3 className="font-mediumFont tracking-[-0.01em]">
        {first_section.title}
      </h3>
      <div
        className="font-regularFont lg:pr-[160px]"
        dangerouslySetInnerHTML={{
          __html: first_section.description,
        }}
      />
    </section>
    <section data-aos="fade-up" className="pt-[30px] lg:pt-[45px]">
      <img
        src={first_image.url}
        className="object-cover h-[400px] lg:h-[1000px] w-full"
      />
    </section>
    <section data-aos="fade-up" className="pt-[30px] lg:pt-[27px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
      <h3 className="font-mediumFont tracking-[-0.01em]">
        {second_section.title}
      </h3>
      <div
        className="font-regularFont lg:pr-[160px]"
        dangerouslySetInnerHTML={{
          __html: second_section.description,
        }}
      />
    </section>
    <section data-aos="fade-up" className="pb-[50px] lg:pb-[0px] pt-[30px] lg:pt-[45px]">
      <img
        src={last_image.url}
        className="object-cover h-[400px] lg:h-[960px] w-full"
      />
    </section>
  </div>
  );
}

export default UsInformation;
