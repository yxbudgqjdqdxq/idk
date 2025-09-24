import Link from 'next/link';
import paragraphs from '../../public/data/paragraphs.json';

export default function ParagraphList() {
  return (
    <div className="list">
      <h1>Pick a Thought</h1>
      {paragraphs.map((p, i) => (
        <Link key={i} href={`/paragraphs/${i}`}>
          <button>{p.title}</button>
        </Link>
      ))}
    </div>
  );
}