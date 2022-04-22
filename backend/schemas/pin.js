const pinSchema = {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "about", title: "About", type: "string" },
    { name: "destination", title: "Destination", type: "string" },
    { name: "category", title: "Category", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "string",
      option: { hotspot: true }, //image can be cropped by user
    },
    { name: "userId", title: "UserID", type: "string" },
    { name: "postedBy", title: "PostedBy", type: "postedBy" },
    { name: "save", title: "Save", type: "array", of: [{ type: "save" }] },
    //"of" to define the schema that it belongs
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comments" }],
    },
  ],
};

export default pinSchema;
