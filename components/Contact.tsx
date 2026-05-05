"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "farismukthar@gmail.com",
    href: "mailto:farismukthar@gmail.com",
    color: "hover:text-sky-400",
    border: "hover:border-sky-400/30",
    bg: "hover:bg-sky-500/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammed-faris-mukthar-m-v",
    href: "https://linkedin.com/in/muhammed-faris-mukthar-m-v",
    color: "hover:text-blue-400",
    border: "hover:border-blue-400/30",
    bg: "hover:bg-blue-500/5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MUHAMMEDFARISMUKTHARMV",
    href: "https://github.com/MUHAMMEDFARISMUKTHARMV",
    color: "hover:text-purple-400",
    border: "hover:border-purple-400/30",
    bg: "hover:bg-purple-500/5",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(26,79,255,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 20% 20%, rgba(26,79,255,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-accent-light tracking-widest uppercase mb-4 block"
        >
          06 — Contact
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-5"
        >
          Let&apos;s Build Something
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-[#9ca3af] mb-12 leading-relaxed"
        >
          Open to <span className="text-white">ML Engineer</span>,{" "}
          <span className="text-white">AI Engineer</span>, and{" "}
          <span className="text-white">Full-Stack AI</span> roles.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -3 }}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/8 bg-surface
                  text-[#9ca3af] transition-all duration-200 group
                  ${link.color} ${link.border} ${link.bg}`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <div className="text-left min-w-0">
                  <div className="font-mono text-xs text-[#6b7280] mb-0.5 tracking-wider uppercase">
                    {link.label}
                  </div>
                  <div className="font-sans text-sm truncate">{link.value}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-1.5 text-[#6b7280]"
        >
          <MapPin size={14} />
          <span className="font-sans text-sm">Calicut, Kerala, India</span>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative mt-20 pt-8 border-t border-white/5 text-center"
      >
        <p className="font-mono text-xs text-[#374151]">
          © {new Date().getFullYear()} Muhammed Faris Mukthar M V · Built with Next.js & Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
