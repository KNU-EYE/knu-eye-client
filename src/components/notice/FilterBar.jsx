import { useState } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import useNoticeStore from '../../store/useNoticeStore.js';
import {
  CATEGORY_LABELS,
  CATEGORY_OPTIONS,
  SORT_OPTIONS,
} from '../../constants/categories.js';

function FilterBar() {
  const selectedCategories = useNoticeStore((s) => s.selectedCategories);
  const toggleCategory = useNoticeStore((s) => s.toggleCategory);
  const clearCategories = useNoticeStore((s) => s.clearCategories);
  const sortBy = useNoticeStore((s) => s.sortBy);
  const setSortBy = useNoticeStore((s) => s.setSortBy);

  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-ghost flex-1 justify-center sm:flex-initial"
          aria-expanded={open}
          aria-controls="category-filter-panel"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>필터</span>
          {selectedCategories.length > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand-700 px-1.5 text-[11px] font-bold text-white">
              {selectedCategories.length}
            </span>
          )}
        </button>

        <div className="ml-auto">
          <label htmlFor="sort-select" className="sr-only">
            정렬
          </label>
          <div className="relative">
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-md border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm text-slate-700 hover:bg-slate-50"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>

      {open && (
        <div
          id="category-filter-panel"
          className="rounded-xl border border-slate-200 bg-white p-3 shadow-card"
        >
          <div className="flex flex-wrap gap-2">
            {CATEGORY_OPTIONS.map((opt) => {
              const active = selectedCategories.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => toggleCategory(opt.value)}
                  aria-pressed={active}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    active
                      ? 'border-brand-700 bg-brand-700 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
            {selectedCategories.length > 0 && (
              <button
                type="button"
                onClick={clearCategories}
                className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-brand-700"
              >
                <X className="h-3.5 w-3.5" />
                초기화
              </button>
            )}
          </div>
        </div>
      )}

      {/* 선택된 필터 칩 - 항상 표시 */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
            >
              {CATEGORY_LABELS[c]}
              <button
                type="button"
                aria-label={`${CATEGORY_LABELS[c]} 필터 제거`}
                onClick={() => toggleCategory(c)}
                className="rounded-full p-0.5 hover:bg-brand-100"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterBar;
