import { motion } from "motion/react";
import Image from "next/image";

const bodyParagraphs = [
  "I have had the privilege of leading digital businesses through periods of significant transformation across media platforms, content ecosystems, and technological advancements. My three decades long journey has been dotted with leading digital transformations, driving strategic innovation leading to sustainable business growth.",
  "I have witnessed firsthand how the right combination of creativity, technology, and strategy create lasting impact on businesses and industries. With our founding team's 70+ years of combined experience across digital verticals spanning strategy, content, product, marketing and technology, VR2 Digital Studio is built on a very strong belief that digital success is about creating connected experiences that translate into a strong brand, engaged customers, and measurable outcomes.",
  "As a media leader, digital strategist, cultural entrepreneur, and certified Independent Director, I bring a seasoned perspective to every engagement, combining strategic thinking with execution excellence. We, at VR2 Digital Studio aim to be your trusted growth partner, helping you to unlock opportunities, and build digital advantage in an increasingly competitive and connected world.",
];

const credentials = [
  "30+ Years Experience",
  "Media Leader",
  "Digital Strategist",
  "Cultural Entrepreneur",
  "Certified Independent Director",
];

export function ManagingPartner() {
  return (
    <section className="relative px-5 py-10 lg:py-10 bg-[#0B0F19] overflow-hidden">
      {/* ── Full-bleed atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#7B2FBE]/8 blur-[160px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8341C]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#7B2FBE]/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100%_80px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]" />
          <span className="text-xl font-semibold tracking-[0.25em] uppercase text-[#00D4FF]">
            Leadership
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#7B2FBE] via-[#C850C0] to-[#00D4FF] bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.3] tracking-tight pb-2 mb-10 sm:mb-12 lg:mb-16"
        >
          From the Managing Partner's Desk
        </motion.h2>

        {/* ── Content: Image left, text right ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">

          {/* Left: Portrait + name/title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-full lg:w-64"
          >
            <div className="relative w-48 sm:w-56 lg:w-full aspect-square rounded-full overflow-hidden mx-auto lg:mx-0 shadow-2xl shadow-purple-500/10 border border-white/10">
              <div
                className="absolute inset-0 rounded-full p-[3px] pointer-events-none"
                style={{ background: "linear-gradient(135deg, #7B2FBE, #C850C0, #E8341C)" }}
              />
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0B0F19]">
                <Image
                  src="/images/maam.png"
                  alt="Rachna Kanwar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-4 text-center lg:text-left">
              <p className="text-lg font-bold text-white tracking-wide text-center">
                Rachna Kanwar
              </p>
              <p className="text-sm text-[#C850C0] font-medium mt-0.5 text-center">
                Managing Partner
              </p>
            </div>
          </motion.div>

          {/* Right: Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 space-y-5"
          >
            {bodyParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-white/65 text-sm sm:text-base leading-relaxed"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* ── Divider with dots (matches screenshot) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mt-10 lg:mt-14"
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#E8341C] flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-[#7B2FBE]/50 via-white/15 to-[#E8341C]/50" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#E8341C] flex-shrink-0" />
        </motion.div>

        {/* ── Credential pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center lg:justify-center gap-2 mt-8"
        >
          {credentials.map((c) => (
            <span
              key={c}
              className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/45"
            >
              {c}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}