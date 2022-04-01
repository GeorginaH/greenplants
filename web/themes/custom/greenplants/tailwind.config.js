const defaultTheme = require('tailwindcss/defaultTheme');
const {
  colors,
  screens
} = defaultTheme;
const forms = require('@tailwindcss/forms');

module.exports = {
  corePlugins: {
    // @todo maybe enable when ready for bigger re-theme.`
    preflight: false,
  },
  content: [
    './templates/**/*.html.twig',
    './js/**/*.js',
  ],
  theme: {
    screens: {
      // Default breakpoints.
      // @see https://tailwindcss.com/docs/breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Custom breakpoints.
      '3xl': '1792px',
    },
    colors: {
      ...colors,
      gray: {
        '100': '#f0f0f0',
        '200': '#f5f5f5',
        '300': '#ebebeb',
        '400': '#E3EAEF',
        '500': '#dedede',
        '600': '#aeaeae',
        '700': '#7f7f7f',
        '800': '#616568',
        '900': '#414042',
        '930': '#333333',
        '950': '#292d2f',
        'heading': '#303030',
        'subheading': '#939393',
        'body': '#6b6b6b',
        'button': '#8d8d8d',
        'button-hover': '#d0d0d0',
        'header': '#666',
      },
      yellow: {
        '100': '#ffc',
        '200': '#ff7',
        '300': '#fc0',
        '400': '#F6E05E',
        '500': '#ECC94B',
        '600': '#D69E2E',
        '700': '#B7791F',
        '800': '#975A16',
        '900': '#744210',
      },
      pink: {
        '100': '#FFF5F7',
        '200': '#fee',
        '300': '#FBB6CE',
        '400': '#F687B3',
        '500': '#ED64A6',
        '600': '#D53F8C',
        '700': '#B83280',
        '800': '#97266D',
        '900': '#702459',
      },
      red: {
        '100': '#FFF5F5',
        '200': '#FED7D7',
        '300': '#FEB2B2',
        '400': '#FC8181',
        '500': '#F56565',
        '600': '#E53E3E',
        '700': '#C00',
        '800': '#900',
        '900': '#742A2a',
      },
      tern:{
        care: '#60cae6',
      },
      bikePlatform:{
        blue: '#e5f0f6',
      }
    },
    fontFamily: {
      sans: ["AvenirNextLTW02-Regular","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      header: ["AvenirNextLTW02-Medium","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      thin: ["Avenir Next W02 Thin","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      'header-bold': ["Avenir Next LT W02 Demi","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      thin: ["Avenir Next W02 Thin","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      title: ["'EgyptianSlateW02-Medium 736953'", "Trebuchet MS Bold", "Helvetica Neue Medium", "Helvetica", "Arial", "sans-serif"],
      serif: ["AvenirNextLTW02-Regular","Trebuchet MS","Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
    },
    customForms: theme => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.none'),
        },
      },
    }),
    extend: {
      fontSize: {
        '2.5xl': ['1.75rem', '2.25rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    forms,
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
