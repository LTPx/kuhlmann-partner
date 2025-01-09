import { WordPressFrontendPage } from "./_interfaces/wordpress-page";

export function groupProjectsByCategory(projects: WordPressFrontendPage[]) {
  const groupedProjects: Record<number, WordPressFrontendPage[]> = {};

  projects.forEach((project) => {
    const categories = project._embedded?.["wp:term"]?.categories || [];
    categories.forEach((category) => {
      if (!groupedProjects[category.id]) {
        groupedProjects[category.id] = [];
      }
      groupedProjects[category.id].push(project);
    });
  });

  return groupedProjects;
}

export function getUniqueCategories(
  projects: WordPressFrontendPage[]
): { id: number; name: string; slug: string }[] {
  const uniqueCategories = new Map();

  projects.forEach((project) => {
    const categories = project._embedded?.["wp:term"]?.categories;

    if (categories) {
      categories.forEach((category) => {
        uniqueCategories.set(category.id, {
          id: category.id,
          name: category.name,
          slug: category.slug,
        });
      });
    }
  });

  return Array.from(uniqueCategories.values());
}


export function plainTextFromHtml(text: string) {
  return text.replace(/<[^>]*>/g, "");
}

export function truncateTextHtml(htmlText: string) {
  const htmlToText = plainTextFromHtml(htmlText) || "";
  const truncateText = htmlToText.slice(0, 500).trimEnd();
  const result =  truncateText.slice(0, truncateText.lastIndexOf(" ")) + "...";
  return result.trim();
}
