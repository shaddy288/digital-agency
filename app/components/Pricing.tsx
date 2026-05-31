import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$5,000",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Brand Identity Design",
        "Landing Page Development",
        "Responsive Design",
        "2 Revisions",
        "30 Days Support",
      ],
      gradient: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "UI/UX Research & Design",
        "Advanced Animations",
        "5 Revisions",
        "90 Days Support",
        "SEO Optimization",
        "Analytics Integration",
      ],
      gradient: "from-cyan-500 to-blue-500",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large-scale digital transformations",
      features: [
        "Everything in Professional",
        "AI-Powered Solutions",
        "Multi-platform Development",
        "Dedicated Team",
        "Unlimited Revisions",
        "12 Months Support",
        "Priority Support",
        "Training & Documentation",
      ],
      gradient: "from-orange-500 to-red-500",
      featured: false,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0F1419] to-[#0B0F19] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Simple{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative group ${plan.featured ? "lg:scale-105" : ""}`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`px-6 py-2 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center gap-2 shadow-lg`}
                  >
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${plan.gradient} rounded-3xl blur ${plan.featured ? "opacity-40" : "opacity-0"} group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div
                className={`relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border ${plan.featured ? "border-white/20" : "border-white/10"} group-hover:border-white/20 transition-all duration-500 p-8 lg:p-10 h-full flex flex-col`}
              >
                {/* Top Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient}`}
                ></div>

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 rounded-2xl transition-all duration-300 ${
                    plan.featured
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-cyan-500/30 text-white`
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Need a custom solution?{" "}
            <button className="text-cyan-400 hover:text-cyan-300 underline">
              Contact our team
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
