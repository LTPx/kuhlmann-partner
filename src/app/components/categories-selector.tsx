"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export const CategoriesSelector: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = useTranslations();

  const languageMatch = pathname.match(/^\/(es|en|de)/);
  const currentLanguage = languageMatch ? languageMatch[1] : "en";

  const categories = [
    { title: 'Obra Nueva', url: `/${currentLanguage}/projects/new-construction` },
    { title: 'Reforma', url: `/${currentLanguage}/projects/renovation` },
  ];

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
        className="hover:underline font-medium h-[54px] flex items-center text-[20px] leading-[25px]"
      >
        {t("header.projects")}
      </button>
      {isDropdownVisible && (
        <div className="absolute top-full left-[-30px] bg-primary pb-[15px]">
          <div className="flex flex-col">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.url}
                className="font-mediumFont tracking-[-0.01em] h-[40px] pl-[30px] lg:w-[155px] flex items-center text-[20px] leading-[25px] hover:underline"
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
