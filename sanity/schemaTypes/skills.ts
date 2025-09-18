import { defineType, defineField } from "sanity";

export const skills = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Skill Title",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Skill Logo",
      options: { hotspot: true },
    }),
  ],
});
