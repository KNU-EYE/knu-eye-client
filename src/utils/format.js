// 조회수: 1000 단위 -> 1.2k 형태로 표기
export function formatViews(views) {
  if (views == null) return '0';
  if (views >= 10000) return `${(views / 1000).toFixed(0)}k`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  return String(views);
}

// 마감일까지 D-day 계산. 음수/null은 null 반환
export function getDday(deadline, baseDate = new Date()) {
  if (!deadline) return null;
  const target = new Date(`${deadline}T23:59:59`);
  const diffMs = target.getTime() - baseDate.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function formatDday(deadline, baseDate = new Date()) {
  const days = getDday(deadline, baseDate);
  if (days == null) return null;
  if (days < 0) return '마감';
  if (days === 0) return 'D-DAY';
  return `D-${days}`;
}
