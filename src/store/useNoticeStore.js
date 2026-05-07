import { create } from 'zustand';
import { MOCK_NOTICES } from '../mocks/notices.js';

// 공지 리스트와 검색/필터/정렬 상태 관리
// 추후 fetch 액션을 추가해 API 데이터로 교체 예정
const useNoticeStore = create((set, get) => ({
  notices: MOCK_NOTICES,
  loading: false,
  error: null,

  // 검색/필터 상태
  searchQuery: '',
  selectedCategories: [], // 빈 배열이면 전체
  sortBy: 'latest',

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleCategory: (category) =>
    set((state) => {
      const exists = state.selectedCategories.includes(category);
      return {
        selectedCategories: exists
          ? state.selectedCategories.filter((c) => c !== category)
          : [...state.selectedCategories, category],
      };
    }),

  clearCategories: () => set({ selectedCategories: [] }),

  setSortBy: (sortBy) => set({ sortBy }),

  // 필터링/정렬된 결과 계산 (selector)
  getFilteredNotices: () => {
    const { notices, searchQuery, selectedCategories, sortBy } = get();
    const q = searchQuery.trim().toLowerCase();

    let result = notices.filter((n) => {
      const matchesQuery =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.department.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(n.category);
      return matchesQuery && matchesCategory;
    });

    if (sortBy === 'latest') {
      result = [...result].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    } else if (sortBy === 'deadline') {
      result = [...result].sort((a, b) => {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return a.deadline.localeCompare(b.deadline);
      });
    } else if (sortBy === 'views') {
      result = [...result].sort((a, b) => b.views - a.views);
    }

    return result;
  },
}));

export default useNoticeStore;
