import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Notes = defineDocumentType(() => ({
  name: "Notes",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the notes",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the notes",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (notes) => `/notes/${notes._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "notes",
  documentTypes: [Notes],
});
