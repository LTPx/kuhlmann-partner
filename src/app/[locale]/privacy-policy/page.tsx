import { Suspense } from "react";
import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import InformationPages from "@/app/components/information-pages";

async function PrivacyPolicy(nextParams: { params: { locale: "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "privacy-policy");
  const { acf } = data;
  const { individual_blog } = acf;

  return (
    <InformationPages individual_blog={individual_blog}/>
  );
}

export default PrivacyPolicy;
