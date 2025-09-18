import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "nickname", type: "string", title: "Nickname" }),
    defineField({ name: "location", type: "string", title: "Location" }),
    defineField({ name: "shortIntro", type: "text", title: "Short Intro" }),
    defineField({ name: "intro", type: "text", title: "Intro" }),
    defineField({
      name: "image",
      type: "image",
      title: "Profile Image",
      options: { hotspot: true },
    }),
  ],
});
