/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",
    "./src/components/*.jsx",
    "./src/components/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6047EC",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
