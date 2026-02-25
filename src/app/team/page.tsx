"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const members = [
  {
    name: "Girik Arora",
    role: "Chairperson",
    image: "/team/girik.jpg",
  },
  {
    name: "Parth Desai",
    role: "Vice Chairperson",
    image: "/team/parth.jpg",
  },
  {
    name: "Shreya Shrivastav",
    role: "Secretary",
    image: "/team/shreya.jpg",
  },
  {
    name: "Krishna Bittharia",
    role: "Student Advisor",
    image: "/team/krishna.jpg",
  },
];

export default function TeamPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white bg-black overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] flex items-center justify-center">
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
          className="relative text-5xl md:text-7xl font-bold text-center tracking-tight"
        >
          Meet The OpenAI Club Team
        </motion.h1>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-12">

          {members.map((m, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
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

              {/* NAME PANEL */}
              <div className="p-6 bg-linear-to-r from-black to-zinc-900">
                <h2 className="text-2xl font-semibold">{m.name}</h2>
                <p className="text-gray-400">{m.role}</p>
              </div>

              {/* AI GLOW */}
              {hovered === i && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 60px rgba(99,102,241,0.4)",
                  }}
                />
              )}
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}