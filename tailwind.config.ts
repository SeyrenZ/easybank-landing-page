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
        limeGreen: "#31d35c",
        brightCyan: "#2bb7da",
        darkBlue: "#2d314d",
      },
      backgroundImage: {
        hero: "url('/image-mockups.png')",
      },
    },
  },
  plugins: [],
};
export default config;
