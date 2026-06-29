"use client";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import {
  Shield,
  Eye,
  Database,
  Lock,
  Globe,
  Cookie,
  UserCheck,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: "When you interact with our website, we may collect:",
    list: [
      "Name",
      "Email address",
      "Phone number",
      "Company name",
      "Project requirements",
      "Website usage data through cookies and analytics tools",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: "Your information is used to:",
    list: [
      "Respond to enquiries",
      "Provide quotations and proposals",
      "Deliver our services",
      "Improve our website and user experience",
      "Send relevant business updates (only with your consent)",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content:
      "We implement industry-standard security practices to protect your information against unauthorized access, disclosure, or misuse.",
    list: [],
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: "We may use trusted third-party providers such as:",
    list: [
      "Google Analytics",
      "Google Ads",
      "Meta Pixel",
      "Hosting Providers",
      "CRM Platforms",
    ],
    footer:
      "These providers have their own privacy policies governing the use of your information.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    content:
      "Our website uses cookies to improve your browsing experience and understand website performance. You may disable cookies through your browser settings.",
    list: [],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You may request to:",
    list: [
      "Access your personal information",
      "Correct inaccurate information",
      "Withdraw consent for marketing communications",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0B0F19] relative overflow-hidden">
        {/* ── Same background as your site ───────────────────────────────── */}
        {/* Purple glow top-left */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] pointer-events-none" />
        {/* Cyan glow bottom-right */}
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] pointer-events-none" />
        {/* Orange center ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/8 rounded-full blur-[150px] pointer-events-none" />
        {/* Extra purple mid-right */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Mesh grid overlay — exactly like your site */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        {/* ── Page Content ───────────────────────────────────────────────── */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Legal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Privacy{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-gray-500 text-sm mb-6">
              Effective Date: June 2026
            </p>

            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
              At <span className="text-white font-semibold">VR2 Digital</span>,
              we value your privacy and are committed to protecting your
              personal information.
            </p>

            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] hover:border-purple-500/25 transition-all duration-300 p-6"
                >
                  {/* Top gradient line on hover */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                  <div className="flex items-start gap-4">
                    {/* Icon box */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/15 to-cyan-500/15 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-purple-400" />
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
              );
            })}
          </div>

          {/* Contact Card */}
          <div className="mt-10 relative rounded-2xl overflow-hidden border border-white/10 p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-transparent to-cyan-900/25" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            {/* inner glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-purple-500/20 rounded-full blur-[40px]" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Privacy Concerns?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                For any privacy-related concerns, reach out to us directly.
              </p>
              <a
                href="mailto:vr2digital@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <Mail className="w-4 h-4" />
                vr2digital@gmail.com
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 text-xs mt-10">
            © 2026 VR2 Digital. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
