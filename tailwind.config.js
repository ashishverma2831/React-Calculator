/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'grid-rows-layout': 'minmax(120px,auto) repeat(5,100px)',
      },
      gridTemplatesColumns: {
        'grid-cols-layout': 'repeat(4,100px)',
      }
    }
  },
  plugins: [],
}

