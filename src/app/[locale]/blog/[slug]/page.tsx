import { getBlogChildBySlug } from "@/app/_services/api";

async function BlogSlugPage(nextParams: {
  params: { locale: "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getBlogChildBySlug(slug, locale);
  const { acf, title, date } = data;
  const { individual_blog, preview_blog  } = acf;

  const newDate = new Date(date);

  const day = String(newDate.getDate()).padStart(2, "0");
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const year = newDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="container blog-slug-page">
      <div className="pt-[40px]">
        <p className="font-mediumFont text-[25px] leading-[30px] lg:text-[40px] lg:leading-[60px] tracking-[-0.03em] opacity-20">
          {formattedDate}
        </p>
        <h1 className="text-[25px] leading-[30px] font-mediumFont lg:text-[80px] lg:leading-[85px] tracking-[-0.03em]">
          {preview_blog.title_blog}
        </h1>
      </div>
      <section className="pt-[30px] lg:pt-[141px] flex flex-col gap-[50px] pb-[70px]">
        {individual_blog.map((blog, index) => (
          <div
            className="flex lg:border-black lg:border-t flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2"
            key={index}
          >
            <div
              className="wp-h2 lg:pt-[15px]"
              dangerouslySetInnerHTML={{
                __html: blog.information.title,
              }}
            />
            <div
              className="blog-description font-regularFont lg:w-[677px] lg:pt-[15px]"
              dangerouslySetInnerHTML={{
                __html: blog.information.description,
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default BlogSlugPage;
