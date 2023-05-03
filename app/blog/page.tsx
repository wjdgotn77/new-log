import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
}

function PostCard(post: Post) {
  // const Content = getMDXComponent(post.body.code);

  return (
    <div>
      <Link href={post.url} className="pr-[10px]">
        {post.title}
      </Link>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
