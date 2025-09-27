import { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
interface Post {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleSave = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>

        {/* Render modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />

        {/* ✅ Use Card for posts */}
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </>
  );
}
