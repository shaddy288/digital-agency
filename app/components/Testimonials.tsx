import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVenture",
      avatar:
        "https://images.unsplash.com/photo-1761243892035-c3e13829115a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc5MjQ3MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "Working with this team transformed our digital presence. Their attention to detail and creative vision exceeded all expectations. The ROI has been phenomenal.",
      rating: 5,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Michael Torres",
      role: "Founder, FinanceHub",
      avatar:
        "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3OTI3NTAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "From concept to launch, the process was seamless. They didn't just build an app; they built a scalable platform that drives our business forward every day.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Emily Rodriguez",
      role: "CMO, BrandWorks",
      avatar:
        "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3OTI1NTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "Their design expertise and strategic thinking helped us completely rebrand. The new identity resonates perfectly with our target audience and has elevated our market position.",
      rating: 5,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Client{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                  display: currentIndex === index ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative group">
                  {/* Glow Effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Card */}
                  <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-10 lg:p-16">
                    {/* Quote Icon */}
                    <div
                      className={`absolute top-8 right-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-10 flex items-center justify-center`}
                    >
                      <Quote className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-2xl text-gray-300 leading-relaxed mb-8 font-light">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} p-0.5`}
                        >
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-12"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
