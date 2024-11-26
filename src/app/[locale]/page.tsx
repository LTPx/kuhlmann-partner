import { Suspense } from "react";
import Home from "./home";
import { getChildPages, getWordPressCustomPage, getWordPressPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";

export default async function Page(nextParams: {
  params: { locale: "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "home");
  const page = "projects";
  const parentSlug = locale === "es" ? "spanish-pages" : "german-pages";
  const allProjects = await getChildPages(page, locale, parentSlug);
  
  const { acf } = data;
  const { home_information, feature_projects } = acf;

  const projectsIdsSelected = home_information.feature_projects.map((item) => item.project.ID);
  const projects = projectsIdsSelected
  .map((id) => allProjects.find((project) => project.id === id))
  .filter(isDefined);

  return (
    <Suspense fallback={<Skeleton />}>
      <Home projects={projects} home_information={home_information} />
    </Suspense>
  );
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}