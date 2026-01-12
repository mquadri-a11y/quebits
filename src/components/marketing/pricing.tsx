"use client";

import { PLANS } from "@/constants";
import { PLAN } from "@/constants/plans";
import { cn } from "@/lib";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type Plan = "monthly" | "annually";

const Pricing = () => {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="bg-black">
      <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto ">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <Container>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl text-white md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                Find the right plan that suits{" "}
                <br className="hidden lg:block" />{" "}
                <span className="font-subheading italic">your needs</span>
              </h2>
              <p className="text-base md:text-lg text-center text-white mt-6">
                Transform your marketing with AI-powered automation. Create
                campaigns faster, generate better content, and make smarter
                decisions in minutes.
              </p>
            </div>
          </Container>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-3 pt-8 lg:pt-12 gap-4 lg:gap-6  mx-auto">
          {PLANS.map((plan, idx) => (
            <Container key={idx} delay={0.1 * idx + 0.2}>
              <Plan key={plan.id} plan={plan} billPlan={billPlan} />
            </Container>
          ))}
        </div>
      </div>
    </div>
  );
};

const Plan = ({ plan, billPlan }: { plan: PLAN; billPlan: Plan }) => {
  return (
    <div
      className={cn(
        "flex flex-col relative rounded-2xl lg:rounded-3xl text-white transition-all bg-background/ items-start w-full border border-gray-500 overflow-hidden",
        plan.title === "Growth" && "border-white"
      )}
    >
      {plan.title === "Growth" && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-gray-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
      )}

      <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
        <h3 className="mt-3 text-3xl font-medium md:text-5xl">{plan.title}</h3>
        <p className="text-sm md:text-base text-white/85 mt-2">{plan.desc}</p>
      </div>

      <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2">
        <span className="text-base text-left mb-2">Includes:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center">
              <CheckIcon className="size-5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
        <Button
          size="lg"
          variant={plan.title === "Growth" ? "orangemain" : "link"}
          className="w-full mb-6"
        >
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
