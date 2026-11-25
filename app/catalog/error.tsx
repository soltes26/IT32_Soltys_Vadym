"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh(); 
      reset(); 
    });
  };

  return (
    <div className="status error">
      <p>Не вдалося отримати дані.</p>
      <p>{error.message}</p>
      <button className="button" onClick={handleRetry}>
        Спробувати ще раз
      </button>
    </div>
  );
}