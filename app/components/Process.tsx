import { motion } from "motion/react";
import { Search, Lightbulb, Palette, Code2, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Understand your business, customers, and goals.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Build a roadmap for growth and success.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Create engaging experiences and interfaces.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Code2,
      title: "Develop",
      description: "Develop scalable digital solutions.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Drive traffic, leads, and measurable business outcomes.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative group">
                    {/* Number Badge */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} p-0.5`}
                      >
                        <div className="w-full h-full rounded-full bg-[#0B0F19] flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connection Dot - Desktop */}
                    <div
                      className={`hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.gradient}`}
                    ></div>
                  </div>

                  {/* Connection Line - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500/20 to-cyan-500/20"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
