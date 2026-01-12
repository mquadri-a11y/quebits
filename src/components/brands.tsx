"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

import Container from "./global/container";

const BrandsComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const row1 = [
    "/datasecure.png",
    "/ScrubHub Logo Transparent.PNG",
    "/The US academy_v001 HYD 2.png",
    "/HSBC Logo.png",
    "/Solutions broker logo.png",
    "/fibreforce.png",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-10 md:py-20 mt-4 md:mt-16 companies overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl lg:text-4xl font-medium">
              Trusted by <span className="font-subheading italic">leading</span>{" "}
              companies
            </h4>
          </div>
        </motion.div>

        {/* Infinite Scrolling Logos */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <Marquee
              direction="right"
              gradient
              autoFill
              speed={30}
              pauseOnHover
              pauseOnClick
            >
              {row1.map((item, index) => (
                <div key={index} className="mr-[89px]">
                  <img src={item} alt="logo" className="brandimg" />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </Container>
    </div>
  );
};

export default BrandsComponent;
