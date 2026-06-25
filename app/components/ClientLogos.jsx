import { motion } from "motion/react";

export function ClientLogos() {
  const clients = [
    "Startups",
    "D2C Brands",
    "SMEs",
    "Healthcare",
    "Education",
    "Professional Services",
    "Technology Companies",
  ];

  return (
    <section className="py-20 bg-[#0B0F19] border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider mb-12"
        >
          Industries We Serve
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center uppercase gap-15 flex-wrap">
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
