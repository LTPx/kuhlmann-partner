import Cover from "@/app/components/cover";
import { Metadata } from "next";

async function AboutUs(nextParams: { params: { locale: "en" | "es" | "de" } }) {
  const {
    params: { locale },
  } = nextParams;
  //   const data = await getWordPressCustomPage(locale, "contact");
  //   const { acf } = data;
  //   const { contact } = acf;

  return (
    <div className="page-aboutUs">
      <Cover img="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__">
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">Nosotros</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[27px] grid grid-cols-2">
          <h3 className="font-medium tracking-[-0.01em]">Nuestra visión:</h3>
          <p className="font-regular w-[665px] text-[20px] leading-[28px]">
            Cuando emigramos a Mallorca en 1997, comenzamos a trabajar con
            constructoras y arquitectos como clientes. Durante esos primeros
            años, experimentamos varias remodelaciones y construcciones, y nos
            sorprendió la falta de transparencia y comunicación que
            caracterizaba a muchas de estas empresas.
          </p>
        </section>
        <section className="pt-[45px]">
          <img src="" className="object-cover h-[1000px] w-full" />
        </section>
        <section className="pt-[50px] grid grid-cols-2">
          <h3 className="font-medium tracking-[-0.01em]">Nuestro enfoque:</h3>
          <p className="font-regular w-[665px] text-[20px] leading-[28px]">
            Hoy, somos un equipo de aproximadamente 14 personas, comprometido
            con ofrecer una calidad constructiva sobresaliente y soluciones
            personalizadas para proyectos de alta exigencia. Supervisamos cada
            proyecto y obra diariamente, manteniendo una comunicación fluida y
            directa con nuestros clientes. Además, superamos cualquier barrera
            idiomática en la interacción con autoridades, arquitectos y
            proveedores.
          </p>
        </section>
        <section className="pt-[45px]">
          <img src="" className="object-cover h-[960px] w-full" />
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
