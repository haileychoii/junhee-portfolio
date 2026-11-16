import { Link } from 'react-router-dom'

// 홈에서는 핵심 정보만 한 줄로 훑고, 자세한 설명은 별도 사례 페이지에서 읽습니다.
// Keep the archive scannable; the linked case-study page carries the full story.
function Card({ item, index = 0 }) {
  return (
    <Link to={`/detail/${item.id}`} className={`archiveRow archiveRow-${item.category}`}>
      <span className="archiveIndex">{String(index + 1).padStart(2, '0')}</span>
      <div className="archiveDate">{item.eyebrow}</div>
      <div className="archiveCopy">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
      <p className="archiveSummary">{item.ko}</p>
      <span className="archiveArrow" aria-hidden="true">↗</span>
    </Link>
  )
}

export default Card
