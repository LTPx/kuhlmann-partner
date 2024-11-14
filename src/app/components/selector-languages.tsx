"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface LanguageSelectorProps {
  urlsTranslate: {
    es: string;
    en: string;
    de: string;
  };
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  urlsTranslate,
}) => {
  const [isLanguagePopupVisible, setIsLanguagePopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();
  const languages = [
    { code: "es", label: "ESP", href: urlsTranslate.es },
    { code: "en", label: "ENG", href: urlsTranslate.en },
    { code: "de", label: "DEU", href: urlsTranslate.de },
  ];
  const currentLanguage = languages.find((language) =>
    currentPath.includes(`/${language.code}`)
  );

  const otherLanguages = languages.filter(
    (language) => language.code !== currentLanguage?.code
  );

  const toggleLanguagePopup = () => {
    setIsLanguagePopupVisible(!isLanguagePopupVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsLanguagePopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={popupRef}>
      <button
        onClick={toggleLanguagePopup}
        style={{ fontWeight: "400" }}
        className="font-medium h-[40px] pl-[35px] pr-[30px] flex items-center cursor-pointer text-[18px] leading-[26px]"
      >
        {currentLanguage?.label}
      </button>
      {isLanguagePopupVisible && (
        <div className="absolute top-full right-0 bg-white border-t border-black">
          <div className="flex flex-col">
            {otherLanguages.map((language, index) => (
              <Link
                key={index}
                href={language.href}
                className={`h-[40px] pl-[35px] pr-[30px] font-medium flex items-center cursor-pointer text-[18px] leading-[26px] text-center  hover:bg-black hover:text-white ${
                  currentPath.includes(language.code)
                    ? "border-t border-black"
                    : ""
                }`}
                onClick={() => setIsLanguagePopupVisible(false)}
              >
                {language.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
