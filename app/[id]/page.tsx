import { Post } from "../models/post";
import { fetchPost } from "../services/posts/fetch-post";
import { formatDate, randomDateBasedOnNumber } from "../utils/date";

interface PostProps {
  params: {
    id: number;
  };
}

const PostPage = async ({ params: { id } }: PostProps) => {
  const singlePost: Post = await fetchPost(id);

  const post: Post = {
    ...singlePost,
    date: formatDate(randomDateBasedOnNumber(singlePost.id)),
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {post.title}
        </h2>
        <p className="text-sm my-2">{post.date}</p>
      </div>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
