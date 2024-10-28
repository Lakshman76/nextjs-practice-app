function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 0) {
    throw new Error("Error while loading products!");
  }
  return (
    <>
      {children}
      <h2>Features products</h2>
      {/* carousel here */}
    </>
  );
}
