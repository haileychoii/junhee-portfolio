export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'GitHub ↗', href: 'https://github.com/haileychoii/junhee-portfolio', external: true },
]

export const experiences = [
  // 요약은 src/components/Card.jsx에, 아래 상세 항목은 src/pages/DetailPage.jsx에 표시됩니다.
  // The summary appears in src/components/Card.jsx; these detail items appear in src/pages/DetailPage.jsx.
  {
    id: 'rga-ifrs17',
    category: 'experience',
    eyebrow: '2026.05.11 - 2026.11.10',
    title: 'RGA Reinsurance Korea',
    subtitle: 'IFRS17 Valuation Intern',
    ko: '6개월간 Valuation 부서에서 IFRS17 결산 데이터와 재보험 계약 정보를 검토하고, 수치 변동과 데이터 오류의 원인을 추적했습니다.',
    en: 'Completed a six-month internship in the Valuation team, reviewing IFRS 17 close data and reinsurance treaty information.',
    details: [
      'BEL, RA, CSM, LRC/LIC 등 IFRS17 주요 결과와 분기별 Roll-forward를 대사하고, 물량·가정·금융 변동에 따른 차이를 검토했습니다.',
      'Oracle SQL로 보험·재보험 계약 데이터를 조회·집계하고, 보험료·준비금·Allowance 및 Treaty별 결과의 정합성을 확인했습니다.',
      '이상값이 발견되면 PREM/CLM 등 원천 데이터와 Oracle 테이블·뷰 구조를 따라가 오류 유형과 발생 원인을 분석했습니다.',
      'Gross/Net Premium, Claims, OS, IBNR, UPR 데이터를 바탕으로 손해율을 검토하고 변동 요인을 살폈습니다.',
      '영문 Treaty와 Confirmation Letter에서 Recapture, ER, NDIC, Allowance, Layer, PNOC 조건을 확인하고 계약 조건과 데이터 간 일치 여부를 점검했습니다.',
      'SQL과 Excel/VBA를 활용해 반복 검증과 데이터 정리 업무를 지원하고, SOX/ICFR 관련 RCM·Process Narrative 검토에도 참여했습니다.',
    ],
  },
  {
    id: 'summit-actuarial',
    category: 'experience',
    eyebrow: '2025.09 - 2026.02',
    title: 'Summit Actuarial Consulting',
    subtitle: 'Actuarial Consulting Intern',
    ko: '최적가정과 책임준비금 검증 프로젝트에 참여해 상품별 기준을 분석하고, 대량 계약 데이터의 산출 결과와 오차 원인을 확인했습니다.',
    en: 'Supported assumption and reserve validation projects, analyzing product-specific rules and investigating differences in large contract datasets.',
    details: [
      'KB손해보험 최적가정 프로젝트에서 직전 36개월 경험통계를 바탕으로 6개 상품군과 2개 금리유형별 보험계약대출 가정을 재산출해 제시 결과와 대사했습니다.',
      '실손보험 현금흐름 산출 자료를 Prophet 형식으로 검토하며 보험금·가정과 산출 결과가 연결되는 구조를 확인했습니다.',
      'MG새마을금고중앙회 책임준비금 프로젝트에서 프로젝트 전체 167,598건의 실효비금 검증을 지원했습니다. 예정이율·공시이율, 상품코드·적용월, 날짜 계산과 복리 조건을 구분해 오차 원인을 추적했습니다.',
      '상품별 이율과 날짜 계산 기준을 정리한 뒤, 초기 수십~수백 원 수준의 차이를 ROUNDDOWN 기준 ±1 범위로 좁혔습니다.',
      '공제료 분해는 10개 상품, 9,605건을 대상으로 검증했습니다. 9,604건은 ROUNDDOWN 기준 ±1 이내였고, 나머지 1건은 원천 데이터 오류로 구분했습니다.',
      '연동형 상품의 보장·적립 구분과 월할·부호 기준을 반영해 산식을 재구성하고, Jupyter와 Excel/VBA로 상품별 검증 파일과 반복 검증 작업을 효율화했습니다.',
    ],
  },
]

export const projects = [
  {
    id: 'kwater-bigdata',
    category: 'project',
    eyebrow: 'Data Competition',
    title: 'K-water Big Data Competition',
    subtitle: 'Climate & Water Quality Analysis',
    ko: '시화호 수질 변동 패턴을 분석하고 예측 모델을 구축했습니다.',
    en: 'Analyzed water quality patterns and built a predictive model for Sihwa Lake.',
    details: [
      '한국수자원공사, 해양환경공단, 기상청 데이터를 수집·전처리했습니다.',
      'DO(용존산소량)를 목표 변수로 설정하고 Extra Trees Regressor 기반 예측 모델을 구축했습니다.',
      '수온, 전기전도도, pH가 주요 영향 변수임을 도출하고 수질 관리 인사이트를 제안했습니다.',
    ],
  },
  // 요약·상세 표시 방식은 위 경험 항목과 같고, 프로젝트 근거를 사실 범위 안에서 기록합니다.
  // Project summaries and details use the same Card.jsx and DetailPage.jsx components as experience entries.
  {
    id: 'insurance-rag-chatbot',
    category: 'project',
    eyebrow: 'AI / Prompt Engineering',
    title: 'Insurance Terms RAG Chatbot',
    subtitle: 'Insurance Policy Analysis',
    ko: '보험 약관 분석을 위한 RAG 기반 챗봇 프로세스를 설계했습니다.',
    en: 'Designed a RAG-based chatbot workflow for insurance policy analysis.',
    details: [
      '보험 약관 문서를 검색하고 의미 단위로 해석하는 RAG 기반 프로세스를 설계했습니다.',
      '약관의 문제점 도출, 개선안 생성, 평가 흐름을 단계별로 구성했습니다.',
      'LangChain과 GPT를 활용한 문서 검색 및 프롬프트 개선 구조를 실험했습니다.',
    ],
  },
  {
    id: 'glassday',
    category: 'project',
    eyebrow: 'Personal Project',
    title: 'GlassDay Personal Dashboard',
    subtitle: 'React · TypeScript · Vite · Tauri',
    ko: '일정, 커리어, 학습, 메모와 생활 기록을 위젯으로 모아 관리하는 개인용 대시보드를 기획하고 개발하고 있습니다.',
    en: 'Building a personal dashboard that brings planning, career, study, notes, and daily life into customizable widgets.',
    details: [
      'Today Focus, Calendar, Career, Study Planner, Timer, Memo, Daily Journal, Health, Money, Mood, Alert Center 등 11개 위젯을 하나의 대시보드에서 조합하도록 구성했습니다.',
      '와이드 데스크톱, 노트북 프레임, 모바일 웹 화면을 지원하고, 모바일 배치 설정을 데스크톱 그리드 설정과 분리해 각 화면에 맞게 정리할 수 있게 했습니다.',
      '위젯을 배치·크기 조정하고 워크스페이스 탭별 레이아웃을 저장하는 구조를 구현했습니다.',
      'Glass Light/Dark, Pastel, Mac Core, Pixel Desk 등 테마와 글꼴·색상 설정을 분리해 같은 기능에 다른 시각 스타일을 적용하도록 설계했습니다.',
      'React와 TypeScript로 위젯·설정·검색·Quick Capture 흐름을 구성하고, Tauri 데스크톱 실행과 Supabase 동기화 경로를 이어 개발하고 있습니다.',
    ],
  },
  {
    id: 'procureflow-ax',
    category: 'project',
    eyebrow: 'PwC AX 인재전쟁 · W07',
    title: 'ProcureFlow AX',
    subtitle: 'Related-Party & Sales Rebate Review Workflow',
    ko: '가상기업의 판매장려금 검토 과정을 돕는 업무 프로토타입을 설계·구현했습니다. 공개 시연은 합성 데이터 기반이며, 검토 근거와 담당자 후속 흐름을 보여줍니다.',
    en: 'Designed and built a workflow prototype for related-party and sales-rebate review using synthetic demo data.',
    details: [
      '삼일PwC AX 인재전쟁 W07 과제에 참가해 「관련 거래처와 판매장려금 지급 검토」 업무를 위한 문제 정의, 요구사항·화면 설계, 프로토타입과 시연 자료를 만들었습니다.',
      '대표자·주소·정산계좌 중 비결측 항목 2개 이상이 일치하면 거래처를 연결하고, 전이적으로 연결된 그룹을 구성하는 규칙을 구현했습니다.',
      '관련 거래처 그룹의 월별 장려금 검토 후보액을 합산해 200만 원 이하/초과에 따른 승인권한 검토 신호와 지급행별 포함 근거를 보여줍니다.',
      'Action Center와 상세 화면에서 정상 검토, 정보 정정 영향 미리보기, 증빙 부족에 따른 보류 흐름을 이어 주고, 재무·감사 후속 상태를 함께 표시합니다.',
      'A/B/C 시나리오에서 모의 검토·회신, 그룹 재평가, HOLD 및 브라우저 새로고침 후 상태 복원을 확인했습니다. 데이터는 합성, 업무 상태는 단일 브라우저의 모의 저장입니다.',
      '관계와 금액은 규칙 기반으로 계산합니다. 실제 LLM 분석, 직원 인증, 실제 결재·송금, 다중 사용자 업무 기록은 구현·검증 범위에 포함되지 않습니다.',
    ],
  },
]

export const skills = [
  {
    name: 'IFRS17',
    description:
      'I see IFRS17 as a system of assumptions, cash flows, insurance liabilities, and risk.',
  },
  {
    name: 'Actuarial Valuation',
    description:
      'I am interested in connecting actuarial logic with actual business and reporting processes.',
  },
  {
    name: 'Reinsurance',
    description:
      'I want to understand how treaties, cash flows, and risk transfer work behind insurance business.',
  },
  {
    name: 'Excel / VBA',
    description:
      'My practical tool for validating large data, automating repetitive checks, and reducing manual errors.',
  },
  {
    name: 'Python',
    description:
      'I use Python to clean, analyze, and model data when Excel alone is not enough.',
  },
  {
    name: 'SQL',
    description:
      'I use SQL to think in tables, conditions, joins, and structured data extraction.',
  },
  {
    name: 'Data Analysis',
    description:
      'For me, data analysis means finding patterns, checking assumptions, and turning raw numbers into decisions.',
  },
  {
    name: 'Prompt Engineering',
    description:
      'I use prompts to structure vague ideas, improve document analysis, and design repeatable thinking flows.',
  },
]

export const allItems = [...experiences, ...projects]

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/junheechoi1103',
    icon: 'in',
  },
  {
    label: 'Email',
    href: 'mailto:jenny876517@gmail.com',
    icon: '@',
  },
]
