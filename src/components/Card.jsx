import { Link } from 'react-router-dom'

function Card({ item }) {
  return (
    <Link to={`/detail/${item.id}`} className="card cardLink">
      <article>
        <p className="eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <strong>{item.subtitle}</strong>
        <p>{item.ko}</p>
        <p className="english">{item.en}</p>
        <span className="viewMore">View detail ↗</span>
      </article>
    </Link>
  )
}

export default Card