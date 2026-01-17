import Wrapper from "@/components/global/wrapper";
import Roadmap, { Post } from "@/components/marketing/projects-container";
import React, { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import type { Metadata } from "next";
import VoiceFlowWidget from "@/components/marketing/voicecmd";

export const metadata: Metadata = {
  title: "Case Studies - Success Stories & AI Implementation Examples",
  description:
    "Explore real-world AI implementations and success stories. See how we've helped startups and businesses integrate AI, automate processes, and build intelligent applications.",
  keywords: [
    "AI case studies",
    "AI success stories",
    "AI implementation examples",
    "machine learning projects",
    "AI transformation stories",
    "intelligent automation examples",
  ],
  openGraph: {
    title: "AI Case Studies - Success Stories & AI Implementation Examples",
    description:
      "Explore real-world AI implementations and success stories. See how we've helped businesses integrate AI and build intelligent applications.",
    url: "/case-studies",
  },
  twitter: {
    title: "AI Case Studies - Success Stories & AI Implementation Examples",
    description:
      "Real-world AI implementations and success stories from our client projects.",
  },
};

export const revalidate = 0;

const ProjectPage = async () => {

  return (
    <>
      <VoiceFlowWidget />
    </>
  );
};

export default ProjectPage;
