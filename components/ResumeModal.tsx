"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Code2, Brain, BarChart2 } from "lucide-react";

const RESUME_OPTIONS = [
  {
    label: "AI Developer",
    description: "LLMs · RAG · GenAI · Full-Stack AI Products",
    icon: Code2,
    file: "/resume_ai_developer.pdf",
    downloadName: "Muhammed Faris - AI Developer.pdf",
    iconColor: "text-blue-400",
    hoverBg: "hover:bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/40",
    hoverText: "group-hover:text-blue-400",
    dotColor: "bg-blue-400",
  },
  {
    label: "AI / ML Engineer",
    description: "Computer Vision · NLP · Edge AI · MLOps",
    icon: Brain,
    file: "/resume_ai_ml_engineer.pdf",
    downloadName: "Muhammed Faris - AI ML Engineer.pdf",
    iconColor: "text-violet-400",
    hoverBg: "hover:bg-violet-500/10",
    hoverBorder: "hover:border-violet-400/40",
    hoverText: "group-hover:text-violet-400",
    dotColor: "bg-violet-400",
  },
  {
    label: "Data Scientist",
    description: "Predictive Modelling · Analytics · BI Dashboards",
    icon: BarChart2,
    file: "/resume_data_scientist%201.pdf",
    downloadName: "Muhammed Faris - Data Scientist.pdf",
    iconColor: "text-emerald-400",
    hoverBg: "hover:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-400/40",
    hoverText: "group-hover:text-emerald-400",
    dotColor: "bg-emerald-400",
  },
];

interface Props { isOpen: boolean; onClose: () => void; }

export default function ResumeModal({ isOpen, onClose }: Props) {
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
            className="w-full max-w-md pointer-events-auto"
          >
            <div className="rounded-2xl border border-[var(--c-border-lg)] bg-surface shadow-2xl shadow-black/50 overflow-hidden">
              {/* Top accent bar */}
              <div className="h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-xl text-fg font-normal">Which role are you hiring for?</h3>
                    <p className="font-sans text-sm text-fg-2 mt-1">
                      Download the resume tailored for your team.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-lg text-fg-3 hover:text-fg hover:bg-[var(--c-hover)] transition-colors flex-shrink-0"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                  {RESUME_OPTIONS.map((role) => {
                    const Icon = role.icon;
                    return (
                      <a
                        key={role.label}
                        href={role.file}
                        download={role.downloadName}
                        onClick={onClose}
                        className={`flex items-center gap-4 p-4 rounded-xl border border-[var(--c-border)] bg-surface-2
                          transition-all duration-200 ${role.hoverBg} ${role.hoverBorder} group cursor-pointer`}
                      >
                        <div className={`w-10 h-10 rounded-xl bg-[var(--c-hover)] flex items-center justify-center flex-shrink-0 ${role.iconColor}`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-sans font-semibold text-fg text-sm ${role.hoverText} transition-colors`}>
                            {role.label}
                          </div>
                          <div className="font-mono text-xs text-fg-3 mt-0.5 leading-snug">{role.description}</div>
                        </div>
                        <Download size={15} className="text-fg-3 group-hover:text-fg-2 flex-shrink-0 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
