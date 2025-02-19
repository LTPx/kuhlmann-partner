import { Suspense } from "react";
import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import InformationPages from "@/app/components/information-pages";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "legal-notice");
  const origin = "https://kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;
    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical ? seo_canonical : `${origin}/${locale}/legal-notice`,
        languages: {
          en: `${origin}/en/legal-notice`,
          es: `${origin}/es/legal-notice`,
          de: `${origin}/de/legal-notice`,
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

async function LegalNotice(nextParams: {
  params: { locale: "es" | "de" | "en" };
}) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "legal-notice");
  const { acf } = data;
  const { individual_blog } = acf;

  return <InformationPages individual_blog={individual_blog} />;
}

export default LegalNotice;
