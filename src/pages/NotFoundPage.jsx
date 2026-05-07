import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-5xl font-bold text-brand-700">404</p>
      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        주소를 다시 확인하거나 메인으로 돌아가 주세요.
      </p>
      <Link to="/" className="btn-primary mt-6">
        메인으로 가기
      </Link>
    </div>
  );
}

export default NotFoundPage;
