import {
  getChildPages,
  getWordPressCustomPage,
  getWordPressPage,
} from "@/app/_services/api";
import Cover from "@/app/components/cover";
import Items from "@/app/components/items";
import ProjectView from "@/app/components/project-view";
import ProjectsInformation from "@/app/components/projects-information";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function Projects(nextParams: { params: { locale: "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "projects");
  const { acf } = data;
  const { page_projects } = acf;
  const t = await getTranslations();
  const page = "projects";
  const parentSlug = locale === "es" ? "spanish-pages" : "german-pages";
  const allProjects = await getChildPages(page, locale, parentSlug);
  // allProjects.reverse();

  return (
    <div className="page-projects">
      <Cover media={page_projects.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">{`${t(
            "projects-page.projects"
          )}`}</h1>
        </div>
      </Cover>
      <ProjectsInformation
        information={page_projects.information}
        work_processes={page_projects.work_processes}
        allProjects={allProjects}
      />
    </div>
  );
}

export default Projects;
