import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className="container">
      <h1 className="title">I Missed You Bubu</h1>
      <button onClick={() => router.push('/menu')}>Enter</button>
    </div>
  );
}