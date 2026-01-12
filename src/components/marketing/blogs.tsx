"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Software Development: AI-Driven Innovation",
    excerpt:
      "Exploring how artificial intelligence is reshaping the way we build and deploy software solutions in 2024.",
    author: "Mashood Quadri",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: "/placeholder.svg?height=240&width=400",
    slug: "future-software-development-ai",
  },
  {
    id: 2,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt:
      "A deep dive into microservices, serverless computing, and the architectural patterns that drive growth.",
    author: "Mashood Quadri",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    category: "Architecture",
    image: "/placeholder.svg?height=240&width=400",
    slug: "scalable-applications-modern-architecture",
  },
  {
    id: 3,
    title: "User Experience Design: Beyond Beautiful Interfaces",
    excerpt:
      "How thoughtful UX design drives business success and creates meaningful user connections.",
    author: "Mashood Quadri",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/placeholder.svg?height=240&width=400",
    slug: "ux-design-beyond-interfaces",
  },
  {
    id: 4,
    title: "Cybersecurity in the Age of Remote Work",
    excerpt:
      "Essential security practices and tools for protecting distributed teams and digital assets.",
    author: "Mashood Quadri",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Security",
    image: "/placeholder.svg?height=240&width=400",
    slug: "cybersecurity-remote-work",
  },
  {
    id: 5,
    title: "Data Analytics: Turning Information into Insights",
    excerpt:
      "Leveraging big data and analytics to make informed business decisions and drive innovation.",
    author: "Mashood Quadri",
    date: "Dec 5, 2024",
    readTime: "9 min read",
    category: "Analytics",
    image: "/placeholder.svg?height=240&width=400",
    slug: "data-analytics-insights",
  },
  {
    id: 6,
    title: "The Rise of Low-Code Development Platforms",
    excerpt:
      "How low-code solutions are democratizing software development and accelerating digital transformation.",
    author: "Mashood Quadri",
    date: "Dec 3, 2024",
    readTime: "4 min read",
    category: "Development",
    image: "/placeholder.svg?height=240&width=400",
    slug: "rise-low-code-platforms",
  },
];

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-white font-medium !leading-snug mt-6">
            Stay updated with the latest
            <br className="hidden lg:block" />{" "}
            <span className="font-subheading italic">blog insights</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Insights, trends, and expert perspectives on technology, design, and
            innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:gap-y-16 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group cursor-pointer border-0 shadow-none bg-transparent transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${
                index < 3
                  ? `delay-${(index + 1) * 100}`
                  : `delay-${((index % 3) + 1) * 100}`
              }`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0 space-y-4">
                {/* Image */}
                <div className="relative overflow-hidden bg-white/5">
                  <img
                    src={"/images/dashboard.png"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center space-x-4 text-white/50 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-white/80 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-white/60 text-sm">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-white text-sm font-medium group-hover:text-white/80 transition-colors duration-300">
                      <span>Read more</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredCard === post.id ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-black hover:text-white px-8 py-3 font-medium transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
