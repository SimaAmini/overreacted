export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum and the minimum are inclusive
}
export function randomDateBasedOnNumber(id: number) {
  const start = new Date(2023, 0, 1);
  const end = new Date();

  const randomDate =
    start.getTime() + id * (new Date().getTime() - start.getTime());

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(randomDate);
  //   return new Intl.DateTimeFormat("en-US").format(randomDate);
}
