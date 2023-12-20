export default function Loading() {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="skeleton h-10 w-full"></div>
      <div className="skeleton h-5 w-20"></div>
      <div className="skeleton h-80 w-full"></div>
    </div>
  );
}
