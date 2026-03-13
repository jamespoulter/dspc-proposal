"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Download, Zap, Video, Headphones, Bot } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Dynamic Microsite",
    body: "A fully branded, secure web platform — hosted on ThreePoint infrastructure or handed over as a GitHub project for internal Bosch deployment. Modular architecture allows new chapters to be added throughout 2026 without rebuilding.",
    color: "orange",
  },
  {
    icon: Download,
    title: "Downloadable Resource Library",
    body: "PDF versions of all core materials — RACI frameworks, process maps, domain guides, workshop outlines — ready to save, print, and use offline.",
    color: "gold",
  },
  {
    icon: Zap,
    title: "AI Prompt Library",
    body: "Curated, tested example prompts mapped to real Bosch use cases across Manufacturing, Sales, and Logistics. Ready to paste into ChatGPT, Copilot, or your preferred AI tool.",
    color: "orange",
  },
  {
    icon: Video,
    title: "Video Explainers",
    body: "Short, scripted video summaries of each major module — breaking complex frameworks into 3–5 minute watch-and-apply content. Ideal for teams who learn visually or need a quick refresher.",
    color: "gold",
  },
  {
    icon: Headphones,
    title: "Audio Versions",
    body: "Narrated audio of longer-form content — for on-the-go consumption during commutes, travel, or time between meetings. No screen required.",
    color: "orange",
  },
  {
    icon: Bot,
    title: "RAG-Powered AI Assistant",
    body: "A custom chatbot trained on all playbook content. Ask \"What's the RFQ process redesign approach?\" or \"Show me the Ansbach implementation roadmap\" — and get precise, sourced answers from the playbook itself.",
    color: "gold",
  },
];

export default function SectionPlatform() {
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
            The Platform
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
            Not just a document.
            <span className="block text-orange">A living digital playbook.</span>
          </h2>
          <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            We&apos;re proposing a purpose-built digital platform that brings your AI transformation
            knowledge to life — accessible, modular, and designed for Bosch employees at every level.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOrange = feature.color === "orange";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="bg-navy-light border border-cream/10 rounded-2xl p-6 hover:border-orange/30 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isOrange ? "bg-orange/10" : "bg-gold/10"}`}>
                  <Icon className={`w-6 h-6 ${isOrange ? "text-orange" : "text-gold"}`} />
                </div>
                <h3 className="text-cream font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-cream/65 text-sm leading-relaxed">{feature.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Hosting callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-navy-light border border-cream/10 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <p className="text-gold font-semibold mb-4 text-sm tracking-widest uppercase">Two Deployment Paths</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cream font-semibold mb-2">ThreePoint-Hosted</h4>
              <p className="text-cream/65 text-sm leading-relaxed">We manage the platform, updates, and security. You access it via a Bosch-branded subdomain.</p>
            </div>
            <div>
              <h4 className="text-cream font-semibold mb-2">GitHub Handover</h4>
              <p className="text-cream/65 text-sm leading-relaxed">Full codebase delivered to your team for internal deployment behind Bosch&apos;s own infrastructure.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
