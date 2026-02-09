"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { IndividualBlogWP } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface InformationPagesDetails {
  individual_blog: IndividualBlogWP[];
}

export function InformationPages(props: InformationPagesDetails) {
  const { individual_blog } = props;
  const pathname = usePathname();
  const t = useTranslations();

  const isCookiesPolicy = pathname.includes("cookies-policy");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      offset: 80,
      once: true,
    });
  }, []);

  return (
    <div className="container privacy-page">
      <section className="pt-[30px] lg:pt-[50px] flex flex-col gap-[50px] pb-[70px]">
        {individual_blog.map((blog, index) => (
          <div key={index} data-aos="fade-up">
            <div
              className={
                isCookiesPolicy
                  ? "flex flex-col gap-[30px]"
                  : "flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2"
              }
            >
              <div
                className="wp-h2 lg:pt-[15px]"
                dangerouslySetInnerHTML={{
                  __html: blog.information.title
                    .replace(/<p>/g, "<h2>")
                    .replace(/<\/p>/g, "</h2>"),
                }}
              />
              <div
                data-aos="fade-up"
                className={`blog-description font-regularFont lg:pt-[15px] ${
                  !isCookiesPolicy ? "lg:pr-[160px]" : ""
                }`}
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
