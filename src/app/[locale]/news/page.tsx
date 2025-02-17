import { getChildPages, getWordPressCustomPage } from "@/app/_services/api";
import Accordion from "@/app/components/accordion";
import Cover from "@/app/components/cover";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "es" | "en" | "de" };
}): Promise<Metadata> {
  const page = await getWordPressCustomPage(locale, "blog");
  const origin = "https://www.kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;
    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical ? seo_canonical : `${origin}/${locale}/news`,
        languages: {
          en: `${origin}/en/news`,
          es: `${origin}/es/news`,
          de: `${origin}/de/news`,
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

async function Blog(nextParams: { params: { locale: "es" | "de" | "en" } }) {
  const {
    params: { locale },
  } = nextParams;

  const t = await getTranslations();
  const page = "blog";
  const parentSlug =
    locale === "es"
      ? "spanish-pages"
      : locale === "de"
      ? "german-pages"
      : "english-pages";
  const allBlogs = await getChildPages(page, locale, parentSlug);
  const formatDate = (date: any) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = String(newDate.getMonth() + 1).padStart(2, "0");
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="page-blog">
      <h1 className="text-[40px] leading-[40px] lg:text-[75px] lg:leading-[75px] pl-[12px] pt-[35px] lg:pl-[30px] lg:pt-[50px]">
        {`${t("blog-page.notice")}`}
      </h1>
      <section className="pt-[30px] lg:pt-[50px] pb-[25px]">
        {allBlogs.map((blog, index) => (
          <Accordion
            key={index}
            date={formatDate(blog.date)}
            title={blog.title}
            description={blog.acf.preview_blog.short_description}
            image={blog.acf.preview_blog.image.url}
            url={`/news/${blog.slug}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Blog;
