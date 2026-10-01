"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "AI Research & Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "Freelancing", href: "#creative", id: "creative" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => { const el = document.getElementById(l.id); el && obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-fit"
      aria-label="Primary"
    >
      <ul className="glass rounded-full px-2 py-2 flex items-center gap-1 overflow-x-auto">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={l.href}
              className={`block whitespace-nowrap rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm transition
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric
                ${active === l.id ? "bg-gradient-to-r from-electric to-neon text-white" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
