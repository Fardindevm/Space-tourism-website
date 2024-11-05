/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
       invert: {
        25: '.25',
        50: '.5',
        75: '.75',
        85: '.85'
      },
      animation: {
        transitionDestination: 'spin 34s linear infinite',
        'orbit': 'orbit 4s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translate(64px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translate(64px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}

