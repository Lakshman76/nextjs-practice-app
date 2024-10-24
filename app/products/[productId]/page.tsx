export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details of Product {params.productId}</h1>;
}
