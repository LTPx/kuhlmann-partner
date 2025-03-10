"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface CategoriesSelectorProps {
  locale: "es" | "en" | "de";
}

export const CategoriesSelector: React.FC<CategoriesSelectorProps> = ({
  locale,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const categoriesByLanguage = {
    en: [
      {
        id: 659,
        slug: "new-construction",
        title: t("categories.new_construction"),
      },
      { id: 665, slug: "reform", title: t("categories.reform") },
    ],
    es: [
      { id: 655, slug: "obra-nueva", title: t("categories.new_construction") },
      { id: 661, slug: "reforma", title: t("categories.reform") },
    ],
    de: [
      { id: 657, slug: "neubau", title: t("categories.new_construction") },
      { id: 663, slug: "renovierung", title: t("categories.reform") },
    ],
  };

  const categories = categoriesByLanguage[locale] || [];

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsDropdownVisible(true)}
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <button className="font-mediumFont hover:underline font-medium h-[54px] flex items-center text-[20px] leading-[25px]">
        {t("header.projects")}
      </button>
      {isDropdownVisible && (
        <div className="absolute top-full left-[-30px] bg-primary pb-[15px]">
          <div className="flex flex-col">
            {categories.map((category) => (
              <Link
                key={category.id}
                locale={false}
                href={`/${locale}/projects?category=${category.slug}`}
                className="whitespace-nowrap pr-[30px] cursor-pointer font-mediumFont tracking-[-0.01em] h-[40px] pl-[30px] w-auto flex items-center text-[20px] leading-[25px] hover:underline"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesSelector;
