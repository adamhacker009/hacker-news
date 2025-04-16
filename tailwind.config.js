/** @type {import('tailwindcss').Config} */

/** Как конфигурировать Tailwind CSS #{https://tailwindcss.ru/docs/configuration/} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
}
