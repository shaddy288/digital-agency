import { motion } from "motion/react";
import { Compass, Sparkles, Code2, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Compass,
    number: "01",
    title: "Strategy & Consulting",
    tagline: "Digital transformation begins with clarity.",
    description:
      "We help businesses define digital roadmaps, customer journeys, platform strategies, and growth plans that align technology with business outcomes.",
    items: [
      "Digital Strategy",
      "Website & Platform Consulting",
      "Product Strategy",
      "Customer Experience Mapping",
      "Growth Planning",
    ],
    accent: "#7B2FBE",
    accentEnd: "#C850C0",
    glowColor: "rgba(123,47,190,0.18)",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Design & Experience",
    tagline:
      "Design isn't just about aesthetics. It's about experiences customers remember.",
    description:
      "We craft brands, websites, and user experiences that build trust and drive action.",
    items: [
      "Brand Identity Design",
      "UI/UX Design",
      "Website Design",
      "Landing Pages",
      "Marketing Creatives",
      "Design Systems",
    ],
    accent: "#C850C0",
    accentEnd: "#FF6B35",
    glowColor: "rgba(200,80,192,0.16)",
  },
  {
    icon: Code2,
    number: "03",
    title: "Technology & Development",
    tagline: "Reliable technology is the foundation of growth.",
    description:
      "We build websites, mobile applications, and digital platforms that are fast, scalable, and future-ready.",
    items: [
      "Website Development",
      "E-commerce Development",
      "Mobile Apps",
      "CMS Development",
      "Chatbots & Automation",
      "DevOps & Hosting Support",
    ],
    accent: "#00D4FF",
    accentEnd: "#7B2FBE",
    glowColor: "rgba(0,212,255,0.14)",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Growth & Performance Marketing",
    tagline: "Getting online is only the beginning.",
    description:
      "Our growth team helps businesses attract the right audience, generate leads, and improve conversions through data-driven marketing.",
    items: [
      "Performance Marketing",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Campaigns",
      "SEO",
      "Marketing Automation",
      "Analytics & Reporting",
    ],
    accent: "#FF6B35",
    accentEnd: "#C850C0",
    glowColor: "rgba(255,107,53,0.14)",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#0B0F19] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7B2FBE]/8 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D4FF]/6 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00D4FF]">
              What We Do
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight max-w-xl">
              Everything your{" "}
              <span className="bg-gradient-to-r from-[#7B2FBE] via-[#C850C0] to-[#00D4FF] bg-clip-text text-transparent">
                business needs
              </span>{" "}
              to grow online.
            </h2>
            <p className="text-white/45 text-base max-w-xs lg:text-right leading-relaxed">
              Four integrated practice areas. One accountable partner.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-8 lg:p-10 transition-all duration-500 hover:border-white/15 cursor-default"
                style={{
                  boxShadow: `0 0 0 0 ${service.glowColor}`,
                }}
              >
                {/* Hover glow fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(ellipse at 30% 20%, ${service.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Top row: number + icon */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <span
                    className="text-xs font-bold tracking-[0.2em] tabular-nums"
                    style={{ color: service.accent }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}26, ${service.accentEnd}1a)`,
                      border: `1px solid ${service.accent}30`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: service.accent }}
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="relative z-10 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  className="relative z-10 text-sm font-medium mb-3 leading-snug"
                  style={{ color: service.accent }}
                >
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="relative z-10 text-white/50 text-sm leading-relaxed mb-7">
                  {service.description}
                </p>

                {/* Divider */}
                <div
                  className="relative z-10 h-px mb-7 opacity-20"
                  style={{
                    background: `linear-gradient(to right, ${service.accent}, transparent)`,
                  }}
                />

                {/* Services list */}
                <ul className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/55 group-hover:text-white/70 transition-colors duration-300"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA */}
                <div className="relative z-10 mt-8 flex items-center gap-1.5 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <span style={{ color: service.accent }}>Explore service</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: service.accent }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom rule */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
