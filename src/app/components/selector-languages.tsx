"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LanguageSelectorProps {
  urlsTranslate: {
    es: string;
    de: string;
  };
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  urlsTranslate,
}) => {
  const currentPath = usePathname();
  const languages = [
    { code: "es", label: "ESP", href: urlsTranslate.es },
    { code: "de", label: "DEU", href: urlsTranslate.de },
  ];

  const currentLanguage = languages.find((language) =>
    currentPath.includes(`/${language.code}`)
  );

  return (
    <div className="flex gap-[10px] text-[20px] leading-[25px] tracking-[-0.02em] font-medium">
      {languages.map((language, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span>|</span>}
          <Link
            href={language.href}
            className={`cursor-pointer ${
              currentLanguage?.code === language.code ? "" : "opacity-30"
            }`}
          >
            {language.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
