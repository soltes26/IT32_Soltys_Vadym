import InteractiveList from "./InteractiveList";

export type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

export default async function PracticePage() {
  const lessons: Lesson[] = await Promise.resolve([
    { id: 1, day: "Понеділок", subject: "Програмування", room: "214" },
    { id: 2, day: "Понеділок", subject: "Вебдизайн", room: "305" },
    { id: 3, day: "Вівторок", subject: "Бази даних", room: "112" },
    { id: 4, day: "Середа", subject: "Англійська мова", room: "208" },
    { id: 5, day: "Четвер", subject: "Алгоритми", room: "214" },
    { id: 6, day: "П'ятниця", subject: "Next.js", room: "301" },
  ]);

  return (
    <section>
      <h1>Розклад занять</h1>
      <p>Усього занять: {lessons.length}</p>

      {/* масив передається у Client Component через props */}
      <InteractiveList lessons={lessons} />
    </section>
  );
}