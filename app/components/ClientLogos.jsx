import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function ClientLogos() {
  const industries = [
    "STARTUPS",
    "D2C BRANDS",
    "SMEs",
    "HEALTHCARE",
    "EDUCATION",
    "PROFESSIONAL SERVICES",
    "TECHNOLOGY COMPANIES",
  ];

  return (
    <section className="border-y border-white/5 bg-[#0B0F19] py-8 sm:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-12">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-5 sm:mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-400" />
            <span className="text-sm sm:text-lg font-medium text-gray-300">
              Industries We Serve
            </span>
          </div>
        </motion.div>

        {/* Industries */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-14">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  scale: 1.08,
                  color: "#ffffff",
                }}
                className="cursor-pointer text-center text-sm sm:text-xl font-bold tracking-wide text-white/30 transition-colors duration-300 md:text-3xl"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}