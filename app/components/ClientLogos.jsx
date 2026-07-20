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
    <section className="border-y border-white/5 bg-[#0B0F19] py-20 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-lg font-medium text-gray-300">
              Industries We Serve
            </span>
          </div>
        </motion.div>

        {/* Industries */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
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
                className="cursor-pointer text-center text-xl font-bold tracking-wide text-white/30 transition-colors duration-300 md:text-3xl"
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
