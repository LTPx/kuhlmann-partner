import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import Cover from "@/app/components/cover";
import UsInformation from "@/app/components/us-information";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "about-us");
  const origin = "https://kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;
    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical ? seo_canonical : `${origin}/${locale}/about-us`,
        languages: {
          en: `${origin}/en/about-us`,
          es: `${origin}/es/about-us`,
          de: `${origin}/de/about-us`,
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

async function AboutUs(nextParams: { params: { locale: "es" | "de" | "en" } }) {
  const {
    params: { locale },
  } = nextParams;
  const data = await getWordPressCustomPage(locale, "about-us");
  const { acf } = data;
  const { page_about_us } = acf;
  const t = await getTranslations();

  return (
    <div className="page-aboutUs">
      <Cover media={page_about_us.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">{`${t(
            "us-page.us"
          )}`}</h1>
        </div>
      </Cover>
      <UsInformation
        first_image={page_about_us.image}
        first_section={page_about_us.first_section}
        second_section={page_about_us.second_section}
        last_image={page_about_us.last_image}
      />
    </div>
  );
}

export default AboutUs;
