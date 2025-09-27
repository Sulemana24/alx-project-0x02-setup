import { UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold">{name}</h2>
      <p>{email}</p>
      <small>{address.city}</small>
    </div>
  );
}
