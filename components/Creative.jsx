"use client";
import { motion } from "framer-motion";
import { Mic, Film, ExternalLink, Sparkles, MessageCircle } from "lucide-react";

export default function Creative() {
  return (
    <section id="creative" className="section py-20">
      <div className="mx-auto max-w-4xl px-4">
        
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-neon/20 p-2.5 text-purple-400">
            <Mic size={24} />
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Freelancing &amp; <span className="grad">Voice Artistry</span>
            </h2>
            <p className="text-sm text-gray-400">
              Voice artistry, cinematic discussions, and media storytelling.
            </p>
          </div>
        </div>

        {/* Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-mono text-purple-300">
                <Sparkles size={14} /> Voice Artist &amp; Content Creator
              </div>
              <h3 className="text-xl font-semibold text-white">
                Film Analysis &amp; Voiceover Commentary
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-gray-300">
                Apart from building AI models, I create voice-driven content and in-depth cinematic reviews. I share narrations, story breakdowns, and media commentary on my official Facebook page.
              </p>
            </div>

            {/* Direct Link to Facebook Page */}
            <div className="flex-shrink-0">
              <a
                href="https://www.facebook.com/profile.php?id=61581000390184&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-pink-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:opacity-95"
              >
                <Film size={18} /> Watch Reviews / Page <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Services Badges & Contact */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div className="flex flex-wrap gap-2">
              <span className="tag text-xs">Film Commentary</span>
              <span className="tag text-xs">Commercial Voiceover</span>
              <span className="tag text-xs">Narration</span>
            </div>

            <a
              href="mailto:maleeshapiyumini0707@gmail.com?subject=Voiceover%20Inquiry%20-%20Freelance"
              className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition"
            >
              <MessageCircle size={14} /> Inquire for Voice Projects →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}