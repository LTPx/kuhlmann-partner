"use client";

import Gallery from "./gallery";
import { Link } from "@/navigation";
import { GalleryProjectWp } from "../_interfaces/wordpress-components";
import { useTranslations } from "next-intl";

interface ProjectDetailsProps {
  description_project: string;
  gallery_project: GalleryProjectWp[];
  prevProject: { slug: string } | null;
  nextProject: { slug: string } | null;
  allCategories: string[];
  currentCategories: { id: number; name: string; slug: string }[];
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const {
    description_project,
    gallery_project,
    prevProject,
    nextProject,
    allCategories,
    currentCategories,
  } = props;

  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[20px] lg:gap-[0px] lg:grid lg:grid-cols-2">
        <h3 className="font-medium tracking-[-0.01em]">El resultado:</h3>
        <p className="font-regular lg:w-[665px]">
          La casa está distribuida en dos plantas con espacios abiertos y una
          impresionante escalera, casi flotante, que conecta ambas de forma
          armoniosa. Los trabajos incluyeron el desmontaje completo de la
          vivienda hasta las estructuras portantes, conservando únicamente
          techos, cimientos y muros exteriores. Se renovó la construcción del
          tejado y se instaló un sistema fotovoltaico en la cubierta plana. Se
          ampliaron las aberturas de las ventanas para adaptarlas al estilo
          Bauhaus, y las fachadas fueron completamente revocadas y revestidas.
          Además, se sustituyeron todas las instalaciones eléctricas y tuberías
          de agua, y se instaló una moderna bomba de calor para alimentar el
          sistema de calefacción.
        </p>
      </div>
      {gallery_project.length > 0 && (
        <section className="pt-[88px]">
          <Gallery gallery={gallery_project} />
        </section>
      )}
      <section className="hidden lg:block pt-[30px] pb-[65px]">
        <div className="flex justify-between items-center">
          <div className="flex items-start">
            {/* {prevProject && ( */}
            <Link href={`/projects/${prevProject?.slug}`}>
              <button className="uppercase inline-block hover:bg-black hover:text-white hover:rounded-none flex items-center justify-center font-medium text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                ANTERIOR
              </button>
            </Link>
            {/* )} */}
          </div>
          <div className="flex items-start">
            {/* {nextProject && ( */}
            <Link href={`/projects/${nextProject?.slug || ""}`}>
              <button className="uppercase inline-block hover:bg-black hover:text-white hover:rounded-none flex items-center justify-center font-medium text-[18px] leading-[18px] cursor-pointer border border-black h-[35px] px-[15px] rounded-full transition-colors duration-300 ease-in-out">
                SIGUIENTE
              </button>
            </Link>
            {/* )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
