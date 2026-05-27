"use client";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const Hero = () => {
  return (
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">
                Award-Winning Digital Studio
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              Crafting
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              We transform ambitious ideas into stunning digital experiences.
              From branding to AI-powered solutions, we're your creative partner
              for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </button>
              <button
                size="lg"
                variant="outline"
                className="border-white/20 bg-back hover:bg-white/5 text-white px-8 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto lg:mx-0"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </motion.div>
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
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-white/10"
              >
                <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl p-1 rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1587902673915-631e5ba4488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtYWNib29rJTIwbW9ja3VwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3OTI3NTAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Laptop mockup"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-2/5 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-white/10"
              >
                <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-xl p-1 rounded-3xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1697292859784-c319e612ea15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9ja3VwJTIwZGFyayUyMHNjcmVlbnxlbnwxfHx8fDE3NzkyNzUwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Phone mockup"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
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

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
