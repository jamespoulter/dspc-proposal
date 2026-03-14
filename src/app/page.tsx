"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("dspc-auth");
    if (isAuthenticated === "true") {
      router.push("/proposal");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "dspc2026") {
      sessionStorage.setItem("dspc-auth", "true");
      router.push("/proposal");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isChecking) {
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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-navy px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-teal/20 to-navy pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo lockup */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-6 mb-6"
          >
            <Image src="/threepoint-logo-transparent.png" alt="ThreePoint" width={140} height={40} className="h-8 w-auto object-contain" />
            <div className="w-px h-8 bg-liminal-gold opacity-60" />
            <Image src="/liminal-logo-white.png" alt="The Liminal Group" width={140} height={40} className="h-7 w-auto object-contain" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-liminal-gold text-xs font-medium tracking-widest uppercase mb-2"
          >
            Confidential Proposal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-cream text-xl font-semibold mb-1"
          >
            DSP Concepts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-cream/60 text-sm"
          >
            Prepared by ThreePoint × The Liminal Group
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-cream/60 text-xs tracking-wider uppercase mb-2">
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access code"
              className={`w-full bg-navy-light border px-4 py-3 rounded text-cream placeholder-cream/30 focus:outline-none focus:border-orange transition-colors ${
                error ? "border-red-500" : "border-cream/20 focus:border-orange"
              }`}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-xs mt-2"
              >
                Incorrect access code. Please try again.
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-navy font-semibold py-3 rounded hover:bg-orange/90 transition-colors tracking-wide"
          >
            Access Proposal
          </button>
        </motion.form>

        <p className="text-center text-cream/30 text-xs mt-8">
          For access, contact{" "}
          <a href="mailto:jp@threepoint.io" className="text-orange hover:underline">
            jp@threepoint.io
          </a>
        </p>
      </motion.div>
    </main>
  );
}
