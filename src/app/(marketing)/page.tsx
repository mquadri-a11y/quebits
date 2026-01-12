import BrandsComponent from "@/components/brands";
import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import BlogSection from "@/components/marketing/blogs";
import Companies from "@/components/marketing/companies";
import ContactForm from "@/components/marketing/contact";
import CTA from "@/components/marketing/cta";
import Faqs from "@/components/marketing/faqs";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import Pricing from "@/components/marketing/pricing";
import Roadmap, { Post } from "@/components/marketing/projects-container";
import NewsletterSection from "@/components/marketing/subscription";
import TestimonialsSection from "@/components/marketing/testimonial-section";
import VoiceFlowWidget from "@/components/marketing/voicecmd";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

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

const HomePage = async () => {
  const posts: Post[] = await fetchPosts();

  const filterPosts: Post[] = posts.filter((_, i) => i < 6);
  return (
    <>
      <Wrapper className="py-10 relative">
        <Hero />
      </Wrapper>
      <Wrapper className="">
        <BrandsComponent />
      </Wrapper>
      <Features />
      <Wrapper className="">
        <Roadmap posts={filterPosts} />
      </Wrapper>
      <Wrapper className="">
        <Analysis />
      </Wrapper>
      <Pricing />
      <Wrapper className="">
        <TestimonialsSection />
      </Wrapper>
      <Wrapper className="">
        <CTA />
      </Wrapper>
      {/* <Wrapper className=""> */}
      <BlogSection />
      {/* </Wrapper> */}
      <Wrapper className="">
        <Faqs />
      </Wrapper>
      <VoiceFlowWidget />
    </>
  );
};

export default HomePage;
