const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...fontSansCJK, ...fontFamily.sans],
        serif: ['"Source Serif"', ...fontSerifCJK, ...fontFamily.serif],
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      },
      animation: {
        blob: "blob 7s infinite",
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 15s ease infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.1)"
          },
          "66%": {
            transform: "translate(20px, -20px)scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
            '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
            }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
