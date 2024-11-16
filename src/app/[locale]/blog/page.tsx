import Accordion from "@/app/components/accordion";
import Cover from "@/app/components/cover";
import { Metadata } from "next";

async function Blog(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  //   const data = await getWordPressCustomPage(locale, "contact");
  //   const { acf } = data;
  //   const { contact } = acf;

  return (
    <div className="page-blog">
      <h1 className="text-[40px] leading-[40px] lg:text-[75px] lg:leading-[75px] pl-[12px] pt-[35px] lg:pl-[30px] lg:pt-[50px]">
        Noticias
      </h1>
      <section className="pt-[30px] lg:pt-[50px] pb-[25px]">
        <Accordion
          date="07.06.24"
          title={"Protección de inventario Mallorca"}
        />
      </section>
    </div>
  );
}

export default Blog;
