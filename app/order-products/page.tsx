"use client";
import { useRouter } from "next/navigation";

export default function OrderProducts() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order Placed");
    // router.push("/");
    router.back();
  };
  return (
    <div>
      <h1>Order Products</h1>
      <button className="border-2 border-white p-2 m-2" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}
