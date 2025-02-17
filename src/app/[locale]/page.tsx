import Home from "./home";
import { getChildPages, getWordPressCustomPage } from "../_services/api";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "home");
  const origin = "https://www.kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;

    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical || `${origin}/${locale}`,
        languages: {
          en: `${origin}/en`,
          es: `${origin}/es`,
          de: `${origin}/de`,
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
