import {
  getChildPages,
  getWordPressCustomPage,
} from "@/app/_services/api";
import Cover from "@/app/components/cover";
import ProjectsInformation from "@/app/components/projects-information";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JSDOM } from "jsdom";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "projects");
  const t = await getTranslations();
  if (page) {
    const { acf } = page;
    const { page_projects } = acf;
    const title = `Kuhlmann & Partner - ${t("projects-page.projects")}`;

    const description = page_projects.information
      ? new JSDOM(page_projects.information.description).window.document.body
          .textContent || ""
      : "Default description";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        siteName: "Kuhlmann & Partner",
        locale: locale,
      },
    };
  } else {
    return {
      title: "Kuhlmann & Partner",
    };
  }
}

async function Projects(nextParams: {
  params: { locale: "es" | "de" | "en" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "projects");
  const { acf } = data;
  const { page_projects } = acf;
  const t = await getTranslations();
  const page = "projects";
  const parentSlug =
    locale === "es"
      ? "spanish-pages"
      : locale === "de"
      ? "german-pages"
      : "english-pages";
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
