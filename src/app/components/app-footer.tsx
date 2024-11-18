import React from "react";
import Footer from "./footer";

async function AppFooter(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;


  return <Footer/>;
}

export default AppFooter;
