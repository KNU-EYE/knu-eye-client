import { useEffect } from 'react';
import { Calendar, ExternalLink, Eye, X } from 'lucide-react';
import CategoryBadge from './CategoryBadge.jsx';
import DdayBadge from './DdayBadge.jsx';
import { formatViews } from '../../utils/format.js';

function NoticeDetailModal({ notice, onClose }) {
  useEffect(() => {
    if (!notice) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [notice, onClose]);

  if (!notice) return null;

  const {
    title,
    department,
    createdAt,
    deadline,
    views,
    category,
    content,
    sourceUrl,
  } = notice;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/55 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
      aria-labelledby="notice-detail-title"
      aria-modal="true"
      role="dialog"
      onMouseDown={onClose}
    >
      <section
        className="max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-1.5">
            <CategoryBadge category={category} />
            <DdayBadge deadline={deadline} />
          </div>
          <button
            type="button"
            className="ml-auto rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="공지 상세 닫기"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[calc(88vh-72px)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <p className="text-sm font-semibold text-brand-700">{department}</p>
          <h2
            id="notice-detail-title"
            className="mt-2 text-xl font-bold leading-snug text-slate-950 sm:text-2xl"
          >
            {title}
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 sm:text-sm">
            <span>{createdAt}</span>
            {deadline && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                마감: {deadline}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4" aria-hidden="true" />
              조회 {formatViews(views)}
            </span>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
            {(content ?? []).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-2 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              현재 상세 내용은 화면 확인용 하드코딩 데이터입니다.
            </p>
            {sourceUrl && (
              <a
                className="btn-primary justify-center"
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                원문 보기
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoticeDetailModal;
