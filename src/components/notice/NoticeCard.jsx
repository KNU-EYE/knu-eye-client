import { Eye, Paperclip, Calendar } from 'lucide-react';
import CategoryBadge from './CategoryBadge.jsx';
import DdayBadge from './DdayBadge.jsx';
import { formatViews } from '../../utils/format.js';

function NoticeCard({ notice, onClick }) {
  const { title, department, createdAt, deadline, views, attachments, category, summary } =
    notice;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <article
      className="card card-hover cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${title} 상세 보기`}
    >
      {/* 상단: 카테고리 + D-day + 통계 */}
      <div className="flex items-start gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <CategoryBadge category={category} />
          <DdayBadge deadline={deadline} />
        </div>
        <div className="ml-auto flex shrink-0 flex-col items-end gap-0.5 text-[11px] text-slate-500 sm:text-xs">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" aria-hidden="true" />
            {formatViews(views)}
          </span>
          {attachments > 0 && (
            <span className="inline-flex items-center gap-1">
              <Paperclip className="h-3 w-3" aria-hidden="true" />
              {attachments}
            </span>
          )}
        </div>
      </div>

      {/* 제목 */}
      <h3 className="mt-2.5 line-clamp-2 text-[15px] font-semibold leading-snug text-slate-900 sm:text-base">
        {title}
      </h3>

      {/* AI 요약 - PC에서만 노출 (목록을 깔끔하게 유지) */}
      {summary && (
        <p className="mt-2 hidden text-sm leading-relaxed text-slate-600 line-clamp-2 sm:block">
          {summary}
        </p>
      )}

      {/* 하단: 부서 / 작성일 / 마감일 */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
        <span className="font-medium text-slate-600">{department}</span>
        <span>{createdAt}</span>
        {deadline && (
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            마감: {deadline}
          </span>
        )}
      </div>
    </article>
  );
}

export default NoticeCard;
