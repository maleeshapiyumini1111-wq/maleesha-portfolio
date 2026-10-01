"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Server, Database, Wrench } from "lucide-react";

const groups = [
  { title: "AI, ML & Computer Vision", icon: BrainCircuit, items: ["PyTorch", "OpenCV", "MediaPipe", "DeepFace", "Librosa", "SadTalker", "Applied Data Science", "NLP"] },
  { title: "Backend & MLOps", icon: Server, items: ["Python", "FastAPI", "Flask", "Spring Boot", "Node.js", "RESTful APIs"] },
  { title: "Databases & Architecture", icon: Database, items: ["MySQL", "MongoDB", "Microservices", "Data Reporting"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "Postman", "Linux"] },
];

export default function MLSkills() {
  const [hover, setHover] = useState(null);

  return (
    <section id="skills" className="section">
      <h2 className="h2">Core ML <span className="grad">Skills</span></h2>
      <p className="mt-3 text-gray-400">Hover a skill to highlight it.</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 transition hover:border-electric/40"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-gradient-to-br from-electric/30 to-neon/30 p-2"><g.icon size={20} className="text-white" /></span>
              <h3 className="font-semibold text-white">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <button
                  key={s} type="button"
                  onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(s)} onBlur={() => setHover(null)}
                  className={`tag cursor-default transition ${hover === s ? "!bg-neon/30 !text-white !border-neon shadow-glowPurple scale-105" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
