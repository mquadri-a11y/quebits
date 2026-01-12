"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  logo?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Solutions",
    content:
      "Quebits delivered an exceptional software solution that transformed our entire workflow. Their team's expertise in AI and modern development practices helped us achieve results we never thought possible. The collaboration was seamless from start to finish.",
    avatar: "/02.png",
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Head of Digital Innovation",
    company: "The US Academy",
    content:
      "Working with Quebits has been a game-changer for our digital transformation. Their innovative approach and technical excellence delivered beyond our expectations.",
    avatar: "/01.png",
    logo: "/The US academy_v001 HYD 2.png",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "Sun Life",
    content:
      "The team at Quebits understood our vision perfectly and brought it to life with cutting-edge technology. Their attention to detail is remarkable.",
    avatar: "/02.png",
    logo: "/Sun_Life_Logo.png",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder & CEO",
    company: "Data Secure",
    content:
      "Quebits helped us scale from concept to market leader. Their expertise in software consulting and development is unmatched in the industry.",
    avatar: "/03.png",
    logo: "/datasecure.png",
  },
];

export default function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const featuredTestimonial = testimonials.find((t) => t.featured);
  const regularTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <section className="py-16 lg:py-24 ">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}

          <Container>
            <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mb-6">
                Dozens of clients and partners who{" "}
                <span className="font-subheading italic">work with us</span>
              </h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto mb-4">
                We have helped dozens of partners achieve their goals. Are you
                next?
              </p>
            </div>
          </Container>

          {/* Featured Testimonial */}
          {featuredTestimonial && (
            <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <Card className="border-0  bg-white max-w-4xl mx-auto">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Avatar and Info */}
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                      <div className="relative">
                        <img
                          src={featuredTestimonial.avatar || "/placeholder.svg"}
                          alt={featuredTestimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="font-bold text-black text-lg">
                          {featuredTestimonial.name}
                        </h3>
                        <p className="text-black/60 text-sm">
                          {featuredTestimonial.role}
                        </p>
                        <p className="text-black/60 text-sm">
                          {featuredTestimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <blockquote className="text-black/80 text-lg leading-relaxed italic">
                        "{featuredTestimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Regular Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`group cursor-pointer border-0 shadow-md bg-white hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 delay-${
                  (index + 3) * 100
                }`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 space-y-6 h-full flex flex-col">
                  {/* Company Logo */}
                  {testimonial.logo && (
                    <div className="flex justify-center">
                      <img
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={`${testimonial.company} logo`}
                        className="h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  )}

                  {/* Quote */}
                  <div className="flex-1">
                    <div className="relative">
                      <Quote className="w-6 h-6 text-black/20 mb-3" />
                      <blockquote className="text-black/80 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-black text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-black/60 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
        </div>
      </Container>
    </section>
  );
}
