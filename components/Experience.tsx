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
      "Built a full-stack physical education management system combining IoT hardware, computer vision, and AI analytics for Kerala state schools",
      "Independently designed and delivered a children's health monitoring AI platform — web app, Android app, IoT integration, computer vision inference, and cloud analytics dashboard",
      "Trained and deployed YOLOv8 on Raspberry Pi & Jetson Nano for real-time student activity detection and performance monitoring",
      "Building a RAG-based student health chatbot using LangChain and LLMs grounded in real health and performance data",
      "Full-stack web app: Next.js, Supabase/PostgreSQL, AWS EC2/S3 with hierarchical role-based access",
      "Developed Android mobile app connecting IoT hardware over Bluetooth/Wi-Fi for real-time data capture",
      "Containerised ML inference and backend services using Docker for reproducible deployments",
      "Mentored students on ML model selection, applied AI research, and hackathon projects",
    ],
  },
  {
    role: "R&D Intern – AI & IoT Systems",
    company: "Cisco thinQbator – DUK",
    date: "Apr 2025 – Oct 2025",
    highlights: [
      "Integrated trained ML models with Raspberry Pi for real-time edge detection and classification",
      "Built Next.js dashboard streaming live IoT sensor data and ML model predictions in real time",
      "Developed structured IoT data pipelines using Raspberry Pi, Arduino, and ESP32",
    ],
  },
  {
    role: "Consultant – Machine Learning Engineering",
    company: "Cleareye.ai",
    date: "Sep 2024 – Dec 2024",
    highlights: [
      "Fine-tuned RoBERTa for entity and noun detection in Trade Finance NLP tasks",
      "Engineered LayoutLM + OpenCV document layout analysis pipelines, reducing manual processing effort",
      "Implemented Siamese networks for signature verification integrated into production workflows",
      "Built YOLOv8 seal/signature detection system for automated document validation",
      "Created synthetic datasets to address data scarcity and improve model generalisation",
    ],
  },
  {
    role: "ML Intern → ML Research Intern",
    company: "Cleareye.ai + Digital University Kerala",
    date: "Feb 2024 – Aug 2024",
    highlights: [
      "Fine-tuned LayoutLM for complex document extraction and content/metadata classification pipelines",
      "Generated synthetic training datasets to expand sample size and improve model robustness",
      "Automated document sanctity checks using structural OCR and LayoutLM layout analysis",
      "Automated seal and signature detection using YOLO-based pipelines",
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
        entry.current ? "bg-green-400 border-green-300 shadow-lg shadow-green-500/50" : "bg-accent border-accent-light"
      }`}
    />
  );

  return (
    <div ref={ref} className="relative flex items-start w-full">
      {/* Desktop */}
      <div className="hidden lg:flex w-full items-start">
        <div className={`w-[calc(50%-24px)] ${isLeft ? "pr-10" : ""}`}>
          {isLeft && (
            <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <EntryCard entry={entry} />
            </motion.div>
          )}
        </div>
        <div className="flex-shrink-0 w-12 flex flex-col items-center z-10">{Dot}</div>
        <div className={`w-[calc(50%-24px)] ${!isLeft ? "pl-10" : ""}`}>
          {!isLeft && (
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <EntryCard entry={entry} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
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
    <div ref={ref} className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden" aria-hidden="true">
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
          <span className="font-mono text-xs text-accent-light tracking-widest uppercase mb-3 block">Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-fg">Where I&apos;ve Worked</h2>
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
