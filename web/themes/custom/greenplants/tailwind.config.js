const {
  boxShadow,
  listStyleType,
  maxHeight,
  minHeight
} = require('tailwindcss/defaultTheme')

const { variantOrder } = require('tailwindcss/defaultConfig')

module.exports = {
  content: [
    'templates/**/*.twig',
    'templates/**/**/*.twig',
    'js/messages.js',
  ],
  safelist: [
    'lg:w-1/2',
    'lg:w-1/3',
    'lg:w-2/3',
    'lg:w-1/4',
    'lg:w-3/4',
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    fontFamily: {
      sans: [ 'Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"' ],
      'sans-secondary': [ 'Public Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"' ],
      openSans: [ '"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"' ],
      helveticaNeue: [ '"Helvetica Neue"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"' ],
      serif: ['Lora', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    fontSize: {
      xs:    ['14px', '18px'],
      sm:    ['16px', '26px'],
      base:  ['18px', '26px'],
      lg:    ['20px', '24px'],
      xl:    ['22px', '30px'],
      '2xl': ['25px', '35px'],
      '3xl': ['30px', '36px'],
      '4xl': ['35px', '45px'],
      '5xl': ['38px', '43px'],
      '6xl': ['45px', '55px'],

      hero:      ['50px', '62px'],
      'hero-sm': ['38px', '44px'],
      'hero-lg': ['60px', '75px'],
      'hero-xl': ['70px', '80px'],

      nav:      ['19px', '24px'],
      'nav-sm': ['15px', '19px'],
      'nav-lg': ['18px', '23px'],
      'nav-xl': ['21px', '27px'],

      'nav-child': ['17px', '20px'],
      'nav-child-sm': ['16px', '19px'],
      'nav-child-lg': ['18px', '23px'],
      'nav-child-xl': ['20px', '25px'],
    },
    fontWeight: {
      'light': 200,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700
    },
    lineHeight: {
      '12': '12px',
      '18': '18px',
      '24': '24px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '35': '35px',
      '36': '36px',
      '43': '43px',
      '45': '45px',
      '55': '55px'
    },
    listStyleType: {
      ...listStyleType,
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    typography: {
      DEFAULT: {
        css: {
          h2: {
            'margin-bottom': '0.25rem'
          },
          h3: {
            'margin-bottom': '0.25rem'
          },
          'p + h3': {
            'margin-top': '2.25rem'
          },
          'p + p': {
            'margin-bottom': '1rem'
          },
          ul: {
            'margin-top': '0.5rem',
            'list-style-type': 'disc',
            'list-style-position': 'inside'
          },
          'li + li': {
            'margin-top': '0.5rem'
          },
          'li::marker': {
            'font-size': '0.5rem'
          },
          '.list-none ul': {
            'list-style-type': 'none'
          }
        }
      }
    },
    boxShadow: {
      ...boxShadow,
      menu: '0 3px 3px 0 rgba(0,0,0,0),0 3px 1px 0 rgba(0,0,0,0.05)',
    },
    maxHeight: {
      ...maxHeight,
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '80%',
      full: '100%',
      96: '24rem',
    },
    minHeight: {
      ...minHeight,
      '1/4screen': '25vh',
      '1/3screen': '33.33vh',
      '1/2screen': '50vh',
      '2/3screen': '66.67vh',
      '3/4screen': '75vh',
    },
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect, select': {
          borderRadius: theme('borderRadius.none'),
        },
      },
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      100: '100',
      120: '120',
    },
    extend: {
      backgroundImage: (theme) => ({
        'messages-status': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%234ade80'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E\")",
        'messages-warning': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23facc15'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01' /%3E%3C/svg%3E\")",
        'messages-error': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23f87185'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E\")",
      }),
      borderRadius: {
        '2.5xl': '20px',
        '4xl': '30px'
      },
      colors: {
        'near-black': '#303030',
        'off-black': '#2E2925',
        cyan: {
          650: '#177BA6',
        },
        gray: {
          150: '#F0F1F1',
          250: '#E1DFDD'
        },
        stone: {
          550: '#706258'
        },
        sky: {
          350: '#40B4E5'
        },
        white: '#FFFFFF',
        yellow: {
          250: '#FDE585',
          350: '#F7D44B'
        },
        zinc: {
          500: '#707070'
        }
      },
      height: {
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '106': '26.5rem',
      },
      opacity: {
        '72': '.72',
        '81': '.81',
      },
      padding: {
        '75px': '75px',
      },
      spacing: {
        '31': '7.75rem',
        '112': '28rem'
      },
      width: {
        '112': '28rem',
        '132': '33rem',
        '150': '37.5rem',
        '160': '40rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
