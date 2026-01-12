import GlassNavbar from "@/components/glass-navbar";
import Footer from "@/components/marketing/footer";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Navbar /> */}
      <GlassNavbar />
      <main className="mx-auto w-full z-40 relative">{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
