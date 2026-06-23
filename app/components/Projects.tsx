import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "FinTech Revolution",
      category: "Web Platform",
      description:
        "A next-generation banking platform that redefined digital finance",
      image:
        "https://images.unsplash.com/photo-1769704552351-d5059b8bb6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwcHVycGxlJTIwY3lhbnxlbnwxfHx8fDE3NzkyNzUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "User Growth", value: "+340%" },
        { label: "Engagement", value: "92%" },
        { label: "ROI", value: "4.5x" },
      ],
      gradient: "from-purple-600/20 to-cyan-600/20",
    },
    {
      title: "E-Commerce Reimagined",
      category: "Mobile App",
      description:
        "Seamless shopping experience with AI-powered recommendations",
      image:
        "https://images.unsplash.com/photo-1587902673915-631e5ba4488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBtYWNib29rJTIwbW9ja3VwJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3OTI3NTAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "Conversion", value: "+215%" },
        { label: "Revenue", value: "$2.4M" },
        { label: "Users", value: "150K+" },
      ],
      gradient: "from-orange-600/20 to-pink-600/20",
    },
  ];

  return (
    <section
      id="work"
      className="py-32 bg-gradient-to-b from-[#0B0F19] to-[#0F1419] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Case studies that showcase our impact
          </p>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500">
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  {/* Left: Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white mb-4">
                        {project.category}
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-8">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="flex items-center gap-1 text-2xl font-bold text-white mb-1">
                              {metric.value}
                              <TrendingUp className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="text-sm text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="group/btn inline-flex items-center gap-2 text-white hover:gap-4 transition-all duration-300">
                      <span className="font-medium">View Case Study</span>
                      <ArrowUpRight className="w-5 h-5 group-hover/btn:rotate-45 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Right: Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group-hover:scale-105 transition-transform duration-500">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover aspect-[4/3]"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Floating Card */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -bottom-4 -right-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"
                    >
                      <div className="text-sm text-gray-300 mb-1">
                        Completion Time
                      </div>
                      <div className="text-2xl font-bold text-white">
                        6 Weeks
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
