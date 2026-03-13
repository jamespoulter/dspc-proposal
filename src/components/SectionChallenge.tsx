"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const challenges = [
  {
    number: "01",
    title: "Format",
    body: "Slide decks are built for boardrooms, not learning. Converting expert content into a format that works for a logistics manager in Homburg or a sales lead in Chicago requires real design and editorial thinking.",
    color: "orange",
  },
  {
    number: "02",
    title: "Modular Depth",
    body: "One playbook doesn't fit every function. Manufacturing has different needs to Sales. The platform needs to be tiered and domain-specific — with a shared foundation and specialist chapters that can grow throughout the year.",
    color: "gold",
  },
  {
    number: "03",
    title: "Activation at Scale",
    body: "Reading a playbook is one thing. Knowing how to apply it is another. The most effective knowledge transfer combines readable content, worked examples, prompt libraries, and interactive tools — so people can learn by doing, not just by reading.",
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
            Dense consultant outputs.
            <span className="block text-orange/80">Lean internal bandwidth.</span>
            <span className="block">Zero time.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            The Bain decks are thorough. The process maps are detailed. The domain deep-dives are excellent.
            But Bosch employees — the people who need to apply this thinking — can&apos;t be expected to
            navigate 200-slide decks while running live operations. Knowledge transfer requires a different format.
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

        {/* Bosch quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-l-4 border-orange pl-6 max-w-3xl mx-auto"
        >
          <p className="text-xl text-cream/85 italic leading-relaxed">
            &ldquo;The goal is to convert comprehensive project outcomes into a more accessible,
            user-friendly cookbook format that Bosch employees can readily utilise.&rdquo;
          </p>
          <footer className="mt-3 text-orange font-medium text-sm tracking-wide">
            — Bosch Project Brief, March 2026
          </footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
