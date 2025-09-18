import { Project } from "@/type";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug.current}`} passHref>
      <div className="bg-[#16161A] rounded-lg border border-gray-800/50 overflow-hidden group transition-all duration-300 hover:border-[#7F5AF0]">
        <div className="w-full h-48 bg-gray-800 group-hover:scale-105 transition-transform duration-300">
          <Image
            src={project.imageUrl}
            alt={`${project.title} project thumbnail`}
            width={400}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#FFFFFE]">{project.title}</h3>
          <p className="mt-2 text-base uppercase text-[#FFFFFE]">
            {project.typeOfProject?.join(", ")}
          </p>
          <p className="mt-2 text-sm text-[#94A1B2]">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-4">
            {project.techStack?.map((tech, index) => (
              <div key={index} className="relative w-5 h-5">
                <Image
                  src={tech.logoUrl}
                  alt={`${tech.title} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
