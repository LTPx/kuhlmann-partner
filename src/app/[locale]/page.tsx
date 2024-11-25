import { Suspense } from "react";
import Home from "./home";
import { getWordPressCustomPage, getWordPressPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";

export default async function Page(nextParams: {
  params: { locale: "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "home");

  const { acf } = data;
  const { home_information } = acf;

  return (
    <Suspense fallback={<Skeleton />}>
      <Home home_information={home_information} />
    </Suspense>
  );
}
