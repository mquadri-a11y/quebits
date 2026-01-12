import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[50vh] pb-8">
      {/* Mobile blur background - fixed positioning */}
      <div className="absolute flex lg:hidden w-40 h-40 rounded-full bg-orange-500 blur-[10rem] top-0 left-1/2 transform -translate-x-1/2 -z-10" />

      <div className="flex flex-col items-center justify-center gap-y-8 relative w-full max-w-7xl mx-auto px-4">
        {/* Orbiting circles background - desktop only */}
        <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
          <OrbitingCircles speed={0.5} radius={300}>
            <Icons.circle1 className="w-4 h-4 text-background/70" />
            <Icons.circle2 className="w-1 h-1 text-background/80" />
          </OrbitingCircles>
          <OrbitingCircles speed={0.25} radius={400}>
            <Icons.circle2 className="w-1 h-1 text-background/50" />
            <Icons.circle1 className="w-4 h-4 text-background/60" />
            <Icons.circle2 className="w-1 h-1 text-background/90" />
          </OrbitingCircles>
          <OrbitingCircles speed={0.1} radius={500}>
            <Icons.circle2 className="w-1 h-1 text-background/50" />
            <Icons.circle2 className="w-1 h-1 text-background/90" />
            <Icons.circle1 className="w-4 h-4 text-background/60" />
            <Icons.circle2 className="w-1 h-1 text-background/90" />
          </OrbitingCircles>
        </Container>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-transparent relative z-10 lg:pt-0 w-full">
          {/* Badge */}
          <Container className="relative block overflow-hidden">
            <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-orange-600 text-[9px] font-medium mr-2 text-white">
                  NEW
                </span>
                AI Tools & Software
              </span>
            </button>
          </Container>

          {/* Main heading */}
          <Container delay={0.15}>
            <div className="max-w-4xl mx-auto ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight ">
                Cut Busywork, Boost Margins.{" "}
                <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  Let AI
                </span>{" "}
                handle the Rest.
              </h1>
            </div>
          </Container>

          {/* Description */}
          <Container delay={0.2}>
            <p className="max-w-xl mx-auto mt-4 text-base lg:text-lg text-center text-muted leading-relaxed">
              We build custom AI systems, agents and internal tools for lean
              teams who want to save time, reduce overhead and grow without
              adding complexity.
            </p>
          </Container>

          {/* CTA buttons */}
          <Container delay={0.25} className="z-20">
            <div className="flex items-center justify-center flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/book-a-meeting"
                className="flex items-center gap-2 group w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="orangemain"
                  className="w-full sm:w-auto"
                >
                  Start with a 15-min Assessment
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 group w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-black w-full sm:w-auto bg-white border border-black"
                >
                  See Real Examples
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
