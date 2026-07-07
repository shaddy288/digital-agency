import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function ClientLogos() {
  const clients = [
    "STARTUPS",
    "D2C BRANDS",
    "SMEs",
    "HEALTHCARE",
    "EDUCATION",
    "PROFESSIONAL SERVICES",
    "TECHNOLOGY COMPANIES",
  ];

  return (
    <section className="py-20 bg-[#0B0F19] border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">
              Industries We Serve
            </span>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-15 flex-wrap">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold text-white/20 hover:text-white/40 transition-colors duration-300 cursor-pointer"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
