"use client";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Navigation />
      <Hero />
      <ClientLogos />
    </div>
  );
}
