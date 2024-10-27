import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <div>
      <Link href="/" className="text-blue-500 underline">
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold">Product lists</h1>
      <h3>
        <Link href="/products/1" className="text-blue-500 underline" replace>
          Product 1
        </Link>
      </h3>
      <h3>
        <Link href="/products/2" className="text-blue-500 underline">
          Product 2
        </Link>
      </h3>
      <h3>
        <Link href="/products/3" className="text-blue-500 underline">
          Product 3
        </Link>
      </h3>
      <h3>Product 4</h3>
      <h3>Product 5</h3>
      <h3>Product 6</h3>
      <h3>Product 7</h3>
      <h3>Product 8</h3>
      <h3>Product 9</h3>
      <h3>Product 10</h3>
      <h3>
        <Link
          href={`/products/${productId}`}
          className="text-blue-500 underline"
        >
          Product {productId}
        </Link>
      </h3>
    </div>
  );
}
