/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
  extend: {
    fontFamily: {
      primary: "Nunito",
    },
    backgroundImage: {
      'bgleft': "url('../img/hero-1.png')",
      'bgright': "url('../img/bg.jpg')",
      'bgfacilities': "url('../img/room-3-200x122.png')",
  },
  },
  plugins: [],
  }
}
