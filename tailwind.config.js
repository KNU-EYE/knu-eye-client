/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 붉은 컬러 테마 - 경북대 공식 컬러(자주/와인)와 어울리는 레드 팔레트
        brand: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C', // primary
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // 카테고리별 라벨 컬러 (목업 기반)
        category: {
          job: '#FEE2E2',          // 취업 - 연분홍
          jobText: '#B91C1C',
          event: '#FFEDD5',        // 행사 - 연주황
          eventText: '#9A3412',
          scholarship: '#FEF3C7',  // 장학 - 연노랑
          scholarshipText: '#92400E',
          academic: '#DBEAFE',     // 학사 - 연파랑
          academicText: '#1E40AF',
          global: '#EDE9FE',       // 국제교류 - 연보라
          globalText: '#5B21B6',
          dorm: '#FCE7F3',         // 생활관 - 연핑크
          dormText: '#9D174D',
          general: '#E5E7EB',      // 일반
          generalText: '#374151',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        cardHover: '0 6px 20px rgba(185, 28, 28, 0.12)',
      },
    },
  },
  plugins: [],
};
