import { motion } from "motion/react";
import Image from "next/image";

const bodyParagraphs = [
  "I have had the privilege of leading digital businesses through periods of significant transformation across media platforms, content ecosystems, and technological advancements. My three decades long journey has been dotted with leading digital transformations, driving strategic innovation leading to sustainable business growth.",
  "I have witnessed firsthand how the right combination of creativity, technology, and strategy create lasting impact on businesses and industries.",
  "With our founding team's 70+ years of combined experience across digital verticals spanning strategy, content, product, marketing and technology, VR2 Digital Studio is built on a very strong belief that digital success is about creating connected experiences that translate into a strong brand, engaged customers, and measurable outcomes.",
  "As a media leader, digital strategist, cultural entrepreneur, and certified Independent Director, I bring a seasoned perspective to every engagement, combining strategic thinking with execution excellence. We, at VR2 Digital Studio aim to be your trusted growth partner, helping you to unlock opportunities, and build digital advantage in an increasingly competitive and connected world.",
];

const credentials = [
  "30+ Years Experience",
  "Media Leader",
  "Digital Strategist",
  "Cultural Entrepreneur",
  "Certified Independent Director",
];

const stats = [
  { value: "30+", label: "Years Leading\nDigital Businesses" },
  { value: "70+", label: "Years Combined\nTeam Experience" },
];

export function ManagingPartner() {
  return (
    <section className="relative py-10 bg-[#0B0F19] overflow-hidden">
      {/* ── Full-bleed atmospheric background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large radial centre glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#7B2FBE]/8 blur-[160px]" />
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8341C]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#7B2FBE]/8 rounded-full blur-[120px]" />
        {/* Subtle horizontal scan lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:100%_80px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* ── Section eyebrow ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]" />
          <span className="text-xl font-semibold tracking-[0.25em] uppercase text-[#00D4FF]">
            Leadership
          </span>
        </motion.div>

        {/* ── Portrait + rings ── */}
        <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-14"
        >
        <div className="relative w-64 h-64">
            {/* Outermost slow spin ring */}
            <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full"
            style={{ border: "1px dashed rgba(123,47,190,0.3)" }}
            />
            {/* Middle counter-spin ring */}
            <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full"
            style={{ border: "1px dashed rgba(232,52,28,0.25)" }}
            />
            {/* Static gradient border */}
            <div
            className="absolute inset-0 rounded-full p-[2px]"
            style={{ background: "linear-gradient(135deg, #7B2FBE, #C850C0, #E8341C)" }}
            >
            <div className="w-full h-full rounded-full bg-[#0B0F19]" />
            </div>
            {/* Portrait Image */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden shadow-inner">
            <Image
                src="/images/maam.png"
                alt="Rachna Kanwar"
                fill
                className="object-cover"
            />
            </div>
            {/* Portrait glow */}
            <div className="absolute inset-4 rounded-full bg-[#7B2FBE]/25 blur-xl -z-10" />
        </div>
        </motion.div>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-3">
            From the Managing Partner's Desk
          </h2>
          <p className="text-sm text-white/35 tracking-widest uppercase">Rachna Kanwar · VR2 Digital Studio</p>
        </motion.div>

        {/* ── Giant decorative quote mark ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-4 select-none"
        >
          <span
            className="text-[9rem] leading-none font-serif"
            style={{
              background: "linear-gradient(135deg, #7B2FBE44, #E8341C22)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 0.8,
            }}
          >
            "
          </span>
        </motion.div>

        {/* ── Pull-quote (first paragraph styled prominently) ── */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold text-white/85 leading-[1.5] mb-12 max-w-3xl mx-auto"
        >
          {bodyParagraphs[0]}
        </motion.p>

        {/* ── Divider with stat chips ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex-shrink-0 text-center px-6 py-3 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm"
            >
              <p className="text-2xl font-extrabold bg-gradient-to-r from-[#7B2FBE] to-[#E8341C] bg-clip-text text-transparent leading-none">
                {s.value}
              </p>
              <p className="text-[10px] text-white/35 mt-1 leading-tight whitespace-pre-line tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

        {/* ── Remaining paragraphs in a two-column editorial grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
          {bodyParagraphs.slice(1).map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`text-white/55 text-base leading-relaxed ${
                i === 2 ? "md:col-span-2" : ""
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* ── Signature + credentials ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Name + title */}
          <div className="text-center">
            <p className="text-xl font-bold text-white tracking-wide">Rachna Kanwar</p>
            <p className="text-sm text-[#C850C0] font-medium mt-1">Managing Partner, VR2 Digital Studio</p>
          </div>

          {/* Credential pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="px-3.5 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/45"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom rule */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
