"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptates pariatur beatae. Temporibus, in consectetur voluptate accusantium pariatur culpa expedita explicabo cumque rem obcaecati, nemo blanditiis, ipsam magnam. Minus, ut.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptates pariatur beatae. Temporibus, in consectetur voluptate accusantium pariatur culpa expedita explicabo cumque rem obcaecati, nemo blanditiis, ipsam magnam. Minus, ut.",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptates pariatur beatae. Temporibus, in consectetur voluptate accusantium pariatur culpa expedita explicabo cumque rem obcaecati, nemo blanditiis, ipsam magnam. Minus, ut.",
    href: "",
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptates pariatur beatae. Temporibus, in consectetur voluptate accusantium pariatur culpa expedita explicabo cumque rem obcaecati, nemo blanditiis, ipsam magnam. Minus, ut.",
    href: "",
  },
  {
    num: "05",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptates pariatur beatae. Temporibus, in consectetur voluptate accusantium pariatur culpa expedita explicabo cumque rem obcaecati, nemo blanditiis, ipsam magnam. Minus, ut.",
    href: "",
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
