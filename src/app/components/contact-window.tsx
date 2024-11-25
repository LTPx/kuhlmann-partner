"use client";

import { Link } from "@/navigation";

interface Props {
  showContact: boolean;
  setShowContact: (value: boolean) => void;
}

export function ContactWindow(props: Props) {
  const { showContact, setShowContact } = props;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#DCB93C] transform transition-transform duration-500 ease-in-out z-[9999] ${
        showContact ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="container flex gap-[100px] h-full">
        <div
          onClick={() => setShowContact(!showContact)}
          className="flex justify-start pt-[30px]"
        >
          <img
            className="cursor-pointer h-[35px]"
            src="/images/icons/close-accordion.svg"
            alt="close"
          />
        </div>
        <div className="lg:w-[1215px] pt-[30px] flex flex-col gap-[70px]">
          <h1 className="font-mediumFont leading-[85px]">
            {`Carrer d'Andalucía 1, Local 4 07620 Llucmajor Islas Baleares, España`}
          </h1>
          <div className="contact">
            <Link href={`tel:+34 971 718 996`}>
              <h1 className="font-mediumFont leading-[85px]">+34 971 718 996</h1>
            </Link>
            <Link
              href={`mailto:info@kuhlmann-partner.com`}
              className="text-[15px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont leading-[85px]">+info@kuhlmann-partner.com</h1>
            </Link>
          </div>
          <div className="social">
            <Link
              href={"/"}
              target="_blank"
              className="text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont leading-[85px]">Instagram</h1>
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont leading-[85px]">Facebook</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWindow;
