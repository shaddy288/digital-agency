export function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#0B0F19]"
    >
      {/* Ambient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#7B2FBE]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#00D4FF]/8 blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 h-px bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF]" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00D4FF]">
            About Us
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
          {/* Left — headline + tagline */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white mb-5 sm:mb-6">
              Your Digital{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#7B2FBE] via-[#C850C0] to-[#00D4FF] bg-clip-text text-transparent">
                  Growth Partner
                </span>
                {/* underline glow */}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF] opacity-60" />
              </span>
            </h2>

            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-sm font-medium text-white/70">
                Design. Build. Grow.
              </span>
            </div>

            {/* Stat row */}
            {/* <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-10">
              {[
                { value: "150+", label: "Projects Shipped" },
                { value: "98%", label: "Client Retention" },
                { value: "5×", label: "Avg. ROI" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group p-3 sm:p-4 rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm hover:border-[#7B2FBE]/40 hover:bg-[#7B2FBE]/8 transition-all duration-300"
                >
                  <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right — body copy */}
          <div className="space-y-4 sm:space-y-5 text-white/65 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              At <span className="font-semibold text-white">VR2 Digital</span>,
              we believe businesses shouldn't have to manage separate agencies
              for design, development, marketing, and strategy.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              <span className="text-white/85 font-semibold block mt-3 sm:mt-0">
                We bring everything together under one roof.
              </span>
            </p>

            <p>
              From creating your brand identity and designing exceptional
              digital experiences to building scalable platforms and driving
              measurable growth, we help businesses transform ideas into
              successful digital ventures.
            </p>

            <p>
              Whether you're a startup launching your first product or an
              established business looking to accelerate growth, we become an{" "}
              <span className="text-white/85 font-medium">
                extension of your team.
              </span>
            </p>

            {/* Capability pills */}
            {/* <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
              {[
                "Website Development",
                "E-commerce Development",
                "Mobile Apps",
                "CMS Development",
                "Chatbots & Automation",
                "DevOps & Hosting Support",
              ].map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1.5 text-[10px] sm:text-xs font-medium rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-colors duration-200 cursor-default"
                >
                  {cap}
                </span>
              ))}
            </div> */}

            {/* CTA */}
            {/* <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#7B2FBE] to-[#00D4FF] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#7B2FBE]/25"
              >
                Work With Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-white/50 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                View our work
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 sm:mt-20 lg:mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
