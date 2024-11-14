import { Suspense } from "react";
import Home from "./home";
import { getWordPressPage } from "../_services/api";
import Skeleton from "../components/skeleton-home";

export default async function Page(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  return (
    <Suspense fallback={<Skeleton />}>
    <Home />
  </Suspense>
  );
}
