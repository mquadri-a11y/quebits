import Wrapper from "@/components/global/wrapper";
import Roadmap, { Post } from "@/components/marketing/projects-container";
import React, { HTMLAttributes } from "react";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
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

const query = groq`
  *[_type=="post"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`;

const fetchPosts = async () => {
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

export const revalidate = 0;

const ProjectPage = async () => {
  const posts: Post[] = await fetchPosts();

  return (
    <>
      <Wrapper>
        <Roadmap posts={posts} />
      </Wrapper>
      <VoiceFlowWidget />
    </>
  );
};

export default ProjectPage;
