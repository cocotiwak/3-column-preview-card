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
        'very-light-grey': 'hsl(0, 0%, 95%)',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)'

      },
      fontFamily: {
        'lexend': ['Lexend Deca', 'sans'],
        'big': ['Big Shoulders Display', 'sans']
      },
      fontSize: {
        basis : ['15px','24px']
      },
      textColor: {
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'very-light-grey': 'hsl(0, 0%, 95%)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}