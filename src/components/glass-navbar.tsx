"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Case Studies", href: "#case" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
];

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const handleScroll = useCallback(
    (latest: number) => {
      const previous = scrollY.getPrevious() ?? 0;
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    },
    [scrollY]
  );

  useMotionValueEvent(scrollY, "change", handleScroll);

  if (pathname === "/newsletter" || pathname === "/book-a-meeting") {
    return (
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="py-4 lg:py-8 sticky w-full top-0 z-50 "
      >
        <div className="container max-w-6xl mx-auto">
          <div className="   bg-foreground/80 backdrop-blur">
            <figure className="grid grid-cols-2 lg:grid-cols-3  py-2 lg:px-2 px-4  items-center ">
              <div>
                <Link href={"/#home"}>
                  <Image
                    src={"/Quebits_Full_Logo_Black.png"}
                    alt="quebits-log"
                    width={150}
                    height={80}
                    className="hidden md:flex"
                  />
                  <Image
                    src={"/Quebits_Full_Logo_Black.png"}
                    alt="quebits-log"
                    width={100}
                    height={60}
                    className="md:hidden flex"
                  />
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </motion.header>
    );
  }

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="py-4 lg:py-8 sticky w-full top-0 z-50 "
      >
        <div className="container max-w-6xl mx-auto">
          <div className="   bg-foreground/80 backdrop-blur">
            <figure className="grid grid-cols-2 lg:grid-cols-3  py-2 lg:px-2 px-4  items-center ">
              <div>
                <Link href={"/#home"}>
                  <Image
                    src={"/Quebits_Full_Logo_Black.png"}
                    alt="quebits-log"
                    width={150}
                    height={80}
                  />
                </Link>
              </div>
              <div className="hidden lg:flex justify-center items-center ">
                <nav className="flex gap-6 font-medium ">
                  {navLinks.map((each) => (
                    <a
                      href={each.href}
                      key={each.href}
                      className="hover:font-bold transition-all"
                    >
                      {each.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden"
                >
                  {!isOpen ? (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="text-black" size={30} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="text-black" size={30} />
                    </motion.div>
                  )}
                </button>
                <Button
                  variant="orangemain"
                  className="hidden lg:inline-flex items-center"
                >
                  Book a call
                </Button>
              </div>
            </figure>

            <AnimatePresence>
              {isOpen && (
                <motion.figure
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden lg:hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                    <Link href={"/book-a-meeting"}>
                      <Button className="w-3/4" variant="orangemain">
                        Book a call
                      </Button>
                    </Link>
                  </div>
                </motion.figure>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
      <section id="home" className="pb-[50px] md:pb-[70px]"></section>
    </>
  );
}
