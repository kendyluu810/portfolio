import { defineType, defineField } from "sanity";

export const career = defineType({
  name: "career",
  title: "Career",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", title: "Company" }),
    defineField({ name: "position", type: "string", title: "Position" }),
    defineField({ name: "logoUrl", type: "url", title: "Logo URL" }),
    defineField({ name: "startDate", type: "string", title: "Start Date" }),
    defineField({ name: "endDate", type: "string", title: "End Date" }),
    defineField({ name: "duration", type: "string", title: "Duration" }),
    defineField({
      name: "type",
      type: "string",
      title: "Employment Type",
      options: {
        list: ["Full-time", "Part-time", "Internship", "Contract"],
      },
    }),
    defineField({ name: "description", type: "text", title: "Description" }),
  ],
});
