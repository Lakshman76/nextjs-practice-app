import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome Home!</h1>
      <Link href="/blog" className="text-blue-500 underline">
        Read blog
      </Link>
      <br />
      <Link href="/products" className="text-blue-500 underline">
        Products
      </Link>
    </div>
  );
}
