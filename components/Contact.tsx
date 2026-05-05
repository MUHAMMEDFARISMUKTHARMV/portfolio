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
    hover: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-500/5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "muhammed-faris-mukthar-m-v",
    href: "https://linkedin.com/in/muhammed-faris-mukthar-m-v",
    hover: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MUHAMMEDFARISMUKTHARMV",
    href: "https://github.com/MUHAMMEDFARISMUKTHARMV",
    hover: "hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-500/5",
  },
];

export default function Contact() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(26,79,255,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 40% at 20% 20%, rgba(26,79,255,0.04) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center" ref={ref}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-accent-light tracking-widest uppercase mb-4 block"
        >
          06 — Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-fg mb-5"
        >
          Let&apos;s Build Something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-fg-2 mb-12 leading-relaxed"
        >
          Open to <span className="text-fg">ML Engineer</span>,{" "}
          <span className="text-fg">AI Engineer</span>, and{" "}
          <span className="text-fg">Full-Stack AI</span> roles.
        </motion.p>

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
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border border-[var(--c-border)] bg-surface
                  text-fg-2 transition-all duration-200 ${link.hover}`}
              >
                <Icon size={18} className="flex-shrink-0" />
                <div className="text-left min-w-0">
                  <div className="font-mono text-xs text-fg-3 mb-0.5 tracking-wider uppercase">{link.label}</div>
                  <div className="font-sans text-sm truncate">{link.value}</div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-1.5 text-fg-3"
        >
          <MapPin size={14} />
          <span className="font-sans text-sm">Calicut, Kerala, India</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative mt-20 pt-8 border-t border-[var(--c-border)] text-center"
      >
        <p className="font-mono text-xs text-fg-4">
          © {new Date().getFullYear()} Muhammed Faris Mukthar M V · Built with Next.js & Framer Motion
        </p>
      </motion.div>
    </section>
  );
}
