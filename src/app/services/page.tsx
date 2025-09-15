"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Backend Development",
    description:
      "Design and build scalable, secure, and high-performance server-side applications using Node.js, TypeScript, and Express. I focus on clean architecture, APIs, and database management.",
    href: "/services/backend",
  },
  {
    num: "02",
    title: "Frontend Development",
    description:
      "Create responsive and modern web interfaces with React, Next.js, and TailwindCSS. I ensure usability, performance, and a seamless user experience across devices.",
    href: "/services/frontend",
  },
  {
    num: "03",
    title: "Database Design & Management",
    description:
      "Design, optimize, and manage relational and non-relational databases such as PostgreSQL and MongoDB. I implement efficient schemas, indexing, and secure data handling.",
    href: "/services/database",
  },
  {
    num: "04",
    title: "API Development & Integration",
    description:
      "Build and document RESTful APIs for applications, integrate third-party services, and ensure reliability and scalability for business-critical operations.",
    href: "/services/api",
  },
  {
    num: "05",
    title: "DevOps & Deployment",
    description:
      "Set up CI/CD pipelines, Docker containers, and cloud deployments (AWS, DigitalOcean, Vercel) to ensure smooth delivery, scalability, and uptime for your applications.",
    href: "/services/devops",
  },
  {
    num: "06",
    title: "Custom Software Solutions",
    description:
      "Develop tailored web applications for business needs such as dashboards, inventory management, billing systems, or monitoring tools with a focus on efficiency and growth.",
    href: "/services/custom",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col justify-center py-12 min-h-[80vh]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col  justify-center gap-6 group"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:[--outline-color:#00ff99] transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="flex justify-center items-center w-[70px] h-[70px]  rounded-full bg-white group-hover:bg-accent transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
