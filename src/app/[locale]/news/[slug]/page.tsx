import { getBlogChildBySlug } from "@/app/_services/api";
import BlogInformation from "@/app/components/blog-information";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: "es" | "en" | "de"; slug: string };
}): Promise<Metadata> {
  const page = await getBlogChildBySlug(slug, locale);
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
