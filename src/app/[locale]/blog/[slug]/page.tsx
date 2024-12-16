import { getBlogChildBySlug } from "@/app/_services/api";
import BlogInformation from "@/app/components/blog-information";

async function BlogSlugPage(nextParams: {
  params: { locale: "es" | "de"; slug: string };
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
