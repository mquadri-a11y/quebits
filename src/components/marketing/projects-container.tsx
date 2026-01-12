"use client";
import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import Container from "../global/container";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib";
import { twMerge } from "tailwind-merge";

export type Post = {
  _id: string;
  _createdAt: string;
  title: string;
  mainImage: string;
  slug: { current: string };
  subtext: string;
};

interface SectionProps {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: ReactNode;
}

interface TaglineProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({
  className,
  id,
  crosses = false,
  crossesOffset = "",
  customPaddings,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
          relative 
          ${
            customPaddings ||
            `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
          } 
          ${className || ""}
        `}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-hue-6 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-hue-6 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-hue-6 ${crossesOffset} pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
        </>
      )}
    </section>
  );
};

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-black gap-2 text-black px-3 py-1 rounded-full uppercase items-center ",
        className
      )}
    >
      <span className="text-black">&#10038;</span>
      <span className="text-sm font-bold">{children}</span>
    </div>
  );
};

export default function Roadmap({ posts }: { posts: Post[] }) {
  const pathname = usePathname();

  return (
    <Section
      className={cn("overflow-hidden ", pathname === "/" ? "mt-24" : "mt-0 ")}
      id="roadmap"
    >
      <div className="container md:pb-10">
        <Container delay={0.2}>
          <div className="flex justify-center">
            <Tag>Case studies</Tag>
          </div>
          <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
              Effortlessly manage and showcase your{" "}
              <span className="font-subheading italic">projects</span> with
              clarity
            </h2>
          </div>
        </Container>

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {posts.map((item: Post) => {
            return (
              <MagicCard
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] 
                `}
                key={item._id}
              >
                <div className="relative p-8 bg-hue-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <div className="flex items-center px-4 py-1 bg-hue-1 rounded text-hue-8">
                        <div className="tagline">{"DONE"}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.mainImage || "/images/dashboard.png"}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 font-medium mb-4">{item.title}</h4>
                    <p className="body-2 text-hue-4">{item.subtext}</p>
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </div>

        {pathname === "/" && (
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Link href={"/projects"}>
              <Button variant={"orangemain"} className="inline-flex">
                Our Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}
