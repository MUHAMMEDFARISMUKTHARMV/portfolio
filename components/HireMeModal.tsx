"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function HireMeModal({ isOpen, onClose, onOpenResume }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg pointer-events-auto"
          >
            <div className="rounded-2xl border border-[var(--c-border-lg)] bg-surface shadow-2xl shadow-black/50 overflow-hidden">
              {/* Top accent gradient */}
              <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-blue-400" />

              <div className="p-6 sm:p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-xs text-green-400 tracking-widest uppercase">
                        Available for Hire
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-fg font-normal leading-tight">
                      Let&apos;s Work Together
                    </h3>
                    <p className="font-sans text-sm text-fg-2 mt-1.5">
                      Open to ML Engineer, AI Engineer, and Full-Stack AI roles.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg text-fg-3 hover:text-fg hover:bg-[var(--c-hover)] transition-colors flex-shrink-0 ml-4"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Contact links */}
                <div className="flex flex-col gap-2 mb-5">
                  <a
                    href="mailto:farismukthar@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--c-border)] bg-surface-2
                      hover:border-accent/35 hover:bg-accent/5 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-accent-light" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-fg-3 uppercase tracking-wider mb-0.5">Email</div>
                      <div className="font-sans text-sm text-fg group-hover:text-accent-light transition-colors font-medium">
                        farismukthar@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919048682885"
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--c-border)] bg-surface-2
                      hover:border-accent/35 hover:bg-accent/5 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-accent-light" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-fg-3 uppercase tracking-wider mb-0.5">Phone</div>
                      <div className="font-sans text-sm text-fg group-hover:text-accent-light transition-colors font-medium">
                        +91 9048682885
                      </div>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://linkedin.com/in/muhammed-faris-mukthar-m-v"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--c-border)] bg-surface-2
                        hover:border-blue-400/35 hover:bg-blue-500/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin size={15} className="text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-fg-3 uppercase tracking-wider mb-0.5">LinkedIn</div>
                        <div className="font-sans text-xs text-fg group-hover:text-blue-400 transition-colors truncate">
                          muhammed-faris…
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://github.com/MUHAMMEDFARISMUKTHARMV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--c-border)] bg-surface-2
                        hover:border-purple-400/35 hover:bg-purple-500/5 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Github size={15} className="text-purple-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] text-fg-3 uppercase tracking-wider mb-0.5">GitHub</div>
                        <div className="font-sans text-xs text-fg group-hover:text-purple-400 transition-colors truncate">
                          MUHAMMEDFARIS…
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5 px-1 py-1">
                    <MapPin size={13} className="text-fg-3 flex-shrink-0" />
                    <span className="font-sans text-sm text-fg-3">Calicut, Kerala, India</span>
                  </div>
                </div>

                {/* Resume download CTA */}
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-accent
                    hover:bg-accent-light text-white font-semibold text-sm transition-all duration-200
                    hover:shadow-xl hover:shadow-accent/30"
                >
                  <Download size={16} strokeWidth={2.5} />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
