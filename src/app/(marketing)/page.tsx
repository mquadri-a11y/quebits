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


export const revalidate = 0;

const HomePage = async () => {

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
        <Analysis />
      </Wrapper>
      <Pricing />
      <Wrapper className="">
        <TestimonialsSection />
      </Wrapper>
      <Wrapper className="">
        <CTA />
      </Wrapper>
      <Wrapper className="">
        <Faqs />
      </Wrapper>
      <VoiceFlowWidget />
    </>
  );
};

export default HomePage;
