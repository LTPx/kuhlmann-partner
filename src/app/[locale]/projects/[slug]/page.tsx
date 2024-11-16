import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Cover from "@/app/components/cover";
import Gallery from "@/app/components/gallery";
import ProjectDetails from "@/app/components/project-details";

async function ProjectSlugPage(nextParams: {
  params: { locale: "en" | "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  return (
    <div className="project-slug-page">
      <Cover img="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__">
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">Project Name</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[30px] lg:pt-[41px] flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h3 className="font-medium tracking-[-0.01em]">
            Objetivos del proyecto:
          </h3>
          <p className="font-regular lg:w-[665px]">
            Cuando los propietarios de este chalet en Costa den Blanes nos
            contactaron para solicitar la renovación completa y ampliación de su
            bungalow, así como la construcción de una piscina infinita con una
            gran terraza y un apartamento para invitados en el nivel inferior,
            nuestro primer objetivo fue reunir a los arquitectos y a los
            propietarios para planificar minuciosamente el proceso de
            construcción, evitando sorpresas desagradables y retrasos.
          </p>
        </section>
        <section className="pt-[20px] lg:pt-[25px]">
          <ProjectDetails
            description_project={""}
            gallery_project={[]}
            prevProject={null}
            nextProject={null}
            allCategories={[]}
            currentCategories={[]}
          />
        </section>
      </div>
      <section className="pt-[55px] pb-[47px] lg:hidden">
        <p className="pl-[12px] font-medium pb-[15px]">Todos los proyectos:</p>
        <div className="h-[65px] flex items-center border-1 border-black border-t border-b">
          <p className="container text-[20px] leading-[40px]"><span className="opacity-25">2022-2023</span> Petra</p>
        </div>
      </section>  
    </div>
  );
}

export default ProjectSlugPage;
