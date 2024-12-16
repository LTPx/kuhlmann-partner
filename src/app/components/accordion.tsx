"use client";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

interface AccordionProps {
  title: string;
  expanded?: boolean;
  icon?: string;
  image?: string;
  className?: string;
  date?: string;
  link?: string;
  description?: string;
  url?: string;
}

export function Accordion(props: AccordionProps) {
  const {
    link,
    url,
    title,
    expanded,
    icon,
    image,
    className,
    date,
    description,
  } = props;
  const [isOpen, setIsOpen] = useState(!!expanded);
  const t = useTranslations();

  return (
    <div className="relative border border-t-[#000000] last:border-b-[#000000]">
      <button
        className={`w-full flex items-center relative ${className} 
          ${
            isOpen
              ? "bg-black text-white-beige"
              : "hover:bg-black hover:text-white-beige"
          }
          transition-colors duration-300 ease-in-out group`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <p
          className={`pl-[12px] lg:pl-[30px] tracking-[-0.015em] font-mediumFont text-[20px] leading-[30px] lg:text-[40px] lg:leading-[40px] py-[12px] lg:py-[40px] text-start 
          ${isOpen ? "text-white-beige" : "group-hover:text-white-beige"}`}
        >
          <span className="lg:hidden"> {date} - </span>
          {title}
        </p>
        <div className="hidden lg:block ml-auto pr-[30px]">
          <span
            className={`uppercase inline-block flex items-center justify-center font-mediumFont text-[20px] leading-[25px] cursor-pointer border 
            ${isOpen ? "border-white text-white" : "border-black"} 
            h-[35px] px-[15px] rounded-full 
            ${isOpen ? "" : "group-hover:border-white group-hover:text-white"}`}
          >
            {date}
          </span>
        </div>
      </button>

      <AnimateHeight duration={300} height={isOpen ? "auto" : 0}>
        <div className="pt-[15px] lg:pt-[20px] pb-[20px] lg:pb-[30px]">
          <div
            className={`container flex flex-col lg:grid ${
              image ? "lg:grid-cols-2" : "lg:grid-cols-1"
            } gap-[50px] lg:gap-[0px]`}
          >
            {image && (
              <Link href={url || ""} className="order-first lg:order-last">
                <img
                  src={image}
                  className="object-cover h-[260px] lg:h-[555px] w-full order-first lg:order-last"
                />
              </Link>
            )}
            <div className="flex flex-col gap-[50px] lg:gap-[0px] lg:justify-between">
              {description && (
                <div
                  className={`description-blog font-regularFont text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px] ${
                    image ? "lg:pr-[160px]" : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: description || "",
                  }}
                />
              )}
              <div
                className={`flex justify-end lg:justify-start ${
                  !image ? "pt-[30px]" : ""
                }`}
              >
                <Link href={url || ""}>
                  <button className="hover:text-white uppercase group flex hover:bg-black items-center justify-center h-[21px] border border-black rounded-[16px] lg:h-[35px] px-[8px] lg:px-[14px] flex justify-end lg:justify-start">
                    {t("blog.see_more")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
}

export default Accordion;
