module.exports = {
  corePlugins: {
    // @todo maybe enable when ready for bigger re-theme.`
    preflight: false,
  },
  content: [
    './templates/**/*.html.twig',
    './js/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
