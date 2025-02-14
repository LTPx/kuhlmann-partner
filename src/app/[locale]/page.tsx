import Home from "./home";
import { getChildPages, getWordPressCustomPage } from "../_services/api";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "home");
  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc } = aioseo_seo;
    return {
      title: seo_title,
      description: seo_desc,
      openGraph: {
        title: seo_title,
        description: seo_desc,
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

export default async function Page(nextParams: {
  params: { locale: "es" | "de" | "en" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "home");
  const page = "projects";
  const parentSlug =
    locale === "es"
      ? "spanish-pages"
      : locale === "de"
      ? "german-pages"
      : "english-pages";

  const allProjects = await getChildPages(page, locale, parentSlug);

  const { acf } = data;
  const { home_information } = acf;

  const projectsIdsSelected = home_information.feature_projects.map(
    (item) => item.project.ID
  );
  const projects = projectsIdsSelected
    .map((id) => allProjects.find((project) => project.id === id))
    .filter(isDefined);

  return <Home projects={projects} home_information={home_information} />;
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
