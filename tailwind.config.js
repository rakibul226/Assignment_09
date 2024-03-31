// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   daisyui: {
//     themes: ["light", "dark", "cupcake"],
//   },
//   plugins: [require("daisyui")],
// };


// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      padding: {
        '80': '16rem', // 256px
      },
      screens: {
        'lg2': '1440px',
      },
    },
  },
  plugins: [require("daisyui")],
};
