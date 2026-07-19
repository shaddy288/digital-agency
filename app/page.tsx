"use client";
import Image from "next/image";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ClientLogos } from "./components/ClientLogos";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { ManagingPartner } from "./components/ManagingPartner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Navigation />
      <Hero />
      <ClientLogos />
      <About />
      <ManagingPartner />
      <Services />
      {/* <Projects /> */}
      <WhyChooseUs />
      <Process />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CTABanner />
      <Footer />
    </div>
  );
}
