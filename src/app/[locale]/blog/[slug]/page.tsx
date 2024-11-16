import Cover from "@/app/components/cover";
import ProjectDetails from "@/app/components/project-details";

async function BlogSlugPage(nextParams: {
  params: { locale: "en" | "es" | "de"; slug: string };
}) {
  const {
    params: { locale, slug },
  } = nextParams;

  return (
    <div className="container blog-slug-page">
      <div className="pt-[40px]">
        <p className="text-[25px] leading-[30px] lg:text-[40px] lg:leading-[60px] tracking-[-0.03em] opacity-20">
          14.04.2024
        </p>
        <h1 className="text-[25px] leading-[30px] font-medium lg:text-[80px] lg:leading-[85px] tracking-[-0.03em]">
          ¿Qué debo tener en cuenta al comprar una propiedad en Mallorca?
        </h1>
      </div>
      <section className="pt-[30px] lg:pt-[141px]">
        <hr className="hidden lg:block border-t border-black border-1 mb-[10px]" />
        <div className="flex flex-col gap-[30px] lg:gap-[0px] lg:grid lg:grid-cols-2">
          <h2 className="font-medium text-[16px] leading-[22px] lg:text-[40px] lg:leading-[45px] tracking-[-0.02em]">
            Puntos a tener en cuenta para verificar su propiedad antes de la
            compra.
          </h2>
          <p className="font-regular lg:w-[677px] text-[16px] leading-[22px] lg:text-[18px] lg:leading-[24px]">
            Tal vez haya escuchado de amigos o conocidos que compraron una
            propiedad en Mallorca de buena fe, solo para descubrir después que
            partes del edificio no se construyeron legalmente o, peor aún, que
            todo el edificio es ilegal. Algunos compradores solo se enteran de
            ciertas servidumbres después de finalizar la compra, como en un caso
            reciente que gestionamos. Los compradores se dieron cuenta después
            de firmar que el vecino tenía derecho al agua del pozo de nuestro
            cliente para regar sus naranjales una vez por semana. Existen muchos
            casos de compradores confiados y vendedores poco serios, y,
            lamentablemente, a menudo también de agentes inmobiliarios poco
            informados. Por eso, queremos ofrecerle una lista de puntos a tener
            en cuenta para verificar su propiedad ideal antes de la compra.
          </p>
        </div>
      </section>
      <section className="pt-[50px] pb-[70px]">
        <hr className="border-t border-black border-1 mb-[18px]" />
        <div className="grid grid-cols-2">
          <h2 className="font-medium text-[40px] leading-[45px] tracking-[-0.02em]">
            Preguntas frecuentes:
          </h2>
          <p className="font-regular lg:w-[677px] text-[18px] leading-[24px]">
            ¿Cuánto cuesta la revisión de los documentos de compra? Cobramos un
            punto porcentual del precio de compra por nuestro trabajo (más el
            21% de IVA).
          </p>
        </div>
      </section>
    </div>
  );
}

export default BlogSlugPage;
