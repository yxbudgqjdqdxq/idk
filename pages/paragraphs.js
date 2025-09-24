
import Link from 'next/link'
import paragraphs from '../public/data/paragraphs.json'

export default function Paragraphs() {
  return (
    <main className="page center">
      <h2 className="menu-title">Pick one that fits how you feel</h2>
      <div className="buttons-grid">
        {paragraphs.map((p, i) => (
          <Link key={p.id} href={`/paragraphs/${i}`}>
            <button className="menu-btn">{p.title}</button>
          </Link>
        ))}
      </div>
    </main>
  )
}
