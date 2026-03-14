"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionWelcome() {
  const scrollDown = () => {
    document.getElementById("moment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="welcome"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy" />
      </div>

      {/* Teal accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal via-liminal-gold to-teal" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-px w-8 bg-liminal-gold" />
          <span className="text-liminal-gold text-xs font-medium tracking-widest uppercase">
            Confidential Proposal
          </span>
          <div className="h-px w-8 bg-liminal-gold" />
        </motion.div>

        {/* Logo lockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-8 mb-12"
        >
          <Image src="/threepoint-logo-transparent.png" alt="ThreePoint" width={180} height={52} className="h-12 w-auto object-contain" />
          <div className="w-px h-12 bg-liminal-gold opacity-60" />
          <Image src="/liminal-logo-white.png" alt="The Liminal Group" width={180} height={52} className="h-10 w-auto object-contain" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-condensed text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          <span className="text-cream block">AI Needs Audio.</span>
          <span className="text-orange block">Audio Needs a Voice.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-cream/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          A strategic positioning and go-to-market programme to establish DSP Concepts as the essential infrastructure layer for AI-powered products.
        </motion.p>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-cream/50 text-sm mb-12"
        >
          Prepared for Chin Beckmann / DSP Concepts by James Poulter / ThreePoint × Jess Chin / The Liminal Group
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          onClick={scrollDown}
          className="inline-flex items-center gap-2 bg-orange text-navy font-semibold px-8 py-4 rounded hover:bg-orange/90 transition-colors text-sm tracking-wide"
        >
          Explore the Proposal ↓
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-cream/30 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cream/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
