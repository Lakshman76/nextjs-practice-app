export default function notFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-red-500 text-2xl ">404 - Page Not Found</h1>
      <p className="text-gray-500">Could not found requested resource</p>
    </div>
  );
}
