import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react"; // only non-brand icons
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";

export function Footer() {
  const navigation = {
    services: [
      { name: "Branding", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "Motion Design", href: "#" },
      { name: "AI Solutions", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socials = [
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0B0F19] to-black border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  STUDIO
                </h3> */}
                <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                  We're a digital agency that crafts exceptional experiences.
                  From bold brands to cutting-edge technology, we bring your
                  vision to life.
                </p>

                {/* Newsletter */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">
                    Subscribe to our newsletter
                  </h4>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-6 rounded-xl">
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </a>
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
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © 2026 vr2digital.com. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
