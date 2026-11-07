"use client";
import { motion } from "framer-motion";
import {
  Github,
  ScanEye,
  AudioLines,
  Leaf,
  Briefcase,
  ShieldAlert,
  Flower2,
  Film,
  Code2,
  BrainCircuit
} from "lucide-react";

const categories = [
  {
    name: "Software Engineering",
    icon: Code2,
    projects: [
      {
        title: "Zero Waste – Smart Surplus Food Redistribution Platform (Final Year Project)",
        status: "Completed",
        icon: Leaf,
        stack: ["React", "Spring Boot", "MySQL", "Microservices"],
        role: "Admin Dashboard, Communication Module, and Report Generation Module.",
        summary: "Built the admin dashboard, communication module and report generation module for a microservices platform that streamlines surplus food redistribution through real-time donor-receiver matching.",
        links: [
          { label: "GitHub", href: "https://github.com/dgdasun/FoodRedistributionSystem", icon: Github }
        ],
      },
      {
        title: "AI-Powered Anonymous Crisis Intervention & Evidence Platform",
        status: "Web & Security",
        icon: ShieldAlert,
        stack: ["JavaScript", "React", "Node.js", "Web Security"],
        summary: "Architected a scalable hybrid web platform offering anonymous crisis assistance and secure evidence logging for cyberbullying victims.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/AI-Powered-Anonymous-Crisis-Intervention-Evidence-Platform", icon: Github }
        ],
      },
      {
        title: "AI-Powered Career Guidance & Skill-Gap Platform",
        status: "Full-Stack AI",
        icon: Briefcase,
        stack: ["React", "Node.js", "Python NLP", "REST APIs"],
        summary: "Built a career-matching platform analyzing profiles across 7+ industries to generate dynamic skill-gap roadmaps via NLP algorithms.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/AI-powered-Career-Guidance-platform-from-scratch", icon: Github }
        ],
      },
      {
        title: "MindBloom – AI-Powered Digital Wellness Sanctuary for Students",
        status: "Completed",
        icon: Flower2,
        stack: ["React", "Flask", "MongoDB Atlas", "Google Gemini API"],
        summary: "Built a wellness platform for university students facing academic pressure and burnout: an empathetic Gemini-powered MindBot chat companion, a burnout assessment quiz, a verified counselor portal with certificate upload and admin approval for anonymous student connection, and a toolkit of mindfulness games and breathing exercises.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/MindBloom", icon: Github }
        ],
      },
    ],
  },
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    projects: [
      {
        title: "VigilDrive AI – Real-Time Driver Monitoring System",
        status: "Completed",
        icon: ScanEye,
        stack: ["Python", "OpenCV", "MediaPipe Face Mesh", "Pygame", "Proteus"],
        summary: "Engineered an edge computer vision application detecting drowsiness and cognitive distraction via 468 facial landmarks and OpenCV at 30+ FPS with EAR/MAR alerts.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/vigildrive-ai", icon: Github }
        ],
      },
      {
        title: "Voice-to-Animated Talking Avatar Generator",
        status: "Generative AI",
        icon: AudioLines,
        stack: ["FastAPI", "PyTorch", "SadTalker", "Librosa"],
        summary: "Developed an end-to-end Generative AI pipeline utilizing deep learning to synthesize lip-synced facial animations directly from audio clips, deployed via an asynchronous FastAPI backend.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/Voice-to-Animated-Talking-Avatar-Generator", icon: Github }
        ],
      },
      {
        title: "CineMatch AI – Movie Discovery & Recommendation Platform",
        status: "Recommender System",
        icon: Film,
        stack: ["Python", "Streamlit", "TMDb API", "Custom CSS"],
        summary: "Built a Netflix-style movie discovery app with smart search, content-based recommendations of up to 12 similar movies, genre browsing tabs and an interactive 5-star rating system, powered by real-time TMDb data.",
        links: [
          { label: "GitHub", href: "https://github.com/maleeshapiyumini1111-wq/CINEMATCH-AI", icon: Github }
        ],
      },
    ],
  },
];

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-electric to-neon opacity-0 blur-md transition duration-300 group-hover:opacity-60" />
      <div className="glass relative flex h-full flex-col rounded-2xl bg-[#0f172a]/80 p-6 transition group-hover:-translate-y-1">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-xl bg-gradient-to-br from-electric/30 to-neon/30 p-3">
            <p.icon size={22} className="text-white" />
          </span>
          <span className={`font-mono text-xs rounded-full px-3 py-1 border ${p.ongoing ? "border-green-400/40 bg-green-400/10 text-green-300" : "border-neon/40 bg-neon/10 text-purple-300"}`}>
            {p.status}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-snug text-white">{p.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        {p.role && (
          <p className="mt-4 text-sm text-gray-300">
            <span className="font-mono text-blue-300">My focus: </span>{p.role}
          </p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{p.summary}</p>

        {p.links.length > 0 && (
          <div className="mt-6 flex gap-3">
            {p.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-gray-200 transition hover:border-electric hover:text-white"
              >
                <l.icon size={15} /> {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="h2">Featured <span className="grad">Projects</span></h2>
      <p className="mt-3 max-w-2xl text-gray-400">Software engineering and machine learning, built end to end.</p>

      {categories.map((c) => (
        <div key={c.name} className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-gradient-to-br from-electric/30 to-neon/30 p-2">
              <c.icon size={20} className="text-white" />
            </span>
            <h3 className="text-2xl font-semibold text-white">{c.name}</h3>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {c.projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
