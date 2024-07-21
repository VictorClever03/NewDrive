import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      one:'var(--font-montserrat)',
      two:'var(--font-roboto)'
     },
     colors:{
      pallete1:{
        '500': '#484141',
        '600': '#242424',
        '700': '#121111',
      }, 
      pallet2:{
        '200':'#F5DBDA',
        '300':'#F5DBDA',
        '400':'#EDB5B7',
        '500': '#dc3545',
        '600': '#c71725',
        '700':'#7e0101',
        '800':'#621719',
        '900':'#310c0d',
      }
     }
    },
  },
  plugins: [],
};
export default config;
