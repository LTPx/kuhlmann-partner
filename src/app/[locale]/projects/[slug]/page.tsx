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
  allProjects.reverse();
  const currentIndex = allProjects.findIndex(
    (project) => project.slug === slug
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

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
        <section>
          <ProjectDetails
            information={individual_project.second_section}
            first_gallery={individual_project.first_gallery}
            second_galley={individual_project.second_gallery}
            prevProject={prevProject}
            nextProject={nextProject}
            first_section={individual_project.first_section}
            slug={slug}
            allProjects={allProjects}
          />
        </section>
      </div>
    </div>
  );
}

export default ProjectSlugPage;
