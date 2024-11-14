import Cover from "@/app/components/cover";
import Items from "@/app/components/items";
import ProjectView from "@/app/components/project-view";
import { Metadata } from "next";

async function Projects(nextParams: {
  params: { locale: "en" | "es" | "de" };
}) {
  const {
    params: { locale },
  } = nextParams;

  return (
    <div className="page-projects">
      <Cover img="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__">
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">Proyectos</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[41px] grid grid-cols-2">
          <h3 className="font-medium tracking-[-0.01em]">
            Kuhlmann & Partner ofrece un enfoque centrado en el cliente,
            asegurando una atención personalizada y única.
          </h3>
          <div className="">
            <p className="font-regular w-[665px] text-[20px] leading-[28px]">
              Kuhlmann & Partner es una empresa familiar fundada en 2008. más de
              una década de experiencia, nos hemos consolidado como líderes en
              el sector, ofreciendo servicios integrales que abarcan desde la
              planificación hasta la ejecución. Nuestro enfoque está centrado en
              el cliente, asegurando una atención personalizada y soluciones
              adaptadas a sus necesidades específicas. Este método exclusivo
              garantiza que cada detalle de su proyecto reciba la atención y el
              cuidado necesarios. Nos enfocamos completamente en sus necesidades
              y expectativas, trabajando mano a mano con usted para convertir
              sus sueños en realidad. Al limitar nuestro compromiso a un solo
              proyecto, podemos ofrecer un nivel de personalización y excelencia
              que nos distingue en el sector de la construcción de lujo en
              Mallorca.
            </p>
          </div>
        </section>
        <section className="pt-[80px]">
          <hr className="border-t border-black border-1 mb-[16px]" />
          <div className="grid grid-cols-2">
            <h3 className="font-medium tracking-[-0.01em]">
              Proceso de trabajo:
            </h3>
            <div className="w-[648px]">
              <Items
                count={"01"}
                title={"Planificación"}
                description={
                  "Diseña tu nuevo hogar con todos los detalles posibles. Considera la ubicación de los muebles y las necesidades de electricidad y luz. También planifica el jardín, incluyendo fuentes de agua y luz. Solo después solicita un presupuesto al contratista en Mallorca."
                }
              />
            </div>
          </div>
        </section>
        <section className="pt-[95px]">
          <p className="font-semiBold">Proyectos</p>
          <hr className="border-t border-black border-1 my-[16px]" />
          <ProjectView
            image="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__"
            title={"Petra"}
            date={"2020-2021"}
            url={""}
          />
        </section>
      </div>
    </div>
  );
}

export default Projects;
