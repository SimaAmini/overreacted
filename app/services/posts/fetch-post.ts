import { END_POINT } from "@/app/constant";

export const fetchPost = async (id: number) => {
  const res = await fetch(`${END_POINT}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
