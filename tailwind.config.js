module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html', // sesuaikan dengan file yang akan di proses
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-grey': 'hsl(0, 0%, 95%)'

      },
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans'],
        'big': ['Big Shoulders Display', 'sans']
      },
      fontSize: {
        base : ['15px','24px']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}