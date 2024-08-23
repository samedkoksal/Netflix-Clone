/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'ff': '#191919',
      'white':'#f8fafc',
      'black':'#020617',
      'dblack':'#0c0a09',
      'soft-gray':'#4626461',
      'neutral-600':'rgb(82 82 82)',
      'custom-gray':'#333',
      'fff': '#e5e5e5',
      'ffff':'#fff',
      'bckgr':'#6d6d6eb3',
      'bckgrn':'#ffffffbf',
      'bckgrnd':'#6d6d6e66',
      'gray-300':'rgb(209 213 219)',
      'gray-400':'rgb(156 163 175)',
      'gray-500':'rgb(115 115 115)',
      'gray-800':'rgb(31 41 55)',
      'red':'#e50914',
      'grayy':'#b3b3b3',
      'grayyy':'#737373',
      'n-gray':'#141414'
    },
    fontSize: {
      '2xl':'32px',
      'base':'16px'
    },
    extend: {
      fontFamily:{
        head: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

