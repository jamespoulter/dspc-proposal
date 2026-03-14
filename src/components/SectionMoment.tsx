"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "70%", label: "Automotive Market Share", sub: "OEMs on Audio Weaver by 2026" },
  { value: "0%", label: "Customer Churn", sub: "Zero churn once deployed" },
  { value: "25+", label: "SoC Partners", sub: "Qualcomm, MediaTek, AMD, NXP, TI, Samsung…" },
  { value: "100+", label: "Product Brands", sub: "BMW, Tesla, Meta, B&O, Peloton, GoPro…" },
  { value: "$200B+", label: "AI Edge Device TAM", sub: "Physical AI products shipping by 2028" },
];

function StatTile({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-navy-light border border-liminal-gold/20 rounded-lg p-6 hover:border-orange/40 transition-colors group"
    >
      <div className="font-condensed text-5xl font-black text-orange mb-2 group-hover:text-liminal-gold transition-colors"
        style={{ fontFamily: "var(--font-barlow-condensed)" }}>
        {stat.value}
      </div>
      <div className="text-cream font-semibold text-sm mb-1">{stat.label}</div>
      <div className="text-cream/50 text-xs leading-relaxed">{stat.sub}</div>
    </motion.div>
  );
}

export default function SectionMoment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="moment" className="py-24 bg-navy relative">
      {/* Teal accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal" />

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
            <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">The Opportunity</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            The Market Moment
          </h2>
          <p className="text-cream/70 text-lg max-w-3xl leading-relaxed">
            AI is moving off the screen and into the physical world — robots, vehicles, hearables, smart home, conferencing. Every one of these products needs to hear, speak, and understand. Audio is the missing sense for AI, and the companies building this next wave don&apos;t yet know they have an audio infrastructure problem.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {stats.map((stat, i) => (
            <StatTile key={i} stat={stat} index={i} />
          ))}
        </div>

        <p className="text-cream/30 text-xs text-right">
          Source: DSP Concepts internal data; industry analyst estimates
        </p>
      </div>
    </section>
  );
}
