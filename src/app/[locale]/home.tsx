import React from "react";
import Cover from "../components/cover";
import ProjectCard from "../components/project-card";
import { HomePageWp } from "../_interfaces/wordpress-components";

interface Props {
  home_information: HomePageWp;
}

function Home(props: Props) {
  const { home_information } = props;
  return (
    <div className="flex flex-col">
      <Cover media={home_information.cover_page}>
        <div className="flex flex-col">
          <h1 className="text-white tracking-[-0.015em]">Kuhlmann & Partner</h1>
        </div>
      </Cover>
      <div className="container">
        <section className="pt-[31px] lg:pt-[41px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <div
            className="wp-h3 "
            dangerouslySetInnerHTML={{
              __html: home_information.first_section.title,
            }}
          />
          <div
            className="font-regular"
            dangerouslySetInnerHTML={{
              __html: home_information.first_section.description,
            }}
          />
        </section>
        <section className="hidden lg:block pt-[40px]">
          <img
            src={home_information.image.url}
            className="object-cover h-[800px] w-full"
          />
        </section>
        <section className="pt-[31px] lg:pt-[40px] flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <div
            className="wp-h3"
            dangerouslySetInnerHTML={{
              __html: home_information.second_section.title,
            }}
          />
          <div
            className="font-regular lg:w-[590px]"
            dangerouslySetInnerHTML={{
              __html: home_information.second_section.description,
            }}
          />
        </section>
        <section className="pt-[48px] lg:pt-[83px]">
          <hr className="border-t border-black border-1 mb-[16px] lg:mb-[20px]" />
          <ProjectCard
            image="https://s3-alpha-sig.figma.com/img/eb3d/be3f/8521aa5ae4518e9d7e858852f7773547?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IIXm36ZCrYMTDW8~vqkV1a4A5epNq0VaaKfbGXCMfj2m4WqT-MlSsWR9wnJfS~MW9cn-oUoYo5HDavp9oC-3iCKY490Ryo9t2FBD8QULvmE5W0PWjby7-asFiaNDkMba688ZGvZW0vArwokCpu4iWIOK7fikl5iraALjBQ4TZCwxFbH88Y8s7f8M4pG~yfZYo8RRczZ-2ZUB70SeDtYXdfp0ZDwKYc3zjCM0pWSfBc6y6omCs48sfaqGQ1uwysXIIhEJrjfrh71p3jAaUF6M8t6MC1jmkS736l~yUN9tFA8lTxmsHtLEAYOw2jrHgCQ46MaJZ9NQNnbfUhGC3~owBw__"
            imageHover=""
            title="Petra"
            description="Este proyecto consistió en la transformación de un edificio de alto valor arquitectónico e histórico, previamente de uso industrial, en una vivienda moderna y funcional. Se trabajó cuidadosamente para preservar y realzar los elementos originales, como las columnas y techos de madera."
            date="2020–21"
          />
        </section>
        <section className="pt-[55px] lg:pt-[40px]">
          <hr className="border-t border-black border-1 hidden lg:block lg:mb-[45px]" />
          <p className="text-[40px] leading-[45px] lg:text-[75px] lg:leading-[78px] tracking-[-0.03em]">
            {home_information.banner.title}
            <br />
            <span className="opacity-30">{home_information.banner.date} </span>
          </p>
        </section>
        <section className="pt-[21px] lg:pt-[58px]">
          <hr className="border-t border-black border-1 mb-[21px] lg:mb-[32px]" />
          <p className="text-[20px] leading-[26px] lg:text-[32px] lg:leading-[40px] tracking-[-0.01em]">
            ¿Por qué trabajar con nosotros?
          </p>
          <div className="flex flex-col gap-[22px] lg:grid lg:grid-cols-2 lg:gap-y-[50px] pt-[25px] lg:pt-[45px]">
            {home_information.work_with_us.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:w-[550px] gap-[22px] lg:gap-[50px]"
              >
                <div className="flex flex-col">
                  <p className="font-semiBold">{item.title}</p>
                  <div
                    className="font-regular"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-[20px] lg:pt-[40px] pb-[30px] lg:pb-[0px]">
          <img src={home_information.last_image.url} className="object-cover h-[270px] lg:h-[965px] w-full" />
        </section>
      </div>
    </div>
  );
}

export default Home;
