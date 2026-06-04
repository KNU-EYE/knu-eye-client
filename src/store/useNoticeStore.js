import { create } from 'zustand';
import { fetchArticles } from '../api/articles.js';

// 공지 리스트와 검색/필터/정렬 상태 관리
let latestRequestId = 0;

const useNoticeStore = create((set, get) => ({
  notices: [],
  loading: false,
  error: null,
  initialized: false,
  hasNext: true,
  nextCursor: null,

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

  loadArticles: async ({ reset = false } = {}) => {
    const state = get();
    if (!reset && (state.loading || !state.hasNext)) return;

    const requestId = ++latestRequestId;
    const cursor = reset ? null : state.nextCursor;

    set({
      loading: true,
      error: null,
      ...(reset
        ? {
            notices: [],
            hasNext: true,
            nextCursor: null,
          }
        : {}),
    });

    try {
      const data = await fetchArticles({
        cursor,
        search: state.searchQuery,
      });

      if (requestId !== latestRequestId) return;

      set((currentState) => {
        const previousNotices = reset ? [] : currentState.notices;
        const noticeMap = new Map(
          [...previousNotices, ...data.items].map((notice) => [notice.id, notice]),
        );

        return {
          notices: [...noticeMap.values()],
          hasNext: data.hasNext,
          nextCursor: data.nextCursor,
          loading: false,
          initialized: true,
        };
      });
    } catch (error) {
      if (requestId !== latestRequestId) return;

      set({
        loading: false,
        initialized: true,
        error: error.message ?? '공지 목록을 불러오지 못했습니다.',
      });
    }
  },

  // 필터링/정렬된 결과 계산 (selector)
  getFilteredNotices: () => {
    const { notices, selectedCategories, sortBy } = get();

    let result = notices.filter((n) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(n.category);
      return matchesCategory;
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
