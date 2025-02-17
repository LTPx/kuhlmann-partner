import { getTranslations } from "next-intl/server";
import Cover from "@/app/components/cover";
import ProjectDetails from "@/app/components/project-details";
import { getChildPages, getProjectChildBySlug } from "@/app/_services/api";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: "es" | "en" | "de"; slug: string };
}): Promise<Metadata> {
  const page = await getProjectChildBySlug(slug, locale);
  const origin = "https://www.kuhlmann-partner.com";

  if (page) {
    const { aioseo_seo } = page;
    const { seo_title, seo_desc, seo_keywords, seo_canonical } = aioseo_seo;

    const metadata: Metadata = {
      title: seo_title,
      description: seo_desc,
      alternates: {
        canonical: seo_canonical ? seo_canonical : `${origin}/${locale}/projects/${slug}`,
        languages: {
          en: `${origin}/en/${slug}`,
          es: `${origin}/es/${slug}`,
          de: `${origin}/de/${slug}`,
        },
      },
      openGraph: {
        title: seo_title,
        description: seo_desc,
        type: "website",
        siteName: "Kuhlmann & Partner",
        locale: locale,
      },
      twitter: {
        card: "summary",
        title: seo_title,
        description: seo_desc,
      },
      robots: "index, follow",
    };

    if (seo_keywords) {
      if (typeof seo_keywords === "string") {
        metadata.keywords = seo_keywords;
      } else if (Array.isArray(seo_keywords) && seo_keywords.length > 0) {
        metadata.keywords = seo_keywords.join(", ");
      }
    }

    return metadata;
  } else {
    return {
      title: "Kuhlmann & Partner",
      description: "Bauunternehmen auf Mallorca",
      openGraph: {
        title: "Kuhlmann & Partner",
        description: "Bauunternehmen auf Mallorca",
        type: "website",
        siteName: "Kuhlmann & Partner",
        locale: locale,
      },
      twitter: {
        card: "summary",
        title: "Kuhlmann & Partner",
        description: "Bauunternehmen auf Mallorca",
      },
    };
  }
}

async function ProjectSlugPage(nextParams: {
  params: { locale: "es" | "de" | "en"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  const data = await getProjectChildBySlug(slug, locale);
  const { acf } = data;
  const { individual_project } = acf;
  const t = await getTranslations();

  const page = "projects";
  const parentSlug =
    locale === "es"
      ? "spanish-pages"
      : locale === "de"
      ? "german-pages"
      : "english-pages";

  const allProjects = await getChildPages(page, locale, parentSlug);
  // allProjects.reverse();
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
            gif={individual_project.gif_process_images.url}
            process_section={individual_project.third_section}
          />
        </section>
      </div>
    </div>
  );
}

export default ProjectSlugPage;
