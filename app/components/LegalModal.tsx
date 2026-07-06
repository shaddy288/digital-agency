"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText } from "lucide-react";

type LegalType = "privacy" | "terms";

interface LegalModalProps {
  isOpen: boolean;
  type: LegalType;
  onClose: () => void;
}

export function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  const isPrivacy = type === "privacy";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 px-6 py-5">
                <div className="flex items-center gap-3">
                  {isPrivacy ? (
                    <ShieldCheck className="h-7 w-7 text-cyan-400" />
                  ) : (
                    <FileText className="h-7 w-7 text-purple-400" />
                  )}

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {isPrivacy ? "Privacy Policy" : "Terms of Service"}
                    </h2>

                    <p className="text-sm text-gray-400">
                      Effective Date: June 2026
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full p-2 transition hover:bg-white/10"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[70vh] overflow-y-auto px-6 py-6 text-gray-300 space-y-6 custom-scrollbar">
                {isPrivacy ? (
                  <>
                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Information We Collect
                      </h3>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company name</li>
                        <li>Project requirements</li>
                        <li>
                          Website usage data through cookies and analytics tools
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        How We Use Your Information
                      </h3>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>Respond to enquiries</li>
                        <li>Provide quotations and proposals</li>
                        <li>Deliver our services</li>
                        <li>Improve our website and user experience</li>
                        <li>
                          Send relevant business updates (only with your
                          consent)
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Data Security
                      </h3>

                      <p>
                        We implement industry-standard security practices to
                        protect your information against unauthorized access,
                        disclosure, or misuse.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Third-Party Services
                      </h3>

                      <p className="mb-3">
                        We may use trusted third-party providers such as:
                      </p>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>Google Analytics</li>
                        <li>Google Ads</li>
                        <li>Meta Pixel</li>
                        <li>Hosting Providers</li>
                        <li>CRM Platforms</li>
                      </ul>

                      <p className="mt-3">
                        These providers have their own privacy policies
                        governing the use of your information.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Cookies
                      </h3>

                      <p>
                        Our website uses cookies to improve your browsing
                        experience and understand website performance. You may
                        disable cookies through your browser settings.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Your Rights
                      </h3>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Withdraw consent for marketing communications</li>
                      </ul>
                    </section>

                    <section className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                      <h3 className="mb-2 font-semibold text-white">Contact</h3>

                      <p>For any privacy-related concerns, contact us at:</p>

                      <a
                        href="mailto:vr2digital@gmail.com"
                        className="mt-2 inline-block text-cyan-400 hover:text-cyan-300"
                      >
                        vr2digital@gmail.com
                      </a>
                    </section>
                  </>
                ) : (
                  <>
                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Services
                      </h3>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>Branding</li>
                        <li>Website Design</li>
                        <li>Website Development</li>
                        <li>Mobile App Development</li>
                        <li>UI/UX Design</li>
                        <li>SEO</li>
                        <li>Performance Marketing</li>
                        <li>DevOps Support</li>
                        <li>Digital Consulting</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Quotations
                      </h3>

                      <p>
                        All quotations remain valid for 30 days unless otherwise
                        specified.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Payments
                      </h3>

                      <ul className="list-disc space-y-2 pl-6">
                        <li>50% Advance</li>
                        <li>30% During Development</li>
                        <li>20% Before Final Delivery</li>
                        <li>
                          Retainer services are billed monthly in advance.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Intellectual Property
                      </h3>

                      <p>
                        Ownership of the final deliverables transfers to the
                        client upon full payment unless otherwise agreed in
                        writing.
                      </p>

                      <p className="mt-3">
                        VR2 Digital reserves the right to showcase completed
                        work in its portfolio unless restricted by an NDA.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Project Delays
                      </h3>

                      <p>
                        Project timelines depend upon timely approvals and
                        content provided by the client. Delays may affect the
                        agreed delivery schedule.
                      </p>
                    </section>

                    <section>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        Limitation of Liability
                      </h3>

                      <p>
                        VR2 Digital shall not be liable for indirect,
                        incidental, or consequential damages arising from the
                        use of our services.
                      </p>
                    </section>

                    <section className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                      <h3 className="mb-2 font-semibold text-white">Contact</h3>

                      <a
                        href="mailto:vr2digital@gmail.com"
                        className="text-purple-300 hover:text-white"
                      >
                        vr2digital@gmail.com
                      </a>
                    </section>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
