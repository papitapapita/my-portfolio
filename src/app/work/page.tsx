"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import { WorkSliderBtns } from "@/components/WorkSliderBtns";
import { withBasePath } from "@/lib/basePath";

const projects = [
  {
    num: "01",
    category: "SaaS · Fullstack",
    title: "Mi Red Control",
    description:
      "Network monitoring platform for internet service providers. It checks routers, antennas and links every minute, sends Telegram alerts in Spanish, and shows device status, latency history and a network map.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/mi-red-control.png",
    live: "https://miredcontrol.com",
    // Private repository: only the public product site is linked
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Road Trip Planner",
    description:
      "Motorcycle trip planner with an interactive map: multi-day routes, travel times, fuel, lunch and hotel stops, tolls and trip costs.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "Leaflet" },
    ],
    image: "/assets/work/road-trip-planner.png",
    live: "",
    github: "https://github.com/papitapapita/road-trip-planner",
  },
  {
    num: "03",
    category: "Frontend",
    title: "To-Do App",
    description:
      "Task manager to add, complete, search and delete tasks, with a progress counter and data saved in the browser's local storage.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
    ],
    image: "/assets/work/to-do-react.png",
    live: "",
    github: "https://github.com/papitapapita/to-do-react",
  },
];

const linkStyles =
  "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group";

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-[42px] font-bold leading-none text-white">
                  {project.title}
                </h2>
                <p className="text-accent">{project.category}</p>
              </div>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live site`}
                          className={linkStyles}
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="rounded">
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
                {project.github && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className={linkStyles}
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent className="rounded">
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={withBasePath(project.image)}
                        fill
                        className="object-cover object-left-top"
                        alt={`${project.title} screenshot`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
