import { MetadataRoute } from "next";
import { getChildPages } from "@/app/_services/api";

type Locale = "es" | "de" | "en";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.kuhlmann-partner.com";
  const languages: Locale[] = ["/es", "/en", "/de"];
  const staticRoutes = [
    "/projects",
    "/about-us",
    "/news",
    "/legal-notice",
    "/privacy-policy",
    "/cookies-policy",
  ];

  const allProjectRoutesPromises = languages.map(async (lang) => {
    const locale: Locale = lang.slice(1) as Locale;
    const parentSlug =
      locale === "es"
        ? "spanish-pages"
        : locale === "de"
        ? "german-pages"
        : "english-pages";

    const projectPages = await getChildPages("projects", locale, parentSlug);

    return projectPages.map((project: { slug: string }) => ({
      url: `${baseUrl}${lang}/projects/${project.slug}`,
      lastModified: new Date(),
    }));
  });

  const allProjectRoutes = (await Promise.all(allProjectRoutesPromises)).flat();

  const allNewsRoutesPromises = languages.map(async (lang) => {
    const locale: Locale = lang.slice(1) as Locale; //
    const parentSlug =
      locale === "es"
        ? "spanish-pages"
        : locale === "de"
        ? "german-pages"
        : "english-pages";

    const newsPages = await getChildPages("blog", locale, parentSlug);

    return newsPages.map((news: { slug: string }) => ({
      url: `${baseUrl}${lang}/news/${news.slug}`,
      lastModified: new Date(),
    }));
  });

  const allNewsRoutes = (await Promise.all(allNewsRoutesPromises)).flat();

  const allStaticRoutes = languages.flatMap((lang) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}${lang}${route}`,
      lastModified: new Date(),
    }))
  );

  const homeRoutes = languages.map((lang) => ({
    url: `${baseUrl}${lang}`,
    lastModified: new Date(),
  }));

  return [
    ...allStaticRoutes,
    ...homeRoutes,
    ...allProjectRoutes,
    ...allNewsRoutes,
  ];
}
