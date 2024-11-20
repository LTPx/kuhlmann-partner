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

