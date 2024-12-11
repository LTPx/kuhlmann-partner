"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IndividualBlogWP } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface InformationPagesDetails {
  individual_blog: IndividualBlogWP[];
}

export function InformationPages(props: InformationPagesDetails) {
  const { individual_blog } = props;

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
    <div className="container privacy-page">
      <section className="pt-[30px] lg:pt-[50px] flex flex-col gap-[50px] pb-[70px]">
        {individual_blog.map((blog, index) => (
          <div key={index} data-aos="fade-up">
            <div
              className="flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2"
              key={index}
            >
              <div
                className="wp-h2 lg:pt-[15px]"
                dangerouslySetInnerHTML={{
                  __html: blog.information.title,
                }}
              />
              <div
              data-aos="fade-up"
                className="blog-description font-regularFont lg:w-[677px] lg:pt-[15px]"
                dangerouslySetInnerHTML={{
                  __html: blog.information.description,
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default InformationPages;
