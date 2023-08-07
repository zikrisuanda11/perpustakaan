/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
],
  theme: {
    extend: {
      colors: {
        'primary': '#11418B',
        'secondary': '#1976D2',
        'third': '#3E97FF'
      },
      fontFamily:{
        'bronson': ['bronson', 'sans-serif'],
        'sofia': ['Sofia Pro', 'sans-serif'],
        'discover': ['discovercardt.s. countdown.', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'rambla': ['Rambla', 'sans-serif'],
        'karla': ['Karla', 'sans-serif']
      }
    },

    // height: {
    //   '128': '37.5rem',
    // }
    // colors: {
    //   'secondary': '#11418b'
    // }
  },
  plugins: [],
}

