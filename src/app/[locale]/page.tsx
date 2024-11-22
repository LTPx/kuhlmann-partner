import { Suspense } from "react";
import Home from "./home";
import { getChildPagesForProjects, getWordPressCustomPage, getWordPressPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";

export default async function Page(nextParams: {
  params: { locale: "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const slug = "projects";
  const parentSlug = locale === "es" ? "spanish-pages" : "german-pages";

  const data = await getWordPressCustomPage(locale, "home");
  const childPages = await getChildPagesForProjects(slug, locale, parentSlug);
  console.log(childPages)
  const { acf } = data;
  const { home_information } = acf;

  return (
    <Suspense fallback={<Skeleton />}>
      <Home childPages={childPages} home_information={home_information} />
    </Suspense>
  );
}
