import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Практична 9: завантаження даних і кешування</h1>
      <Link href="/users">Перейти до списку користувачів →</Link>
    </main>
  );
}