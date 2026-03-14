"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

interface NavigationProps {
  activeSection: string;
  sections: Section[];
  clientName?: string;
}

export default function Navigation({ activeSection, sections }: NavigationProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-cream/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: ThreePoint logo */}
        <div className="flex items-center gap-2">
          <Image src="/threepoint-logo-transparent.png" alt="ThreePoint" width={120} height={34} className="h-7 w-auto object-contain" />
        </div>

        {/* Centre: Nav links (desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors rounded ${
                activeSection === section.id
                  ? "text-orange bg-orange/10"
                  : "text-cream/50 hover:text-cream"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Right: Liminal partnership */}
        <div className="flex items-center gap-3">
          <span className="text-cream/40 text-xs hidden sm:block">In partnership with</span>
          <Image src="/liminal-logo-white.png" alt="The Liminal Group" width={100} height={28} className="h-6 w-auto object-contain opacity-80" />
        </div>
      </div>
    </motion.header>
  );
}
