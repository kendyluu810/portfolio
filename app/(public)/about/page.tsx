import CareerCard from "@/components/CareerCard";
import { getAboutInfo, getCareer } from "@/lib/sanity.queries";
import { About, Career } from "@/type";
import { Briefcase } from "lucide-react";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
  const about: About = await getAboutInfo();
  const career: Career[] = await getCareer();
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* About Section */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFE]">About</h1>
        <p className="mt-2 text-lg font-medium text-[#94A1B2]">
          A brief introduction to who I am
        </p>
        <div className="mt-6 text-base text-[#94A1B2] leading-relaxed space-y-4 max-w-4xl">
          {about?.intro && <PortableText value={about.intro} />}
        </div>
      </section>

      {/* Career Section */}
      <section>
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-[#7F5AF0]" /> Career
        </h2>
        <div className="mt-6 space-y-6 max-w-4xl">
          {career && career.length > 0 ? (
            career.map((job: Career, index: number) => (
              <CareerCard key={index} job={job} />
            ))
          ) : (
            <p className="text-[#94A1B2] text-base italic">No experiences</p>
          )}
        </div>
      </section>
    </div>
  );
}
