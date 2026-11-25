import Filter, { type Product } from "../components/Filter";

export default async function CatalogPage() {
  const response = await fetch("https://dummyjson.com/products?limit=30", {

    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Не вдалося завантажити товари");
  }

  const data: { products: Product[] } = await response.json();

  return (
    <section>
      <h1>Каталог товарів</h1>
      {/* передаємо дані в Client Component через props */}
      <Filter products={data.products} />
    </section>
  );
}