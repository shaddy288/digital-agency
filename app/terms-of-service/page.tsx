"use client";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const sections = [
  {
    title: "Services",
    content:
      "We provide digital consulting and implementation services including:",
    list: [
      "Branding",
      "Website Design",
      "Website Development",
      "Mobile App Development",
      "UI/UX Design",
      "SEO",
      "Performance Marketing",
      "DevOps Support",
      "Digital Consulting",
    ],
  },
  {
    title: "Quotations",
    content:
      "All quotations remain valid for 30 days unless otherwise specified.",
    list: [],
  },
  {
    title: "Payments",
    content: "Project payments are typically structured as:",
    list: [
      "50% Advance",
      "30% During Development",
      "20% Before Final Delivery",
    ],
    footer: "Retainer services are billed monthly in advance.",
  },
  {
    title: "Intellectual Property",
    content:
      "Ownership of the final deliverables transfers to the client upon full payment, unless otherwise agreed in writing.",
    list: [],
    footer:
      "VR2 Digital reserves the right to showcase completed work in its portfolio unless restricted by an NDA.",
  },
  {
    title: "Project Delays",
    content:
      "Project timelines depend upon timely approvals and content provided by the client.",
    list: [],
    footer: "Any delay in approvals may affect the agreed delivery schedule.",
  },
  {
    title: "Limitation of Liability",
    content:
      "VR2 Digital shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.",
    list: [],
  },
];

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/[0.08] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Mesh grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <span className="text-sm text-gray-300">Legal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
              Welcome to{" "}
              <span className="text-white font-semibold">VR2 Digital</span>. By
              using our website, you agree to the following terms.
            </p>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((section, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] hover:border-purple-500/25 transition-all duration-300 p-6"
              >
                {/* Top shimmer on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <div className="flex items-start gap-4">
                  {/* Number badge instead of icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-white font-semibold text-base mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {section.content}
                    </p>

                    {section.list.length > 0 && (
                      <ul className="space-y-2">
                        {section.list.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-gray-300"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="mt-3 text-gray-500 text-xs leading-relaxed italic border-l border-white/10 pl-3">
                        {section.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="mt-10 relative rounded-2xl overflow-hidden border border-white/10 p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-transparent to-cyan-900/25" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-purple-500/20 rounded-full blur-[40px]" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg">✉️</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Have Questions?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                For any questions regarding these Terms, please contact us
                directly.
              </p>
              <a
                href="mailto:vr2digital@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                vr2digital@gmail.com
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-10">
            © 2026 VR2 Digital. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
