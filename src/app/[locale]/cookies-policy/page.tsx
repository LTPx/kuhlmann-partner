import { getWordPressCustomPage } from "@/app/_services/api";
import InformationPages from "@/app/components/information-pages";

async function LegalNotice(nextParams: {
  params: { locale: "es" | "de" | "en" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "cookies-policy");
  const { acf } = data;
  const { individual_blog } = acf;

  return <InformationPages individual_blog={individual_blog} />;
}

export default LegalNotice;
