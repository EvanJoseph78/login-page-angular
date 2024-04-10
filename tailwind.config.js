/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#ecf4ff',
          '100': '#dceaff',
          '200': '#c0d7ff',
          '300': '#9abbff',
          '400': '#7294ff',
          '500': '#516eff',
          '600': '#3243f9',
          '700': '#2633dc',
          '800': '#212db2',
          '900': '#1d2672',
          '950': '#151a51',
        },
        'primary-color': '#7001FD',
        'text-color': '#555555',
        'secondary-color': '#1E2772',
        'gray-bg': '#EEEEEE'
      },
    },
    plugins: [],
  }
}
