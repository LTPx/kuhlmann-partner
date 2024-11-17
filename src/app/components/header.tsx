"use client";

import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import LanguageSelector from "./selector-languages";
import { useState } from "react";

interface LinksHeader {
  title: string;
  url: string;
}

interface Props {
  links: LinksHeader[];
}

export function Header(props: Props) {
  const { links } = props;
  const currentPath = usePathname();
  const currentSlug = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  const isProjectRoute = /^\/projects\/.+$/.test(currentPath);
  const linksSelector = {
    es: isProjectRoute ? `/es/` : `/es/${currentSlug}`,
    en: isProjectRoute ? `/en/` : `/en/${currentSlug}`,
    de: isProjectRoute ? `/de/` : `/de/${currentSlug}`,
  };

  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <>
      <header className="container sticky top-0 z-[1000] bg-[#DCB93C] hidden lg:grid grid-cols-3">
        <div className="flex gap-[30px]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`h-[54px] flex items-center justify-center cursor-pointer text-[20px] leading-[25px] tracking-[-0.01em] ${
                currentPath === link.url ? "underline" : "text-black"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-center items-center">
          <Link href={"/"}>
            <p className="text-[20px] leading-[25px] tracking-[-0.01em]">
              Kuhlmann & Partner
            </p>
          </Link>
        </div>
        <div className="flex gap-[30px] justify-end items-center">
          <button
            onClick={handleContactClick}
            className="h-[54px] flex items-center cursor-pointer text-[20px] leading-[25px] leading-[25px]"
          >
            Contacto
          </button>
          <LanguageSelector urlsTranslate={linksSelector} />
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#DCB93C] transform transition-transform duration-500 ease-in-out z-[9999] ${
          showContact ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container flex gap-[100px] h-full">
          <div
            onClick={() => setShowContact(!showContact)}
            className="flex justify-start pt-[30px]"
          >
            <img
              className="cursor-pointer h-[35px]"
              src="/images/icons/close-accordion.svg"
              alt="close"
            />
          </div>
          <div className="lg:w-[1215px] pt-[30px] flex flex-col gap-[70px]">
            <h1 className="leading-[85px]">
              Carrer d'Andalucía 1, Local 4 07620 Llucmajor Islas Baleares,
              España
            </h1>
            <div className="contact">
              <Link href={`tel:+34 971 718 996`}>
                <h1 className="leading-[85px]">+34 971 718 996</h1>
              </Link>
              <Link
                href={`mailto:info@kuhlmann-partner.com`}
                className="text-[15px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                <h1 className="leading-[85px]">+info@kuhlmann-partner.com</h1>
              </Link>
            </div>
            <div className="social">
              <Link
                href={"/"}
                target="_blank"
                className="text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                <h1 className="leading-[85px]">Instagram</h1>
              </Link>
              <Link
                href={"/"}
                target="_blank"
                className="text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                <h1 className="leading-[85px]">Facebook</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
