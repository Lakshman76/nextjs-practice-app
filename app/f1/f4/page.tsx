import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1 className="text-3xl font-bold">F4 Page</h1>
      <p>
        <Link href="/f1/f3" className="text-blue-500 underline">
          f3
        </Link>
      </p>
      <p>
        <Link href="/about" className="text-blue-500 underline">
          about
        </Link>
      </p>
    </>
  );
}
