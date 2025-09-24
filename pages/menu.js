import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter();
  return (
    <div className="menu">
      <button onClick={() => router.push('/paragraphs')}>Feeling Moody Today?</button>
      <button onClick={() => router.push('/chat')}>Daily Affirmations</button>
    </div>
  );
}