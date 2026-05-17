export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const experiences = [
  {
    id: 'rga-ifrs17',
    category: 'experience',
    eyebrow: '2026.05 - Present',
    title: 'RGA Reinsurance Korea',
    subtitle: 'IFRS17 Intern · Valuation',
    ko: 'Valuation 부서에서 IFRS17 관련 업무를 수행하고 있습니다.',
    en: 'Working as an IFRS17 intern in the Valuation team.',
    details: [
      'IFRS17 Valuation 업무 흐름과 재보험사의 결산/평가 프로세스를 학습하고 있습니다.',
      'Treaty, cash flow, assumption, reporting 관점에서 보험계리 실무 이해도를 확장하고 있습니다.',
      '업무 문서와 데이터를 구조화하여 검토하는 역량을 강화하고 있습니다.',
    ],
  },
  {
    id: 'summit-actuarial',
    category: 'experience',
    eyebrow: '2025.09 - 2026.02',
    title: 'Summit Actuarial Consulting',
    subtitle: 'Actuarial Consulting Intern',
    ko: '최적가정 검증, 준비금 검증, 현금흐름 검증 프로젝트를 경험했습니다.',
    en: 'Supported assumption validation, reserve validation, and cash flow review projects.',
    details: [
      'KB손해보험 최적가정 프로젝트에서 계약자행동가정 및 보험계약대출 가정 검증을 수행했습니다.',
      'MG새마을금고중앙회 책임준비금 프로젝트에서 실효비금 검증 및 공제료 분해 업무를 수행했습니다.',
      'Excel과 VBA를 활용해 반복 검증 업무를 자동화하고 데이터 이상치를 점검했습니다.',
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
]

export const skills = [
  'IFRS17',
  'Actuarial Valuation',
  'Reinsurance',
  'Excel / VBA',
  'Python',
  'SQL',
  'Data Analysis',
  'Prompt Engineering',
]

export const allItems = [...experiences, ...projects]