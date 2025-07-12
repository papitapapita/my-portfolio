import { Photo } from "@/components/Photo";
import { Socials } from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-8 ">
          {/* Text */}
          <div className="text-center xl:text-left mb-10 order-2 xl:order-none">
            <span className="capitalize text-2xl">
              software developer
            </span>
            <h1 className="flex flex-col text-center xl:text-left text-7xl h1 my-5">
              <span>Hello I&apos;m </span>
              <span className="text-accent">Jonathan Olivos</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 place-self-center xl:place-self-start">
              I excel at crafting elegant digital experiences and I am
              proficient in various software technologies.
            </p>
            <div className="flex gap-10 items-center flex-col xl:flex-row">
              <Button variant="outline" size="lg">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent 
                hover:bg-accent hover:text-primary hover:transition-all duration-200"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </main>
  );
}
