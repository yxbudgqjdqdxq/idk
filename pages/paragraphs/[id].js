// pages/paragraphs/[id].js
import { useRouter } from 'next/router'
import paragraphs from '../../public/data/paragraphs.json'
import Link from 'next/link'

export default function ParagraphPage() {
  const router = useRouter()
  const { id } = router.query
  const p = paragraphs[id]

  if (!p) return <div className="page center"><p>Loading…</p></div>

  return (
    <main className="page center" style={{ padding: 28 }}>
      <div className="paragraph-card">
        <Link href="/paragraphs"><button className="back small">← Back</button></Link>
        <h2 className="para-title">{p.title}</h2>
        <div className="para-body">
          { (p.text || p.content).split('\n').map((line,i)=>(<p key={i}>{line}</p>)) }
        </div>
      </div>
    </main>
  )
}
