import { Link, useParams } from 'react-router-dom'
import { allItems } from '../data'

function MediaGallery({ item }) {
  if (!item.media?.length) return null

  // Read media metadata from src/data.jsx so each project can show its own screenshots and clips.
  // src/data.jsx의 미디어 정보로 프로젝트별 캡처와 영상을 구성하며, 이미지는 원본 크기로 열 수 있습니다.
  return (
    <section className={`detailMedia detailMedia-${item.id}`} aria-labelledby="media-title">
      <div className="detailSectionHeading">
        <p className="eyebrow">SCREENS & DEMO / 실제 화면</p>
        <h2 id="media-title">{item.mediaHeading || 'Project visuals / 프로젝트 화면'}</h2>
      </div>
      {item.mediaNotice && <p className="mediaNotice">{item.mediaNotice}</p>}
      <div className="mediaGrid">
        {item.media.map((media) => (
          <figure className={`mediaFigure ${media.type === 'video' ? 'mediaFigureVideo' : ''}`} key={media.src}>
            <div className="mediaFrame">
              <span className="mediaLabel">{media.label}</span>
              {media.type === 'video' ? (
                <video controls preload="metadata" poster={media.poster} aria-label={media.alt}>
                  <source src={media.src} type="video/mp4" />
                  {media.captions && <track kind="captions" src={media.captions} srcLang="ko" label="한국어" default />}
                  브라우저에서 영상을 재생할 수 없습니다. <a href={media.src}>영상 파일 열기</a>
                </video>
              ) : (
                <a className="mediaImageLink" href={media.src} target="_blank" rel="noreferrer" aria-label={`${media.alt} — 원본 크기로 보기`}>
                  <img src={media.src} alt={media.alt} loading="lazy" />
                </a>
              )}
            </div>
            <figcaption>{media.caption}</figcaption>
          </figure>
        ))}
      </div>
      {item.widgetVisuals?.length > 0 && (
        <div className="widgetVisuals" aria-label="GlassDay 위젯 종류">
          <p className="widgetVisualsTitle">A few of 11 widgets / 11개 위젯 중 일부</p>
          <div className="widgetVisualsGrid">
            {item.widgetVisuals.map((widget) => (
              <div className="widgetVisual" key={widget.name}>
                <img src={widget.src} alt="" loading="lazy" />
                <span>{widget.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

function DetailPage() {
  const { id } = useParams()
  const item = allItems.find((data) => data.id === id)

  if (!item) {
    return (
      <main className="container detailPage">
        <Link to="/" className="backLink">← Back to home</Link>
        <h1>Page not found</h1>
      </main>
    )
  }

  return (
    <main className="container detailPage">
      <Link to="/" className="backLink">← Back to archive</Link>

      <section className="detailHero">
        <div className="detailMeta">
          <span className="cardType">{item.category === 'experience' ? 'EXPERIENCE' : 'PROJECT'}</span>
          <p className="eyebrow">{item.eyebrow}</p>
        </div>
        <h1>{item.title}</h1>
        <strong className="detailSubtitle">{item.subtitle}</strong>

        <p className="detailKo">{item.ko}</p>
        <p className="detailEn">{item.en}</p>
      </section>

      <MediaGallery item={item} />

      <section className="detailContent">
        <div className="detailSectionHeading">
          <p className="eyebrow">WHAT I DID / 주요 기여</p>
          <h2>Details / 상세 내용</h2>
        </div>

        <div className="detailList">
          {item.details.map((detail, index) => (
            <div className="detailItem" key={detail}>
              <span className="detailNumber">{String(index + 1).padStart(2, '0')}</span>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default DetailPage
