import React from "react";
import Cover from "../components/cover";
import ProjectCard from "../components/project-card";

interface Props {
  // data: any;
}

function Home(props: Props) {
  // const { data } = props;
  return (
    <div className="flex flex-col">
      <Cover img="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__">
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">Kuhlmann & Partner</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[41px] flex justify-between">
          <h3 className="w-[570px]">
            Empresa especializada en proyectos de construcción en Mallorca.
          </h3>
          <div className="pr-[111px]">
            <p className="w-[590px] text-[20px] leading-[28px]">
              Kuhlmann & Partner es una empresa familiar fundada en 2008. Más de
              una década de experiencia, nos hemos consolidado como líderes en
              el sector, ofreciendo servicios integrales que abarcan desde la
              planificación hasta la ejecución. Nuestro enfoque está centrado en
              el cliente, asegurando una atención personalizada y soluciones
              adaptadas a sus necesidades específicas.
            </p>
          </div>
        </section>
        <section className="pt-[40px]">
          <img src="" className="object-cover h-[800px] w-full" />
        </section>
        <section className="pt-[40px] flex justify-between">
          <h3 className="w-[628px]">
            Nuestro enfoque único en un proyecto a la vez nos permite dedicarnos
            al 100% a cada cliente, asegurando la máxima prioridad y atención a
            cada obra.
          </h3>
          <div className="pr-[111px]">
            <p className="w-[590px] text-[20px] leading-[28px]">
              Este método exclusivo garantiza que cada detalle de su proyecto
              reciba la atención y el cuidado necesarios. Nos enfocamos
              completamente en sus necesidades y expectativas, trabajando mano a
              mano con usted para convertir sus sueños en realidad. Al limitar
              nuestro compromiso a un solo proyecto, podemos ofrecer un nivel de
              personalización y excelencia que nos distingue en el sector de la
              construcción de lujo en Mallorca.
            </p>
          </div>
        </section>
        <section className="pt-[83px]">
          <hr className="border-t border-black border-1 mb-[20px]" />
          <ProjectCard
            image="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__"
            imageHover=""
            title="Petra"
            description="Este proyecto consistió en la transformación de un edificio de alto valor arquitectónico e histórico, previamente de uso industrial, en una vivienda moderna y funcional. Se trabajó cuidadosamente para preservar y realzar los elementos originales, como las columnas y techos de madera."
            date="2020–21"
          />
        </section>
        <section className="pt-[40px]">
          <hr className="border-t border-black border-1 mb-[45px]" />
          <p className="text-[75px] leading-[78px] tracking-[-0.03em]">
            Próximo inicio de construcción:
            <br />
            <span className="opacity-30">3 de Marzo 2025 </span>
          </p>
        </section>
        <section className="pt-[58px]">
          <hr className="border-t border-black border-1 mb-[32px]" />
          <p className="text-[32px] leading-[40px] tracking-[-0.01em]">
            ¿Por qué trabajar con nosotros?
          </p>
          <div className="grid grid-cols-2 pt-[45px]">
            <div className="flex flex-col w-[532px] gap-[50px]">
              <div className="flex flex-col">
                <p className="font-semiBold text-[20px] leading-[28px]">
                  Asesoramiento integral:
                </p>
                <p className="font-regular text-[20px] leading-[28px]">
                  Contamos con un equipo de arquitectos e interioristas
                  altamente cualificados. Te ayudarán a planificar y diseñar tu
                  hogar ideal en Mallorca.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semiBold text-[20px] leading-[28px]">
                  Asesoramiento integral:
                </p>
                <p className="font-regular text-[20px] leading-[28px]">
                  Contamos con un equipo de arquitectos e interioristas
                  altamente cualificados. Te ayudarán a planificar y diseñar tu
                  hogar ideal en Mallorca.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[574px] gap-[50px]">
              <div className="flex flex-col">
                <p className="font-semiBold text-[20px] leading-[28px]">
                  Asesoramiento integral:
                </p>
                <p className="font-regular text-[20px] leading-[28px]">
                  Contamos con un equipo de arquitectos e interioristas
                  altamente cualificados. Te ayudarán a planificar y diseñar tu
                  hogar ideal en Mallorca.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-semiBold text-[20px] leading-[28px]">
                  Asesoramiento integral:
                </p>
                <p className="font-regular text-[20px] leading-[28px]">
                  Contamos con un equipo de arquitectos e interioristas
                  altamente cualificados. Te ayudarán a planificar y diseñar tu
                  hogar ideal en Mallorca.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[40px]">
          <img src="" className="object-cover h-[965px] w-full" />
        </section>
      </div>
    </div>
  );
}

export default Home;
