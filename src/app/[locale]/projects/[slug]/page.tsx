import { getTranslations } from "next-intl/server";
import Cover from "@/app/components/cover";
import ProjectDetails from "@/app/components/project-details";
import { getChildPages, getProjectChildBySlug } from "@/app/_services/api";
import { Link } from "@/navigation";

async function ProjectSlugPage(nextParams: {
  params: { locale: "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getProjectChildBySlug(slug, locale);
  const { acf } = data;
  const { individual_project } = acf;
  const t = await getTranslations();

  const page = "projects";
  const parentSlug = locale === "es" ? "spanish-pages" : "german-pages";
  const allProjects = await getChildPages(page, locale, parentSlug);
  const currentIndex = allProjects.findIndex(
    (project) => project.slug === slug
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;
  console.log(allProjects);

  return (
    <div className="project-slug-page">
      <Cover media={individual_project.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white-light tracking-[-0.015em]">
            {individual_project.title}
          </h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h3 className="font-mediumFont tracking-[-0.01em]">
            {individual_project.first_section.title}
          </h3>
          <div
            className="font-regularFont lg:w-[670px]"
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
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </section>
      </div>
      <section className="pt-[55px] pb-[47px] lg:hidden">
        <p className="pl-[12px] font-mediumFont pb-[15px]">
        {`${t("projects-page.all_projects")}`}
        </p>
        {allProjects.map((project, index) => (
          <Link key={index} href={`/projects/${project?.slug}`}>
            <div
              className={`h-[65px] flex items-center border-1 border-black border-t ${
                index === allProjects.length - 1 ? "border-b" : ""
              } ${project.slug === slug ? "bg-black text-white" : ""}`}
            >
              <p className="font-mediumFont container text-[20px] leading-[40px]">
                <span className="opacity-25">
                  {project.acf.individual_project.date}
                </span>
                {"  "}
                {project.acf.individual_project.title}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default ProjectSlugPage;
