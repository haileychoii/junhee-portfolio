import { Link } from 'react-router-dom'

function Card({ item }) {
  const highlights = (item.highlights || item.details?.slice(0, 2) || []).slice(0, 2)

  return (
    <Link to={`/detail/${item.id}`} className="card cardLink">
      <article className={`cardArticle card-${item.category}`}>
        <div className="cardMeta">
          <span className="cardType">{item.category === 'experience' ? 'EXPERIENCE' : 'PROJECT'}</span>
          <span className="eyebrow">{item.eyebrow}</span>
        </div>
        <h3>{item.title}</h3>
        <strong className="cardSubtitle">{item.subtitle}</strong>
        <p className="cardSummary">{item.ko}</p>
        <ul className="cardHighlights" aria-label="주요 내용">
          {highlights.map((highlight, index) => (
            <li key={`${item.id}-highlight-${index}`}>{highlight}</li>
          ))}
        </ul>
        <div className="cardFooter">
          <span>상세 내용 보기</span>
          <span className="cardArrow" aria-hidden="true">↗</span>
        </div>
      </article>
    </Link>
  )
}

export default Card
