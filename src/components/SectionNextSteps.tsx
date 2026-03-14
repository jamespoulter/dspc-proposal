"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function SectionNextSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    role: "",
    package: "",
    comments: "",
    nextSteps: [] as string[],
  });

  const nextStepOptions = [
    "Schedule a discovery call with James",
    "Arrange a formal proposal presentation",
    "Send me additional information",
    "Connect me with a reference client",
  ];

  const toggleNextStep = (step: string) => {
    setForm((f) => ({
      ...f,
      nextSteps: f.nextSteps.includes(step)
        ? f.nextSteps.filter((s) => s !== step)
        : [...f.nextSteps, step],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`DSP Concepts AI Positioning Programme — Response from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nRole / Title: ${form.role}\nPackage Preference: ${form.package}\n\nComments: ${form.comments}\n\nPreferred Next Steps:\n${form.nextSteps.map((s) => `- ${s}`).join("\n")}`
    );
    window.location.href = `mailto:jp@threepoint.io?cc=jemma@poulterventures.com,jess@theliminalgroup.co&subject=${subject}&body=${body}`;
  };

  return (
    <section id="nextsteps" className="py-24 bg-gradient-to-b from-navy via-teal/10 to-navy relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-liminal-gold to-teal" />

      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-liminal-gold" />
            <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">Ready to Begin?</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            Next Steps
          </h2>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-orange pl-6 my-8">
            <p className="text-cream text-xl leading-relaxed italic">
              &ldquo;This programme doesn&apos;t just update your messaging — it repositions DSP Concepts for the AI era.&rdquo;
            </p>
          </blockquote>

          <p className="text-cream/70 text-lg">
            Share your interest and we&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-navy-light border border-cream/10 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-cream/60 text-xs tracking-wider uppercase mb-2">Name *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-navy border border-cream/20 px-4 py-3 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-orange transition-colors text-sm"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-cream/60 text-xs tracking-wider uppercase mb-2">Role / Title *</label>
              <input
                required
                type="text"
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                className="w-full bg-navy border border-cream/20 px-4 py-3 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-orange transition-colors text-sm"
                placeholder="Your role or title"
              />
            </div>
          </div>

          {/* Package */}
          <div>
            <label className="block text-cream/60 text-xs tracking-wider uppercase mb-3">Package Preference</label>
            <div className="flex flex-wrap gap-3">
              {["Bronze", "Silver", "Gold", "Not sure yet"].map((pkg) => (
                <label key={pkg} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="package"
                    value={pkg}
                    checked={form.package === pkg}
                    onChange={(e) => setForm((f) => ({ ...f, package: e.target.value }))}
                    className="accent-orange"
                  />
                  <span className={`text-sm ${form.package === pkg ? "text-orange font-semibold" : "text-cream/60"}`}>{pkg}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-cream/60 text-xs tracking-wider uppercase mb-2">Comments or Questions</label>
            <textarea
              rows={4}
              value={form.comments}
              onChange={(e) => setForm((f) => ({ ...f, comments: e.target.value }))}
              className="w-full bg-navy border border-cream/20 px-4 py-3 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-orange transition-colors text-sm resize-none"
              placeholder="Any questions or context you'd like to share…"
            />
          </div>

          {/* Next steps */}
          <div>
            <label className="block text-cream/60 text-xs tracking-wider uppercase mb-3">Preferred Next Steps</label>
            <div className="space-y-2">
              {nextStepOptions.map((step) => (
                <label key={step} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.nextSteps.includes(step)}
                    onChange={() => toggleNextStep(step)}
                    className="accent-orange"
                  />
                  <span className={`text-sm ${form.nextSteps.includes(step) ? "text-cream" : "text-cream/60"} group-hover:text-cream transition-colors`}>
                    {step}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-navy font-bold py-4 rounded hover:bg-orange/90 transition-colors tracking-wide text-sm"
          >
            Send to ThreePoint →
          </button>
        </motion.form>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 text-cream/40 text-sm mb-6">
            <a href="mailto:jp@threepoint.io" className="hover:text-orange transition-colors">jp@threepoint.io</a>
            <span>·</span>
            <a href="mailto:jemma@poulterventures.com" className="hover:text-orange transition-colors">jemma@poulterventures.com</a>
            <span>·</span>
            <a href="mailto:jess@theliminalgroup.co" className="hover:text-liminal-gold transition-colors">jess@theliminalgroup.co</a>
            <span>·</span>
            <a href="https://threepoint.io" target="_blank" rel="noopener noreferrer" className="hover:text-orange transition-colors">threepoint.io</a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-cream/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image src="/threepoint-logo-transparent.png" alt="ThreePoint" width={100} height={28} className="h-6 w-auto object-contain" />
              <div className="w-px h-5 bg-cream/20" />
              <Image src="/liminal-logo-white.png" alt="The Liminal Group" width={100} height={28} className="h-5 w-auto object-contain opacity-70" />
            </div>
            <p className="text-cream/30 text-xs text-center">
              A ThreePoint × Liminal Group Proposal · Confidential · March 2026
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
