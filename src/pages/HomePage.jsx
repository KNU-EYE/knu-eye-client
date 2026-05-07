import { useMemo } from 'react';
import SearchBar from '../components/notice/SearchBar.jsx';
import FilterBar from '../components/notice/FilterBar.jsx';
import NoticeList from '../components/notice/NoticeList.jsx';
import useNoticeStore from '../store/useNoticeStore.js';

function HomePage() {
  const searchQuery = useNoticeStore((s) => s.searchQuery);
  const selectedCategories = useNoticeStore((s) => s.selectedCategories);
  const sortBy = useNoticeStore((s) => s.sortBy);
  const getFilteredNotices = useNoticeStore((s) => s.getFilteredNotices);

  // store 의 selector 가 함수형이라 React 가 변경을 감지하도록 deps 로 한번 더 묶어줌
  const notices = useMemo(
    () => getFilteredNotices(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchQuery, selectedCategories, sortBy, getFilteredNotices],
  );

  return (
    <div className="container-page py-5 sm:py-8">
      {/* 페이지 헤딩 */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          공지사항
        </h1>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          총 <span className="font-semibold text-brand-700">{notices.length}</span>개
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
      <NoticeList notices={notices} />
    </div>
  );
}

export default HomePage;
