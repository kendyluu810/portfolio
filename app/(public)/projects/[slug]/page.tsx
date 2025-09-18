import { client } from "@/lib/sanity.client";
import { projectDetailQuery } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Github, ExternalLink } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { ProjectDetail } from "@/type";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project: ProjectDetail = await client.fetch(projectDetailQuery, {
    slug,
  });

  if (!project) {
    notFound();
  }

  const details = project.details?.[0];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[#94A1B2] hover:text-[#FFFFFE] transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Projects
      </Link>

      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFE]">
          {project.title}
        </h1>
        <p className="mt-2 text-lg font-medium text-[#94A1B2]">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Tech Stack:</span>
            <div className="flex items-center gap-3">
              {project.techStack?.map((tech, index) => (
                <div
                  key={index}
                  className="relative w-6 h-6"
                  title={tech.title}
                >
                  <Image
                    src={tech.logoUrl}
                    alt={tech.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#94A1B2] hover:text-[#7F5AF0] transition-colors"
              >
                <Github className="w-5 h-5" /> Source Code
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#94A1B2] hover:text-[#7F5AF0] transition-colors"
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {details?.gallery && details.gallery.length > 0 && (
          <div className="mt-8 space-y-4">
            {details.gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden space-y-8 border border-gray-800/50"
              >
                <Image
                  src={image.url}
                  alt={image.alt || "Gallery image"}
                  width={image.dimensions.width}
                  height={image.dimensions.height}
                  className="w-full h-auto" // Để ảnh tự điều chỉnh chiều cao
                />
              </div>
            ))}
          </div>
        )}
        {details?.sections?.map((section, index) => (
          <div key={index} className="mt-8">
            <h2 className="text-2xl font-bold text-[#FFFFFE]">
              {section.title}
            </h2>
            <div className="mt-4 text-base text-[#94A1B2] leading-relaxed prose prose-invert">
              <PortableText value={section.content} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
