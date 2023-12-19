export function randomDateBasedOnNumber(id: number) {
  const start = new Date(2023, 0, 1);
  const end = new Date();

  const randomDate = start.getTime() + id * (end.getTime() - start.getTime());

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(randomDate);
}
