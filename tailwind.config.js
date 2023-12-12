/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    'node_modules/flowbite-vue/**/*.{js,ts}',
    'node_modules/flowbite/**/*.{js,ts}',
    "./public/**/*.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "avantgarde": ["avantgarde"],
        "avantgarde-demi": ["avantgarde-demi"],
        "MyriadLight": ["MyriadLight"],
        "MyriadItalic": ["MyriadItalic"],
        "MyriadBold": ["MyriadBold"],
        "MyriadCondensed": ["MyriadCondensed"],
        "MyriadRegular": ["MyriadRegular"],
        "Futurab": ["Futurab"],
        "Futurab-bold": ["Futurab-bold"],
      },
      backgroundImage: {
        'hero-pattern': "url('/image/footer.jpg')",
      }
    },
    // screens: {
    //   'laptop': '1440px',
    //   // => @media (min-width: 1440px) { ... }
    //   'dtnho': '375px',
    //   // => @media (min-width: 1440px) { ... }
    //   'PC lon': '1680px',
    //   // => @media (min-width: 1680px) { ... }
    // },
  },
  plugins: [require("flowbite/plugin")],
};
