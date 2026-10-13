/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: { 950: '#050505', 900: '#0d0d0d', 800: '#161616' },
        gold: { DEFAULT: '#c9a75e', light: '#edd7a3', deep: '#856e47' },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(237,215,163,.45), 0 8px 40px -8px rgba(201,167,94,.6)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 1, 0.5, 1)', // Curva suave e natural
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Efeito elástico sutil
      },
      keyframes: {
        'glow-pulse': { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        'float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        'glow': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
