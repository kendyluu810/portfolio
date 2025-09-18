import FeaturedCard from "@/components/FeaturedCard";
import SkillIcon from "@/components/SkillIcon";
import { Separator } from "@/components/ui/separator";
import { aboutInfor, skillItem } from "@/lib/raw-data";
import { getAboutInfo, getProjects, getSkills } from "@/lib/sanity.queries";
import { About, Project, Skill } from "@/type";
import { Code2, LayoutPanelLeftIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const about: About = await getAboutInfo();
  const skills: Skill[] = await getSkills();
  const projects: Project[] = await getProjects();

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Heading */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFE]">
          Hi, I'm {about.name}
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-medium text-[#94A1B2]">
          Based in {about.location}
        </p>
        <p className="mt-6 text-base text-[#94A1B2] leading-relaxed max-w-3xl">
          {about.shortIntro}
        </p>
      </section>

      <Separator className="bg-gray-700" />

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Code2 className="w-6 h-6 text-[#7F5AF0]" /> Skills
        </h2>
        <p className="mt-2 text-sm text-[#94A1B2]">
          Hover over a skill for current proficiency
        </p>
        <div className="mt-8 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-x-8 gap-y-10">
          {skills.map((skill) => (
            <SkillIcon key={skill.title} title={skill.title}>
              <div className="w-12 h-12 flex items-center justify-center bg-[#16161A] p-1 border border-gray-700/50 rounded-lg">
                <Image
                  src={skill.imageUrl} // Dùng imageUrl từ Sanity
                  alt={skill.title}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            </SkillIcon>
          ))}
        </div>
      </section>
      <Separator className="bg-gray-700" />

      {/* Featured Section */}
      <section>
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <LayoutPanelLeftIcon className="w-6 h-6 text-[#7F5AF0]" /> Featured
          Section
        </h2>
        <p className="mt-2 text-sm text-[#94A1B2]">
          Explore everything I've crafted, contributed, and accomplished.
        </p>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
          <FeaturedCard about={about} projects={projects} />
        </div>
      </section>
    </div>
  );
}
