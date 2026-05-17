import { Link, useParams } from 'react-router-dom'
import { allItems } from '../data'

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
        <p className="eyebrow">{item.eyebrow}</p>
        <h1>{item.title}</h1>
        <strong>{item.subtitle}</strong>

        <p className="detailKo">{item.ko}</p>
        <p className="detailEn">{item.en}</p>
      </section>

      <section className="detailContent">
        <h2>Details / 상세 내용</h2>

        <div className="detailList">
          {item.details.map((detail) => (
            <div className="detailItem" key={detail}>
              
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default DetailPage