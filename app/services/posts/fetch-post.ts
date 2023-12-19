export const fetchPost = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
