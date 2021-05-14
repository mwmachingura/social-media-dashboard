module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        'large': '0.25em',
      },
      colors: {
        'limegreen': 'hsl(163, 72%, 41%)',
        'brightred': 'hsl(356, 69%, 56%)',
        'facebook': 'hsl(208, 92%, 53%)',
        'twitter': 'hsl(203, 89%, 53%)',
        'instagram': 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'youtube': 'hsl(348, 97%, 39%)',
        // Dark Theme
        'toggle-dark': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        'background-dark': 'hsl(230, 17%, 14%)',
        'topbackground-dark': 'hsl(232, 19%, 15%)',
        'cardbackground-dark': 'hsl(228, 28%, 20%)',
        'text-dark': 'hsl(228, 34%, 66%)',
        // Light Theme
        'toggle': 'hsl(230, 22%, 74%)',
        'topbackground': 'hsl(225, 100%, 98%)',
        'cardbackground': 'hsl(227, 47%, 96%)',
        'text': 'hsl(228, 12%, 44%)',
        'dark-text': 'hsl(230, 17%, 14%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
