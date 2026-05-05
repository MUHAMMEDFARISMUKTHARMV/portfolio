"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Brain, Cpu, Globe, Layers, type LucideIcon } from "lucide-react";

interface JourneyStep {
  icon: LucideIcon; title: string; subtitle: string; milestone?: string; color: string; glow: string;
}

const STEPS: JourneyStep[] = [
  { icon: GraduationCap, title: "Mathematics",      subtitle: "BSc Foundation",               color: "text-sky-400",    glow: "shadow-sky-500/20" },
  { icon: Brain,         title: "Data Analytics",   subtitle: "MSc Specialisation",           color: "text-violet-400", glow: "shadow-violet-500/20", milestone: "First ML research project" },
  { icon: Layers,        title: "ML Research",      subtitle: "LayoutLM · OCR · NLP",         color: "text-accent-light", glow: "shadow-accent/20", milestone: "First production NLP model" },
  { icon: Brain,         title: "ML Engineering",   subtitle: "YOLOv8 · RoBERTa · LangChain", color: "text-emerald-400", glow: "shadow-emerald-500/20", milestone: "First YOLO deployment" },
  { icon: Cpu,           title: "Edge AI",          subtitle: "RPi · Jetson · ESP32",         color: "text-orange-400", glow: "shadow-orange-500/20", milestone: "First edge deployment" },
  { icon: Globe,         title: "Full-Stack AI",    subtitle: "Next.js · AWS · Docker",       color: "text-pink-400",   glow: "shadow-pink-500/20",   milestone: "First AWS hosted app" },
];

function MobileStep({ step, index, isLast }: { step: JourneyStep; index: number; isLast: boolean }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon   = step.icon;

  return (
    <div className="flex gap-4" ref={ref}>
      <div className="flex flex-col items-center gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-10 h-10 rounded-xl border border-[var(--c-border)] bg-surface-2 flex items-center justify-center flex-shrink-0"
        >
          <Icon size={18} className={step.color} />
        </motion.div>
        {!isLast && <div className="w-px h-8 bg-[var(--c-border)] my-1" />}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="pb-6"
      >
        <div className="font-sans font-semibold text-fg text-sm">{step.title}</div>
        <div className="font-mono text-xs text-fg-3 mt-0.5">{step.subtitle}</div>
        {step.milestone && (
          <div className="mt-2 inline-block px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="font-mono text-[10px] text-accent-light">{step.milestone}</span>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function StepNode({ step, index }: { step: JourneyStep; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon   = step.icon;

  return (
    <div ref={ref} className="flex flex-col items-center flex-1 min-w-0 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 w-14 h-14 rounded-2xl border border-[var(--c-border)] bg-surface-2 flex items-center justify-center shadow-xl ${step.glow}`}
      >
        <Icon size={22} className={step.color} />
        <div className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-bg ${step.color.replace("text-", "bg-")}`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
        className="mt-3 text-center px-1"
      >
        <div className="font-sans font-semibold text-fg text-sm leading-snug">{step.title}</div>
        <div className="font-mono text-xs text-fg-3 mt-0.5 leading-snug">{step.subtitle}</div>
      </motion.div>

      {step.milestone && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          className="mt-3 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-center"
        >
          <span className="font-mono text-[10px] text-accent-light leading-none">{step.milestone}</span>
        </motion.div>
      )}
    </div>
  );
}

function ConnectorLine({ index, total }: { index: number; total: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  if (index >= total - 1) return null;
  return (
    <div ref={ref} className="flex-shrink-0 flex items-start pt-7 w-8 sm:w-12">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        style={{ originX: 0 }}
        className="h-px w-full bg-gradient-to-r from-[var(--c-border-md)] to-[var(--c-border)]"
      />
    </div>
  );
}

export default function Journey() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-accent-light tracking-widest uppercase mb-3 block">
            05 — Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-fg">
            My ML Journey at a Glance
          </h2>
          <p className="mt-4 font-sans text-sm text-fg-3 max-w-xl mx-auto">
            From pure mathematics to production edge AI — a continuous progression across disciplines.
          </p>
        </motion.div>

        {/* Desktop flow */}
        <div className="hidden sm:flex items-start justify-between gap-0 relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-[var(--c-border)] pointer-events-none" />
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-start flex-1">
              <StepNode step={step} index={i} />
              <ConnectorLine index={i} total={STEPS.length} />
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="sm:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <MobileStep key={step.title} step={step} index={i} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
