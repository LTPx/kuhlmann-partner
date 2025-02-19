import { MetadataRoute } from "next";
import { getChildPages } from "@/app/_services/api";

type Locale = "es" | "de" | "en";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kuhlmann-partner.com";
  const languages: Locale[] = ["es", "en", "de"];
  
  // Rutas estáticas con prioridad asignada
  const staticRoutes = [
    { route: "/projects", priority: 0.8 },
    { route: "/about-us", priority: 0.6 },
    { route: "/news", priority: 0.7 },
    { route: "/legal-notice", priority: 0.5 },
    { route: "/privacy-policy", priority: 0.5 },
    { route: "/cookies-policy", priority: 0.5 },
  ];

  const allProjectRoutesPromises = languages.map(async (lang) => {
    const locale: Locale = lang;
    const parentSlug =
      locale === "es"
        ? "spanish-pages"
        : locale === "de"
        ? "german-pages"
        : "english-pages";

    const projectPages = await getChildPages("projects", locale, parentSlug);

    return projectPages.map((project: { slug: string }) => ({
      url: `${baseUrl}/${lang}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.6,  // Ajusta según el contexto
    }));
  });

  const allProjectRoutes = (await Promise.all(allProjectRoutesPromises)).flat();

  const allNewsRoutesPromises = languages.map(async (lang) => {
    const locale: Locale = lang;
    const parentSlug =
      locale === "es"
        ? "spanish-pages"
        : locale === "de"
        ? "german-pages"
        : "english-pages";

    const newsPages = await getChildPages("blog", locale, parentSlug);

    return newsPages.map((news: { slug: string }) => ({
      url: `${baseUrl}/${lang}/news/${news.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.5,  // Ajusta según el contexto
    }));
  });

  const allNewsRoutes = (await Promise.all(allNewsRoutesPromises)).flat();

  // Asignar prioridad a las rutas estáticas
  const allStaticRoutes = languages.flatMap((lang) =>
    staticRoutes.map(({ route, priority }) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority, // Asignar la prioridad que corresponde
    }))
  );

  // Rutas principales con prioridad alta (1.0)
  const homeRoutes = languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0, // Alta prioridad para las páginas principales
  }));

  return [
    ...allStaticRoutes,
    ...homeRoutes,
    ...allProjectRoutes,
    ...allNewsRoutes,
  ];
}
