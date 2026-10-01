"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, Cpu, Brain, ScanFace } from "lucide-react";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const rise = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const float = (d) => ({ animate: { y: [0, -12, 0] }, transition: { duration: 4.5, repeat: Infinity, delay: d, ease: "easeInOut" } });

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-28 pb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-12">
        
        {/* Left Content Column */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.span variants={rise} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs sm:text-sm text-green-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to Machine Learning &amp; AI Engineering Internships
          </motion.span>

          <motion.h1 variants={rise} className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Maleesha Piyumini <br className="hidden sm:inline" />
            <span className="grad">Pathirana</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-4 font-mono text-base sm:text-lg text-blue-300">
            Machine Learning &amp; AI Engineering Undergraduate
          </motion.p>
          <motion.p variants={rise} className="mt-4 max-w-xl text-base sm:text-lg text-gray-400">
            Specializing in Computer Vision, Generative AI, and Scalable Backend Architectures.
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="rounded-xl bg-gradient-to-r from-electric to-neon px-6 py-3 font-semibold text-white shadow-glowBlue transition hover:shadow-glowPurple hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Explore AI Projects
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={18} /> Download Resume
            </a>
            <div className="flex gap-2">
              <a 
                aria-label="GitHub" 
                href="https://github.com/maleeshapiyumini111-wq" 
                target="_blank" 
                rel="noreferrer" 
                className="glass rounded-xl p-3 text-gray-300 transition hover:text-white hover:shadow-glowBlue"
              >
                <Github size={20} />
              </a>
              <a 
                aria-label="LinkedIn" 
                href="https://linkedin.com/in/maleesha-piyumini" 
                target="_blank" 
                rel="noreferrer" 
                className="glass rounded-xl p-3 text-gray-300 transition hover:text-white hover:shadow-glowPurple"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Photo & Floating Icons Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:col-span-5"
        >
          {/* Glowing Background Radial */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-electric/30 to-neon/30 blur-2xl opacity-60" />

          {/* Profile Image Container */}
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full p-1.5 bg-gradient-to-br from-electric via-neon to-purple-600 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[#0b0f19] bg-[#0b0f19]">
              <Image
                src="/profile.jpg"
                alt="Maleesha Pathirana"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating AI Badges around the image */}
          <motion.div {...float(0)} className="glass absolute -top-4 -left-2 sm:left-4 rounded-2xl p-3 shadow-lg border border-white/10">
            <Brain className="text-electric" size={26} />
          </motion.div>
          <motion.div {...float(1.2)} className="glass absolute top-1/2 -right-4 sm:-right-2 -translate-y-1/2 rounded-2xl p-3 shadow-lg border border-white/10">
            <ScanFace className="text-neon" size={26} />
          </motion.div>
          <motion.div {...float(2.2)} className="glass absolute -bottom-4 left-10 rounded-2xl p-3 shadow-lg border border-white/10">
            <Cpu className="text-cyan-400" size={26} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}