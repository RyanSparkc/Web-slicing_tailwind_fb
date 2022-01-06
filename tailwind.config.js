module.exports = {
  purge: ['./src/**/*.html','./src/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px'
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff',

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

