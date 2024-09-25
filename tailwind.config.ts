import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-linear":
          "linear-gradient(160deg, rgb(0, 37, 255) 0%, rgb(229, 5, 241) 47%, rgb(255, 109, 0) 100%)",
        "button-bg": `linear-gradient(to right, #005C97 0%, #363795  51%, #005C97  100%)`,
      },
      colors: {
        "light-color": "#ffffff",
        "black-color": "#000000",
        "blue-border": "rgb(0, 92, 151)",
        "hover-border": "rgb(250, 193, 110)",
      },
      fontFamily: {
        "josefin-font": `"Josefin Sans", sans-serif`,
        "mont-font": `"Montserrat", sans-serif`,
      },
    },
  },
  plugins: [],
};

export default config;
