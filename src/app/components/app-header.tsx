"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Header from "./header";
import MenuMobile from "./menu-mobile";

function AppHeader(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const pathname = usePathname();
  const t = useTranslations();

  const linksHeader = [
    // { title: `${t('header.projects')}`, url: "/projects" },
    { title: `${t("header.about-us")}`, url: `/about-us` },
    { title: `${t("header.blog")}`, url: "/news" },
  ];

  const menuLinks = [
    // { title: `${t("header.projects")}`, url: "/projects" },
    { title: `${t("header.about-us")}`, url: `/about-us` },
    { title: `${t("header.blog")}`, url: "/news" },
    { title: `${t("header.gallery")}`, url: "/gallery" },
    // { title: `${t('header.contact')}`, url: "/" },
  ];

  const allLanguages = ["/es", "/en", "/de"];

  const filteredLinksHeader = allLanguages.includes(pathname)
    ? linksHeader.filter((link) => link.title !== "Fonaments")
    : linksHeader;

  const languages = [
    { name: "ESP", url: "/es" },
    { name: "ENG", url: "/en" },
    { name: "DEU", url: "/de" },
  ];

  return (
    <>
      <Header
        params={{
          locale: locale,
        }}
        links={linksHeader}
      />
      <MenuMobile locale={locale} languages={languages} links={menuLinks} />
    </>
  );
}

export default AppHeader;
