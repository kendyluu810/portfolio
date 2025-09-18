import { PortableTextBlock, Image as SanityImage } from "sanity";

// Định nghĩa cho About
export interface About {
  name: string;
  location: string;
  shortIntro: string;
  intro: PortableTextBlock[]; // Sửa từ string thành PortableTextBlock[]
  imageUrl: string;
}

// Định nghĩa cho Career
export interface Career {
  company: string;
  position: string;
  logoUrl: string;
  startDate: string;
  endDate: string;
  duration: string;
  type: string;
}

// Định nghĩa cho Skill
export interface Skill {
  title: string;
  imageUrl: string;
}

// Định nghĩa cho Tech Stack
export interface Tech {
  title: string;
  logoUrl: string;
}

// Định nghĩa cho một Project cơ bản (hiển thị ở danh sách)
export interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
  shortDescription: string;
  typeOfProject?: string[];
  techStack: Tech[];
}

// Định nghĩa cho hình ảnh trong Gallery
export interface GalleryImage {
  url: string;
  alt: string;
}

// Định nghĩa cho Section trong chi tiết dự án
export interface ProjectSection {
  title: string;
  content: any[];
}

// Định nghĩa cho Project Detail
export interface ProjectDetail extends Project {
  details: {
    shortDesc: string;
    sections: ProjectSection[];
    gallery: GalleryImage[];
  }[];
  sourceCodeUrl?: string;
  liveDemoUrl?: string;
}

// Định nghĩa cho Contact & Social Links
export interface SocialLink {
  platform: string;
  url: string;
}

export interface Contact {
  _id: string;
  _type: "contact";
  email: string;
  phone: string;
  socials: SocialLink[];
}
