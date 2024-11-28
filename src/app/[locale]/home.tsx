import React from "react";
import Cover from "../components/cover";
import { HomePageWp } from "../_interfaces/wordpress-components";
import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import HomeInformation from "../components/home-information";

interface Props {
  home_information: HomePageWp;
  projects: WordPressFrontendPage[];
}

function Home(props: Props) {
  const { home_information, projects } = props;

  return (
    <div className="flex flex-col">
      <Cover media={home_information.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">
            Kuhlmann & Partner
          </h1>
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
