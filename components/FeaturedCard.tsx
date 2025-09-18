"use client";
import { GalleryVerticalEnd, LayoutPanelLeftIcon, User2 } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import TechBadge from "./TechBadge";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { projects } from "@/lib/raw-data";
import { getAboutInfo } from "@/lib/sanity.queries";
import { About, Project } from "@/type";

interface FeaturedCardProps {
  about: About;
  projects: Project[];
}

export default async function FeaturedCard({
  about,
  projects,
}: FeaturedCardProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const plugin2 = React.useRef(
    Autoplay({ delay: 2100, stopOnInteraction: false })
  );

  return (
    <>
      {/* Main Project Card */}
      <div className="bg-[#16161A] p-4 rounded-lg border border-gray-800/50 flex flex-col md:flex-row gap-1 h-full">
        <div className="flex-shrink-0">
          <div className="bg-gray-700/50 p-3 rounded-lg w-fit">
            <GalleryVerticalEnd className="w-6 h-6 text-[#7F5AF0]" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-[#FFFFFE]">
            Projects Showcase
          </h3>
          <p className="mt-2 text-sm text-[#94A1B2]">
            A selection of real apps built to solve real problems.
          </p>
        </div>
        <div className="overflow-y-auto max-h-[300px] space-y-4 md:w-1/2 flex-grow">
          {projects.slice(0, 3).map(
            (
              item,
              index // Lấy 3 project đầu tiên
            ) => (
              <div key={index}>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={120}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* About Me Card */}
      <div className="bg-[#16161A] p-6 rounded-lg border border-gray-800/50 flex flex-col items-center text-center h-full">
        <div className="bg-gray-700/50 p-3 rounded-lg w-fit">
          <User2 className="w-6 h-6 text-[#7F5AF0]" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#FFFFFE]">About me</h3>
        <p className="mt-1 text-sm text-[#94A1B2]">Who I am and what I do</p>
        {about?.imageUrl && (
          <Image
            src={about.imageUrl}
            alt="Profile"
            width={150}
            height={240}
            priority
            className="rounded-lg object-cover mt-4"
          />
        )}
      </div>

      {/* Skills & Tools Card */}
      <div className="bg-[#16161A] p-6 rounded-lg border border-gray-800/50 h-full">
        <div className="bg-gray-700/50 p-3 rounded-lg w-fit">
          <LayoutPanelLeftIcon className="w-6 h-6 text-[#7F5AF0]" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#FFFFFE]">
          Skills & Tools
        </h3>
        <p className="mt-1 text-sm text-[#94A1B2]">
          Covering web and UI/UX technologies.
        </p>
        <div className="mt-4 space-y-3">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <TechBadge name="ReactJS" icon="/reactjs.png" />
              </CarouselItem>
              <CarouselItem>
                <TechBadge name="NextJS" icon="/nextjs.png" />
              </CarouselItem>
              <CarouselItem>
                <TechBadge name="JavaScript" icon="/js.png" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            plugins={[plugin2.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <TechBadge name="MongoDB" icon="/mongodb.png" />
              </CarouselItem>
              <CarouselItem>
                <TechBadge name="Sanity" icon="/Sanity.svg" />
              </CarouselItem>
              <CarouselItem>
                <TechBadge name="Tailwind CSS" icon="/tailwind.png" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
}
