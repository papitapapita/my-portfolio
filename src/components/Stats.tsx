"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experince",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologis Mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

export function Stats() {
  return (
    <section className="container mx-auto pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15
                      ? "max-w-[100px]"
                      : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
