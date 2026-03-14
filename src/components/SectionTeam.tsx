"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "James Poulter",
    role: "Programme Lead & AI Strategy Director",
    company: "Founder & CEO, ThreePoint Labs | UK",
    bio: "James is one of Europe's leading voices on AI strategy and enterprise transformation. Formerly Head of Emerging Platforms at The LEGO Group — where he launched LEGO Life to 2m+ users — and CEO of Vixen Labs, the UK's pioneering voice AI studio, which he grew and exited to House 337 in 2023. Currently Fractional Head of AI at Elvis London and Dunham & Company (Dallas). Author of AI @ Work: Rewire Your Team and Yourself for the AI Revolution (Bloomsbury, August 2026). Uniquely, James co-founded Vixen Labs with deep roots in the voice and audio AI ecosystem — giving him rare combined expertise in audio technology and AI strategy. James leads the programme overall.",
    photo: "/team/james-poulter.jpg",
    initials: "JP",
    brand: "ThreePoint",
    brandColor: "orange",
  },
  {
    name: "Jess Chin",
    role: "Strategic Lead",
    company: "The Liminal Group",
    bio: "Jess is the strategic force behind The Liminal Group's client engagements, with deep expertise in positioning technology companies for new market eras. She introduced DSPC to this programme and will play a central role in the strategic development and client relationship throughout.",
    photo: null,
    initials: "JC",
    brand: "The Liminal Group",
    brandColor: "teal",
  },
  {
    name: "Mimi Chan",
    role: "Strategic Adviser",
    company: "The Liminal Group",
    bio: "Mimi brings extensive experience in go-to-market strategy and brand positioning for technology companies. As part of The Liminal Group's core team, she contributes deep expertise in helping technical companies build narratives that resonate with C-suite buyers.",
    photo: null,
    initials: "MC",
    brand: "The Liminal Group",
    brandColor: "teal",
  },
  {
    name: "Jemma Kaczmarska",
    role: "Project Manager & Client Liaison",
    company: "Poulter Ventures | UK",
    bio: "Jemma is the operational engine behind every ThreePoint engagement. She manages project timelines, client communications, and coordination across the team. On this programme, Jemma owns delivery tracking, milestone reporting, and day-to-day liaison with the DSPC team.",
    photo: "/team/jemma.jpg",
    initials: "JK",
    brand: "ThreePoint",
    brandColor: "orange",
  },
];

function Avatar({ member }: { member: typeof team[0] }) {
  const [imgError, setImgError] = React.useState(false);

  if (member.photo && !imgError) {
    return (
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={member.photo}
          alt={member.name}
          width={80}
          height={80}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  // Fallback initials avatar
  const bg = member.brandColor === "orange" ? "bg-orange/20 border-orange/40" : "bg-teal/40 border-liminal-gold/40";
  const text = member.brandColor === "orange" ? "text-orange" : "text-liminal-gold";

  return (
    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${bg}`}>
      <span className={`font-condensed text-2xl font-black ${text}`}
        style={{ fontFamily: "var(--font-barlow-condensed)" }}>
        {member.initials}
      </span>
    </div>
  );
}

import React from "react";

export default function SectionTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-navy relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange to-teal" />

      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-orange" />
            <span className="text-orange text-xs font-medium tracking-widest uppercase">Your Team</span>
          </div>
          <h2 className="font-condensed text-6xl md:text-7xl font-black uppercase text-cream mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}>
            The Team
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed">
            A joint ThreePoint × Liminal Group team, combining AI strategy expertise with deep industry positioning experience.
          </p>
        </motion.div>

        <div className="space-y-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`flex gap-6 p-6 rounded-xl border ${
                member.brandColor === "orange"
                  ? "border-orange/20 bg-orange/5"
                  : "border-liminal-gold/20 bg-teal/10"
              }`}
            >
              <Avatar member={member} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <h3 className="text-cream font-bold text-lg">{member.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    member.brandColor === "orange"
                      ? "border-orange/40 text-orange bg-orange/10"
                      : "border-liminal-gold/40 text-liminal-gold bg-teal/20"
                  }`}>
                    {member.brand}
                  </span>
                </div>
                <p className={`font-semibold text-sm mb-1 ${member.brandColor === "orange" ? "text-orange" : "text-liminal-gold"}`}>
                  {member.role}
                </p>
                <p className="text-cream/40 text-xs mb-3">{member.company}</p>
                <p className="text-cream/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
