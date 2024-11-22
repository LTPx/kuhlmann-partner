"use client";

import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import LanguageSelector from "./selector-languages";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ContactWindow from "./contact-window";

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
    es: isProjectRoute ? `/es/projects/${currentSlug}` : `/es/${currentSlug}`,
    en: isProjectRoute ? `/en/projects/${currentSlug}` : `/en/${currentSlug}`,
    de: isProjectRoute ? `/de/projects/${currentSlug}` : `/de/${currentSlug}`,
  };
  const t = useTranslations();

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
            {t("header.contact")}
          </button>
          <LanguageSelector urlsTranslate={linksSelector} />
        </div>
      </header>
      <ContactWindow
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
}

export default Header;
