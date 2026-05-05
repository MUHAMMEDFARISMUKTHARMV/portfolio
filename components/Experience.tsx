"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceEntry {
  role: string; company: string; date: string; current?: boolean; highlights: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "R&D Engineer – AI & Innovations",
    company: "Digital University Kerala",
    date: "Oct 2025 – Present",
    current: true,
    highlights: [
      "YOLOv8 models deployed on Raspberry Pi & Jetson Nano",
      "Full-stack web apps: Next.js + Supabase + AWS",
      "Android apps built with AI tools, connected to IoT devices",
      "End-to-end product ownership: model → API → hosted app",
      "Docker containerisation for ML inference services",
      "ML mentorship for student hackathons & innovation programmes",
    ],
  },
  {
    role: "R&D Intern – AI & IoT Systems",
    company: "Cisco thinQbator – DUK",
    date: "Apr 2025 – Oct 2025",
    highlights: [
      "ML model integration on Raspberry Pi for edge inference",
      "Real-time sensor visualisation dashboard in Next.js",
      "IoT data pipelines with RPi, Arduino, ESP32",
    ],
  },
  {
    role: "Consultant – ML Engineering",
    company: "Cleareye.ai",
    date: "Sep 2024 – Dec 2024",
    highlights: [
      "Fine-tuned RoBERTa for Trade Finance document NLP",
      "LayoutLM + OpenCV document analysis pipelines",
      "Siamese networks for signature verification",
      "YOLOv8 for seal/signature detection",
      "Synthetic dataset generation",
    ],
  },
  {
    role: "ML Intern → ML Research Intern",
    company: "Cleareye.ai + Digital University Kerala",
    date: "Feb 2024 – Aug 2024",
    highlights: [
      "LayoutLM fine-tuning for document extraction",
      "OCR-based document sanctity checks",
      "YOLO-based automated verification pipelines",
    ],
  },
];

function EntryCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="rounded-xl border border-[var(--c-border)] bg-surface p-5 sm:p-6 hover:border-accent/20 transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="font-sans font-semibold text-fg text-base leading-snug mb-0.5">{entry.role}</h3>
          <div className="flex items-center gap-1.5 text-accent-light text-sm">
            <Briefcase size={13} />
            <span className="font-sans">{entry.company}</span>
          </div>
        </div>
        {entry.current && (
          <span className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            CURRENT
          </span>
        )}
      </div>
      <span className="font-mono text-xs text-fg-3 block mb-4">{entry.date}</span>
      <ul className="flex flex-col gap-1.5">
        {entry.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-fg-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  const Dot = (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`w-4 h-4 rounded-full border-2 mt-6 ${
        entry.current
          ? "bg-green-400 border-green-300 shadow-lg shadow-green-500/50"
          : "bg-accent border-accent-light"
      }`}
    />
  );

  return (
    <div ref={ref} className="relative flex items-start gap-0 w-full">
      {/* Desktop alternating */}
      <div className="hidden lg:flex w-full items-start">
        <div className={`w-[calc(50%-24px)] ${isLeft ? "pr-10" : ""}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <EntryCard entry={entry} />
            </motion.div>
          )}
        </div>
        <div className="flex-shrink-0 w-12 flex flex-col items-center z-10">{Dot}</div>
        <div className={`w-[calc(50%-24px)] ${!isLeft ? "pl-10" : ""}`}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <EntryCard entry={entry} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="lg:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center gap-0">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`w-3.5 h-3.5 rounded-full border-2 mt-5 flex-shrink-0 ${
              entry.current ? "bg-green-400 border-green-300" : "bg-accent border-accent-light"
            }`}
          />
          <div className="w-px flex-1 bg-[var(--c-border)] mt-1" />
        </div>
        <motion.div
          className="flex-1 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <EntryCard entry={entry} />
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedTimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div style={{ scaleY, originY: 0 }} className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
      <div className="absolute inset-0 bg-[var(--c-border)]" />
    </div>
  );
}

export default function Experience() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent-light tracking-widest uppercase mb-3 block">
            03 — Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-fg">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatedTimelineLine />
          <div className="flex flex-col gap-0">
            {EXPERIENCE.map((entry, i) => (
              <TimelineEntry key={entry.company + i} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
