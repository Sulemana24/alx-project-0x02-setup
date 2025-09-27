import Header from "@/components/layout/Header";

export default function PostsPage({ posts }: { posts: any[] }) {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <p>Here you will find a list of posts.</p>
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded shadow">
              <h2 className="font-bold text-lg">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
