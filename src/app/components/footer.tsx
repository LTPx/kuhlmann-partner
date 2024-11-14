"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface LinksFooter {
  title: string;
  url: string;
}

interface FooterProps {
  links: LinksFooter[];
}

export function Footer(props: FooterProps) {
  const { links } = props;
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const languages = ["/es", "/en", "/de"];

  return (
    <footer className="bg-body relative">
      <div className="mx-auto container flex flex-col">
        <hr className="border-t border-black border-1 mt-[53px] mb-[21px]" />
        <div className="flex w-full pb-[128px]">
          <div className="w-[390px] ">
            <p className="text-[32px] leading-[38px] tracking-[-0.01em]">
              ¿Interesado en construir con nosotros? Contáctanos y te
              brindaremos una asesoría personalizada.
            </p>
          </div>
          <div className="ml-auto w-[348px] pr-[20px] flex flex-col text-[20px] leading-[28px]">
            <p className="">Contacto:</p>
            <div className="w-auto">
              <Link className="w-auto" href={`tel:+34 971 718 996`}>
                <p>+34 971 718 996</p>
              </Link>
            </div>
            <div>
              <Link
                href={`mailto:info@kuhlmann-partner.com`}
                className="lg:underline text-[15px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                info@kuhlmann-partner.com
              </Link>
            </div>
            <div className="flex gap-[10px] lg:gap-[0px] lg:flex-col">
              <Link
                href={"/"}
                target="_blank"
                className="lg:underline text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                Instagram
              </Link>
              <Link
                href={"/"}
                target="_blank"
                className="lg:underline text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="w-[348px] pr-[20px]  flex flex-col text-[20px] leading-[28px]">
            <p className="">Oficina de Llucmajor:</p>
            <p>
              Carrer dAndalucía 1, Local 4 07620 Llucmajor Islas Baleares,
              España
            </p>
            <div className="w-auto">
              <Link className="w-auto" href={`tel:+34 971 718 996`}>
                <p>+34 971 718 996</p>
              </Link>
            </div>
          </div>
            <div className="ml-auto flex flex-col text-[20px] leading-[28px] pr-[70px]">
              {links.map((link, index) => (
                <Link key={index} href={link.url}>
                  {link.title}
                </Link>
              ))}
            </div>
        </div>
      </div>

      <div className="h-[50px] container text-white bg-black flex flex-col items-start justify-center lg:flex-row lg:justify-between lg:items-center">
        <p className="font-medium text-[12px] leading-[14px] lg:text-[14px] lg:leading-[27px]">
          © Kuhlmann & Partner, {currentYear}
        </p>
        <div className="flex-wrap lg:flex-no-wrap flex gap-[0px] lg:gap-[20px] text-[12px] leading-[14px] lg:text-[14px] lg:leading-[27px]">
          <p className="font-medium cursor-pointer">
            {`${t("footer.legal-notice")}`}
          </p>
          <p className="font-medium ml-[4px] lg:ml-[0px] cursor-pointer">
            {`${t("footer.privacy-policy")}`}
          </p>
          <p className="font-medium ml-[4px] lg:ml-[0px] cursor-pointer">
            {`${t("footer.cookies-policy")}`}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
