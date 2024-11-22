import { getWordPressCustomPage, getWordPressPage } from "@/app/_services/api";
import Cover from "@/app/components/cover";
import Items from "@/app/components/items";
import ProjectView from "@/app/components/project-view";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

async function Projects(nextParams: { params: { locale: "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;

  const data = await getWordPressCustomPage(locale, "projects");
  const { acf } = data;
  const { page_projects } = acf;
  const t = await getTranslations();

  return (
    <div className="page-projects">
      <Cover media={page_projects.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">{`${t(
            "projects-page.projects"
          )}`}</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <div
            className="wp-h3"
            dangerouslySetInnerHTML={{
              __html: page_projects.information.title,
            }}
          />
          <div
            className="font-regularFont lg:w-[658px]"
            dangerouslySetInnerHTML={{
              __html: page_projects.information.description,
            }}
          />
        </section>
        <section className="pt-[30px] lg:pt-[80px]">
          <hr className="border-t border-black border-1 mb-[10px] lg:mb-[16px]" />
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <h3 className="font-mediumFont tracking-[-0.01em] pb-[15px] lg:pb-[0px]">
              {page_projects.work_processes.title}
            </h3>
            <div className="lg:w-[648px] flex flex-col gap-[40px] lg:gap-[47px]">
              {page_projects.work_processes.processes.map((process, index) => (
                <Items
                  key={index}
                  count={index < 9 ? `0${index + 1}` : `${index + 1}`}
                  title={process.title}
                  description={process.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="pt-[50px] lg:pt-[95px] pb-[50px] lg:pb-[0px]">
          <p className="font-semiBoldFont text-[16px] leading-[16px] uppercase lg:normal-case lg:text-[20px] lg:leading-[27px]">
            {`${t("projects-page.projects")}`}
          </p>
          <hr className="border-t border-black border-1 my-[16px]" />
          <ProjectView
            image="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__"
            title={"Petra"}
            date={"2020-2021"}
            url={""}
          />
        </section>
      </div>
    </div>
  );
}

export default Projects;
