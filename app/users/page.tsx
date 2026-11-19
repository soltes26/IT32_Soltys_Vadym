type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default async function UsersPage() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=8",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження користувачів");
  }

  const users: User[] = await res.json();

  return (
    <main>
      <h1>Список користувачів</h1>
      <div className="grid">
        {users.map((user) => (
          <article key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>✉️ {user.email}</p>
            <p>📍 {user.address.city}</p>
          </article>
        ))}
      </div>
    </main>
  );
}