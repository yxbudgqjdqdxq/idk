// pages/paragraphs.js
import Link from 'next/link'
import paragraphs from '../public/data/paragraphs.json'

export default function Paragraphs() {
  return (
    <main className="page center" style={{ padding: 48 }}>
      <h2 className="page-title">Pick a Thought</h2>

      <div className="paragraph-grid">
        {paragraphs.map((p, i) => (
          <Link key={p.id ?? i} href={`/paragraphs/${i}`} legacyBehavior>
            <button className="para-button">{p.title}</button>
          </Link>
        ))}
      </div>
    </main>
  )
}
