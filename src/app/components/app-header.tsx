"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Header from "./header";
import MenuMobile from "./menu-mobile";

function AppHeader() {
  const pathname = usePathname();
  const t = useTranslations();

  const linksHeader = [
    { title: `Proyectos`, url: "/projects" },
    { title: `Nosotros`, url: `/about-us` },
    { title: `Blog`, url: "/blog" },
  ];

  const menuLinks = [
    { title: `Proyectos`, url: "/" },
    { title: `Nosotros`, url: `/projects` },
    { title: `Blog`, url: "/studio" },
    { title: `${t('header.contact')}`, url: "/contact" },
  ];

  const allLanguages = ["/es", "/en", "/de"];

  const filteredLinksHeader = allLanguages.includes(pathname) 
  ? linksHeader.filter(link => link.title !== "Fonaments")
  : linksHeader;

  const languages = [
    { name: "ESP", url: "/es" },
    { name: "ENG", url: "/en" },
    { name: "DEU", url: "/de" }
  ]; 

  return (
    <>
      <Header links={linksHeader}/>
      <MenuMobile languages={languages} links={menuLinks} /> 
    </>
  );
}

export default AppHeader;
