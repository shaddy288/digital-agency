import { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

import { ConsultationModal } from "./ConsultationModal";
import { LegalModal } from "./LegalModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<"privacy" | "terms">("privacy");

  const navigation = {
    services: [
      { name: "Strategy & Consulting", href: "#services" },
      { name: "Design & Experience", href: "#services" },
      { name: "Technology & Development", href: "#services" },
      { name: "Growth & Performance Marketing", href: "#services" },
    ],

    company: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
    ],

    legal: [
      {
        name: "Privacy Policy",
        type: "privacy" as const,
      },
      {
        name: "Terms of Service",
        type: "terms" as const,
      },
    ],
  };

  // const socials = [
  //   {
  //     icon: FaFacebook,
  //     href: "https://www.facebook.com/vr2digitalstudio/",
  //     label: "Facebook",
  //   },
  //   {
  //     icon: FaInstagram,
  //     href: "https://www.instagram.com/vr2digital/",
  //     label: "Instagram",
  //   },
  //   {
  //     icon: FaTwitter,
  //     href: "https://x.com/vr2digital",
  //     label: "Twitter",
  //   },
  // ];

  return (
    <>
      <footer
        id="contact"
        className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0B0F19] to-black"
      >
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer */}
          <div className="py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Brand */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="max-w-md leading-relaxed text-gray-400">
                    We're a digital agency that crafts exceptional experiences.
                    From bold brands to cutting-edge technology, we bring your
                    vision to life.
                  </p>
                </motion.div>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="mb-4 font-semibold text-white">Services</h4>

                  <ul className="space-y-3">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="mb-4 font-semibold text-white">Company</h4>

                  <ul className="space-y-3">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="text-left text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="mb-4 font-semibold text-white">Legal</h4>

                  <ul className="space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() => {
                            setLegalType(item.type);
                            setIsLegalModalOpen(true);
                          }}
                          className="text-left text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 py-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-gray-500"
              >
                © 2026 vr2digital.com. All rights reserved.
              </motion.p>

              {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </motion.div> */}
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Privacy / Terms Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        type={legalType}
        onClose={() => setIsLegalModalOpen(false)}
      />
    </>
  );
}
