"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="text-red-500">{error.message}</h1>
      <button className="border-2 border-white p-2 m-2" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
}
