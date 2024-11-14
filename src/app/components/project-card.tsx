import { Link } from "@/navigation";

interface ProjectCardProps {
  imageHover?: string;
  image?: string;
  title?: string;
  date?: string;
  description?: string;
  className?: string;
  url?: string;
}

function ProjectCard(props: ProjectCardProps) {
  const { imageHover, image, title, className, date, description, url } = props;

  return (
    <div className="grid grid-cols-2 lg:h-[850px] lg:gap-[100px]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-[75px] leading-[78px] tracking-[-0.03em]">
            {title}
            <br/>
            <span className="opacity-30">{date}</span>
          </p>
        </div>
        <div className="flex flex-col gap-[50px]">
          <p className="text-[20px] leading-[28px]">{description}</p>
          <Link className="inline-block" href={url || ""}>
            <button className="uppercase inline-block hover:bg-black hover:text-white hover:rounded-none flex items-center justify-center font-medium text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
              Ver proyecto
            </button>
          </Link>
        </div>
      </div>
      <div className={`relative ${className}`}>
        <img
          src={image}
          className={`absolute inset-0 h-[850px] w-full object-cover transition-opacity duration-500 ease-in-out transform ${
            imageHover ? "opacity-100 group-hover:opacity-0" : ""
          }`}
        />
        {imageHover && (
          <img
            src={imageHover}
            alt="image-hover"
            className="absolute inset-0 h-[850px] w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
