const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */

mix.js('src/js/main.js', 'public/js')
  .sass('src/sass/style.scss', 'public/css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
  })
  .version();
