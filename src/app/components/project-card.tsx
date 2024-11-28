"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  imageHover?: string;
  image?: string;
  title?: string;
  date?: string;
  description?: string;
  className?: string;
  url?: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { imageHover, image, title, className, date, description, url } = props;
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-[15px] lg:gap-[0px] lg:grid lg:grid-cols-2 lg:h-[850px]">
      <div className="lg:w-[615px] flex flex-col justify-between">
        <div className="flex flex-col">
          <Link href={url || ""}>
            <p data-aos="fade-up" className="font-mediumFont text-[40px] leading-[45px] lg:text-[75px] lg:leading-[78px] tracking-[-0.03em]">
              {title}
              <br />
              <span className="opacity-30">{date}</span>
            </p>
          </Link>
        </div>
        <div data-aos="fade-up" className="hidden lg:flex flex-col gap-[50px]">
          {description && (
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          )}
          <Link data-aos="fade-up" className="inline-block" href={url || ""}>
            <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
              {`${t("projects-page.see_project")}`}
            </button>
          </Link>
        </div>
      </div>
      <Link href={url || ""} className={`group relative ${className}`}>
        <img
          src={image}
          alt="base image"
          className={`lg:absolute top-0 left-0 h-[500px] lg:h-[850px] w-full object-cover transition-opacity duration-500 ease-in-out transform ${
            imageHover ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />
        {imageHover && (
          <img
            src={imageHover}
            alt="hover image"
            className="absolute top-0 left-0 h-[500px] lg:h-[850px] w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </Link>
      <Link className="lg:hidden w-full" href={url || ""}>
        <button className="uppercase w-full hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[16px] leading-[16px] cursor-pointer border border-black h-[30px] rounded-full transition-colors duration-300 ease-in-out">
          {`${t("projects-page.see_project")}`}
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;
