// 공지 카테고리 상수 정의
// 추후 백엔드 enum과 동기화 필요
export const CATEGORIES = {
  JOB: 'job',
  EVENT: 'event',
  SCHOLARSHIP: 'scholarship',
  ACADEMIC: 'academic',
  GLOBAL: 'global',
  DORM: 'dorm',
  GENERAL: 'general',
};

export const CATEGORY_LABELS = {
  [CATEGORIES.JOB]: '취업',
  [CATEGORIES.EVENT]: '행사',
  [CATEGORIES.SCHOLARSHIP]: '장학',
  [CATEGORIES.ACADEMIC]: '학사',
  [CATEGORIES.GLOBAL]: '국제교류',
  [CATEGORIES.DORM]: '생활관',
  [CATEGORIES.GENERAL]: '일반',
};

// Tailwind 색상 클래스 매핑
export const CATEGORY_COLORS = {
  [CATEGORIES.JOB]: 'bg-category-job text-category-jobText',
  [CATEGORIES.EVENT]: 'bg-category-event text-category-eventText',
  [CATEGORIES.SCHOLARSHIP]: 'bg-category-scholarship text-category-scholarshipText',
  [CATEGORIES.ACADEMIC]: 'bg-category-academic text-category-academicText',
  [CATEGORIES.GLOBAL]: 'bg-category-global text-category-globalText',
  [CATEGORIES.DORM]: 'bg-category-dorm text-category-dormText',
  [CATEGORIES.GENERAL]: 'bg-category-general text-category-generalText',
};

export const CATEGORY_OPTIONS = Object.values(CATEGORIES).map((key) => ({
  value: key,
  label: CATEGORY_LABELS[key],
}));

export const SORT_OPTIONS = [
  { value: 'latest', label: '최신순' },
  { value: 'deadline', label: '마감임박순' },
  { value: 'views', label: '조회수순' },
];
