/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      dark: {
        100: '#0D0E0F',
        80: '#161719',
        40: '#212325',
        20: '#292B2D',
      },
      light: {
        100: '#FFFFFF',
        80: '#FCFCFC',
        60: "#F1F1FA",
        40: '#E3E5E5',
        20: '#91919F',
      },
      violet: {
        100: '#7f3dFF',
        80: '#8F57FF',
        40: '#D3BDFF',
        20: '#EEE5FF',
      },
      red: {
        100: '#FD3C4A',
        80: '#FD5662',
        40: '#FDA2A9',
        20: '#FDD5D7',
      },
      green: {
        100: '#00A86B',
        80: '#2AB784',
        40: '#93EACA',
        20: '#CFFAEA',
      },
      blue: {
        100: '#0077FF',
        80: '#248AFF',
        40: '#8AC0FF',
        20: '#BDDCFF',
      },
      yellow: {
        100: '#FCAC12',
        80: '#FCBB3C',
        40: '#FCDDA1',
        20: '#FCEED4',
      },
    },
    fontSize: {
      titleX: ['64px', { fontWeight: '700' }],
      title1: ['32px', { fontWeight: '700' }],
      title2: ['24px', { fontWeight: '600' }],
      title3: ['18px', { fontWeight: '600' }],
      regular1: ['16px', { fontWeight: '500' }],
      regular2: ['14px', { fontWeight: '600' }],
      regular3: ['14px', { fontWeight: '500' }],
      small: ['13px', { fontWeight: '500' }],
      tiny: ['12px', { fontWeight: '500' }],
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

