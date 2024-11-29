import { Link } from "@/navigation";

interface ProjectViewProps {
  image?: string;
  title: string;
  date: string;
  url: string;
}

function ProjectView(props: ProjectViewProps) {
  const { image, title, date, url } = props;

  return (
    <div className="flex flex-col lg:gap-[15px]">
      <div className="flex items-center justify-between pb-[5px] lg:pb-[0px]">
        <Link href={url || ""}>
          <div className="flex flex-col">
            <p className="font-mediumFont text-[32px] leading-[38px] tracking-[-0.01em]">
              {title} | <span className="opacity-30">{date}</span>
            </p>
          </div>
        </Link>
        <div className="hidden lg:flex flex-col gap-[50px]">
          <Link className="inline-block" href={url || ""}>
            <button className="uppercase inline-block hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
              VER MÁS
            </button>
          </Link>
        </div>
      </div>
      <Link href={url || ""}>
        <img
          data-aos="fade-up"
          src={image}
          className={"h-[500px] lg:h-[800px] w-full object-cover"}
        />
      </Link>
      <div className="w-full pt-[10px] lg:hidden">
        <Link href={url || ""}>
          <button className="uppercase w-full hover:bg-black hover:text-white flex items-center justify-center font-mediumFont text-[16px] leading-[16px] cursor-pointer border border-black h-[30px] rounded-full transition-colors duration-300 ease-in-out">
            VER MÁS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectView;
