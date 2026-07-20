import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ConsultationModal } from "./ConsultationModal";

export function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* ── Consultation Modal ────────────────────────────────────────────── */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <section className="pt-10 pb-10 bg-[#0B0F19] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/20 rounded-full blur-[120px]"></div>
        </div>

        {/* Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-600 to-orange-600 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative rounded-[2.5rem] overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 p-12 lg:p-16">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>

                {/* Floating Shapes */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-12 right-12 w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/30 to-pink-500/30 backdrop-blur-sm border border-white/10"
                ></motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-12 left-12 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10"
                ></motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                  >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white">
                      Ready to Transform Your Vision?
                    </span>
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    Let's Build Something
                    <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
                      Meaningful
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
                  >
                    Whether you're launching a new business, redesigning your
                    digital presence, or scaling your growth efforts, we're
                    ready to help.
                    <br />
                    Book a discovery call and let's explore what's possible.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-10 py-7 rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-lg cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    {/* <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 hover:bg-white/10 text-white px-10 py-7 rounded-2xl backdrop-blur-sm transition-all duration-300 text-lg cursor-pointer"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Schedule a Call
                    </Button> */}
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-start justify-center gap-4 lg:flex-row lg:items-center lg:justify-center lg:gap-8 mt-12 text-sm text-gray-400"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Free Consultation</span>
                    </div>
                    <div className="w-px h-4 bg-white/20 hidden lg:block"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>No Commitment Required</span>
                    </div>
                    <div className="w-px h-4 bg-white/20 hidden lg:block"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Response in 24h</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
