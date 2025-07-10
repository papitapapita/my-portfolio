import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:px-8">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="capitalize text-2xl">
              software developer
            </span>
            <h1 className="flex flex-col text-center xl:text-left text-7xl h1">
              <span>Hello I&apos;m </span>
              <span className="text-accent">Jonathan Olivos</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 place-self-center xl:place-self-start">
              I excel at crafting elegant digital experiences and I am
              proficient in various software technologies
            </p>
            <Button variant="outline" size="lg">
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
          </div>
          <div>Socials</div>
          <div>Photo</div>
        </div>
      </div>
    </main>
  );
}
