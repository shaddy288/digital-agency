"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ConsultationModal } from "./ConsultationModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ── Consultation Modal ────────────────────────────────────────────── */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#0B0F19]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]"></div>
        </div>

        {/* Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 lg:pt-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                From Idea to Scale.
                <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  We Build Digital Businesses That Grow.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                VR2 Digital combines strategy, design, technology, and
                performance marketing to help startups, SMEs, and growing brands
                launch faster, generate leads, and scale sustainably.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer"
                >
                  Let's Build Together
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsModalOpen(true)}
                  className="border-white/20 bg-back hover:bg-white/5 text-white px-8 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Floating Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Laptop Mockup */}
                {/* Laptop Mockup */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10"
                >
                  <div className="relative bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl p-1 rounded-2xl aspect-video">
                    <Image
                      src="/images/hero.png"
                      alt="Laptop mockup"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </motion.div>

                {/* Phone Mockup (ab landscape hoga) */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 right-0 w-2/5 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10"
                >
                  <div className="relative bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-xl p-1 rounded-3xl aspect-video">
                    <Image
                      src="/images/herosecond.png"
                      alt="Second Image"
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </motion.div>

                {/* Floating Element */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/4 -right-12 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
