import Link from "next/link";
import SearchBar from "@/components/SearchBar";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="flex flex-col items-center gap-4">
      Blog Page
      <SearchBar />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}

function PostCard(post: Post) {
  return (
    <div className="flex items-center">
      <Link href={post.url} className="pr-[10px]">
        {post.title}
      </Link>
      <time dateTime={post.date} className="text-sm text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
