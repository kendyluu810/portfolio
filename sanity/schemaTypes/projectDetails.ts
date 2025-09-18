import { defineField, defineType } from "sanity";

export const projectDetails = defineType({
  name: "projectDetail",
  title: "Project Detail",
  type: "document",
  fields: [
    defineField({
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }], // chỉ cần 1 reference duy nhất
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Section Title",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Alternative text for accessibility",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "project.title",
      subtitle: "shortDesc",
      media:"gallery.0"
    },
  },
});
