import { PostProps } from "../interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-md shadow">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <small>User: {userId}</small>
    </div>
  );
}
