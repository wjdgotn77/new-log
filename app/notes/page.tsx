import Link from "next/link";

import { compareDesc, format, parseISO } from "date-fns";
import { allNotes, type Notes } from "contentlayer/generated";

export default function BlogPage() {
  const notes = allNotes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="flex flex-col">
      <div className="pt-[20px]">
        {notes.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

function PostCard(note: Notes) {
  return (
    <div className="flex items-center">
      <Link href={note.url} className="pr-[10px]">
        {note.title}
      </Link>
      <time dateTime={note.date} className="text-sm text-gray-600">
        {format(parseISO(note.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
