"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const panelists = [
  {
    name: "Romina Pankoke",
    location: "Germany",
    title: "Head of Conversational AI Experience Design",
    company: "Vixen Labs/House 337",
    bio: "One of Europe's leading conversational AI and voice UX designers. Founder of Women in Voice Germany chapter. Certified conversational designer, expert in enterprise voice AI across DACH region.",
    initials: "RP",
    color: "orange",
  },
  {
    name: "Pete Erickson",
    location: "USA",
    title: "Founder, Modev; Creator, VOICE Summit",
    company: "Tech Ecosystem Institute",
    bio: "Creator of VOICE Summit — the world's premier voice technology conference. 12+ years building the global voice AI community. Executive Director, Tech Ecosystem Institute.",
    initials: "PE",
    color: "lime",
  },
  {
    name: "Noelle Russell",
    location: "USA",
    title: "Founder, AI Leadership Institute",
    company: "Five-time Microsoft AI MVP",
    bio: "Led AI teams at Microsoft, Amazon Alexa, AWS, IBM, NPR, Accenture (Global AI Solutions Lead). Multi-award-winning technologist. Founder of WomenIn.AI.",
    initials: "NR",
    color: "indigo",
  },
  {
    name: "Susan Westwater",
    location: "USA",
    title: "Co-Author, Voice Strategy & Voice Marketing",
    company: "CEO, Pragmatic Digital",
    bio: "Co-author of Voice Strategy (Amazon #1) and Voice Marketing (2023). Advises global brands on voice AI strategy. Background at Leo Burnett and Ricoh USA.",
    initials: "SW",
    color: "gold",
  },
  {
    name: "Dr. Toby Walsh",
    location: "Australia — APAC",
    title: "Professor of AI, UNSW Sydney",
    company: "Fellow, Australian Academy of Science",
    bio: "Author of multiple AI books including \"It's Alive!\" and \"2062: The World That AI Made\". Advises governments and enterprises globally. Keynote speaker at major global tech conferences.",
    initials: "TW",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  orange: { bg: "bg-orange/20", text: "text-orange", border: "border-orange/30", gradient: "from-orange/20" },
  lime: { bg: "bg-lime/20", text: "text-lime", border: "border-lime/30", gradient: "from-lime/20" },
  indigo: { bg: "bg-indigo/20", text: "text-indigo", border: "border-indigo/30", gradient: "from-indigo/20" },
  gold: { bg: "bg-gold/20", text: "text-gold", border: "border-gold/30", gradient: "from-gold/20" },
};

export default function SectionPanel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          World-Class Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          The Panel
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Five globally recognised Voice AI experts bringing deep industry experience,
          research credibility, and strategic insight to the programme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panelists.map((panelist, index) => {
            const colors = colorClasses[panelist.color];

            return (
              <motion.div
                key={panelist.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`bg-navy-light rounded-2xl p-6 border ${colors.border} hover:border-opacity-100 transition-all duration-300 group ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Avatar */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {panelist.initials}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-cream group-hover:text-orange transition-colors">
                      {panelist.name}
                    </h3>
                    <p className={`text-sm ${colors.text}`}>{panelist.location}</p>
                  </div>
                </div>

                {/* Title & Company */}
                <div className="text-left mb-4">
                  <p className="text-cream/80 text-sm font-medium">{panelist.title}</p>
                  <p className="text-cream/50 text-sm">{panelist.company}</p>
                </div>

                {/* Bio */}
                <p className="text-cream/60 text-sm text-left leading-relaxed">
                  {panelist.bio}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
