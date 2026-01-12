"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Whatwedo = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">
        {/* Web Applications Card */}
        <Container
          delay={0.1 + 1 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6  text-black mr-3" />
                <h3 className="text-xl font-semibold text-black">
                  Web Applications
                </h3>
              </div>
              <p className=" text-black/80 mb-8">
                Build scalable web applications with modern frameworks and
                cutting-edge technologies
              </p>

              {/* Mockup */}
              <div className="bg-white rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Badge className="bg-orange-600 text-black/80 text-xs">
                    LIVE
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-gray-800">
                      Dashboard Analytics
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Real-time data visualization
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>

        {/* Mobile Apps Card */}
        <Container
          delay={0.1 + 2 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          {" "}
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <Palette className="h-6 w-6 text-black mr-3" />
                <h3 className="text-xl font-semibold text-black">
                  Mobile Applications
                </h3>
              </div>
              <p className="text-black/80 mb-8">
                Create intuitive mobile experiences that engage users and drive
                conversions
              </p>

              {/* Mobile Mockup */}
              <div className="bg-white rounded-2xl p-4 border border-gray-600 max-w-[200px] mx-auto">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-black/80" />
                    </div>
                    <div className="text-xs text-gray-400">12:34</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-black/80">
                      User Engagement
                    </div>
                    <div className="text-xs text-gray-400">Today, 15:30</div>
                    <div className="flex space-x-1 mt-3">
                      {[...Array(7)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-4 bg-purple-500 rounded-sm"
                          initial={{ height: 8 }}
                          whileInView={{ height: Math.random() * 24 + 8 }}
                          transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>

        {/* E-commerce Solutions Card */}
        <Container
          delay={0.1 + 3 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            {" "}
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <Rocket className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-black/80">
                  E-commerce Solutions
                </h3>
              </div>
              <p className="text-black/80 mb-8">
                Build powerful online stores that convert visitors into
                customers and drive sales
              </p>

              {/* E-commerce Mockup */}
              <div className="bg-white rounded-lg p-4 border border-gray-600">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-black/80" />
                      </div>
                      <span className="text-sm text-black/80">
                        Order Processing
                      </span>
                    </div>
                    <Badge className="bg-green-600 text-xs">ACTIVE</Badge>
                  </div>

                  <div className="space-y-2">
                    {[
                      "Payment Gateway",
                      "Inventory Sync",
                      "Order Fulfillment",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        className="flex items-center space-x-3 text-xs"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-black/80">{item}</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-1">
                          <div className="bg-green-500 h-1 rounded-full w-full"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>

        {/* AI-Enabled Solutions Card */}
        <Container
          delay={0.1 + 4 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            {" "}
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-black/80 text-xs font-bold">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-black/80">
                  AI-Enabled Solutions
                </h3>
              </div>
              <p className="text-black/80 mb-8">
                Integrate cutting-edge AI and machine learning capabilities to
                automate processes and enhance user experiences
              </p>

              {/* AI Mockup */}
              <div className="bg-white rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-black/80">
                      Neural Network
                    </span>
                  </div>
                  <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-xs">
                    PROCESSING
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black/80">
                      Natural Language Processing
                    </span>
                    <span className="text-pink-400">94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-black/80">Computer Vision</span>
                    <span className="text-pink-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "87%" }}
                      transition={{ duration: 2, delay: 0.7 }}
                    />
                  </div>

                  <div className="mt-4 p-2 bg-white rounded border border-pink-500/30">
                    <div className="text-xs text-pink-400 mb-1">
                      AI Response:
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="text-xs text-black/80"
                    >
                      "Analysis complete. Confidence: 94%"
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>

        {/* API Integrations Card */}
        <Container
          delay={0.1 + 5 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            {" "}
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-cyan-500 rounded mr-3 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
                </div>
                <h3 className="text-xl font-semibold text-black/80">
                  API Integrations
                </h3>
              </div>
              <p className="text-black/80 mb-8">
                Seamlessly connect your applications with third-party services
                and create robust API ecosystems
              </p>

              {/* API Mockup */}
              <div className="bg-white rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-black/80">API Dashboard</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: "Payment Gateway",
                      status: "Connected",
                      color: "green",
                    },
                    { name: "Email Service", status: "Active", color: "green" },
                    {
                      name: "Analytics API",
                      status: "Syncing",
                      color: "yellow",
                    },
                    {
                      name: "Social Media",
                      status: "Connected",
                      color: "green",
                    },
                  ].map((api, index) => (
                    <motion.div
                      key={api.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      className="flex items-center justify-between p-2 bg-white rounded border border-gray-600"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            api.color === "green"
                              ? "bg-green-500"
                              : "bg-yellow-500"
                          }`}
                        ></div>
                        <span className="text-xs text-black/80">
                          {api.name}
                        </span>
                      </div>
                      <Badge
                        className={`text-xs ${
                          api.color === "green"
                            ? "bg-green-600"
                            : "bg-yellow-600"
                        }`}
                      >
                        {api.status}
                      </Badge>
                    </motion.div>
                  ))}

                  <div className="mt-3 text-xs text-cyan-400 text-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      4/4 Services Online • 99.9% Uptime
                    </motion.span>
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>

        {/* Team Augmentation Card */}
        <Container
          delay={0.1 + 6 * 0.1}
          className={cn(
            "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors"
          )}
        >
          <MagicCard
            gradientFrom="#f8ab38"
            gradientTo="#f27916"
            className="p-4 lg:p-6 lg:rounded-3xl"
            gradientColor="rgba(59,130,246,0.1)"
          >
            {" "}
            <CardContent className="p-1">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-indigo-400 mr-3" />
                <h3 className="text-xl font-semibold text-black/80">
                  Team Augmentation
                </h3>
              </div>
              <p className="text-black/80 mb-8">
                Scale your development team with our expert developers and
                specialists on-demand
              </p>

              {/* Team Mockup */}
              <div className="bg-white rounded-lg p-4 border border-gray-600">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-black/80">Team Overview</span>
                  <Badge className="bg-indigo-600 text-white text-xs">
                    12 ACTIVE
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                        className="w-8 h-8 bg-gradient-to-br  text-white from-indigo-500 to-purple-600 rounded-full flex items-center justify-center"
                      >
                        <span className="text-xs  text-white 0 font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-2 mt-4">
                    {[
                      {
                        role: "Senior React Developer",
                        status: "Available",
                        hours: "40h/week",
                      },
                      {
                        role: "DevOps Engineer",
                        status: "Assigned",
                        hours: "30h/week",
                      },
                      {
                        role: "UI/UX Designer",
                        status: "Available",
                        hours: "20h/week",
                      },
                    ].map((member, index) => (
                      <motion.div
                        key={member.role}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                        className="flex items-center justify-between text-xs p-2 bg-white rounded"
                      >
                        <div>
                          <div className="text-black/80 font-medium">
                            {member.role}
                          </div>
                          <div className="text-gray-500">{member.hours}</div>
                        </div>
                        <Badge
                          className={`text-xs  text-white ${
                            member.status === "Available"
                              ? "bg-green-600"
                              : "bg-blue-600"
                          }`}
                        >
                          {member.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
        </Container>
      </div>
    </div>
  );
};

export default Whatwedo;
