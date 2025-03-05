"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import ContactWindow from "./contact-window";
import LanguageSelector from "./selector-languages";

interface Link {
  title: string;
  url: string;
}

export interface MenuMobileProps {
  links: Link[];
  languages: { name: string; url: string }[];
  locale: "en" | "es" | "de";
}

export function MenuMobile({ links, languages, locale }: MenuMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const currentPath = usePathname();

  const categoriesByLanguage = {
    en: [
      { id: 659, title: t("categories.new_construction") },
      { id: 665, title: t("categories.reform") },
    ],
    es: [
      { id: 655, title: t("categories.new_construction") },
      { id: 661, title: t("categories.reform") },
    ],
    de: [
      { id: 657, title: t("categories.new_construction") },
      { id: 663, title: t("categories.reform") },
    ],
  };

  const categories = categoriesByLanguage[locale] || [];

  const handleContactClick = () => setShowContact((prev) => !prev);
  const toggleCategories = () => setShowCategories((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="block lg:hidden bg-[#DCB93C] sticky top-0 z-[1000]">
        <div className="px-[12px] flex bg-[#DCB93C] justify-between items-center h-[50px]">
          <div></div>
          <Link
            href="/"
            className="font-semiBoldFont flex items-center justify-center"
          >
            <p className="font-semiBoldFont text-[20px] leading-[26px]">
              Kuhlmann & Partner
            </p>
          </Link>
          <div className="h-[50px] flex justify-center items-center">
            <img
              className="cursor-pointer invert-custom"
              src="/images/icons/menu.svg"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[2000] bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 z-[2000] w-full h-full bg-[#DCB93C] transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between" ref={menuRef}>
          <div>
            <div className="px-[11px] bg-[#DCB93C] items-center flex justify-between h-[50px]">
              <div></div>
              <Link href="/">
                <p className="font-semiBoldFont text-[20px] leading-[26px]">
                  Kuhlmann & Partner
                </p>
              </Link>
              <div className="h-[50px] flex justify-center items-center">
                <img
                  className="cursor-pointer invert-custom"
                  src="/images/icons/menu.svg"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <nav>
                <hr className="border-t border-black border-1" />
                <div
                  onClick={toggleCategories}
                  className={`pl-[20px] font-mediumFont text-[25px] leading-[34px] cursor-pointer ${!showCategories ? "py-[13px]" : "pt-[11px]"}`}
                  >
                  {t("header.projects")}
                </div>
                {showCategories && (
                  <div className="pl-[20px]">
                    {categories.map((category) => (
                      <div key={category.id}>
                        <Link
                          className="block font-light text-[25px] leading-[34px]"
                          href={`/projects?category=${category.id}`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                <hr
                  className={`border-t border-black border-1 ${
                    showCategories ? "mt-[15px]" : ""
                  }`}
                />
                {links.map((link, index) => (
                  <div key={index}>
                    <Link
                      className="pl-[20px] block font-mediumFont text-[25px] leading-[60px]"
                      href={link.url}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <hr className="border-t border-black border-1" />
                  </div>
                ))}
                <div
                  onClick={handleContactClick}
                  className="pl-[20px] font-mediumFont text-[25px] leading-[60px] cursor-pointer"
                >
                  {t("footer.contact")}
                </div>
                <hr className="border-t border-black border-1" />

                <div className="pl-[20px] font-mediumFont">
                  <LanguageSelector
                    urlsTranslate={{
                      es: "/es" + currentPath,
                      de: "/de" + currentPath,
                      en: "/en" + currentPath,
                    }}
                  />
                </div>
                <hr className="border-t border-black border-1" />

                <div className="mt-[70px] pl-[20px] w-[250px]">
                  <Link className="w-auto" href={`tel:+34 971 718 996`}>
                    <p>+34 971 718 996</p>
                  </Link>
                  <Link
                    href={`mailto:info@kuhlmann-partner.com`}
                    className="underline leading-[22px]"
                  >
                    info@kuhlmann-partner.com
                  </Link>
                  <p className="pt-[22px]">
                    Carrer dAndalucía 1, Local 4 07620 Llucmajor Islas Baleares,
                    España
                  </p>
                  <div className="pt-[22px] flex flex-col">
                    <Link
                      href={"https://www.instagram.com/kuhlmannpartner"}
                      target="_blank"
                      className="underline text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                    >
                      Instagram
                    </Link>
                    <Link
                      href={"https://www.facebook.com/share/19xQvMyUpT"}
                      target="_blank"
                      className="underline text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <ContactWindow
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
}

export default MenuMobile;
