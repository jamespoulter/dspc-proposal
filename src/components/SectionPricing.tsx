"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    tier: "Bronze",
    name: "Positioning Sprint",
    price: "$45,000",
    duration: "6 weeks",
    recommended: false,
    note: "Entry-level scope",
    color: "cream",
    includes: [
      "Stakeholder interviews (Chin + 2 others)",
      "Competitor landscape audit",
      "Strategic Positioning Brief",
      "Core messaging framework (positioning, pitch, tagline)",
      "1 × C-suite pitch deck",
      "2 × advisory calls post-delivery",
    ],
  },
  {
    tier: "Silver",
    name: "Full Repositioning",
    price: "$82,000",
    duration: "12 weeks",
    recommended: false,
    note: "Comprehensive scope",
    color: "cream",
    includes: [
      "All Bronze deliverables, plus:",
      "Customer perception audit (5–8 interviews)",
      "Website messaging overhaul (full copy recommendations)",
      "Thought leadership content plan for Chin (6-month calendar)",
      "Vertical expansion playbook",
      "Sales enablement pack (one-pagers, white paper outline)",
      "Internal launch workshop",
      "Monthly advisory call for 3 months post-delivery",
    ],
  },
  {
    tier: "Gold",
    name: "Repositioning + Amplification",
    price: "$120,000",
    duration: "12 weeks + 3-month amplification",
    recommended: true,
    note: "Maximum impact",
    color: "liminal-gold",
    includes: [
      "All Silver deliverables, plus:",
      "Full website copy rewrite (not just recommendations)",
      '"Why Audio Matters for AI" white paper (full production)',
      "Chin's first 6 LinkedIn thought leadership posts (ghostwritten)",
      "Speaker positioning strategy + event target list",
      "CTA Audio Board leverage plan",
      "PR/comms partner briefing and handover",
      "90-day amplification roadmap with weekly check-ins",
      "Ongoing advisory access through Month 6",
    ],
  },
];

const comparisonRows = [
  { feature: "Duration", bronze: "6 weeks", silver: "12 weeks", gold: "12 wks + 3 mths" },
  { feature: "Customer interviews", bronze: "—", silver: "5–8", gold: "5–8" },
  { feature: "Website copy", bronze: "—", silver: "Recommendations", gold: "Full rewrite" },
  { feature: "Thought leadership", bronze: "—", silver: "Content plan", gold: "Plan + 6 posts" },
  { feature: "Sales enablement", bronze: "—", silver: "✓", gold: "✓ + white paper" },
  { feature: "Ongoing advisory", bronze: "2 calls", silver: "3 months", gold: "6 months" },
];

export default function SectionPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-navy to-teal/10 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-liminal-gold" />

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-liminal-gold" />
            <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">Investment Options</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            Choose Your Level
          </h2>
          <p className="text-cream/70 text-lg mb-2">Three tiers designed to match your ambition and timeline.</p>
          <p className="text-cream/40 text-sm">All prices exclude tax. Custom packages available on request.</p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-xl border p-7 ${
                tier.recommended
                  ? "border-liminal-gold bg-teal/15 shadow-lg shadow-liminal-gold/10"
                  : "border-cream/10 bg-navy-light"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-liminal-gold text-navy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <div className="mb-6">
                <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">{tier.tier}</p>
                <h3 className="text-cream font-bold text-xl mb-3">{tier.name}</h3>
                <div className="font-condensed text-4xl font-black text-orange mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {tier.price}
                </div>
                <p className="text-cream/50 text-sm">{tier.duration}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.includes.map((item, j) => (
                  <li key={j} className={`flex gap-2 text-sm leading-relaxed ${j === 0 && item.includes("plus") ? "text-cream/40 text-xs italic" : "text-cream/70"}`}>
                    {j === 0 && item.includes("plus") ? null : (
                      <span className={`mt-1 flex-shrink-0 ${tier.recommended ? "text-liminal-gold" : "text-cream/30"}`}>✓</span>
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-navy-light rounded-xl border border-cream/10 overflow-hidden"
        >
          <div className="p-4 border-b border-cream/10">
            <h3 className="text-cream/60 text-xs font-medium tracking-widest uppercase">Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cream/10">
                  <th className="text-left p-4 text-cream/40 text-xs uppercase tracking-wider">Feature</th>
                  <th className="text-center p-4 text-cream/60 text-xs font-semibold uppercase">Bronze</th>
                  <th className="text-center p-4 text-cream/60 text-xs font-semibold uppercase">Silver</th>
                  <th className="text-center p-4 text-liminal-gold text-xs font-semibold uppercase">Gold ★</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-cream/5 ${i % 2 === 0 ? "bg-cream/2" : ""}`}>
                    <td className="p-4 text-cream/60 text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-cream/50 text-sm">{row.bronze}</td>
                    <td className="p-4 text-center text-cream/70 text-sm">{row.silver}</td>
                    <td className="p-4 text-center text-liminal-gold text-sm font-medium">{row.gold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
