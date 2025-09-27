import { ButtonProps } from "../interfaces";

export default function Button({ size, shape, children }: ButtonProps) {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape}`}>
      {children}
    </button>
  );
}
