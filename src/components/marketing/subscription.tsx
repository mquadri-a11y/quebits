"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { HTMLAttributes, useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

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
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("You've been subscribed to our newsletter.");

        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-10  text-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Header with animation */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-black font-medium !leading-snug mt-6">
              Cut bottlenecks <br className="hidden lg:block" />{" "}
              <span className="font-subheading italic">with AI</span>
            </h2>

            <p className="text-black/80 text-lg max-w-2xl mx-auto">
              Practical AI strategies to remove friction and move faster.
              <br />
            </p>
          </div>

          {/* Form with staggered animation */}
          <form onSubmit={handleSubmit}>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="max-w-xs mx-auto ">
                <div className="flex flex-col sm:flex-row gap-3 p-1 bg-white/5 backdrop-blur-sm border rounded-2xl border-white/50 transition-all duration-300 hover:bg-white/10">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border border-black text-black outline-none placeholder:text-black/60 focus:ring-0 focus:outline-none text-base"
                  />
                </div>
                <Button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={isLoading}
                  type="submit"
                  className="bg-black text-white w-full mt-4 hover:bg-black/90 px-6 py-6 font-medium transition-all duration-300 group whitespace-nowrap"
                >
                  Send me the strategies
                  <ArrowRight
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </Button>
              </div>
            </div>
          </form>

          {/* Stats with delayed animation */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="flex text-center w-full items-center flex-col md:flex-row justify-center gap-4 md:gap-8 text-black/50 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full hidden md:flex animate-pulse"></div>
                <span>One email a week</span>
              </div>
              <span>Practical</span>
              <span>Hype-free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
