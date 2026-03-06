"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    id: 1,
    title: "Own the Narrative",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
    description: "Position Jabra as the definitive authority on Voice AI in the workplace",
    detail: "Through exclusive research, expert commentary, and strategic thought leadership content, Jabra becomes the go-to voice when enterprise leaders discuss Voice AI. Media, analysts, and customers look to Jabra for insight — not just products.",
    color: "orange",
  },
  {
    id: 2,
    title: "Protect Market Share",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    description: "Defend ~60% global professional speakerphone market dominance",
    detail: "Real-time market intelligence identifies competitive threats before they materialise. Understand how Voice AI is reshaping buyer expectations and ensure Jabra's product narrative evolves ahead of the market.",
    color: "lime",
  },
  {
    id: 3,
    title: "Accelerate Product Confidence",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    description: "Real-world data to validate and prioritise roadmap decisions",
    detail: "Primary research with enterprise decision-makers reveals which Voice AI features matter most. Stop guessing what customers want — know it, backed by quarterly data from 5 key markets.",
    color: "indigo",
  },
  {
    id: 4,
    title: "Unlock New Revenue",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: "Identify adjacencies and enterprise expansion opportunities",
    detail: "Research uncovers emerging use cases and buyer segments Jabra hasn't yet addressed. From meeting room integrations to new vertical markets, discover where Voice AI creates whitespace for growth.",
    color: "gold",
  },
  {
    id: 5,
    title: "Strengthen IR & Analyst Relations",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    description: "Credible research as a strategic communications asset",
    detail: "Proprietary research data becomes a powerful tool for investor relations, analyst briefings, and executive communications. Demonstrate market leadership with evidence, not just claims.",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo", border: "border-indigo/30" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30" },
};

export default function Section4WhatDelivers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
          C-Suite Business Value
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          What This Delivers
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Five strategic pillars that translate research into measurable business impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const colors = colorClasses[pillar.color];
            const isExpanded = expandedId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setExpandedId(isExpanded ? null : pillar.id)}
                className={`bg-navy rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  isExpanded ? `${colors.border} ${colors.bg}` : "border-cream/10 hover:border-cream/20"
                } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                  </svg>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isExpanded ? colors.text : "text-cream"}`}>
                  {pillar.title}
                </h3>
                <p className="text-cream/60 text-sm mb-4">{pillar.description}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-cream/10">
                        <p className="text-cream/80 text-sm leading-relaxed">{pillar.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-4">
                  <span className={`text-xs ${colors.text}`}>
                    {isExpanded ? "Click to collapse" : "Click to expand"}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
