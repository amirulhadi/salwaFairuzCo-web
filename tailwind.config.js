/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js',
    {
      transform: (content) => content.replace(/taos:/g, ''),
    }
  ],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    screens: {
      'xxs': {'max':'479px'},
      'xs': '480px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 768px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('taos/plugin')
  ],
}
