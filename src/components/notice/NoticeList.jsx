import NoticeCard from './NoticeCard.jsx';

function NoticeList({ notices, onSelectNotice }) {
  if (!notices || notices.length === 0) {
    return (
      <div className="card flex min-h-[200px] flex-col items-center justify-center text-center">
        <p className="text-sm font-medium text-slate-700">
          조건에 맞는 공지가 없습니다.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          검색어 또는 필터를 변경해 다시 시도해 보세요.
        </p>
      </div>
    );
  }

  // 모바일: 1열, 태블릿: 2열, PC: 3열
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {notices.map((n) => (
        <NoticeCard key={n.id} notice={n} onClick={() => onSelectNotice(n)} />
      ))}
    </div>
  );
}

export default NoticeList;
