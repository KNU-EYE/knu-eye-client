# KNU Notice Hub (knu-eye-client)

경북대학교 산하 106개 사이트에 흩어진 공지사항을 한 곳에서 모아 보는 통합 공지 서비스 클라이언트입니다. 크롤링된 공지를 AI로 요약해 카드 형태로 제공합니다.

## 기술 스택

- React 18 + Vite (JavaScript)
- Tailwind CSS (붉은 컬러 테마)
- Zustand — 클라이언트 전역 상태 관리
- React Router DOM — 라우팅
- lucide-react — 아이콘

## 시작하기

```bash
npm install
npm run dev      # 개발 서버 (기본 포트 5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   └── notice/       # SearchBar, FilterBar, NoticeCard 등
├── constants/        # 카테고리, 정렬 옵션 상수
├── layouts/          # 페이지 공용 레이아웃
├── mocks/            # 임시 목업 데이터 (API 연동 시 제거 예정)
├── pages/            # 라우트 단위 페이지
├── store/            # zustand 스토어
├── styles/           # 전역 CSS
└── utils/            # 포맷터 등 헬퍼
```

## 주요 화면

- 메인 (`/`) — 공지사항 카드 리스트, 검색, 카테고리 필터, 정렬
- 모바일 1열 / 태블릿 2열 / PC 3열 반응형 그리드

## 디자인 토큰

- Primary: `brand-700` (#B91C1C)
- 카테고리별 배지 색상: `tailwind.config.js > theme.extend.colors.category`

## TODO

- [ ] 백엔드 API 연동 (목업 → 실제 데이터)
- [ ] 공지 상세 페이지
- [ ] 즐겨찾기 / 알림
- [ ] 로그인 (보류)