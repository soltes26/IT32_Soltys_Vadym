import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Запис на консультацію",
  description: "Практична робота: форми, Server Actions, Zod",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}