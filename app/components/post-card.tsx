import { Post } from "../models/post";

const PostCard = (post: Post) => {
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {post.title}
      </h2>
      <p className="text-sm my-2">{post.date}</p>
      <p className="truncate font-semibold">{post.body}</p>
    </div>
  );
};

export default PostCard;
