import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1 className="text-3xl font-bold">F1 Page</h1>
      <div>
        <Link href="/f1/f2" className="text-blue-500 underline">
          f2
        </Link>
      </div>
    </>
  );
}
