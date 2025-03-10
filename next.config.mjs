import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
