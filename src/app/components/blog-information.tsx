"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { IndividualBlogWP } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface BlogInformationDetails {
  date: string;
  title: string;
  individual_blog: IndividualBlogWP[];
}

export function BlogInformation(props: BlogInformationDetails) {
  const { date, title, individual_blog } = props;

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
    <div className="container blog-slug-page">
      <div data-aos="fade-up" className="pt-[40px]">
        <p className="font-mediumFont text-[25px] leading-[30px] lg:text-[40px] lg:leading-[60px] tracking-[-0.03em] opacity-20">
          {date}
        </p>
        <h1 className="text-[25px] leading-[30px] font-mediumFont lg:text-[80px] lg:leading-[85px] tracking-[-0.03em]">
          {title}
        </h1>
      </div>
      <section className="pt-[30px] lg:pt-[141px] flex flex-col gap-[50px] pb-[70px]">
        {individual_blog.map((blog, index) => (
          <div key={index} data-aos="fade-up">
            <hr className="hidden lg:block border-t border-black border-1 hr-draw" />
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

export default BlogInformation;
