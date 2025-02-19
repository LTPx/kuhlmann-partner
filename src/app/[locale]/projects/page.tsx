import { getChildPages, getWordPressCustomPage } from "@/app/_services/api";
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
  const origin = "https://kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;

    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical
          ? seo_canonical
          : `${origin}/${locale}/projects`,
        languages: {
          en: `${origin}/en/projects`,
          es: `${origin}/es/projects`,
          de: `${origin}/de/projects`,
        },
      },
      openGraph: {
        title: seo_title,
        description: seo_desc,
        type: "website",
        siteName: "Kuhlmann & Partner",
        locale: locale,
      },
      twitter: {
        card: "summary",
        title: seo_title,
        description: seo_desc,
      },
      robots: "index, follow",
    };

    if (seo_keywords) {
      if (typeof seo_keywords === "string") {
        metadata.keywords = seo_keywords;
      } else if (Array.isArray(seo_keywords) && seo_keywords.length > 0) {
        metadata.keywords = seo_keywords.join(", ");
      }
    }

    return metadata;
  } else {
    return {
      title: "Kuhlmann & Partner",
      description: "Bauunternehmen auf Mallorca",
      openGraph: {
        title: "Kuhlmann & Partner",
        description: "Bauunternehmen auf Mallorca",
        type: "website",
        siteName: "Kuhlmann & Partner",
        locale: locale,
      },
      twitter: {
        card: "summary",
        title: "Kuhlmann & Partner",
        description: "Bauunternehmen auf Mallorca",
      },
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
