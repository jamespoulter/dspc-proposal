"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "3",
    label: "domains transformed",
    sub: "Manufacturing (Ansbach), Sales (RFQ), and Logistics (Homburg) — with documented value and implementation roadmaps.",
    color: "text-orange",
  },
  {
    value: "E03.26",
    label: "G7 executive meeting",
    sub: "The hard, immovable deadline that requires a polished, accessible playbook — not another slide deck.",
    color: "text-gold",
  },
  {
    value: "Bain",
    label: "quality insight",
    sub: "You have access to world-class consulting outputs. The gap isn't knowledge — it's accessibility, format, and distribution.",
    color: "text-orange",
  },
];

export default function SectionMoment() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            The Moment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            You&apos;ve done the hard part.
            <span className="block text-orange">Now comes the harder part.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Bosch has already done something most organisations only talk about. You ran a rigorous,
            value-driven AI transformation across three domains — and you built a repeatable model
            that works. The challenge now isn&apos;t proving AI&apos;s value. It&apos;s making sure
            the rest of the organisation can actually use what you&apos;ve learned.
          </p>
        </div>

        {/* Three proof points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className="bg-navy-light border border-cream/10 rounded-2xl p-8 text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
              <div className="text-cream font-semibold mb-3 text-lg">{stat.label}</div>
              <p className="text-cream/65 text-sm leading-relaxed">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-orange/10 border border-orange/30 rounded-2xl px-8 py-5 max-w-2xl">
            <p className="text-cream/90 text-lg font-medium">
              The Playbook is how you turn a successful pilot into an{" "}
              <span className="text-orange">organisation-wide capability.</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
