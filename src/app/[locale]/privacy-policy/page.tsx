import { Suspense } from "react";
import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import InformationPages from "@/app/components/information-pages";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "privacy-policy");
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
