import Header from "@/components/layout/Header";

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export default function UsersPage({ users }: { users: User[] }) {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">
        This is the users page of the website
      </h1>
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded shadow mb-4">
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ Correct way for pages/ directory
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
