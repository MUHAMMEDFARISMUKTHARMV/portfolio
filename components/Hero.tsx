"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import ResumeModal from "./ResumeModal";

const ROLES = ["AI/ML Engineer", "AI Developer", "Data Scientist"];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay]     = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    setDisplay(word.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = [];

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const onMouse = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMouse, { passive: true });

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.35 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) { p.vx += dx * 0.00015; p.vy += dy * 0.00015; }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26,79,255,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(26,79,255,${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}

export default function Hero() {
  const typedText              = useTypingEffect(ROLES);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,79,255,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(128,128,128,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-accent-light tracking-wider">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight mb-4"
        >
          Muhammed Faris{" "}
          <span className="gradient-text">Mukthar M V</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-xl sm:text-2xl md:text-3xl text-accent-light font-medium">
            {typedText}
            <span className="inline-block w-0.5 h-7 bg-accent-light ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans text-base sm:text-lg text-fg-2 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From model training and LLM/RAG integration to full-stack web apps, Android apps, and edge deployments — I build and ship complete AI systems independently.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => setResumeOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <Download size={16} strokeWidth={2.5} />
            Download Resume
          </button>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-[var(--c-border-lg)] bg-[var(--c-hover)] hover:bg-[var(--c-hover-md)] text-fg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Eye size={16} strokeWidth={2.5} />
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fg-3 hover:text-fg transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
