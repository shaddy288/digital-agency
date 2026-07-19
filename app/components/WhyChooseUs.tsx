import { motion } from "motion/react";
import { Award, Users, Zap, Heart } from "lucide-react";

export function WhyChooseUs() {
  const stats = [
    {
      icon: Award,
      label: "End-to-End Expertise",
      description: "From strategy to execution, one team handles everything.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      label: "Business-First Thinking",
      description: "We focus on measurable outcomes, not vanity metrics.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      label: "Agile Delivery",
      description: "Faster execution with transparent communication.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      label: "Growth-Oriented Approach",
      description: "Every project is built with scalability in mind.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      label: "Long-Term Partnership",
      description: "We don't just launch projects. We help them grow.",
      gradient: "from-rose-500 to-violet-500",
    },
  ];

  return (
    <section className="pt-10 pb-10 bg-gradient-to-b from-[#0B0F19] to-[#0F1419] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              VR2 Digital
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all duration-500 p-8 h-56 lg:h-80">
                  {/* Top Gradient Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} p-2.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Value */}
                  {/* <div className="text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div> */}

                  {/* Label */}
                  <div className="text-lg font-semibold text-white mb-3">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative Element */}
                  <div
                    className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div>
              <div className="text-3xl font-bold text-white mb-1">250+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">12+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
