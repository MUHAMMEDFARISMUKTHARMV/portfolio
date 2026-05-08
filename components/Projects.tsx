"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project { title: string; type: string; description: string; tags: string[]; gradient: string; }

const PROJECTS: Project[] = [
  {
    title: "Document Extraction Chatbot",
    type: "LLM · RAG · NLP",
    description:
      "Government order chatbot with end-to-end RAG pipeline — document ingestion, vector retrieval, and context-aware LLM response generation over large document collections.",
    tags: ["LangChain", "LLMs", "RAG", "TensorFlow"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Plant Disease Detection App",
    type: "Computer Vision",
    description:
      "Real-time plant disease detection using YOLOv8 for leaf image classification, surfacing actionable insights for farmers and agronomists.",
    tags: ["YOLOv8", "OpenCV", "Python"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Deep Learning Prediction Models",
    type: "Deep Learning",
    description:
      "Predictive models on IMDb sentiment and spam detection datasets using CNN, RNN, and LSTM architectures with neural architecture optimisation via backpropagation tuning.",
    tags: ["CNN", "LSTM", "RNN", "PyTorch"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Customer Retail Trend Forecasting",
    type: "ML · Time Series",
    description:
      "Purchasing trend analysis and predictive modelling delivering actionable business intelligence for retail decision-making and revenue growth.",
    tags: ["Scikit-learn", "Time Series", "Pandas", "Python"],
    gradient: "from-orange-500 to-amber-600",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-[var(--c-border)] bg-surface overflow-hidden cursor-default
        hover:border-accent/25 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none`} />

      <div className="relative p-6 sm:p-7 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-fg-3 tracking-wider uppercase">{project.type}</span>
          <ArrowUpRight size={16} className="text-fg-3 group-hover:text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </div>
        <h3 className="font-sans font-semibold text-fg text-lg leading-snug mb-3 group-hover:text-accent-light transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-fg-2 leading-relaxed flex-1 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-[var(--c-border)] text-fg-3">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent-light tracking-widest uppercase mb-3 block">Projects</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-fg">Things I&apos;ve Built</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
