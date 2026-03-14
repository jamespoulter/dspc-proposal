"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SectionWelcome from "@/components/SectionWelcome";
import SectionMoment from "@/components/SectionMoment";
import SectionChallenge from "@/components/SectionChallenge";
import SectionPlatform from "@/components/SectionPlatform";
import SectionApproach from "@/components/SectionApproach";
import SectionPricing from "@/components/SectionPricing";
import SectionTeam from "@/components/SectionTeam";
import SectionThreePoint from "@/components/SectionThreePoint";
import SectionNextSteps from "@/components/SectionNextSteps";

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "moment", label: "Opportunity" },
  { id: "gap", label: "The Gap" },
  { id: "delivers", label: "Delivers" },
  { id: "programme", label: "Programme" },
  { id: "pricing", label: "Pricing" },
  { id: "team", label: "Team" },
  { id: "partners", label: "Partners" },
  { id: "nextsteps", label: "Next Steps" },
];

export default function ProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("welcome");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem("dspc-auth");
    if (auth !== "true") {
      router.push("/");
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleScroll = () => {
      const sectionElements = sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAuthenticated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <main className="relative bg-navy">
      <Navigation activeSection={activeSection} sections={sections} />

      {/* Side nav dots (desktop) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            title={section.label}
            onClick={(e) => { e.preventDefault(); document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" }); }}
            className={`block w-2 h-2 rounded-full transition-all ${
              activeSection === section.id
                ? "bg-orange scale-125"
                : "bg-cream/20 hover:bg-cream/50"
            }`}
          />
        ))}
      </nav>

      {/* Content */}
      <div className="pt-16">
        <SectionWelcome />
        <SectionMoment />
        <SectionChallenge />
        <SectionPlatform />
        <SectionApproach />
        <SectionPricing />
        <SectionTeam />
        <SectionThreePoint />
        <SectionNextSteps />
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-orange text-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange/90 transition-colors shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      )}
    </main>
  );
}
