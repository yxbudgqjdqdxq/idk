import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="main-container">
      {!entered ? (
        <button className="big-button" onClick={() => setEntered(true)}>
          I Missed You Bubu
        </button>
      ) : (
        <div className="button-container">
          <Link href="/mood">
            <button className="sexy-button">Feeling Moody Today?</button>
          </Link>
          <Link href="/chat">
            <button className="sexy-button">Daily Affirmations</button>
          </Link>
        </div>
      )}
    </div>
  );
}
