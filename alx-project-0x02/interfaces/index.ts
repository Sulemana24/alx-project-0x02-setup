import { ReactNode } from "react";

// Props for the Card component
export interface CardProps {
  title: string;
  content: string;
}

// Props for the Button component
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: ReactNode;
}

// Props for the PostCard component
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Props for the UserCard component
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}
