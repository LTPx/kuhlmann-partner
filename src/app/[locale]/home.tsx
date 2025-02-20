import React from "react";
import Cover from "../components/cover";
import { HomePageWp } from "../_interfaces/wordpress-components";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import HomeInformation from "../components/home-information";

interface Props {
  locale: "es" | "en" | "de";
  home_information: HomePageWp;
  projects: WordPressFrontendPage[];
}

function Home(props: Props) {
  const { home_information, projects, locale } = props;

  const titles = {
    de: "Spezialisiert auf hochqualitativen Neubau und Renovierung auf Mallorca",
    es: "Especializados en obra nueva y reformas de alta calidad en Mallorca",
    en: "Specializing in high quality new construction and renovation in Mallorca",
  };

  return (
    <div className="flex flex-col">
      <Cover media={home_information.cover_page}>
        <div className="flex flex-col">
          <h1 className="hidden">{titles[locale]}</h1>
          <h2 className="hidden">Kuhlmann & Partner</h2>
          <img
            className="w-[315px] h-[125px] lg:w-[630px] lg:h-[254px]"
            src="/images/logo-white.svg"
          />
        </div>
      </Cover>
      <HomeInformation
        first_section={home_information.first_section}
        second_section={home_information.second_section}
        image={home_information.image}
        last_image={home_information.last_image}
        projects={projects}
        banner={home_information.banner}
        work_with_us={home_information.work_with_us}
      />
    </div>
  );
}

export default Home;
