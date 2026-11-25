import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Інтернет-магазин</h1>
      <p>Перегляньте каталог товарів, знайдіть потрібний і оформіть замовлення.</p>
      <Link href="/catalog" className="button">
        Перейти до каталогу
      </Link>
    </section>
  );
}