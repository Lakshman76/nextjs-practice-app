import { Metadata } from "next";
type Props = {
  params: { productId: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Product ${params.productId}`,
  };
}

export default function ProductDetails({ params }: Props) {
  return <h1>Details of Product {params.productId}</h1>;
}
