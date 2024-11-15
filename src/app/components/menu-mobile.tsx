"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

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

  return (
    <>
      <header className="block lg:hidden bg-[#DCB93C] sticky top-0 z-[1000]">
        <div
          className={
            "px-[12px] flex bg-[#DCB93C] justify-between items-center h-[50px]"
          }
        >
          <Link href="/" className="flex items-center justify-center">
            <p className="text-[20px] leading-[26px]">Kuhlmann & Partner</p>
          </Link>
          <div className="border-l border-black h-[50px] flex justify-center items-center">
            <img
              className="pl-[11px] cursor-pointer invert-custom"
              src="/images/icons/menu.svg"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
        <hr className="border-t border-black border-1" />
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
              <Link href="/">
                <p className="text-[20px] leading-[26px]">Kuhlmann & Partner</p>
              </Link>
              <div className="border-l border-black h-[50px] flex justify-center items-center">
                <img
                  className="pl-[11px] cursor-pointer invert-custom"
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
                      className="pl-[20px] block font-medium text-[25px] leading-[60px]"
                      href={link.url}
                      key={index}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    <hr className="border-t border-black border-1" />
                  </div>
                ))}
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
    </>
  );
}

export default MenuMobile;
