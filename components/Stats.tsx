"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem { value: number; suffix: string; label: string; sublabel: string; }

const STATS: StatItem[] = [
  { value: 1, suffix: "+", label: "Years Industry",  sublabel: "Experience" },
  { value: 5, suffix: "+", label: "ML Models",       sublabel: "Deployed" },
  { value: 3, suffix: "+", label: "Full-Stack",      sublabel: "Products Shipped" },
  { value: 2, suffix: "+", label: "Edge AI",         sublabel: "Deployments (RPi / Jetson)" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = 1200 / target;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-fg tabular-nums">
      {count}<span className="text-accent-light">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-[var(--c-border)] bg-surface p-8 sm:p-12 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 40% 60% at 80% 50%, rgba(26,79,255,0.05) 0%, transparent 70%)" }}
          />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center text-center gap-1"
              >
                <Counter target={stat.value} suffix={stat.suffix} />
                <span className="font-sans text-sm text-fg-2 leading-snug mt-1">{stat.label}</span>
                <span className="font-sans text-xs text-fg-3">{stat.sublabel}</span>
              </motion.div>
            ))}
          </div>

          <div className="relative h-px bg-gradient-to-r from-transparent via-fg/10 to-transparent mb-10" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative max-w-3xl mx-auto text-center"
          >
            <p className="font-sans text-base sm:text-lg text-fg-2 leading-relaxed">
              ML/AI Engineer with a{" "}
              <span className="text-fg font-medium">
                Master&apos;s in Computer Science (Data Analytics)
              </span>
              . I specialise in building complete AI-powered systems — trained models, REST APIs,
              web dashboards, mobile apps, and edge deployments — independently and end to end.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
