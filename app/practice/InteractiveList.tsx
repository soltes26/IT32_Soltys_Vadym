"use client";

import { useState } from "react";

type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

const DAYS = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

export default function InteractiveList({ lessons }: { lessons: Lesson[] }) {
  const [day, setDay] = useState("all");
  const [showRooms, setShowRooms] = useState(true);

  const shown = lessons.filter(
    (lesson) => day === "all" || lesson.day === day
  );

  return (
    <div>
      <div className="practice-controls">
        {/* інтерактивна дія 1: вибір дня тижня */}
        <label>
          День тижня:{" "}
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="all">Усі дні</option>
            {DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        {/* інтерактивна дія 2: показати / приховати аудиторії */}
        <button className="button" onClick={() => setShowRooms(!showRooms)}>
          {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
        </button>
      </div>

      <p>Показано: {shown.length}</p>

      {shown.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul className="practice-list">
          {shown.map((lesson) => (
            <li key={lesson.id}>
              <strong>{lesson.day}</strong>: {lesson.subject}
              {showRooms && <span> (ауд. {lesson.room})</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}