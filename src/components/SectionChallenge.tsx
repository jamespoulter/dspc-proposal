"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const challenges = [
  {
    number: "01",
    title: "The Format Gap",
    body: "Traditional documents — PDFs, slide decks, printed guides — were designed for a pre-AI world. They don't update, don't respond, and don't meet people where they are. If your organisation is using AI to work, your learning infrastructure needs to match.",
    color: "orange",
  },
  {
    number: "02",
    title: "Depth by Function",
    body: "A logistics engineer in Ansbach has different needs to a sales lead in Chicago. One playbook, one format, one level of depth doesn't serve either of them well. Real activation requires content that's modular, role-specific, and built to grow.",
    color: "gold",
  },
  {
    number: "03",
    title: "Activation vs. Consumption",
    body: "Reading about AI doesn't make anyone better at using it. The most effective learning combines context, worked examples, interactive tools, and real prompts — so people build capability by doing, not just by knowing.",
    color: "orange",
  },
];

export default function SectionChallenge() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-orange/[0.07] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Your operations run on AI.
            <span className="block text-orange">Your learning infrastructure doesn&apos;t — yet.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto leading-relaxed">
            Bosch has built something remarkable — a working AI programme with documented outcomes
            across three domains. The knowledge is there. The gap is in how it gets shared, applied,
            and built upon. That&apos;s not a knowledge problem. It&apos;s an infrastructure problem.
          </p>
        </div>

        {/* Three challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => {
            const isOrange = challenge.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                className="bg-navy border border-cream/10 rounded-2xl p-8 hover:border-orange/30 transition-colors"
              >
                <div className={`text-5xl font-bold mb-4 ${isOrange ? "text-orange/30" : "text-gold/30"}`}>
                  {challenge.number}
                </div>
                <h3 className={`font-bold text-xl mb-4 ${isOrange ? "text-orange" : "text-gold"}`}>
                  {challenge.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">{challenge.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-l-4 border-orange pl-6 max-w-3xl mx-auto"
        >
          <p className="text-xl text-cream/85 leading-relaxed">
            The goal is to convert comprehensive project outcomes into a more accessible,
            user-friendly format that Bosch employees can readily utilise — and that evolves
            as your AI programme does.
          </p>
          <footer className="mt-3 text-orange font-medium text-sm tracking-wide">
            — Bosch Project Brief, March 2026
          </footer>
        </motion.div>
      </motion.div>
    </section>
  );
}
