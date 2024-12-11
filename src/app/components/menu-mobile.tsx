"use client";

import React, { useState } from "react";
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
}

export function MenuMobile(props: MenuMobileProps) {
  const { links, languages } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations();
  const [showContact, setShowContact] = useState(false);
  const currentPath = usePathname();

  const handleContactClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <>
      <header className="block lg:hidden bg-[#DCB93C] sticky top-0 z-[1000]">
        <div
          className={
            "px-[12px] flex bg-[#DCB93C] justify-between items-center h-[50px]"
          }
        >
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
        <div className="h-full flex flex-col justify-between">
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
            <div className="flex flex-col justify-between">
              <nav>
                <hr className="border-t border-black border-1" />
                {links.map((link, index) => (
                  <div key={index}>
                    <Link
                      className="pl-[20px] block font-mediumFont text-[25px] leading-[60px]"
                      href={link.url}
                      key={index}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <hr className="border-t border-black border-1" />
                  </div>
                ))}
                <div
                  onClick={handleContactClick}
                  className="pl-[20px] block font-mediumFont text-[25px] leading-[60px]"
                >
                  {t("footer.contact")}
                </div>
                <hr className="border-t border-black border-1" />
                <div className="pl-[20px] block font-mediumFont">
                  <LanguageSelector
                    urlsTranslate={{
                      es: "/es" + currentPath,
                      de: "/de" + currentPath,
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
                      href={"/"}
                      target="_blank"
                      className="underline text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                    >
                      Instagram
                    </Link>
                    <Link
                      href={"/"}
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
