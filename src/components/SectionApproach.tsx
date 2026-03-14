"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    label: "Phase 1",
    title: "Discovery & Diagnosis",
    weeks: "Weeks 1–4",
    color: "orange",
    deliverable: "Strategic Positioning Brief — diagnosis, opportunities, recommended narrative architecture",
    items: [
      "Stakeholder interviews: Chin + 3–4 DSPC leadership team members",
      "Customer perception audit: 5–8 interviews with existing customers (audio engineers + their product leaders)",
      "Competitor and landscape analysis: how adjacent players (Qualcomm AI, NVIDIA audio, Dolby) position",
      "Audit of current website, pitch deck, sales materials, and Chin's public profile",
      "CTA Audio Board opportunity mapping",
    ],
  },
  {
    label: "Phase 2",
    title: "Build & Create",
    weeks: "Weeks 5–9",
    color: "liminal-gold",
    deliverable: "Messaging Bible, C-Suite Deck, Content Calendar, Vertical Playbook, Sales Pack",
    items: [
      "Core messaging framework: positioning statement, elevator pitch, tagline options, proof points",
      "Website messaging overhaul: page-by-page copy recommendations (or full rewrite if scope allows)",
      'New C-suite pitch deck: "Audio is the Missing Sense for AI" — designed for CPOs/CTOs, not engineers',
      "Thought leadership content plan: 6-month calendar for Chin (LinkedIn, speaking, media, CTA leverage)",
      "Vertical expansion playbook: prioritised market map with entry narratives per vertical",
      "Sales enablement pack: one-pagers, objection handlers, 'Why Audio Matters' white paper outline",
    ],
  },
  {
    label: "Phase 3",
    title: "Launch & Amplify",
    weeks: "Weeks 10–12",
    color: "teal",
    deliverable: "Team Workshop, Launch Assets, 90-Day Roadmap",
    items: [
      "Internal rollout: workshop with DSPC sales and marketing teams to embed new messaging",
      "Chin's thought leadership launch: first 3 LinkedIn posts, speaker bio refresh, media pitch list",
      "Website go-live support: review and QA of updated web copy",
      "90-day amplification roadmap: what happens after the sprint ends",
      "Optional: identify and brief a PR/comms partner for ongoing media relations",
    ],
  },
];

const events = [
  {
    week: "Week 2",
    title: "Discovery Workshop",
    detail: "Virtual (or Santa Clara if preferred) — Half-day facilitated session with Chin + leadership team",
  },
  {
    week: "Week 7",
    title: "Messaging & Strategy Review",
    detail: "Virtual — Present draft messaging framework and C-suite deck for feedback",
  },
  {
    week: "Week 11",
    title: "Launch Workshop",
    detail: "Virtual (or Santa Clara) — Half-day internal rollout with sales and marketing teams",
  },
];

const colorMap: Record<string, string> = {
  orange: "border-orange text-orange bg-orange/10",
  "liminal-gold": "border-liminal-gold text-liminal-gold bg-liminal-gold/10",
  teal: "border-teal text-teal bg-teal/30",
};

const dotColorMap: Record<string, string> = {
  orange: "bg-orange",
  "liminal-gold": "bg-liminal-gold",
  teal: "bg-teal",
};

export default function SectionApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programme" className="py-24 bg-gradient-to-b from-teal/5 to-navy relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span className="text-orange text-xs font-medium tracking-widest uppercase">12-Week Sprint</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            The Programme
          </h2>
          <p className="text-cream/70 text-lg max-w-3xl leading-relaxed">
            A 12-week strategic sprint in three phases — designed to deliver repositioned messaging, new GTM materials, and a thought leadership launchpad.
          </p>
        </motion.div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-navy-light border border-cream/10 rounded-xl p-6 hover:border-orange/20 transition-colors"
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${colorMap[phase.color]}`}>
                <span>{phase.label}</span>
                <span>·</span>
                <span>{phase.weeks}</span>
              </div>
              <h3 className="text-cream font-bold text-lg mb-4">{phase.title}</h3>
              <ul className="space-y-3 mb-6">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-cream/60 text-xs leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColorMap[phase.color]}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-cream/10 pt-4">
                <p className="text-xs text-cream/40 uppercase tracking-wider mb-1">Deliverable</p>
                <p className="text-xs text-cream/70 leading-relaxed">{phase.deliverable}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-cream/60 text-xs font-medium tracking-widest uppercase mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-cream/30" />
            Key Events
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {events.map((event, i) => (
              <div key={i} className="flex gap-4 p-4 bg-teal/10 border border-teal/30 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="text-liminal-gold font-bold text-xs uppercase">{event.week}</div>
                </div>
                <div>
                  <div className="text-cream font-semibold text-sm mb-1">{event.title}</div>
                  <div className="text-cream/50 text-xs leading-relaxed">{event.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
