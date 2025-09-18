import { defineType, defineField } from "sanity";

export const projects = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "typeOfProject",
      title: "Type of Project",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Fullstack", value: "fullstack" },
          { title: "UI/UX", value: "uiux" },
        ],
      },
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
    }),
    defineField({
      name: "sourceCodeUrl",
      title: "Source Code URL",
      type: "url",
    }),
    defineField({
      name: "liveDemoUrl",
      title: "Live Demo URL",
      type: "url",
    }),
  ],
});
