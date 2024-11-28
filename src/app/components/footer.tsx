"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import ContactWindow from "./contact-window";

interface LinksFooter {
  title: string;
  url: string;
}

interface FooterProps {
  // links: LinksFooter[];
}

export function Footer(props: FooterProps) {
  // const { links } = props;
  const currentYear = new Date().getFullYear();
  const t = useTranslations();
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact((prev) => !prev);
  };

  const linksFooter = [
    { title: `${t("footer.home")}`, url: "/" },
    { title: `${t("footer.projects")}`, url: "/projects" },
    { title: `${t("footer.about-us")}`, url: `/about-us` },
    { title: `${t("footer.blog")}`, url: "/blog" },
  ];

  const languages = ["/es", "/en", "/de"];

  return (
    <>
      <footer className="bg-[#DCB93C] lg:bg-body">
        <div className="container flex flex-col">
          <hr className="hidden lg:block border-t border-black border-1 mt-[53px] mb-[21px]" />
          <div className="pt-[20px] lg:pt-[0px] flex flex-col lg:flex-row w-full pb-[35px] lg:pb-[128px]">
            <div className="lg:w-[415px] ">
              <p className="font-mediumFont text-[25px] leading-[30px] lg:text-[32px] lg:leading-[38px] tracking-[-0.01em]">
                {t("footer.information")}
              </p>
            </div>
            <hr className="lg:hidden border-t border-black border-1 mt-[32px] mb-[8px]" />
            <div className="lg:ml-auto lg:w-[348px] pr-[20px] flex flex-col">
              <p className="font-semiBoldFont">{t("footer.contact")}</p>
              <p className="lg:hidden">
                Carrer dAndalucía 1, Local 4 07620 Llucmajor Islas Baleares,
                España
              </p>
              <div className="pt-[22px] lg:pt-[0px] w-auto">
                <Link
                  className="font-regularFont w-auto inline-block"
                  href={`tel:+34 971 718 996`}
                >
                  <p>+34 971 718 996</p>
                </Link>
              </div>
              <div>
                <Link
                  href={`mailto:info@kuhlmann-partner.com`}
                  className="underline font-regularFont text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                >
                  info@kuhlmann-partner.com
                </Link>
              </div>
              <div className="pt-[22px] lg:pt-[0px] flex flex-col lg:flex-row lg:gap-[0px] lg:flex-col">
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-auto inline-block font-regularFont underline text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                >
                  Instagram
                </Link>
                <Link
                  href={"/"}
                  target="_blank"
                  className="w-auto inline-block font-regularFont underline text-[16px] leading-[22px] lg:text-[20px] lg:leading-[28px]"
                >
                  Facebook
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[348px] pr-[20px]  flex flex-col text-[20px] leading-[28px]">
              <p className="font-semiBoldFont">{t("footer.office")}</p>
              <p>
                Carrer dAndalucía 1, Local 4 07620 Llucmajor Islas Baleares,
                España
              </p>
              <div className="w-auto">
                <Link className="w-auto inline-block " href={`tel:+34 971 718 996`}>
                  <p>+34 971 718 996</p>
                </Link>
              </div>
            </div>
            <div className="hidden lg:ml-auto lg:flex flex-col text-[20px] leading-[28px] lg:pr-[70px]">
              {linksFooter.map((link, index) => (
                <Link
                  className={index === 0 ? "font-semiBoldFont hover:underline" : "hover:underline"}
                  key={index}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ))}
              <div
                onClick={handleContactClick}
                className="font-regularFont cursor-pointer hover:underline"
              >
                {t("footer.contact")}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-[50px] container lg:text-white-light bg-[#DCB93C] lg:bg-black flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <hr className="lg:hidden border-t border-black border-1 mb-[8px]" />
          <p className="hidden lg:block font-semiBoldFont text-[12px] leading-[14px] lg:text-[14px] lg:leading-[27px]">
            © Kuhlmann & Partner, {currentYear}
          </p>
          <div className="flex flex-col lg:flex-no-wrap lg:flex-row gap-[0px] lg:gap-[20px]">
            <p className="hover:underline font-semiBoldFont cursor-pointer text-[12px] leading-[20px] lg:text-[14px] lg:leading-[27px]">
              {`${t("footer.legal-notice")}`}
            </p>
            <p className="hover:underline font-semiBoldFont text-[12px] leading-[20px] lg:text-[14px] lg:leading-[27px] lg:ml-[0px] cursor-pointer">
              {`${t("footer.privacy-policy")}`}
            </p>
            <p className="hover:underline font-semiBoldFont text-[12px] leading-[20px] lg:text-[14px] lg:leading-[27px] lg:ml-[0px] cursor-pointer">
              {`${t("footer.cookies-policy")}`}
            </p>
            <div className="lg:hidden pt-[97px] pb-[21px]">
              <img className="h-[56px]" src="/images/logo-footer.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
      <ContactWindow
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
}

export default Footer;
