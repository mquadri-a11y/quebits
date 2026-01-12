import CalendlyPopup from "@/components/calendly-popuo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Book a Meeting | Quebits - Free Software Consultation",
  description:
    "Schedule a free consultation with our software development experts. Discuss your project requirements and get a custom quote for your web or mobile application.",
};
const Bookameetingpage = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full pt-20 flex justify-center  items-center mx-auto flex-col p-4">
        <div className="w-full max-w-5xl mx-auto">
          <div className="space-y-4 animate-in text-center fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-black font-medium !leading-snug mt-6">
              Start with a 15-min
              <br className="hidden lg:block" />{" "}
              <span className="font-subheading ">Assessment</span>
            </h2>

            {/* <p className="text-black/80  text-lg max-w-2xl mx-auto">
              Schedule a time that works for you using our online booking
              system.
            </p> */}
          </div>

          <div className="border-none">
            <div className="">
              <h4 className="text-xl md:text-2xl font-semibold">
                Booking Process
              </h4>
              <div>
                Follow these simple steps to schedule your meeting with us.
                Select a date and time that works for you, and you&apos;ll
                receive a confirmation email with meeting details.
              </div>
            </div>
          </div>
        </div>
        <CalendlyPopup />
      </div>
    </>
  );
};

export default Bookameetingpage;
