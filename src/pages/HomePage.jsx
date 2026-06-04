import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SearchBar from '../components/notice/SearchBar.jsx';
import FilterBar from '../components/notice/FilterBar.jsx';
import NoticeList from '../components/notice/NoticeList.jsx';
import NoticeDetailModal from '../components/notice/NoticeDetailModal.jsx';
import useNoticeStore from '../store/useNoticeStore.js';

function HomePage() {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const loadMoreRef = useRef(null);
  const loadedNotices = useNoticeStore((s) => s.notices);
  const searchQuery = useNoticeStore((s) => s.searchQuery);
  const selectedCategories = useNoticeStore((s) => s.selectedCategories);
  const sortBy = useNoticeStore((s) => s.sortBy);
  const loading = useNoticeStore((s) => s.loading);
  const error = useNoticeStore((s) => s.error);
  const initialized = useNoticeStore((s) => s.initialized);
  const hasNext = useNoticeStore((s) => s.hasNext);
  const loadArticles = useNoticeStore((s) => s.loadArticles);
  const getFilteredNotices = useNoticeStore((s) => s.getFilteredNotices);

  // store 의 selector 가 함수형이라 React 가 변경을 감지하도록 deps 로 한번 더 묶어줌
  const notices = useMemo(
    () => getFilteredNotices(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadedNotices, searchQuery, selectedCategories, sortBy, getFilteredNotices],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      loadArticles({ reset: true });
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery, loadArticles]);

  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target || loading || !hasNext) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        loadArticles();
      },
      { rootMargin: '240px 0px' },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [hasNext, loadArticles, loading, notices.length]);

  const closeNoticeDetail = useCallback(() => {
    setSelectedNotice(null);
  }, []);

  return (
    <div className="container-page py-5 sm:py-8">
      {/* 페이지 헤딩 */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          공지사항
        </h1>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          불러온 공지{' '}
          <span className="font-semibold text-brand-700">{notices.length}</span>개
        </p>
      </div>

      {/* 검색 */}
      <div className="mb-3 sm:mb-4">
        <SearchBar />
      </div>

      {/* 필터 / 정렬 */}
      <div className="mb-5 sm:mb-6">
        <FilterBar />
      </div>

      {/* 공지 카드 리스트 */}
      {error && (
        <div className="card mb-4 flex items-center justify-between gap-4 border-red-200 bg-red-50">
          <p className="text-sm text-red-700">{error}</p>
          <button
            type="button"
            className="btn-ghost shrink-0"
            onClick={() => loadArticles({ reset: true })}
          >
            다시 시도
          </button>
        </div>
      )}

      {loading && notices.length === 0 ? (
        <div className="card flex min-h-[200px] items-center justify-center text-sm text-slate-500">
          공지 목록을 불러오는 중입니다...
        </div>
      ) : (
        <NoticeList notices={notices} onSelectNotice={setSelectedNotice} />
      )}

      {initialized && notices.length > 0 && (
        <div ref={loadMoreRef} className="py-6 text-center text-xs text-slate-500">
          {loading
            ? '공지 더 불러오는 중...'
            : hasNext
              ? '아래로 스크롤하면 공지를 더 불러옵니다.'
              : '마지막 공지입니다.'}
        </div>
      )}

      <NoticeDetailModal notice={selectedNotice} onClose={closeNoticeDetail} />
    </div>
  );
}

export default HomePage;
