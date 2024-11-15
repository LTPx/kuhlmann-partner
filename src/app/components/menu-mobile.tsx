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
      <header className="block lg:hidden bg-page sticky top-0 z-[1000]">
        <div
          className={
            "px-[12px] flex bg-white justify-between items-center h-[50px]"
          }
        >
          <Link href="/" className="flex items-center">
            <p className="text-[20px] leading-[26px]">
              Local Architecture Studio.
            </p>
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
        className={`fixed top-0 left-0 z-[2000] w-full h-full bg-body transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="px-[11px] bg-white items-center flex justify-between h-[50px]">
              <Link href="/">
                <p className="text-[20px] leading-[26px]">
                  Local Architecture Studio.
                </p>
              </Link>
              <div className="border-l border-black h-[50px] flex justify-center items-center">
                <img
                  className="pl-[11px] cursor-pointer invert-custom"
                  src="/images/icons/less.svg"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </div>
            <hr className="border-t border-black border-1 mb-[5px]" />
            <div className="flex flex-col justify-between">
              <nav className="container">
                <p className="font-medium text-[14px] leading-[26px]">Menú</p>
                {links.map((link, index) => (
                  <Link
                    className="block font-medium text-[30px] leading-[40px] mb-[2px]"
                    href={link.url}
                    key={index}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <div className="mt-[70px]">
                  <hr className="border-t border-black border-1 mb-[0px]" />
                  <p className="font-medium text-[14px] leading-[26px] pb-[9px]">
                    {`${t("menu.write-to-us")}`}
                  </p>
                  <Link
                    href="mailto:info@fonamentsarch.com"
                    className="underline text-[30px] leading-[40px]"
                  >
                    info@fonamentsarch.com
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="mt-auto flex container pb-[10px]">
            <img
              className="cursor-pointer invert-custom "
              src="/images/fonaments.svg"
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuMobile;
