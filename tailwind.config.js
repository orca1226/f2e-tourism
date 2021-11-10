module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        light: '#1EB893',
        DEFAULT: 'linear-gradient(155.4deg, #78E389 0.2%, #1EB893 90.81%)'
      },
      blue: '#0085FF',
      yellow: '#FFD746',
      orange: '#F09515',
      tomato: '#E86A6A',
      summer: 'linear-gradient(148.33deg, #3EC6C9 28.68%, #FFD746 84.44%)',
      white: '#FFFFFF',
      gray: {
        50: '#F6F6F6',
        100: '#EDEDED',
        200: '#A8A8A8',
        300: '#E7E7E7',
        400: '#545454',
        500: '#9A9A9A'
      }
    },
    fontFamily: {
      sans: ['Noto-Sans-TC', 'sans-serif']
    },
    'bg-green': 'linear-gradient(155.4deg, #78E389 0.2%, #1EB893 90.81%)',
    extend: {
      fontSize: {
        15: '15px',
        16: '16px'
      },
      borderRadius: {
        '15px': '15px',
        '4xl': '136px'
      },
      zIndex: {
        1: '1',
        '-1': '-1'
      }
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: []
}
