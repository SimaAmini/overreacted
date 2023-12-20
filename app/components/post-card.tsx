import { Post } from "../models/post";
import { randomDateBasedOnNumber } from "../utils/date";

const PostCard = (post: Post) => {
  const date: string = randomDateBasedOnNumber(post.id);

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {post.title}
      </h2>
      <p className="text-sm my-2">{date}</p>
      <p className="truncate font-semibold">{post.body}</p>
    </div>
  );
};

export default PostCard;
