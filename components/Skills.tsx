"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillGroup { label: string; accent: boolean; muted?: boolean; skills: string[]; }

const SKILL_GROUPS: SkillGroup[] = [
  { label: "ML / AI",         accent: true,  skills: ["YOLOv8","LayoutLM","RoBERTa","Siamese Networks","CNN/RNN/LSTM","LLMs","LangChain"] },
  { label: "Web & Mobile",    accent: false, skills: ["Next.js","Node.js","REST APIs","Android Studio","Supabase"] },
  { label: "Cloud & DevOps",  accent: false, skills: ["AWS EC2","AWS S3","Docker","Model Deployment"] },
  { label: "Languages",       accent: false, skills: ["Python","JavaScript","SQL","Embedded C/C++","MicroPython"] },
  { label: "Edge Hardware",   accent: false, muted: true, skills: ["Raspberry Pi","Jetson Nano","ESP32","Arduino"] },
  { label: "Libraries",       accent: false, skills: ["PyTorch","TensorFlow","OpenCV","Scikit-learn","Azure ML"] },
];

function SkillTag({ name, accent, muted, delay }: { name: string; accent: boolean; muted?: boolean; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default select-none
        ${accent
          ? "bg-accent/15 border-accent/40 text-accent-light hover:bg-accent/25 hover:border-accent/60"
          : muted
          ? "bg-[var(--c-hover)] border-[var(--c-border)] text-fg-3 hover:text-fg-2 hover:border-[var(--c-border-md)]"
          : "bg-surface-2 border-[var(--c-border)] text-fg-2 hover:bg-[var(--c-hover-md)] hover:text-fg hover:border-[var(--c-border-lg)]"
        }`}
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent-light tracking-widest uppercase mb-3 block">
            02 — Skills
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-fg">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="rounded-xl border border-[var(--c-border)] bg-surface p-5 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {group.accent && <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />}
                <span className={`font-mono text-xs font-semibold tracking-widest uppercase ${group.accent ? "text-accent-light" : "text-fg-3"}`}>
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <SkillTag key={skill} name={skill} accent={group.accent} muted={group.muted} delay={0.05 + si * 0.04} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
