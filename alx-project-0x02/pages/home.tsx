import { useState } from "react";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";

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

        {/* Display new posts */}
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
