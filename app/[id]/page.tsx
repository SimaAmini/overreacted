import { Post } from "../models/post";
import { randomDateBasedOnNumber } from "../utils/date";

interface PostProps {
  params: {
    id: number;
  };
}

// services
const getData = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
const PostPage = async ({ params: { id } }: PostProps) => {
  const post: Post = await getData(id);
  // extract this logic
  const date: string = randomDateBasedOnNumber(id);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2>{post.title}</h2>
        <p>{date}</p>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
