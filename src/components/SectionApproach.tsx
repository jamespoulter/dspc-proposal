"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    number: "01",
    label: "Targeting: Early April 2026 (E03.26)",
    title: "Foundation & MVP",
    color: "orange",
    items: [
      "Discovery: Review all source documents (Bain decks, process maps, deep-dives)",
      "Content architecture: Structure the full playbook into logical, navigable modules",
      "Microsite build: Branded platform shell, navigation, PDF library, prompt examples",
      "General Playbook: AI strategy overview, E2E reimagination methodology, key frameworks",
      "G7-ready: polished, secure, and accessible for executive review",
    ],
  },
  {
    number: "02",
    label: "Targeting: Q2 2026 (rolling)",
    title: "Domain Modules",
    color: "gold",
    items: [
      "Three standalone domain chapters: Manufacturing (Ansbach), Sales (RFQ), Logistics (Homburg)",
      "Each module: process maps, case studies, team exercises, workshop outlines, implementation guides",
      "Audio versions of all long-form content",
      "Internal comms toolkit: email templates, team briefing guides, adoption resources",
    ],
  },
  {
    number: "03",
    label: "Targeting: Q2–Q3 2026",
    title: "Interactive Layer",
    color: "orange",
    items: [
      "RAG AI chatbot: trained on all playbook content, tested with Bosch use cases",
      "Video explainers: scripted and produced for each major module",
      "Advanced prompt library: expanded, tested, categorised by function and use case",
      "Full GitHub handover (if selected) or ongoing hosting + update management",
      "Modular update workflow: process for adding new chapters as Bosch's AI programme grows",
    ],
  },
];

const timeline = [
  { date: "March", label: "Discovery + Architecture" },
  { date: "April", label: "MVP Live — G7 ready", highlight: true },
  { date: "May–June", label: "Domain Modules" },
  { date: "July–Sept", label: "Interactive Layer" },
  { date: "Ongoing", label: "Modular updates" },
];

export default function SectionApproach() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Tiered. Modular.
            <span className="block text-orange">Built for how you actually work.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            We work in three phases — each one delivering standalone value, each one building on the last.
            The MVP is live for your G7 meeting. The full platform grows through Q2 and Q3.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => {
            const isOrange = phase.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                className="bg-navy border border-cream/10 rounded-2xl p-8"
              >
                <div className={`text-6xl font-bold mb-2 ${isOrange ? "text-orange/20" : "text-gold/20"}`}>
                  {phase.number}
                </div>
                <p className={`text-xs font-medium tracking-wide mb-3 ${isOrange ? "text-orange" : "text-gold"}`}>
                  {phase.label}
                </p>
                <h3 className="text-cream font-bold text-xl mb-5">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOrange ? "bg-orange" : "bg-gold"}`} />
                      <span className="text-cream/65 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-navy border border-cream/10 rounded-2xl p-8"
        >
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-6 text-center">Timeline</p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-cream/10 z-0" />
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center z-10 flex-1">
                <div className={`w-3 h-3 rounded-full mb-3 ${item.highlight ? "bg-orange ring-4 ring-orange/20" : "bg-cream/30"}`} />
                <p className={`text-sm font-semibold mb-1 ${item.highlight ? "text-orange" : "text-cream/60"}`}>
                  {item.date}
                </p>
                <p className={`text-xs leading-tight ${item.highlight ? "text-cream" : "text-cream/50"}`}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
