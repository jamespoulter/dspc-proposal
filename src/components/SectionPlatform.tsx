"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    title: "Reposition the Brand",
    short: 'Move from "audio DSP tooling" to "the infrastructure layer for intelligent audio"',
    detail:
      "Comprehensive messaging overhaul — from tagline and elevator pitch to website copy, sales decks, and investor materials. Every touchpoint reframed around the AI product maker, not the audio engineer. The CUDA analogy becomes the organising narrative.",
  },
  {
    number: "02",
    title: "Elevate Chin as Industry Voice",
    short: "Establish Chin Beckmann as the go-to authority on audio infrastructure for AI",
    detail:
      "Speaker positioning strategy, thought leadership content calendar, CTA Board leverage plan, media and podcast placement, LinkedIn presence overhaul. Chin already has the credentials and the platform — this programme gives her the amplification strategy.",
  },
  {
    number: "03",
    title: "Open the C-Suite Door",
    short: "Build a GTM narrative that reaches CPOs, CTOs, and AI product strategy leads",
    detail:
      "New messaging framework designed for non-audio executives. Reframe Audio Weaver's value proposition in the language of AI product architecture, time-to-market, and platform scalability — not DSP algorithms. Create C-suite-ready collateral distinct from the engineering sales motion.",
  },
  {
    number: "04",
    title: "Expand into AI Product Verticals",
    short: "Identify and prioritise the highest-value new verticals for agentic AI audio",
    detail:
      "Market mapping across robotics, AR/VR, smart home, hearables, conferencing, automotive AI, and medical devices. Score each vertical by TAM, buyer readiness, DSPC existing traction, and competitive gap. Deliver a prioritised vertical expansion playbook with entry strategies.",
  },
  {
    number: "05",
    title: "Arm the Sales Team",
    short: "Equip sales with materials, narratives, and proof points that land with AI buyers",
    detail:
      'New pitch deck, objection-handling guide, case study framework, competitive positioning one-pagers, and a "Why Audio Matters for AI" white paper designed to be shared by champions inside target accounts. Sales enablement that bridges the gap between engineering love and C-suite budget approval.',
  },
];

export default function SectionPlatform() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="delivers" className="py-24 bg-navy relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-liminal-gold" />

      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-liminal-gold" />
            <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">C-Suite Business Value</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            What This Delivers
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed">
            Five strategic pillars that translate repositioning into measurable business impact.
          </p>
        </motion.div>

        <div className="space-y-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-cream/10 rounded-xl overflow-hidden hover:border-orange/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-6 p-6 text-left group"
              >
                <span className="font-condensed text-3xl font-black text-orange/40 group-hover:text-orange transition-colors flex-shrink-0"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {pillar.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-cream font-semibold text-base mb-1">{pillar.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{pillar.short}</p>
                </div>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border border-cream/20 flex items-center justify-center transition-transform ${openIndex === i ? "rotate-45" : ""}`}>
                  <span className="text-cream/60 text-xs">+</span>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-20 border-t border-cream/5">
                      <p className="text-cream/70 text-sm leading-relaxed pt-4">{pillar.detail}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
