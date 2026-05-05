"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  { value: 1, suffix: "+", label: "Years Industry", sublabel: "Experience" },
  { value: 5, suffix: "+", label: "ML Models", sublabel: "Deployed" },
  { value: 3, suffix: "+", label: "Full-Stack", sublabel: "Products Shipped" },
  { value: 2, suffix: "+", label: "Edge AI", sublabel: "Deployments (RPi / Jetson)" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = duration / target;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-white tabular-nums">
      {count}
      <span className="text-accent-light">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/5 bg-surface p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Background accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 40% 60% at 80% 50%, rgba(26,79,255,0.05) 0%, transparent 70%)",
            }}
          />

          {/* Stats grid */}
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
                <span className="font-sans text-sm text-[#9ca3af] leading-snug mt-1">
                  {stat.label}
                </span>
                <span className="font-sans text-xs text-[#6b7280]">{stat.sublabel}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative max-w-3xl mx-auto text-center"
          >
            <p className="font-sans text-base sm:text-lg text-[#9ca3af] leading-relaxed">
              ML/AI Engineer with a{" "}
              <span className="text-white font-medium">
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
