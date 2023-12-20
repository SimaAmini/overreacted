import Link from "next/link";

import { Post } from "./models/post";
import PostCard from "./components/post-card";
import { fetchPosts } from "./services/posts/fetch-posts";
import { formatDate, randomDateBasedOnNumber } from "./utils/date";
import { sortByDate } from "./utils/sort-by-date";

const HomePage = async () => {
  const list: Post[] = await fetchPosts();
  const posts: Post[] = sortByDate(
    list.map((post) => ({
      ...post,
      date: formatDate(randomDateBasedOnNumber(post.id)),
    })),
  );

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
