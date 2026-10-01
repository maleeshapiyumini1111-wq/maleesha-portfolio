"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certs = ["AI/ML Engineer – Stage 1 (SLIIT)", "Applied Data Science with Python (Simplilearn)",
  "Python for Beginners – CODL, University of Moratuwa (2024)","Front-End Web Development – CODL, University of Moratuwa","Web Design for Beginners – CODL, University of Moratuwa","Getting Started with German 1 – The Open University (2026)"
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="h2">Education &amp; <span className="grad">Certifications</span></h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
          <GraduationCap className="text-electric" />
          <h3 className="mt-4 font-semibold text-white">NDT in Information Technology</h3>
          <p className="mt-1 text-sm text-gray-400">Institute of Technology, University of Moratuwa (ITUM)</p>
          <span className="tag mt-4 inline-block">Expected 2027</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6">
          <Award className="text-neon" />
          <h3 className="mt-4 font-semibold text-white">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            {certs.map((c) => <li key={c} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />{c}</li>)}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
