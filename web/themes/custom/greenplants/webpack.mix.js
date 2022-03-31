const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const postCssVariables = require('postcss-css-variables');
const postCssPurgeCss = require('@fullhuman/postcss-purgecss');

mix.js('src/js/main.js', 'dist/js');

mix.sass('src/sass/style.scss', 'dist/css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
  });
