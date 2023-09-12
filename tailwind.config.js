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
    'node_modules/flowbite/**/*.{js,ts}'
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
    },
  },
  plugins: [require("flowbite/plugin")],
};
