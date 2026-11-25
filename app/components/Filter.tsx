"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
};

export default function Filter({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  // пошук за назвою без урахування регістру
  const shown = products.filter((product) =>
    product.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder="Пошук за назвою (англійською)"
        aria-label="Пошук товарів"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Знайдено: {shown.length}</p>

      {shown.length === 0 ? (
        <p className="status">Нічого не знайдено</p>
      ) : (
        <div className="grid">
          {shown.map((product) => (
            <article key={product.id} className="card">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={180}
                height={180}
              />
              <h2>{product.title}</h2>
              <p>Категорія: {product.category}</p>
              <p className="price">${product.price}</p>
              <Link
                href={{ pathname: "/form", query: { product: product.title } }}
                className="button"
              >
                Замовити
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}