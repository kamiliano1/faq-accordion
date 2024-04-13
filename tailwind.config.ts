import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      pink: "#AD28EB",
      darkPurple: "#301534",
      lightPink: "#F8EEFF",
      palePurple: "#8B6990",
    },
    extend: {
      backgroundImage: {
        backgroundMobile: "url('/background-pattern-mobile.svg')",
        backgroundDesktop: "url('/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
