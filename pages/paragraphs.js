// pages/paragraphs.js
import Link from 'next/link'
import paragraphs from '../public/data/paragraphs.json'

export default function Paragraphs() {
  return (
    <main className="page center" style={{ padding: 36 }}>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, marginBottom: 12 }}>Pick one that fits how you feel</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 14,
        width: '100%',
        maxWidth: 980
      }}>
        {paragraphs.map((p, i) => (
          <Link key={p.id ?? i} href={`/paragraphs/${i}`} legacyBehavior>
            <button className="sexy-button" style={{ textAlign: 'left' }}>{p.title}</button>
          </Link>
        ))}
      </div>
    </main>
  )
}
