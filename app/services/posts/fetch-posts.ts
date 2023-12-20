import { END_POINT } from "@/app/constant";

export const fetchPosts = async () => {
  const res = await fetch(END_POINT, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
