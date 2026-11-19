import { Link, useParams } from 'react-router-dom'
import { allItems } from '../data'

// 업무의 흐름을 짧은 시각적 단계로 바꿔, 긴 설명을 읽기 전에 맥락을 잡게 합니다.
// Turn the work into a visual sequence so readers get context before the details.
const workFlows = {
  'rga-ifrs17': ['Treaty & source data', 'Oracle SQL review', 'IFRS 17 outputs', 'Variance follow-up'],
  'summit-actuarial': ['Experience data', 'Product rules', 'Independent recalculation', 'Difference diagnosis'],
  'kwater-bigdata': ['Public datasets', 'Feature preparation', 'Extra Trees model', 'Water-quality insight'],
  'insurance-rag-chatbot': ['Policy documents', 'Semantic retrieval', 'Grounded response', 'Review & refine'],
  glassday: ['Pick widgets', 'Arrange workspace', 'Adapt by device', 'Return to daily view'],
  'procureflow-ax': ['Connect related parties', 'Group monthly amounts', 'Show review signals', 'Route human follow-up'],
}

const proofPoints = {
  'rga-ifrs17': [
    ['6', '개월 근무', '2026.05.11 — 2026.11.10'],
    ['IFRS 17', '결산 검토', 'BEL · RA · CSM · LRC / LIC'],
    ['SQL + Excel', '데이터 확인', 'Oracle · VBA'],
  ],
  'summit-actuarial': [
    ['167,598', '실효비금 대상', 'MG새마을금고 프로젝트 전체 계약 수'],
    ['9,605', '공제료 검증', '10개 상품 · 9,604건 ±1 이내'],
    ['6 × 2', '대출 가정 구분', '6개 상품군 · 2개 금리 유형'],
  ],
  'kwater-bigdata': [
    ['3', '공공 데이터 출처', '수자원공사 · 해양환경공단 · 기상청'],
    ['DO', '예측 대상', '시화호 용존산소량'],
    ['Extra Trees', '모델', '주요 영향 변수 분석'],
  ],
  'insurance-rag-chatbot': [
    ['RAG', '검색 기반 응답', '약관 문서 검색과 해석'],
    ['3단계', '검토 흐름', '문제 도출 → 개선안 → 평가'],
    ['LangChain', '실험 도구', 'GPT 기반 프롬프트 개선'],
  ],
  glassday: [
    ['11', '대시보드 위젯', '일정 · 커리어 · 학습 · 생활 기록'],
    ['4', '테마 방향', 'Glass · Pastel · Mac · Pixel'],
    ['Web + Desktop', '화면 경험', 'React · TypeScript · Tauri'],
  ],
  'procureflow-ax': [
    ['2 of 3', '관계 연결 기준', '대표자 · 주소 · 정산 계좌'],
    ['₩2M', '월별 검토 기준', '권한 확인을 위한 신호'],
    ['3', '시연 시나리오', '정상 검토 · 영향 미리보기 · 보류'],
  ],
}

function MediaGallery({ item }) {
  if (!item.media?.length) return null

  return (
    <section className={`caseMedia caseMedia-${item.id}`} aria-labelledby="media-title">
      <div className="caseSectionHead">
        <span className="caseKicker">FIELD NOTES / 실제 화면</span>
        <h2 id="media-title">{item.mediaHeading || '결과물'}</h2>
      </div>
      {item.mediaNotice && <p className="caseNotice">{item.mediaNotice}</p>}
      <div className="caseGallery">
        {item.media.map((media, index) => (
          <figure className={`caseFigure ${media.type === 'video' ? 'caseFigureVideo' : ''}`} key={media.src}>
            <div className="caseFigureFrame">
              <span className="caseImageIndex">{String(index + 1).padStart(2, '0')} / {media.label}</span>
              {media.type === 'video' ? (
                <video controls preload="metadata" poster={media.poster} aria-label={media.alt}>
                  <source src={media.src} type="video/mp4" />
                  {media.captions && <track kind="captions" src={media.captions} srcLang="ko" label="한국어" default />}
                  브라우저에서 영상을 재생할 수 없습니다. <a href={media.src}>영상 파일 열기</a>
                </video>
              ) : (
                <a href={media.src} target="_blank" rel="noreferrer" aria-label={`${media.alt} — 원본 보기`}>
                  <img src={media.src} alt={media.alt} loading="lazy" />
                </a>
              )}
            </div>
            <figcaption><span>{media.caption}</span><span aria-hidden="true">↗</span></figcaption>
          </figure>
        ))}
      </div>
      {item.widgetVisuals?.length > 0 && (
        <div className="widgetShelf" aria-label="GlassDay 위젯 종류">
          <div className="widgetShelfIntro"><span className="caseKicker">11 WIDGETS</span><p>하루를 구성하는 작은 도구들</p></div>
          <div className="widgetShelfGrid">
            {item.widgetVisuals.map((widget) => <div className="widgetToken" key={widget.name}>
              <img src={widget.src} alt="" loading="lazy" /><span>{widget.name}</span>
            </div>)}
          </div>
        </div>
      )}
    </section>
  )
}

function WorkFlow({ id }) {
  const flow = workFlows[id] || []
  return <section className="workFlow" aria-label="업무 흐름">
    <div className="flowHeading"><span className="caseKicker">HOW THE WORK MOVED</span><h2>업무 흐름</h2></div>
    <ol className="flowTrack">{flow.map((step, index) => <li key={step}>
      <span className="flowNumber">0{index + 1}</span><span className="flowDot" aria-hidden="true" />
      <span className="flowLabel">{step}</span>
    </li>)}</ol>
  </section>
}

function DetailPage() {
  const { id } = useParams()
  const item = allItems.find((data) => data.id === id)
  if (!item) return <main className="container detailPage"><Link to="/" className="backLink">← Portfolio</Link><h1>Page not found</h1></main>

  const points = proofPoints[item.id] || []
  return <main className="casePage">
    <div className="caseTopbar"><Link to="/" className="caseBack">← 모든 경험</Link><span>JUNHEE CHOI · SELECTED WORK</span></div>
    <header className={`caseHero caseHero-${item.category}`}>
      <div className="caseHeroMeta"><span>{item.category === 'experience' ? 'CAREER / 경력' : 'PROJECT / 프로젝트'}</span><span>{item.eyebrow}</span></div>
      <h1>{item.title}</h1>
      <div className="caseHeroBottom"><strong>{item.subtitle}</strong><p>{item.ko}</p></div>
      <span className="caseHeroIndex" aria-label={`경험 ${allItems.findIndex((entry) => entry.id === item.id) + 1}`}>
        {String(allItems.findIndex((entry) => entry.id === item.id) + 1).padStart(2, '0')}
      </span>
    </header>

    <section className="proofStrip" aria-label="핵심 정보">
      {points.map(([value, label, note], index) => <div className="proofPoint" key={`${value}-${label}`}>
        <span className="proofIndex">0{index + 1}</span><strong>{value}</strong><b>{label}</b><small>{note}</small>
      </div>)}
    </section>

    <div className="caseBody">
      <WorkFlow id={item.id} />
      <MediaGallery item={item} />
      <section className="caseStory" aria-labelledby="story-title">
        <div className="caseStoryIntro"><span className="caseKicker">THE WORK / 맡은 일과 배운 점</span><h2 id="story-title">어떻게 진행했는가</h2>
          <p>결과만 나열하기보다 문제를 어떻게 나누고, 어떤 근거로 확인했는지 순서대로 정리했습니다.</p>
        </div>
        <ol className="storyTimeline">{item.details.map((detail, index) => <li key={detail}>
          <span className="storyIndex">{String(index + 1).padStart(2, '0')}</span><span className="storyRail" aria-hidden="true" />
          <div className="storyText"><span className="caseKicker">{index === 0 ? 'SCOPE & CONTEXT' : index === item.details.length - 1 ? 'OUTCOME & NOTES' : `WORKSTREAM 0${index}`}</span><p>{detail}</p></div>
        </li>)}</ol>
      </section>
      <footer className="caseEnd"><span>END OF CASE</span><Link to="/">다른 경험 둘러보기 <span aria-hidden="true">↗</span></Link></footer>
    </div>
  </main>
}

export default DetailPage
