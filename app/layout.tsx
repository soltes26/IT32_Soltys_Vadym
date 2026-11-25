import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Інтернет-магазин",
  description: "Підсумкова практична робота з Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/form">Замовлення</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}