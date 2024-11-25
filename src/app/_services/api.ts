import { WordPressFrontendPage } from "../_interfaces/wordpress-page";
import { WORDPRESS_API_URL } from "../constants";

export async function getWordPressPage(
  locale: "en" | "es" | "de",
  slug: string
): Promise<WordPressFrontendPage> {
  const WORDPRESS_API_URL = "https://www.kuhlmann-partner.com/wp-json";
  const url = `${WORDPRESS_API_URL}/wp/v2/pages?slug=${slug}&acf_format=standard`;
  console.log("url: ", url);
  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  const pages = await response.json();
  if (!response.ok) throw new Error(pages.message);
  const page = pages.length ? pages[0] : undefined;
  return page;
}

export async function getWordPressCustomPage(
  locale: "es" | "de",
  slug: string
): Promise<WordPressFrontendPage> {
  const parentPages = {
    es: 'spanish-pages',
    de: 'german-pages',
  };
  const parentPage = parentPages[locale];
  const WORDPRESS_API_URL = "https://www.kuhlmann-partner.com/wp-json";
  const url = `${WORDPRESS_API_URL}/custom/v1/page_by_slug?slug=${slug}&parent_slug=${parentPage}&lang=${locale}`;
  console.log("url custom page: ", url);
  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });
  const page = await response.json();
  if (!response.ok) throw new Error(page.message);
  return page;
}

export async function getChildPages(
  slug: string, 
  locale: "es" | "de", 
  parentSlug: string
): Promise<WordPressFrontendPage[]> {
  const WORDPRESS_API_URL = "https://www.kuhlmann-partner.com/wp-json";
  const url = `${WORDPRESS_API_URL}/custom/v1/projects_children?slug=${slug}&parent_slug=${parentSlug}&lang=${locale}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las páginas hijas.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener páginas hijas:", error);
    throw new Error("No se pudieron obtener las páginas hijas.");
  }
}

export async function getProjectChildBySlug(
  slug: string,
  locale: "es" | "de"
): Promise<WordPressFrontendPage> {
  const parentPages = {
    es: "spanish-pages",
    de: "german-pages",
  };
  const parentPage = parentPages[locale];
  const WORDPRESS_API_URL = "https://www.kuhlmann-partner.com/wp-json";
  const url = `${WORDPRESS_API_URL}/custom/v1/project_child?slug=${slug}&parent_slug=${parentPage}&lang=${locale}`;
  
  console.log("url project child: ", url);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 0,
      },
    });
    if (!response.ok) {
      throw new Error("Error al obtener la página hija.");
    }
    const page = await response.json();
    return page;
  } catch (error) {
    console.error("Error al obtener la página hija:", error);
    throw new Error("No se pudo obtener la página hija.");
  }
}

export async function getBlogChildBySlug(
  slug: string,
  locale: "es" | "de"
): Promise<WordPressFrontendPage> {
  const parentPages = {
    es: "spanish-pages",
    de: "german-pages",
  };
  const parentPage = parentPages[locale];
  const WORDPRESS_API_URL = "https://www.kuhlmann-partner.com/wp-json";
  const url = `${WORDPRESS_API_URL}/custom/v1/blog_child?slug=${slug}&parent_slug=${parentPage}&lang=${locale}`;
  
  console.log("url blog child: ", url);

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 0,
      },
    });
    if (!response.ok) {
      throw new Error("Error al obtener la página hija.");
    }
    const page = await response.json();
    return page;
  } catch (error) {
    console.error("Error al obtener la página hija:", error);
    throw new Error("No se pudo obtener la página hija.");
  }
}




