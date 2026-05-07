import { Clock } from 'lucide-react';
import { formatDday, getDday } from '../../utils/format.js';

// 마감 임박 정도에 따른 색상 단계
function getDdayClass(deadline) {
  const days = getDday(deadline);
  if (days == null) return 'bg-slate-100 text-slate-600';
  if (days < 0) return 'bg-slate-200 text-slate-500';
  if (days <= 3) return 'bg-brand-700 text-white';
  if (days <= 7) return 'bg-brand-100 text-brand-700';
  return 'bg-slate-100 text-slate-600';
}

function DdayBadge({ deadline }) {
  const label = formatDday(deadline);
  if (!label) return null;
  return (
    <span className={`badge inline-flex items-center gap-1 ${getDdayClass(deadline)}`}>
      <Clock className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>
  );
}

export default DdayBadge;
