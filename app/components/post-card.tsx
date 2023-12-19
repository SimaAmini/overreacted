import { Post } from "../models/post";
import { randomDateBasedOnNumber } from "../utils/date";

const PostCard = (post: Post) => {
  const date: string = randomDateBasedOnNumber(post.id);

  return (
    <div className="my-10">
      <h2 className="font-black text-2xl">{post.title}</h2>
      <p>{date}</p>
      <p className="truncate">{post.body}</p>
    </div>
  );
};

export default PostCard;
