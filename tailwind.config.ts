import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DCB93C',
        },
        black: {
          DEFAULT: '#000000',
          light: '#e3e4eb',
          footer: '#262626',
          'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          beige: '#E4E3DE',
          light: '#F8F7EE',
          dark: '#888ea8',
        },
        body: {
          DEFAULT: '#ECEBE6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        var: ['Ottertype-Var', 'sans-serif'],
        regularFont: ['Regular', 'sans-serif'],
        boldFont: ['Bold', 'sans-serif'],
        black: ['Ottertype-Black', 'sans-serif'],
        mediumFont: ['Medium', 'sans-serif'],
        semiBoldFont: ['SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
