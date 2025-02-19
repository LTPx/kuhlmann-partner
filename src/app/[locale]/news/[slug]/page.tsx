import { getBlogChildBySlug } from "@/app/_services/api";
import BlogInformation from "@/app/components/blog-information";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: "es" | "en" | "de"; slug: string };
}): Promise<Metadata> {
  const page = await getBlogChildBySlug(slug, locale);
  const origin = "https://kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;

    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical ? seo_canonical : `${origin}/${locale}/news/${slug}`,
        languages: {
          en: `${origin}/en/${slug}`,
          es: `${origin}/es/${slug}`,
          de: `${origin}/de/${slug}`,
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

async function BlogSlugPage(nextParams: {
  params: { locale: "es" | "de" | "en"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getBlogChildBySlug(slug, locale);
  const { acf, title, date } = data;
  const { individual_blog, preview_blog } = acf;

  const newDate = new Date(date);

  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = newDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <BlogInformation
      date={formattedDate}
      title={data.title}
      individual_blog={individual_blog}
    />
  );
}

export default BlogSlugPage;
