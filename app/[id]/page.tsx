import { Post } from "../models/post";
import { fetchPost } from "../services/posts/fetch-post";
import { randomDateBasedOnNumber } from "../utils/date";

interface PostProps {
  params: {
    id: number;
  };
}

const PostPage = async ({ params: { id } }: PostProps) => {
  const post: Post = await fetchPost(id);
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
