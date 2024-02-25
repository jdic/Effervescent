/** @type { import('tailwindcss').Config } */
export default
{
  darkMode: 'class',
  content:
  [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme:
  {
    extend:
    {
      fontFamily:
      {
        
      },
      colors:
      {
        light:
        {
          title: '#20123A',
          background: "#FFFFFF",
          backgroundHeader: '#FFFFFF',
          paragraph: "#42414D",
          button:
          {
            color: '#FFFFFF',
            styles:
            {
              primary: '#4f46e5',
              secondary: '#404648',
              success: '#2F844A',
              danger: '#A00F12',
              transparent: '#00000000'
            },
          }
        }
      }
    },
  },
  plugins:
  [
    require('@tailwindcss/aspect-ratio')
  ],
  safelist: [{ pattern: /(bg|text)-/, variants: ['dark'] }]
}

