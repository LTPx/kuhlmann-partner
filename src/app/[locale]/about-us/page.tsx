import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import Cover from "@/app/components/cover";
import UsInformation from "@/app/components/us-information";
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
