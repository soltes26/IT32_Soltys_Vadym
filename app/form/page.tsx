import RequestForm from "../components/RequestForm";

export default async function FormPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product = "" } = await searchParams;

  return (
    <section>
      <h1>Форма замовлення</h1>
      <RequestForm key={product} defaultProduct={product} />
    </section>
  );
}