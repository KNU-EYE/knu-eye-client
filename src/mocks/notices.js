import { CATEGORIES } from '../constants/categories.js';

// 메인 페이지 목업 데이터
// 추후 백엔드 API 연동 시 제거 예정
const BASE_NOTICES = [
  {
    id: 1,
    category: CATEGORIES.JOB,
    title: '[취업지원센터] 삼성전자 채용설명회 및 모의면접',
    department: '취업지원센터',
    createdAt: '2026-04-04',
    deadline: '2026-04-10',
    views: 5200,
    attachments: 1,
    keywords: ['채용', '삼성전자', '모의면접', '취업', '테스트키워드'],
    summary:
      '삼성전자 인사담당자가 직접 진행하는 채용설명회와 1:1 모의면접 프로그램. 사전 신청자에 한해 참여 가능하며, 우수 참여자에게는 인턴십 추천서가 제공됩니다.',
    content: [
      '취업지원센터에서는 삼성전자 채용을 준비하는 재학생을 대상으로 채용설명회와 1:1 모의면접 프로그램을 운영합니다.',
      '채용설명회에서는 직무별 채용 절차, 자기소개서 작성 방향, 면접 준비 전략을 안내하며, 모의면접은 사전 신청자 중 선착순으로 배정됩니다.',
      '참여를 희망하는 학생은 취업지원센터 홈페이지에서 신청서를 제출해 주세요. 우수 참여자에게는 인턴십 추천서 발급 기회가 제공됩니다.',
    ],
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
    keywords: ['창업', '경진대회', '아이디어', '상금'],
    summary:
      '경북대학교 재학생/휴학생/대학원생 누구나 참여 가능한 창업 아이디어 경진대회. 총상금 3,000만원 규모이며 우수팀에게는 창업보육센터 입주 기회가 부여됩니다.',
    content: [
      '창업지원단은 학생들의 창의적인 아이디어 발굴과 사업화 가능성 검증을 위해 2026 KNU 창업경진대회를 개최합니다.',
      '참가 대상은 경북대학교 재학생, 휴학생, 대학원생이며 개인 또는 팀 단위로 신청할 수 있습니다.',
      '서류 심사와 발표 평가를 거쳐 우수팀을 선발하며, 수상팀에는 상금과 창업보육센터 입주 연계 혜택이 제공됩니다.',
    ],
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
    keywords: ['장학', 'SW', '등록금', 'IT대학'],
    summary:
      'SW 분야 우수 인재를 발굴하기 위한 SW특기자 장학생 선발. 알고리즘/오픈소스/서비스 개발 실적 보유자 우대. 학기당 등록금 전액 지원.',
    content: [
      'IT대학에서는 소프트웨어 분야 우수 역량을 보유한 학생을 대상으로 SW특기자 장학생을 선발합니다.',
      '알고리즘 대회 수상, 오픈소스 기여, 서비스 개발 및 배포 경험 등이 주요 평가 항목이며 관련 증빙자료를 함께 제출해야 합니다.',
      '최종 선발자는 학기당 등록금 전액을 지원받으며, 학업 성적과 활동 실적에 따라 계속 지원 여부가 결정됩니다.',
    ],
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
    keywords: ['장학', '국가장학금', '등록금', '한국장학재단'],
    summary:
      '한국장학재단 국가장학금(I/II 유형) 신청 일정 안내. 학자금 지원구간 산정 및 가구원 동의 절차 필수. 미신청 시 등록금 감면 불가.',
    content: [
      '2026학년도 1학기 국가장학금 신청 기간을 안내합니다. 국가장학금은 한국장학재단 홈페이지에서 신청할 수 있습니다.',
      '신청 후 학자금 지원구간 산정을 위한 가구원 정보 제공 동의가 필요하며, 서류 제출 대상자는 기한 내 관련 서류를 업로드해야 합니다.',
      '신청 기간 내 접수하지 않은 경우 등록금 고지서 선감면이 불가할 수 있으니 반드시 일정을 확인해 주세요.',
    ],
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
    keywords: ['교환학생', '해외파견', '국제교류', '어학성적'],
    summary:
      '미국/일본/독일/중국 등 25개국 70여개 협정 대학 교환학생 모집. 선발 시 학점인정 및 항공료 일부 지원. TOEFL/IELTS 또는 어학원 자격 필수.',
    content: [
      '국제교류본부에서는 2026 하계 해외 교환학생 프로그램 참가자를 모집합니다.',
      '파견 가능 국가는 미국, 일본, 독일, 중국 등 25개국이며, 협정 대학별 지원 자격과 요구 어학 성적이 다를 수 있습니다.',
      '선발자는 파견 기간 중 취득한 학점 인정과 항공료 일부 지원을 받을 수 있으며, 자세한 대학별 조건은 국제교류본부 공지사항을 확인해 주세요.',
    ],
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
    keywords: ['캡스톤', '경진대회', '공학대학', '특허'],
    summary:
      '공학대학 재학생 대상 캡스톤 디자인 경진대회 참가 팀 모집. 산학협력 과제 우대 및 우수작품은 특허 출원 비용 지원.',
    content: [
      '공학교육혁신센터에서는 공학대학 재학생을 대상으로 캡스톤 디자인 경진대회 참가 팀을 모집합니다.',
      '참가팀은 문제 정의, 설계 과정, 결과물 완성도, 발표 역량을 종합적으로 평가받게 됩니다.',
      '산학협력 기반 과제는 심사 시 우대되며, 우수작품으로 선정된 팀에는 특허 출원 비용과 후속 개발 멘토링이 지원됩니다.',
    ],
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
    keywords: ['유학생', '비자', '멘토링', '한국어'],
    summary:
      '외국인 유학생을 위한 비자 연장, 의료보험, 한국어 교실, 멘토링 프로그램 등 학기 중 운영 프로그램 종합 안내.',
    content: [
      '국제교류본부에서는 외국인 유학생의 안정적인 학교 생활을 지원하기 위해 2026학년도 1학기 생활 안내를 제공합니다.',
      '주요 안내 내용은 비자 연장, 국민건강보험, 한국어 교실, 캠퍼스 멘토링, 학사 상담 프로그램입니다.',
      '프로그램별 신청 방법과 운영 일정은 국제교류본부 홈페이지에서 확인할 수 있으며, 문의사항은 유학생지원 담당자에게 연락해 주세요.',
    ],
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
    keywords: ['기숙사', '생활관', '입사신청', '재학생'],
    summary:
      '재학생 대상 기숙사 입사 신청. 직전 학기 학점/거주지 기준으로 선발하며, 우선선발 대상자(국가유공자/장애학생 등)는 별도 서류 제출 필요.',
    content: [
      '생활관지원팀에서는 2026학년도 1학기 재학생 기숙사 입사 신청을 접수합니다.',
      '선발은 직전 학기 성적, 거주지 거리, 생활관 운영 기준을 반영하여 진행되며 우선선발 대상자는 별도 증빙서류를 제출해야 합니다.',
      '입사 신청 후 합격자 발표, 등록금 납부, 호실 배정 일정을 순차적으로 확인해 주세요.',
    ],
    sourceUrl: 'https://dorm.knu.ac.kr/',
  },
];

const GENERATED_NOTICE_BLUEPRINTS = [
  {
    category: CATEGORIES.JOB,
    title: '[인재개발원] 2026 상반기 공기업 취업 특강',
    department: '인재개발원',
    keywords: ['취업', '공기업', 'NCS', '특강'],
    summary:
      '공기업 취업을 준비하는 학생을 위한 NCS 전략, 자기소개서 작성, 면접 준비 특강입니다.',
  },
  {
    category: CATEGORIES.SCHOLARSHIP,
    title: '지역인재 장학금 신규 신청 안내',
    department: '학생지원팀',
    keywords: ['장학', '지역인재', '등록금', '신청'],
    summary:
      '지역 우수 인재의 학업 지속을 지원하기 위한 장학금 신청 일정과 제출 서류 안내입니다.',
  },
  {
    category: CATEGORIES.ACADEMIC,
    title: '2026학년도 여름 계절학기 수강 신청 안내',
    department: '학사과',
    keywords: ['수강신청', '계절학기', '학사', '여름학기'],
    summary:
      '여름 계절학기 개설 교과목, 수강 신청 기간, 수강료 납부 일정을 안내합니다.',
  },
  {
    category: CATEGORIES.EVENT,
    title: 'KNU 문화주간 학생 공연팀 모집',
    department: '학생문화센터',
    keywords: ['행사', '공연', '문화주간', '모집'],
    summary:
      '캠퍼스 문화주간 무대에 참여할 밴드, 댄스, 연극 등 학생 공연팀을 모집합니다.',
  },
  {
    category: CATEGORIES.GLOBAL,
    title: '글로벌 버디 프로그램 참가자 모집',
    department: '국제교류본부',
    keywords: ['국제교류', '버디', '유학생', '멘토링'],
    summary:
      '외국인 유학생의 학교 생활 적응을 돕는 글로벌 버디 프로그램 참가자를 모집합니다.',
  },
  {
    category: CATEGORIES.DORM,
    title: '생활관 시설 점검 및 임시 출입 제한 안내',
    department: '생활관지원팀',
    keywords: ['기숙사', '생활관', '시설점검', '출입제한'],
    summary:
      '생활관 공용 시설 안전 점검으로 일부 구역 출입이 제한되며 점검 일정을 안내합니다.',
  },
  {
    category: CATEGORIES.JOB,
    title: '[현장실습지원센터] 하계 표준현장실습학기제 모집',
    department: '현장실습지원센터',
    keywords: ['현장실습', '인턴십', '취업', '하계'],
    summary:
      '하계 방학 중 기업 현장에서 직무 경험을 쌓을 수 있는 표준현장실습학기제 참여 학생을 모집합니다.',
  },
  {
    category: CATEGORIES.SCHOLARSHIP,
    title: '근로장학생 추가 선발 공고',
    department: '학생지원팀',
    keywords: ['장학', '근로장학생', '선발', '학생지원'],
    summary:
      '교내 행정부서와 부속기관에서 근무할 근로장학생 추가 선발 계획을 안내합니다.',
  },
  {
    category: CATEGORIES.ACADEMIC,
    title: '복수전공 및 부전공 신청 기간 안내',
    department: '학사과',
    keywords: ['복수전공', '부전공', '학사', '신청'],
    summary:
      '2026학년도 복수전공 및 부전공 신청 자격, 신청 방법, 결과 발표 일정을 안내합니다.',
  },
  {
    category: CATEGORIES.EVENT,
    title: '캠퍼스 플리마켓 셀러 모집',
    department: '총학생회',
    keywords: ['행사', '플리마켓', '셀러', '캠퍼스'],
    summary:
      '학생들이 직접 물품과 창작물을 판매할 수 있는 캠퍼스 플리마켓 셀러를 모집합니다.',
  },
  {
    category: CATEGORIES.GLOBAL,
    title: '해외 단기어학연수 설명회 개최',
    department: '국제교류본부',
    keywords: ['어학연수', '해외파견', '국제교류', '설명회'],
    summary:
      '방학 중 해외 대학에서 진행되는 단기어학연수 프로그램 설명회 일정을 안내합니다.',
  },
  {
    category: CATEGORIES.DORM,
    title: '생활관 식당 만족도 조사 참여 안내',
    department: '생활관지원팀',
    keywords: ['기숙사', '식당', '만족도조사', '생활관'],
    summary:
      '생활관 식당 운영 개선을 위한 학생 만족도 조사를 실시합니다.',
  },
];

function formatMockDate(date) {
  return date.toISOString().slice(0, 10);
}

const GENERATED_NOTICES = Array.from({ length: 192 }, (_, index) => {
  const blueprint = GENERATED_NOTICE_BLUEPRINTS[index % GENERATED_NOTICE_BLUEPRINTS.length];
  const createdAt = new Date(Date.UTC(2026, 2, 24 - index));
  const deadline =
    index % 5 === 0
      ? null
      : formatMockDate(new Date(Date.UTC(2026, 3, 8 + (index % 24))));
  const round = Math.floor(index / GENERATED_NOTICE_BLUEPRINTS.length) + 1;

  return {
    id: BASE_NOTICES.length + index + 1,
    category: blueprint.category,
    title: `${blueprint.title} ${round > 1 ? `(${round}차)` : ''}`.trim(),
    department: blueprint.department,
    createdAt: formatMockDate(createdAt),
    deadline,
    views: 900 + ((index * 347) % 6200),
    attachments: index % 4,
    keywords: blueprint.keywords,
    summary: blueprint.summary,
    content: [
      `${blueprint.department}에서는 관련 학생을 대상으로 공지된 프로그램을 운영합니다.`,
      '참여를 희망하는 학생은 신청 기간, 제출 서류, 세부 자격을 확인한 뒤 기한 내 신청해 주세요.',
      '본 상세 내용은 무한 스크롤과 모달 동작 확인을 위한 프로토타입 목업 데이터입니다.',
    ],
    sourceUrl: 'https://www.knu.ac.kr/',
  };
});

export const MOCK_NOTICES = [...BASE_NOTICES, ...GENERATED_NOTICES];
