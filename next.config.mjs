import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/news/blog-1",
        destination: "/de/news",
        permanent: true,
      },
      {
        source: "/en/blog-3",
        destination: "/en/news",
        permanent: true,
      },
      {
        source: "/es/author/claudia-kuhlmann/page/2/",
        destination: "/es",
        permanent: true,
      },
      {
        source: "/en/petra",
        destination: "/en/projects/petra",
        permanent: true,
      },
      {
        source: "/es/petra",
        destination: "/es/projects/petra",
        permanent: true,
      },
      {
        source: "/es/blog-4",
        destination: "/es/news",
        permanent: true,
      },
      {
        source: "/es/costa-den-blanes",
        destination: "/es/projects/costa-den-blanes",
        permanent: true,
      },
      {
        source: "/de/blog-4",
        destination: "/de/news",
        permanent: true,
      },
      {
        source: "/en/blog-4",
        destination: "/en/news",
        permanent: true,
      },
      {
        source: "/es/blogthemen/page/2/",
        destination: "/es/news",
        permanent: true,
      },
      {
        source: "/es/llucmajor",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/en/llucmajor",
        destination: "/en/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/kp-lucmajor-photos-3-2/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/petra-project/",
        destination: "/es/projects/petra",
        permanent: true,
      },
      {
        source: "/es/mix-projects/",
        destination: "/es/projects",
        permanent: true,
      },
      {
        source: "/es/llucmajor-actualidad/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web14/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web12/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web02/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web08/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web16/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/petra-process-2/",
        destination: "/es/projects/petra",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web05/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web10/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web07/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/kuhlmannblanes-preview-1/",
        destination: "/es/projects/costa-den-blanes",
        permanent: true,
      },
      {
        source: "/es/kp-costablanes-webq-6/",
        destination: "/es/projects/costa-den-blanes",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web15/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      {
        source: "/es/llucmajor-web13/",
        destination: "/es/projects/llucmajor",
        permanent: true,
      },
      
      {
        source: "/es/blog-3",
        destination: "/es/news",
        permanent: true,
      },
      {
        source: "/en/costa-den-blanes",
        destination: "/en/projects/costa-den-blanes",
        permanent: true,
      },
      {
        source: "/dienstleistungen-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/poolbau-schwimmbad-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/abbrucharbeiten-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/entsorgung-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/erdbewegungsarbeiten-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/einfriedungsarbeiten-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/rohbau-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/dachdecker-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/fliesenlegearbeiten-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/malerei-anstriche-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/verputzarbeiten-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/heizungs-energie-und-klimatechnik",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/sanitaer-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/heizungstechnik-mallorca",
        destination: "/de",
        permanent: true,
      },
      {
        source: "/klimatechnik-mallorca",
        destination: "/de",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
