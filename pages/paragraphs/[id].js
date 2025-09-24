import { useRouter } from 'next/router';
import paragraphs from '../../public/data/paragraphs.json';

export default function ParagraphPage() {
  const { query } = useRouter();
  const paragraph = paragraphs[query.id];

  if (!paragraph) return <p>Loading...</p>;

  return (
    <div className="paragraph">
      <h1>{paragraph.title}</h1>
      <p>{paragraph.content}</p>
    </div>
  );
}