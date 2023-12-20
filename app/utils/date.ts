export function randomDateBasedOnNumber(id: number) {
  return new Date(2023, 0, id);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
