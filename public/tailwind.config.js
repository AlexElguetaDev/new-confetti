/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "lolocar-gradient":
          "linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%)",
      },
      colors: {
        "lolocar-theme-color": "#FF385C",
        "lolocar-light-black": "#222222",
        "lolocar-light-gray": "#717171",
      },
      gridTemplateRows: {
        "new-listing": "10vh 80vh 10vh",
      },
    },
  },
  plugins: [],
};
