/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#FFFFFF',
        bgSectionAlt: '#F7F5FB',
        bgSoft: '#F5F5F5',
        bgCard: '#FFFFFF',
        primary: '#342D59',
        primarySoft: '#5B2A86',
        accentTag: '#E8DEF8',
        textMain: '#222222',
        textMuted: '#555555',
        borderSoft: '#E0E0E0',
        footerBg: '#1C1A2A',
        iconColor: '#391D2C',
        heroOverlay: 'rgba(255,255,255,0.35)',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}