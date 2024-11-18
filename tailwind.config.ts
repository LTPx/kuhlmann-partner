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
          beige: '#F4F4F2',
          light: '#b9bdc4',
          dark: '#888ea8',
        },
        body: {
          DEFAULT: '#ECEBE6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        var: ['Ottertype-Var', 'sans-serif'],
        regular: ['Ottertype-Regular', 'sans-serif'],
        bold: ['Ottertype-Bold', 'sans-serif'],
        black: ['Ottertype-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
