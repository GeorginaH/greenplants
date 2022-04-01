const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
const postCssVariables = require('postcss-css-variables');
const postCssPurgeCss = require('@fullhuman/postcss-purgecss');

mix.js('src/js/main.js', 'dist/js')
  .sass('src/sass/style.scss', 'dist/css')
  .sass('src/sass/fontawesome.scss', 'dist/fontawesome/css')
  .options({
    postCss: [ tailwindcss('./tailwind.config.js') ],
  });

// mix.disableNotifications()
//   .postCss('src/tailwind.pcss', 'dist')
//   .options({
//   processCssUrls: false,
//   postCss: [
//     postCssVariables(),
//     tailwindcss('./tailwind.config.js'),
//   ],
//   })
//   .sourceMaps()
//   .webpackConfig({
//     devtool: "source-map",
//     externals: {
//       jquery: "jQuery"
//     }
//   })
//   .browserSync({
//     proxy: 'greenplants.ddev.site:80',
//     files: [
//       'dist/tailwind.css',
//       'dist/app.js',
//       'greenplants.info.yml',
//       'templates/**/*',
//       'src/**/*',
//       'images/**/*',
//       'fonts/**/*',
//       '../../../modules/custom/**/*',
//     ]
//   });

