import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#070815] via-[#0a0f1f] to-[#070815] text-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full blur-3xl bg-cyan-500/20" />
      </div>

      <div className="relative max-w-xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Let's build something fun
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/80"
        >
          Send a note and I’ll get back with ideas, timelines, and next steps.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-sm"
        >
          <label className="block text-sm text-white/70">Your email</label>
          <div className="mt-2 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3">
            <Mail className="w-4 h-4 text-white/60" />
            <input type="email" placeholder="you@domain.com" className="w-full bg-transparent py-3 outline-none placeholder:text-white/40 text-white" />
          </div>
          <label className="block text-sm text-white/70 mt-6">Message</label>
          <textarea rows={4} placeholder="Tell me about your idea..." className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 outline-none placeholder:text-white/40 text-white" />
          <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-medium px-5 py-3">
            <Send className="w-4 h-4" /> Send
          </button>
        </motion.form>
      </div>
    </section>
  );
}
