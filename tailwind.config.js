/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fef5c7',
          200: '#fde78a',
          300: '#fcd34d',
          400: '#f5b516',
          500: '#e59b07',
          600: '#ca7904',
          700: '#a15607',
          800: '#84430c',
          900: '#6f370e',
        },
        obsidian: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101622',
          800: '#161f30',
          700: '#222f46',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(245, 181, 22, 0.15), transparent 70%)',
        'carbon-mesh': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
