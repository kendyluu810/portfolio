import Menu from "@/components/Menu";
import { Separator } from "@/components/ui/separator";
import { aboutInfor } from "@/lib/raw-data";
import { getAboutInfo } from "@/lib/sanity.queries";
import Image from "next/image";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const about = await getAboutInfo();
  return (
    <div className="flex h-screen overflow-hidden bg-[#242629] text-[#FFFFFE]">
      {/* Sidebar with responsive width */}
      <aside className="lg:w-72 w-24 bg-[#16161A] flex flex-col items-center py-8 border-r border-gray-800/50 shrink-0 transition-all duration-300">
        <div className="flex flex-col items-center space-y-2 px-4">
          <div className="relative">
            {about.imageUrl && (
              <Image
                src={about.imageUrl}
                alt={about.name}
                width={128}
                height={128}
                priority
                className="rounded-full object-cover"
              />
            )}
            <span className="absolute bottom-2 right-2 block h-5 w-5 rounded-full bg-green-400 border-2 border-[#16161A]"></span>
          </div>
          {/* User info hidden on smaller screens */}
          <h1 className="mt-4 text-xl font-semibold hidden lg:block">
            {aboutInfor.name}
          </h1>
          <p className="text-sm text-[#94A1B2] hidden lg:block">
            @{aboutInfor.nickname}
          </p>
        </div>
        
        <Separator className="my-6 bg-gray-700" />

        <div className="w-full px-4 lg:px-6">
          <Menu />
        </div>

        <Separator className="my-6 bg-gray-700" />

        {/* Copyright hidden on smaller screens */}
        <div className="mt-auto pt-6 text-xs text-[#94A1B2] hidden lg:block">
          <span>@COPYRIGHT 2025</span>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">
        {children}
      </main>
    </div>
  );
}
