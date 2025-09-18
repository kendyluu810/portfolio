import { groq } from "next-sanity";
import { client } from "./sanity.client";

// About
export async function getAboutInfo() {
  return client.fetch(
    groq`*[_type == "about"][0]{
      name,
      nickname,
      location,
      shortIntro,
      intro,
      "imageUrl": image.asset->url
    }`
  );
}

// Skills
export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"]{
      title,
      "imageUrl": image.asset->url
    }`
  );
}

// Career
export async function getCareer() {
  return client.fetch(
    groq`*[_type == "career"] | order(startDate desc) {
      company,
      position,
      logoUrl,
      startDate,
      endDate,
      duration,
      type,
      description
    }`
  );
}

// Projects
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    title,
    slug,
    shortDescription,
    "imageUrl": image.asset->url,
    typeOfProject,
    techStack[]->{
      title,
      "logoUrl": image.asset->url
    }
    }`
  );
}

// ProjectDetails
export const projectDetailQuery = groq`
  *[_type == "project" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    shortDescription,
    techStack[]->{
      title,
      "logoUrl": image.asset->url
    },
    sourceCodeUrl,
    liveDemoUrl,
    
    // lấy Project Details liên quan
    "details": *[_type == "projectDetail" && references(^._id)]{
      shortDesc,
      sections[]{
        title,
        content
      },
      gallery[]{
        "url": asset->url,
        alt
      }
    }
  }
`;

// Contact
export async function getContact() {
  return client.fetch(
    groq`*[_type == "contact"][0]{
      email,
      phone,
      socials
    }`
  );
}
