"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const today = [
  "Dominant with audio engineering teams but invisible to C-suite",
  "GTM motion works bottom-up through supply chain — doesn't reach CPOs or AI strategy leads",
  'Positioning as a "DSP tool company" rather than an AI infrastructure platform',
  "Website and messaging optimised for audio nerds, not product decision-makers",
  "CTA Audio Board chairmanship under-leveraged for thought leadership",
];

const future = [
  "Recognised as the essential infrastructure layer for AI-powered products",
  'C-suite narrative: "What CUDA did for NVIDIA, Audio Weaver does for audio"',
  "New GTM motion reaching CPOs, CTOs, and AI product leads directly",
  "Repositioned brand, messaging, and web presence for the AI product era",
  "Chin established as the definitive industry voice on audio + AI",
];

export default function SectionChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gap" className="py-24 bg-gradient-to-b from-navy to-teal/10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span className="text-orange text-xs font-medium tracking-widest uppercase">The Strategic Imperative</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            The Gap
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl leading-relaxed">
            The distance between where DSP Concepts is today and where this programme takes you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Today */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-navy-light border border-cream/10 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-cream/30" />
              <h3 className="text-cream/60 font-semibold text-sm uppercase tracking-wider">Where DSPC is today</h3>
            </div>
            <ul className="space-y-4">
              {today.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex gap-3 text-cream/70 text-sm leading-relaxed"
                >
                  <span className="text-cream/30 mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-teal/20 border border-liminal-gold/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-liminal-gold" />
              <h3 className="text-liminal-gold font-semibold text-sm uppercase tracking-wider">Where this programme takes you</h3>
            </div>
            <ul className="space-y-4">
              {future.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex gap-3 text-cream text-sm leading-relaxed"
                >
                  <span className="text-liminal-gold mt-0.5 flex-shrink-0">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
