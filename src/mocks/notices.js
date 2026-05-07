import { CATEGORIES } from '../constants/categories.js';

// 메인 페이지 목업 데이터 (이미지 기반 8개)
// 추후 백엔드 API 연동 시 제거 예정
export const MOCK_NOTICES = [
  {
    id: 1,
    category: CATEGORIES.JOB,
    title: '[취업지원센터] 삼성전자 채용설명회 및 모의면접',
    department: '취업지원센터',
    createdAt: '2026-04-04',
    deadline: '2026-04-10',
    views: 5200,
    attachments: 1,
    summary:
      '삼성전자 인사담당자가 직접 진행하는 채용설명회와 1:1 모의면접 프로그램. 사전 신청자에 한해 참여 가능하며, 우수 참여자에게는 인턴십 추천서가 제공됩니다.',
    sourceUrl: 'https://job.knu.ac.kr/',
  },
  {
    id: 2,
    category: CATEGORIES.EVENT,
    title: '2026 KNU 창업경진대회 개최 안내',
    department: '창업지원단',
    createdAt: '2026-04-03',
    deadline: '2026-04-25',
    views: 3200,
    attachments: 2,
    summary:
      '경북대학교 재학생/휴학생/대학원생 누구나 참여 가능한 창업 아이디어 경진대회. 총상금 3,000만원 규모이며 우수팀에게는 창업보육센터 입주 기회가 부여됩니다.',
    sourceUrl: 'https://startup.knu.ac.kr/',
  },
  {
    id: 3,
    category: CATEGORIES.SCHOLARSHIP,
    title: '[IT대학] SW특기자 장학생 선발 공고',
    department: 'IT대학 행정실',
    createdAt: '2026-04-02',
    deadline: '2026-04-18',
    views: 1900,
    attachments: 2,
    summary:
      'SW 분야 우수 인재를 발굴하기 위한 SW특기자 장학생 선발. 알고리즘/오픈소스/서비스 개발 실적 보유자 우대. 학기당 등록금 전액 지원.',
    sourceUrl: 'https://it.knu.ac.kr/',
  },
  {
    id: 4,
    category: CATEGORIES.SCHOLARSHIP,
    title: '2026학년도 1학기 국가장학금 신청 안내',
    department: '학생지원팀',
    createdAt: '2026-04-01',
    deadline: '2026-04-15',
    views: 2800,
    attachments: 2,
    summary:
      '한국장학재단 국가장학금(I/II 유형) 신청 일정 안내. 학자금 지원구간 산정 및 가구원 동의 절차 필수. 미신청 시 등록금 감면 불가.',
    sourceUrl: 'https://www.kosaf.go.kr/',
  },
  {
    id: 5,
    category: CATEGORIES.GLOBAL,
    title: '2026 하계 해외 교환학생 프로그램 선발',
    department: '국제교류본부',
    createdAt: '2026-03-30',
    deadline: '2026-04-20',
    views: 2900,
    attachments: 3,
    summary:
      '미국/일본/독일/중국 등 25개국 70여개 협정 대학 교환학생 모집. 선발 시 학점인정 및 항공료 일부 지원. TOEFL/IELTS 또는 어학원 자격 필수.',
    sourceUrl: 'https://oia.knu.ac.kr/',
  },
  {
    id: 6,
    category: CATEGORIES.ACADEMIC,
    title: '[공학대학] 2026 캡스톤 디자인 경진대회 참가 팀 모집',
    department: '공학교육혁신센터',
    createdAt: '2026-03-28',
    deadline: '2026-04-12',
    views: 1500,
    attachments: 3,
    summary:
      '공학대학 재학생 대상 캡스톤 디자인 경진대회 참가 팀 모집. 산학협력 과제 우대 및 우수작품은 특허 출원 비용 지원.',
    sourceUrl: 'https://eng.knu.ac.kr/',
  },
  {
    id: 7,
    category: CATEGORIES.GLOBAL,
    title: '2026학년도 1학기 외국인 유학생 생활 안내',
    department: '국제교류본부',
    createdAt: '2026-03-27',
    deadline: null,
    views: 1500,
    attachments: 2,
    summary:
      '외국인 유학생을 위한 비자 연장, 의료보험, 한국어 교실, 멘토링 프로그램 등 학기 중 운영 프로그램 종합 안내.',
    sourceUrl: 'https://oia.knu.ac.kr/',
  },
  {
    id: 8,
    category: CATEGORIES.DORM,
    title: '2026-1학기 기숙사 입사 신청 안내 (재학생)',
    department: '생활관지원팀',
    createdAt: '2026-03-25',
    deadline: '2026-04-08',
    views: 4500,
    attachments: 1,
    summary:
      '재학생 대상 기숙사 입사 신청. 직전 학기 학점/거주지 기준으로 선발하며, 우선선발 대상자(국가유공자/장애학생 등)는 별도 서류 제출 필요.',
    sourceUrl: 'https://dorm.knu.ac.kr/',
  },
];
