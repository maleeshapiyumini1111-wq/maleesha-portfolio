"use client";
import { useState } from "react";
import { MapPin, Mail, Github, Linkedin, Send } from "lucide-react";

const EMAIL = "maleeshapiyumini0707@gmail.com";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  // No backend needed: opens the visitor's mail client with the message prefilled.
  // Swap for an API route or a service like Formspree/Resend when ready.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-electric";

  return (
    <section id="contact" className="section">
      <h2 className="h2">Get in <span className="grad">touch</span></h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
          <input required placeholder="Name" aria-label="Name" value={f.name} onChange={on("name")} className={field} />
          <input required type="email" placeholder="Email" aria-label="Email" value={f.email} onChange={on("email")} className={field} />
          <textarea required rows={5} placeholder="Message" aria-label="Message" value={f.message} onChange={on("message")} className={field} />
          <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-neon px-6 py-3 font-semibold text-white shadow-glowBlue transition hover:shadow-glowPurple">
            <Send size={16} /> Send message
          </button>
          {sent && <p role="status" className="text-sm text-green-300">Your email app should open with the message ready to send.</p>}
        </form>

        <div className="glass space-y-5 rounded-2xl p-6">
          <p className="flex items-center gap-3 text-gray-300"><MapPin className="text-electric" size={18} /> Colombo, Sri Lanka</p>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-gray-300 transition hover:text-white"><Mail className="text-neon" size={18} /> {EMAIL}</a>
          <div className="flex gap-3 pt-2">
            <a href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BL0yHx8%2BDTUetmBUHt7cA%2FQ%3D%3D" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-200 transition hover:border-electric hover:text-white"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/maleeshapiyumini1111-wq" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-200 transition hover:border-neon hover:text-white"><Github size={16} /> GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
