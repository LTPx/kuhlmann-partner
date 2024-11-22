import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Cover from "@/app/components/cover";
import Gallery from "@/app/components/gallery";
import ProjectDetails from "@/app/components/project-details";
import { getProjectChildBySlug } from "@/app/_services/api";

async function ProjectSlugPage(nextParams: {
  params: { locale: "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getProjectChildBySlug(slug, locale);
  const { acf } = data;
  const { individual_project } = acf;

  return (
    <div className="project-slug-page">
      <Cover media={individual_project.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">
            {individual_project.title}
          </h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h3 className="font-medium tracking-[-0.01em]">
            {individual_project.first_section.title}
          </h3>
          <div
            className="font-regular lg:w-[670px]"
            dangerouslySetInnerHTML={{
              __html: individual_project.first_section.description,
            }}
          />
        </section>
        <section className="pt-[20px] lg:pt-[120px]">
          <ProjectDetails
            information={individual_project.second_section}
            first_gallery={individual_project.first_gallery}
            second_galley={individual_project.second_gallery}
            prevProject={null}
            nextProject={null}
            allCategories={[]}
            currentCategories={[]}
          />
        </section>
      </div>
      <section className="pt-[55px] pb-[47px] lg:hidden">
        <p className="pl-[12px] font-medium pb-[15px]">Todos los proyectos:</p>
        <div className="h-[65px] flex items-center border-1 border-black border-t border-b">
          <p className="container text-[20px] leading-[40px]">
            <span className="opacity-25">2022-2023</span> Petra
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProjectSlugPage;
