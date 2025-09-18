import { Career } from "@/type";
import Image from "next/image";

export default async function CareerCard({ job }: { job: Career }) {
  return (
    <div className="bg-[#16161A] p-6 rounded-lg border border-gray-800/50 flex items-center gap-6">
      <div className="flex-shrink-0">
        <Image
          src={job.logoUrl}
          alt={`${job.company} logo`}
          width={64}
          height={64}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-[#FFFFFE]">{job.position}</h3>
        <p className="text-sm text-[#94A1B2]">{job.company}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-[#94A1B2]">
          <span>
            {job.startDate} - {job.endDate}
          </span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>{job.duration}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>{job.type}</span>
        </div>
      </div>
    </div>
  );
}
