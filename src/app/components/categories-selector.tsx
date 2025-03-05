"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface CategoriesSelectorProps {
  locale: "es" | "en" | "de";
}

export const CategoriesSelector: React.FC<CategoriesSelectorProps> = ({ locale }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const categoriesByLanguage = {
    en: [
      { id: 659, title: t("categories.new_construction") },
      { id: 665, title: t("categories.reform") },
    ],
    es: [
      { id: 655, title: t("categories.new_construction") },
      { id: 661, title: t("categories.reform") },
    ],
    de: [
      { id: 657, title: t("categories.new_construction") },
      { id: 663, title: t("categories.reform") },
    ],
  };

  const categories = categoriesByLanguage[locale] || [];
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="font-mediumFont hover:underline font-medium h-[54px] flex items-center text-[20px] leading-[25px]"
      >
        {t("header.projects")}
      </button>
      {isDropdownVisible && (
        <div className="absolute top-full left-[-30px] bg-primary pb-[15px]">
          <div className="flex flex-col">
            {categories.map((category) => (
              <Link
                key={category.id}
                locale={false} 
                href={`/${locale}/projects?category=${category.id}`}
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
