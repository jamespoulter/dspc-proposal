"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const whyThisTeam = [
  "Deep roots in the voice and audio AI ecosystem — James co-founded Vixen Labs, the UK's leading voice AI studio",
  "Track record repositioning technical products for C-suite audiences",
  "Independent and agenda-free — not a hardware or software vendor",
  "Existing relationships across CES, CTA, and the enterprise AI community",
  "Experience bridging the gap between engineering excellence and market narrative",
];

const credentials = [
  { value: "250+", label: "Keynotes delivered globally" },
  { value: "20yrs", label: "Digital & AI transformation" },
  { value: "£1B+", label: "Revenue influenced for clients" },
  { value: "Global", label: "UK · US · Europe · Middle East" },
];

const trustedBy = ["Amazon", "Verizon", "Bosch", "Bloomsbury", "Universal Music", "LEGO", "Biblica", "Dunham & Company"];

export default function SectionThreePoint() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-teal/10 to-navy relative">
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
            <div className="h-px w-8 bg-teal" />
            <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">Your Partners</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            About ThreePoint<br />× The Liminal Group
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ThreePoint */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-orange/5 border border-orange/20 rounded-xl p-8"
          >
            <Image src="/threepoint-logo-transparent.png" alt="ThreePoint" width={140} height={40} className="h-8 w-auto object-contain mb-6" />
            <p className="text-cream/70 text-sm leading-relaxed">
              ThreePoint Labs is a specialist AI transformation consultancy. We help the world&apos;s leading organisations cut through the hype, build practical AI strategies, and embed lasting change — with clarity, rigour, and genuine expertise.
            </p>
          </motion.div>

          {/* Liminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-teal/10 border border-liminal-gold/20 rounded-xl p-8"
          >
            <Image src="/liminal-logo-white.png" alt="The Liminal Group" width={140} height={40} className="h-8 w-auto object-contain mb-6 opacity-90" />
            <p className="text-cream/70 text-sm leading-relaxed">
              The Liminal Group is a strategic advisory firm that helps technology companies navigate pivotal transitions — repositioning for new markets, reframing for new buyers, and building the narratives that open new doors.
            </p>
          </motion.div>
        </div>

        {/* Why this team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-cream font-bold text-xl mb-6">Why This Team</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {whyThisTeam.map((item, i) => (
              <div key={i} className="flex gap-3 text-cream/70 text-sm leading-relaxed">
                <span className="text-orange mt-0.5 flex-shrink-0">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-cream/60 text-xs font-medium tracking-widest uppercase mb-6">ThreePoint Credentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {credentials.map((c, i) => (
              <div key={i} className="text-center p-4 bg-navy-light border border-cream/10 rounded-lg">
                <div className="font-condensed text-3xl font-black text-orange mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {c.value}
                </div>
                <div className="text-cream/50 text-xs leading-relaxed">{c.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-cream/60 text-xs font-medium tracking-widest uppercase mb-4">Trusted by</h3>
          <div className="flex flex-wrap gap-3">
            {trustedBy.map((brand, i) => (
              <span key={i} className="px-3 py-1.5 border border-cream/20 rounded text-cream/60 text-xs">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
