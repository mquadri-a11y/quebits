import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import { Badge } from "../ui/badge";
import Whatwedo from "./whatwedo";
import Wrapper from "../global/wrapper";

const Features = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 bg-black">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl text-white mx-auto">
            <Badge className="mb-4 text-white  border-white">Our Work</Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
              Digital experiences
              <br /> made{" "}
              <span className="font-subheading italic">exceptional</span>
            </h2>
            <p className="text-base md:text-lg text-center text-white  mt-6">
              Transform your business with cutting-edge design and development.
              We create digital products that users love, businesses need, and
              markets demand.
            </p>
          </div>
        </Container>

        <Whatwedo />
      </Wrapper>
    </div>
  );
};

export default Features;
