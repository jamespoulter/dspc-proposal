"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const phases = [
  {
    id: 1,
    name: "Foundation",
    timeline: "Months 1-3",
    color: "orange",
    deliverables: [
      "Expert Panel Assembly — 5 global Voice AI experts recruited and onboarded",
      "Baseline Research — Initial landscape analysis and competitive positioning review",
      "Executive Interviews — Deep-dive conversations with Jabra leadership to align research priorities",
      "Programme Kick-off — Strategic alignment workshop with key stakeholders",
    ],
  },
  {
    id: 2,
    name: "Insight",
    timeline: "Months 4-9",
    color: "lime",
    deliverables: [
      "Quarterly Tracker Launch — First wave across 5 markets via Delineate platform",
      "Copenhagen Workshop — Full-day executive session (May 2026) with expert panel",
      "Interim Report — Mid-programme findings and strategic recommendations",
      "Ongoing Advisory — Monthly expert consultations and trend briefings",
    ],
  },
  {
    id: 3,
    name: "Leadership",
    timeline: "Months 10-12",
    color: "gold",
    deliverables: [
      "Annual Major Study — Comprehensive enterprise Voice AI research report",
      "New York Summit — Follow-up executive event (November 2026)",
      "Final Report — Complete programme synthesis with 12-month roadmap",
      "Ongoing Advisory — Continued expert access and quarterly updates",
    ],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange", dot: "bg-orange" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime", dot: "bg-lime" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold", dot: "bg-gold" },
};

export default function Section5Programme() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState<number>(1);

  const activePhaseData = phases.find((p) => p.id === activePhase)!;
  const colors = colorClasses[activePhaseData.color];

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl z-10"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          12-Month Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          The Programme
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Three strategic phases designed to build insight, influence, and market leadership.
        </p>

        {/* Phase selector */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {phases.map((phase) => {
            const phaseColors = colorClasses[phase.color];
            const isActive = activePhase === phase.id;

            return (
              <motion.button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-8 py-4 rounded-xl border-2 transition-all duration-300 w-full sm:w-auto ${
                  isActive
                    ? `${phaseColors.border} ${phaseColors.bg}`
                    : "border-cream/20 hover:border-cream/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isActive ? phaseColors.dot : "bg-cream/30"}`} />
                  <div className="text-left">
                    <div className={`font-bold ${isActive ? phaseColors.text : "text-cream"}`}>
                      Phase {phase.id}: {phase.name}
                    </div>
                    <div className="text-sm text-cream/50">{phase.timeline}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Timeline visual */}
        <div className="hidden md:flex items-center justify-center gap-0 mb-12">
          {phases.map((phase, index) => {
            const phaseColors = colorClasses[phase.color];
            const isActive = activePhase >= phase.id;
            const isCurrent = activePhase === phase.id;

            return (
              <div key={phase.id} className="flex items-center">
                <motion.div
                  animate={{
                    scale: isCurrent ? 1.2 : 1,
                    backgroundColor: isActive ? phaseColors.dot : "rgba(239, 214, 189, 0.2)",
                  }}
                  className="w-4 h-4 rounded-full"
                />
                {index < phases.length - 1 && (
                  <div className="w-24 lg:w-32 h-1 bg-cream/10 relative overflow-hidden">
                    <motion.div
                      animate={{
                        width: activePhase > phase.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 ${phaseColors.dot}`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Phase details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-8 border-2 ${colors.border} ${colors.bg}`}
          >
            <h3 className={`text-2xl font-bold ${colors.text} mb-6`}>
              Phase {activePhaseData.id}: {activePhaseData.name}
            </h3>
            <ul className="space-y-4 text-left">
              {activePhaseData.deliverables.map((deliverable, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-2 h-2 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                  <span className="text-cream">{deliverable}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Research Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-cream mb-8">Research Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Delineate */}
            <div className="bg-navy-light rounded-2xl p-6 border border-lime/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-lime">D</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-lime">Delineate</h4>
                  <p className="text-cream/50 text-sm">Primary quantitative research partner</p>
                </div>
              </div>
              <p className="text-cream/70 text-sm leading-relaxed">
                Conducts quarterly tracker study across 5 global markets. Specialist in enterprise
                technology research. Provides statistically robust data underpinning all programme reports.
              </p>
            </div>

            {/* ThreePoint Labs */}
            <div className="bg-navy-light rounded-2xl p-6 border border-orange/20 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange">TP</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange">ThreePoint Labs</h4>
                  <p className="text-cream/50 text-sm">Programme Director</p>
                </div>
              </div>
              <p className="text-cream/70 text-sm leading-relaxed mb-3">
                James Poulter (jp@threepoint.io) leads the programme. AI transformation consultancy
                with deep enterprise AI expertise.
              </p>
              <p className="text-cream/50 text-xs">
                Trusted by Amazon, Verizon, Bosch, Bloomsbury, Universal Music, LEGO.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
