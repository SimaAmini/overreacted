import Link from "next/link";
import { Post } from "./models/post";
import PostCard from "./components/post-card";
import { fetchPosts } from "./services/posts/fetch-posts";

const HomePage = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      {posts.map((post) => (
        <Link key={post.id} href={`/${post.id}`}>
          <PostCard {...post} />
        </Link>
      ))}
    </>
  );
};
export default HomePage;
