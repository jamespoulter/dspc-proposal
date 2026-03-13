"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const tiers = [
  {
    id: "foundation",
    name: "Foundation",
    subtitle: "G7-Ready Playbook",
    price: "From $30,000",
    timeline: "3–4 weeks",
    recommended: false,
    color: "cream",
    includes: [
      "Discovery & document review (all Bain source materials)",
      "Content architecture — full playbook structure mapped",
      "Microsite build — branded, secure, navigable",
      "General Playbook section — AI strategy, E2E methodology, key frameworks",
      "PDF download library (all core materials)",
      "Prompt library — starter set of tested AI prompts (10–15 examples)",
      "ThreePoint-hosted OR GitHub handover",
      "G7 executive meeting ready",
    ],
    excludes: [
      "Domain modules",
      "Audio narrations",
      "Video explainers",
      "RAG chatbot",
    ],
  },
  {
    id: "complete",
    name: "Complete Playbook",
    subtitle: "Full Knowledge Transfer Platform",
    price: "From $60,000",
    timeline: "10–12 weeks",
    recommended: true,
    color: "orange",
    includes: [
      "Everything in Foundation, plus:",
      "Three domain modules — Manufacturing, Sales, Logistics",
      "Team exercises and workshop outlines per domain",
      "RACI frameworks and implementation guides",
      "Expanded prompt library — 30–50 tested examples across all domains",
      "Audio narrations of all long-form content",
      "Internal comms toolkit (adoption emails, briefing templates, team guides)",
    ],
    excludes: [
      "RAG chatbot",
      "Video production",
    ],
  },
  {
    id: "full",
    name: "Full Interactive Platform",
    subtitle: "The Living Playbook",
    price: "From $90,000",
    timeline: "16–20 weeks",
    recommended: false,
    color: "gold",
    includes: [
      "Everything in Complete Playbook, plus:",
      "RAG-powered AI chatbot — trained on all content, tested, deployed",
      "Video explainers — scripted and produced (6–8 videos)",
      "Advanced prompt library — 50+ prompts, categorised, regularly updated",
      "Ongoing update mechanism — add new chapters without a rebuild",
      "12-month hosting & maintenance (if ThreePoint-hosted)",
      "Full GitHub handover package (if internal deployment selected)",
    ],
    excludes: [],
  },
];

export default function SectionPricing() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl z-10"
      >
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
            Investment
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Three tiers.
            <span className="block text-orange">One outcome.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Each tier delivers standalone value. Together, they build a complete, living AI resource platform.
            We recommend starting with the Foundation tier to hit your April deadline, then building the rest through Q2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
              className={`relative bg-navy-light rounded-2xl p-8 flex flex-col ${
                tier.recommended
                  ? "border-2 border-orange ring-4 ring-orange/10"
                  : "border border-cream/10"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange text-navy text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${
                  tier.color === "orange" ? "text-orange" :
                  tier.color === "gold" ? "text-gold" : "text-cream"
                }`}>
                  {tier.name}
                </h3>
                <p className="text-cream/60 text-sm">{tier.subtitle}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-cream/10">
                <div className="text-3xl font-bold text-cream mb-1">{tier.price}</div>
                <div className="text-cream/50 text-sm">{tier.timeline}</div>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {tier.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-cream/75 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
                {tier.excludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-cream/25 mt-0.5 flex-shrink-0" />
                    <span className="text-cream/35 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-navy-light border border-cream/10 rounded-xl px-8 py-5 max-w-3xl mx-auto text-center"
        >
          <p className="text-cream/70 text-sm leading-relaxed">
            Pricing is based on the scope described above. Final investment will be confirmed following
            document review and a short scoping call.{" "}
            <span className="text-cream/90">We want to give you an accurate number — not a padded estimate.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
