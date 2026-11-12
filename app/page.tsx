import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Практична робота 7</h1>
      <p>Server vs Client Components у Next.js.</p>
      <Link href="/practice">Перейти до розкладу занять →</Link>
    </section>
  );
}