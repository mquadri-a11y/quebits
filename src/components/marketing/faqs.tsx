"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import React, { HTMLAttributes } from "react";

const faqs = [
  {
    question: "What is an MVP and why do I need one?",
    answer:
      "An MVP (Minimum Viable Product) is a simplified version of a product that includes only the core features necessary to solve the problem it's intended for. You need an MVP to quickly test your concept in the market with minimal resources and gather valuable feedback for future iterations.",
  },
  {
    question: "How can I choose the right plan for my business?",
    answer:
      "To choose the right plan, consider your business size, budget, and specific needs. Our plans are designed to cater to different levels of service, and our team can help guide you to the best option based on your current and future goals.",
  },
  {
    question: "How quickly can you set up my service?",
    answer:
      "We strive to set up your service as quickly as possible. Depending on the complexity of your requirements, setup time can range from a few hours to a few days. We’ll provide a more precise estimate once we understand your needs.",
  },
  {
    question: "Do you provide 24/7 customer support?",
    answer:
      "Yes, we offer 24/7 customer support to ensure that you always have assistance when you need it. Our dedicated team is here to help you with any issues or questions that may arise at any time.",
  },
];

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-gray-400 gap-2 text-black px-3 py-1 rounded-full uppercase items-center ",
        className
      )}
    >
      <span className="text-black">&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-24 " id="faqs">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="font-subheading italic">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(faqIndex)}
              className="bg-neutral-900/10 rounded-2xl border border-white/10 p-6 "
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0">{faq.question}</h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus text-black flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-black">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
