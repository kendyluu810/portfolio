import { type SchemaTypeDefinition } from "sanity";
import { about } from "./about";
import { skills } from "./skills";
import { career } from "./career";
import { projects } from "./projects";
import { contact } from "./contact";
import { projectDetails } from "./projectDetails";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, skills, career, projects, projectDetails, contact],
};
