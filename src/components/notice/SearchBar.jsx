import { Search } from 'lucide-react';
import useNoticeStore from '../../store/useNoticeStore.js';

function SearchBar() {
  const searchQuery = useNoticeStore((s) => s.searchQuery);
  const setSearchQuery = useNoticeStore((s) => s.setSearchQuery);

  return (
    <div className="relative">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="제목, 내용, 작성자 검색..."
        aria-label="공지 검색"
        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-card transition focus:border-brand-300 sm:h-12 sm:text-base"
      />
    </div>
  );
}

export default SearchBar;
