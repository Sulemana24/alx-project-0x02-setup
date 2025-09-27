import { type CardProps } from "@/components/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
