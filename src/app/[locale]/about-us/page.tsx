import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import Cover from "@/app/components/cover";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function AboutUs(nextParams: { params: { locale: "es" | "de" } }) {
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
      <div className="container">
        <section className="pt-[30px] lg:pt-[27px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h3 className="font-mediumFont tracking-[-0.01em]">
            {page_about_us.first_section.title}
          </h3>
          <div
            className="font-regularFont lg:w-[665px]"
            dangerouslySetInnerHTML={{
              __html: page_about_us.first_section.description,
            }}
          />
        </section>
        <section className="pt-[30px] lg:pt-[45px]">
          <img
            src={page_about_us.image.url}
            className="object-cover h-[400px] lg:h-[1000px] w-full"
          />
        </section>
        <section className="pt-[30px] lg:pt-[50px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h3 className="font-mediumFont tracking-[-0.01em]">
            {page_about_us.second_section.title}
          </h3>
          <div
            className="font-regularFont lg:w-[665px]"
            dangerouslySetInnerHTML={{
              __html: page_about_us.second_section.description,
            }}
          />
        </section>
        <section className="pb-[50px] lg:pb-[0px] pt-[30px] lg:pt-[45px]">
          <img
            src={page_about_us.last_image.url}
            className="object-cover h-[400px] lg:h-[960px] w-full"
          />
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
