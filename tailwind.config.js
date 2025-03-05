/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Project colors from the provided color scheme
        'dark-gray': '#363636',
        'red': '#DC2F2F',
        'orange': '#FF894C',
        'light-gray': '#F8F8F8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
};