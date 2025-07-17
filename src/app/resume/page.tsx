"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam consectetur veritatis nisi earum illo, sapiente et, voluptate a, voluptatibus ducimus laboriosam! Cum asperiores voluptatibus, numquam nihil dolorem suscipit. Atque.",
  info: [
    { fieldName: "Name", fieldValue: "Jonathan Olivos" },
    { fieldName: "Phone", fieldValue: "(+57) 320 923 7075" },
    { fieldName: "education", fieldValue: "12+ Years" },
    { fieldName: "Nationality", fieldValue: "Colombian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
    {
      fieldName: "Email",
      fieldValue: "ramirezjonathanprom2018@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusantium quod eum? Quis, quos? Error nam explicabo animi laboriosam. Fugit, eum. Accusamus quas ex culpa molestiae delectus quasi doloribus labore?",
  items: [
    {
      company: "Company",
      position: "Position",
      duration: "2022 - Present",
    },
    {
      company: "Company",
      position: "Position",
      duration: "2022 - Present",
    },
    {
      company: "Company",
      position: "Position",
      duration: "2022 - Present",
    },
    {
      company: "Company",
      position: "Position",
      duration: "2022 - Present",
    },
    {
      company: "Company",
      position: "Position",
      duration: "2022 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusantium quod eum? Quis, quos? Error nam explicabo animi laboriosam. Fugit, eum. Accusamus quas ex culpa molestiae delectus quasi doloribus labore?",
  items: [
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
    {
      institution: "Platform",
      degree: "Position",
      duration: "2022 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusantium quod eum? Quis, quos? Error nam explicabo animi laboriosam. Fugit, eum. Accusamus quas ex culpa molestiae delectus quasi doloribus labore?",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "js",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNodedotjs />,
      name: "node.js",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 xl:py-0 min-h-[80vh]"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#121c4d] h-[184px] py-6 px-10 rounded flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#121c4d] h-[184px] py-6 px-10 rounded flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-7">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.items.map((skill, index) => (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#121c4d] rounded flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-accent text-primary font-extrabold rounded">
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center flex-col md:flex-row xl:justify-start gap-4 "
                    >
                      <span className="text-white/60">
                        {item.fieldName}
                      </span>
                      <span className="md:text-xl">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
