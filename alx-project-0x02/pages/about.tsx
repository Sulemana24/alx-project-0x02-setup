import Header from "@/components/layout/Header";
import Button from "@/components/common/Button"; // ✅ required import

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="mb-6">
          This is the About page of our Next.js project with TypeScript and
          Tailwind CSS.
        </p>

        {/* ✅ Use the Button component with different props */}
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </div>
    </>
  );
}
