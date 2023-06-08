import { format, parseISO } from "date-fns";
import { allNotes, type Notes } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allNotes.map((note) => ({ slug: note._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: any }) => {
  const note = allNotes.find((note) => note._raw.flattenedPath === params.slug);
  return { title: note?.title };
};

const NotePage = ({ params }: { params: { slug: string } }) => {
  const note = allNotes.find((note) => note._raw.flattenedPath === params.slug);

  if (note === undefined) return null;
  const Content = getMDXComponent(note.body.code);

  return (
    note && (
      <article className="max-w-xl py-8 mx-auto">
        <div className="text-left">
          <time
            dateTime={note.date}
            className="px-2 py-1 text-sm text-white bg-gray-400 rounded-md"
          >
            {format(parseISO(note.date), "LLLL d, yyyy")}
          </time>
          <h1 className="py-4 text-lg text-gray-600">{note?.title}</h1>
          <Content />
        </div>
      </article>
    )
  );
};

export default NotePage;
