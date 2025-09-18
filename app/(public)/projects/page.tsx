import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/sanity.queries";
import { Project } from "@/type";

export default async function ProjectPage() {
  const projects: Project[] = await getProjects();
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Project Section */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFE]">
          Project
        </h1>
        <p className="mt-2 text-lg font-medium text-[#94A1B2]">
          A showcase of project, I've built
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

