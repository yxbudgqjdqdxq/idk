import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="landing">
      <h1 onClick={() => router.push('/menu')} className="landing-button">
        I Missed You Bubu
      </h1>
    </div>
  )
}
