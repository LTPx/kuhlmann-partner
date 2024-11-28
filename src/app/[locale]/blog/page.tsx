import { getChildPages } from "@/app/_services/api";
import Accordion from "@/app/components/accordion";
import Cover from "@/app/components/cover";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function Blog(nextParams: { params: { locale: "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const t = await getTranslations();
  const page = "blog";
  const parentSlug = locale === "es" ? "spanish-pages" : "german-pages";
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
            title={blog.acf.preview_blog.title_blog}
            description={blog.acf.preview_blog.short_description}
            image={blog.acf.preview_blog.image.url}
            url={`/blog/${blog.slug}`}
          />
        ))}
      </section>
    </div>
  );
}

export default Blog;
