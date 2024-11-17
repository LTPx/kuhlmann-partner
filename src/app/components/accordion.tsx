"use client";
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
}

export function Accordion(props: AccordionProps) {
  const { link, title, expanded, icon, image, className, date, description } =
    props;
  const [isOpen, setIsOpen] = useState(!!expanded);

  return (
    <div className="relative border border-t-[#000000] last:border-b-[#000000]">
      <button
        className={`w-full flex items-center relative ${className} 
          ${isOpen ? "bg-black text-white" : "hover:bg-black hover:text-white"}
          transition-colors duration-300 ease-in-out group`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <p
          className={`pl-[12px] lg:pl-[30px] tracking-[-0.015em] font-medium text-[20px] leading-[30px] lg:text-[40px] lg:leading-[40px] py-[12px] lg:py-[40px] text-start 
          ${isOpen ? "text-white" : "group-hover:text-white"}`}
        >
          <span className="lg:hidden"> {date} - </span>
          {title}
        </p>
        <div className="hidden lg:block ml-auto pr-[30px]">
          <span
            className={`uppercase inline-block flex items-center justify-center font-medium text-[20px] leading-[25px] cursor-pointer border 
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
          <div className="container flex flex-col gap-[11px] lg:grid lg:grid-cols-2">
            <img
              src={image}
              className="object-cover h-[260px] lg:h-[555px] w-full order-first lg:order-last"
            />
            <div className="flex flex-col gap-[50px] lg:gap-[0px] lg:justify-between">
              <p className="lg:w-[660px] font-regular text-[16px] leading-[22px] lg:text-[18px] lg:leading-[26px]">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen. Lorem Ipsum es simplemente el
                texto de relleno de las imprentas y archivos de texto. Lorem
                Ipsum ha sido el texto de relleno estándar de las industrias
                desde el año 1500, cuando un impresor (N. del T. persona que se
                dedica a la imprenta) desconocido usó una galería de textos y
                los mezcló de tal manera que logró hacer un libro de textos
                especimen. Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                relleno estándar de las industrias desde el año 1500, cuando un
                impresor (N. del T. persona que se dedica a la imprenta)
                desconocido usó una galería de textos y los mezcló de tal manera
                que logró hacer un libro de textos especimen.
              </p>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-end lg:justify-start"
              >
                <img
                  className="cursor-pointer h-[21px] lg:h-[35px]"
                  src="/images/icons/close-accordion.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimateHeight>
    </div>
  );
}

export default Accordion;
