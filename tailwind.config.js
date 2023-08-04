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
    // colors: {
    //   'secondary': '#11418b'
    // }
  },
  plugins: [],
}

