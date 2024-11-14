import React from "react";
import Footer from "./footer";

async function AppFooter(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const linksFooter = [
    { title: `Inicio`, url: "/projects" },
    { title: `Proyectos`, url: "/projects" },
    { title: `Nosotros`, url: `/about-us` },
    { title: `Blog`, url: "/blog" },
    { title: `Contacto`, url: "/blog" },
  ];

  return <Footer links={linksFooter}/>;
}

export default AppFooter;
