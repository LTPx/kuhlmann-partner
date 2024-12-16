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
      <div className="container mx-[8px] lg:px-[0px] flex lg:flex-row flex-col gap-[30px] lg:gap-[100px] h-full">
        <div className="pl-[8px] lg:pl-[0px] pt-[30px]">
          <button
            onClick={() => setShowContact(!showContact)}
            className="group flex hover:bg-black items-center justify-center w-[65px] lg:w-auto h-[35px] border-[1.5px] border-black rounded-[16px] lg:h-[35px] px-[8px] lg:px-[12px] flex justify-end lg:justify-start"
          >
            <img
              className="group-hover:filter h-[10px] lg:h-auto group-hover:brightness-0 group-hover:saturate-100 group-hover:invert group-hover:sepia group-hover:hue-rotate-[50deg] w-full"
              src="/images/icons/arrow-left.svg"
              alt=""
            />
          </button>
        </div>
        <div className="px-[8px] lg:px-[0px] lg:pt-[30px] flex flex-col gap-[35px] lg:gap-[70px]">
          <h1 className="text-[25px] leading-[28px] lg:text-[75px] lg:leading-[85px] font-mediumFont">
            {`Carrer d'Andalucía 1, Local 4`}
            <br />
            {`07620 Llucmajor`}
            <br />
            {`Islas Baleares, España`}
          </h1>
          <div className="contact">
            <Link href={`tel:+34 971 718 996`} className="inline-block">
              <h1 className="text-[25px] leading-[28px] lg:text-[75px] lg:leading-[85px] font-mediumFont">
                +34 971 718 996
              </h1>
            </Link>
            <Link
              href={`mailto:info@kuhlmann-partner.com`}
              className="inline-block text-[15px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont text-[25px] leading-[28px] lg:text-[75px] lg:leading-[85px]">
                info@kuhlmann-partner.com
              </h1>
            </Link>
          </div>
          <div className="social">
            <Link
              href={"/"}
              target="_blank"
              className="inline-block text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont text-[25px] leading-[28px] lg:text-[75px] lg:leading-[85px]">
                Instagram
              </h1>
            </Link>
            <br></br>
            <Link
              href={"/"}
              target="_blank"
              className="inline-block text-[30px] leading-[32px] lg:text-[20px] lg:leading-[28px]"
            >
              <h1 className="font-mediumFont text-[25px] leading-[28px] lg:text-[75px] lg:leading-[85px]">
                Facebook
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWindow;
