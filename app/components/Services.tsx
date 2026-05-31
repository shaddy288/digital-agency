import { motion } from "motion/react";
import { Palette, Layers, Code, Video, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      description:
        "Complete brand identity systems that resonate with your audience and stand out in the market.",
      gradient: "from-purple-500 to-pink-500",
      large: true,
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description:
        "User-centered interfaces that combine beauty with functionality.",
      gradient: "from-cyan-500 to-blue-500",
      large: false,
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "High-performance websites and applications built with modern technologies.",
      gradient: "from-orange-500 to-red-500",
      large: false,
    },
    {
      icon: Video,
      title: "Motion Design",
      description: "Captivating animations that bring your brand to life.",
      gradient: "from-green-500 to-emerald-500",
      large: false,
    },
    {
      icon: Sparkles,
      title: "AI Solutions",
      description:
        "Intelligent automation and AI-powered features that transform user experiences.",
      gradient: "from-violet-500 to-purple-500",
      large: true,
    },
  ];

  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end digital solutions tailored to elevate your brand
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`
                  group relative rounded-3xl overflow-hidden backdrop-blur-xl
                  bg-gradient-to-br from-white/5 to-white/[0.02] 
                  border border-white/10 hover:border-white/20
                  transition-all duration-500 cursor-pointer
                  ${service.large ? "md:col-span-2" : "md:col-span-1"}
                  ${service.large ? "lg:col-span-2" : "lg:col-span-1"}
                  p-8 lg:p-10
                `}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-transparent group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
