/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        camp: {
          cream: '#fff7ed',
          peach: '#fed7aa',
          amber: '#f59e0b',
          leaf: '#287157',
          mint: '#d9f99d',
          ink: '#24312b',
          coral: '#ef6f61',
          sky: '#dbeafe',
        },
      },
      boxShadow: {
        soft: '0 16px 40px rgba(95, 63, 32, 0.12)',
      },
    },
  },
  plugins: [],
}
