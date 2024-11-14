"use client";

import { Link } from "@/navigation";
import { usePathname } from '@/navigation';
import LanguageSelector from "./selector-languages";

interface LinksHeader {
  title: string;
  url: string;
}

interface Props {
  links: LinksHeader[];
}

export function Header(props: Props) {
  const { links } = props;
  const currentPath = usePathname();
  const currentSlug = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const isProjectRoute = /^\/projects\/.+$/.test(currentPath);
  const linksSelector = {
    es: isProjectRoute ? `/es/` : `/es/${currentSlug}`,
    en: isProjectRoute ? `/en/` : `/en/${currentSlug}`,
    de: isProjectRoute ? `/de/` : `/de/${currentSlug}`,
  };

  return (
    <header className="sticky top-0 z-[1000] bg-[#DCB93C] hidden lg:flex items-center justify-between">
      <div className="flex">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`h-[54px] px-[30px] flex items-center justify-center cursor-pointer text-[20px] leading-[25px] tracking-[-0.01em] ${
              currentPath === link.url ? "underline" : "text-black"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-1 justify-center items-center">
        <p className="text-[20px] leading-[25px] tracking-[-0.01em]">Kuhlmann & Partner</p>
      </div>

      <div className="flex items-center">
        <Link
          href={"/"}
          className="h-[54px] pr-[30px] flex items-center cursor-pointer text-[20px] leading-[25px] leading-[25px]"
        >
          Contacto
        </Link>
        <LanguageSelector urlsTranslate={linksSelector} />
      </div>
    </header>
  );
}

export default Header;
