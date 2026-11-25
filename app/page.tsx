import RequestForm from "./components/RequestForm";

export default function HomePage() {
  return (
    <main>
      <h1>Запис на консультацію</h1>
      <p className="subtitle">Практична робота 10: форми та Server Actions</p>
      <RequestForm />
    </main>
  );
}