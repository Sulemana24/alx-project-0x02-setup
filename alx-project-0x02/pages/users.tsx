import React from "react";
import Header from "@/components/layout/Header";

const res = await fetch("https://jsonplaceholder.typicode.com/users");
const Users = await res.json();

export default function users() {
  return (
    <div>
      <Header />
      <h1>
        This is the users page of the website
        {Users.map((user: any) => (
          <div key={user.id} className="border p-4 rounded shadow mb-4">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </h1>
    </div>
  );
}
