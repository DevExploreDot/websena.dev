module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00e5a0',
          dim: 'rgba(0, 229, 160, 0.12)',
          glow: 'rgba(0, 229, 160, 0.35)',
        },
        bg: '#080c10',
        surface: '#0e1419',
        surface2: '#131a22',
        text: '#e8edf2',
        textMuted: '#6b7a8d',
      },
      fontFamily: {
        sans: ['DM Sans', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}