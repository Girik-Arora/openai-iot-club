"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const members = [
  { name: "Girik Arora", role: "Chairperson", image: "/team/girik.jpg" },
  { name: "Parth Desai", role: "Vice Chairperson", image: "/team/parth.jpg" },
  { name: "Shreya Shrivastav", role: "Secretary", image: "/team/shreya.jpg" },
  { name: "Krishna Bittharia", role: "Student Advisor", image: "/team/krishna.jpg" },
];

export default function TeamPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* ================= PARTICLE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            animate={{
              y: ["0vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= CURSOR SPOTLIGHT ================= */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(400px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.15), transparent 70%)`,
        }}
      />

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center z-10">
        <Image
          src="/team/fullteam.JPG"
          alt="Full Team"
          fill
          priority
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black" />

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-7xl font-bold text-center"
        >
          Meet The OpenAI Club Team
        </motion.h1>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center">

  {members.map((m, i) => {
    // CENTER the 4th member
    const centerFourth =
      i === 3 ? "md:col-start-2 md:row-start-2" : "";

    return (
      <motion.div
        key={i}
        whileHover={{
          rotateX: 8,
          rotateY: -8,
          scale: 1.07,
        }}
        transition={{ type: "spring", stiffness: 180 }}
        className={`relative w-full max-w-sm rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 ${centerFourth}`}
      >
        {/* IMAGE */}
        <div className="relative h-105 w-full">
          <Image
            src={m.image}
            alt={m.name}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* TEXT PANEL */}
        <div className="p-6 bg-linear-to-r from-black to-zinc-900">
          <h2 className="text-2xl font-semibold">{m.name}</h2>
          <p className="text-indigo-300">{m.role}</p>
        </div>

        {/* GLOW BORDER */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_60px_rgba(99,102,241,0.15)]" />
      </motion.div>
    );
  })}
</div>
      </section>
    </div>
  );
}