import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between sm:h-16">
        <Link to="/" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-700 text-sm font-bold text-white sm:h-9 sm:w-9"
          >
            K
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            KNU-EYE
          </span>
        </Link>

        {/* 추후 로그인 기능 연결 예정 */}
        <button type="button" className="btn-primary" aria-label="로그인">
          <LogIn className="h-4 w-4" />
          <span>로그인</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
