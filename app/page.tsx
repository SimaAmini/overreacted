import Link from "next/link";
import { Post } from "./models/post";
import PostCard from "./components/post-card";

// services
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

const HomePage = async () => {
  const posts: Post[] = await getData();

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
