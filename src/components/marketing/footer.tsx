"use client";

import Link from "next/link";
import Container from "../global/container";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/newsletter" || pathname === "/book-a-meeting") {
    return (
      <footer className="flex flex-col relative items-center justify-center pt-10 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
        <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
          <div className="mt-8 md:flex md:items-center justify-center footer w-full">
            <p className="text-sm text-muted-background text-center mt-8 md:mt-0">
              &copy; {new Date().getFullYear()} Quebits. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    );
  }
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-background/30 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 xl:grid-cols-4 md:grid-cols-3 xl:gap-8 w-full">
        <Container>
          <div className="flex flex-col items-start justify-start md:max-w-[300px]">
            <div className="flex items-center gap-2">
              <Image
                src={"/Quebits_Full_Logo_Black.png"}
                alt="quebits-log"
                width={150}
                height={80}
              />
            </div>
            <p className="text-muted-background mt-4 text-sm md:textbas text-start">
              Leading software consulting firm driving innovation and growth for
              emerging companies seconds.
            </p>
          </div>
        </Container>

        <div className="grid-cols-1 gap-8 grid">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Container delay={0.3} className="h-auto">
              <h3 className="text-base font-medium text-background">
                Quick Links
              </h3>
              <ul className="mt-4 text-sm text-muted-background space-y-4">
                <li className="mt-2">
                  <Link
                    href="#"
                    className="link hover:text-background transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#"
                    className="link hover:text-background transition-all duration-300"
                  >
                    Use cases
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="#"
                    className="link hover:text-background transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </Container>
          </div>
        </div>
        <div>
          <Container delay={0.2} className="h-auto">
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-background">Address</h3>
              <div className="mt-4 text-sm text-muted-background space-y-4">
                <div className="flex flex-col space-y-1">
                  <span className="font-medium text-background">Address:</span>
                  <span>123 Innovation Drive</span>
                  <span>Tech Valley, CA 94025</span>
                  <span>United States</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container delay={0.2} className="h-auto">
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-background">Contact</h3>

              <div className="flex flex-col space-y-1 mt-4">
                <span className="font-medium text-background">Email:</span>
                <Link
                  href="mailto:hello@quebits.com"
                  className="link hover:text-background text-sm transition-all duration-300"
                >
                  hello@quebits.com
                </Link>
              </div>
              <div className="flex flex-col space-y-1 text-sm mt-2">
                <span className="font-medium text-background">Phone:</span>
                <Link
                  href="tel:+1-555-123-4567"
                  className="link hover:text-background text-sm transition-all duration-300"
                >
                  +1 (555) 123-4567
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
        <div className="mt-8 md:flex md:items-center justify-center footer w-full">
          <p className="text-sm text-muted-background mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Quebits. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
