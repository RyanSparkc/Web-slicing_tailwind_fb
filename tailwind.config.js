module.exports = {
  purge: ['./src/**/*.html','./src/**/*.js'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px'
      },
      colors: {
        // darkMode
        'fb-bg-dark': '#18191a',
        'fb-header-dark': '#242526',
        'fb-input-dark': '#3a3b3c',
        'fb-hover-input-dark': '#5a5b5c',
        'fb-popover-dark': '#3e4042',
        'fb-popover-hover-dark': '#5e5e5e',
        'fb-active-dark': 'rgb(56, 88, 152)',
        'fb-hover-active-dark': 'rgb(56, 88, 130, 0.7)',
        'fb-card-dark': '#242526',
        'fb-dark': '#2e89ff',

        // lightMode
        'fb-bg': '#f0f2f5',
        'fb-header': '#ffffff',
        'fb-input': '#e4e6eb',
        'fb-hover-input': '#f2f2f2',
        'fb-popover': '#e1e3e8',
        'fb-popover-hover': '#d7d9de',
        'fb-active': '#e5f1fd',
        'fb-hover-active': '#d5e8fc',
        'fb-card': '#ffffff',
        'fb': '#2e89ff',
        'fb-text': '#606770',

        c_purple: {
          100: "#ddddee",
          200: "#bbbbdd",
          300: "#999acd",
          400: "#7778bc",
          500: "#5556ab",
          600: "#444589",
          700: "#333467",
          800: "#222244",
          900: "#111122"
        },

      },
      animation: {
        c_spin: 'c_Spin 1s linear infinite',
      },
      keyframes: {
        c_Spin: {
          '100%': {
            transform: 'rotate(1turn)'
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

