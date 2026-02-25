"use client";

import { leadership, coreTeam, teamPhoto } from "@/data/team";

export default function Team() {
  // Merge everyone into one array (equal layout)
  const allMembers = [leadership, ...coreTeam];

  return (
    <div className="min-h-screen text-white relative overflow-hidden px-6 py-24">

      {/* 🌌 BACKGROUND GLOW ORBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-175 h-175 bg-purple-500/20 blur-[160px] rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-150 h-150 bg-blue-500/20 blur-[160px] rounded-full bottom-0 right-0 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 TITLE */}
        <h1 className="text-6xl font-bold text-center mb-20">
          Meet The OpenAI Club Team
        </h1>

        {/* ⚡ GRAND GRID — SAME CARD FOR EVERYONE */}
        <div className="grid md:grid-cols-3 gap-12 mb-28 place-items-center">
  {allMembers.map((member: any, i) => (
    <div
      key={i}
      className={`
        group relative backdrop-blur-xl bg-white/5 
        border border-white/10 rounded-3xl overflow-hidden 
        hover:scale-105 transition duration-300 w-full max-w-sm

        ${i === 3 ? "md:col-start-2" : ""}
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-purple-500/10 to-blue-500/10" />

      {/* IMAGE FIXED */}
      <div className="w-full h-80 bg-black flex items-center justify-center">
        <img
          src={member.image}
          className="max-h-full object-contain"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold">
          {member.name}
        </h3>

        <p className="text-gray-400 mt-1">
          {member.role}
        </p>
      </div>
    </div>
  ))}
</div>

        {/* 📸 FULL TEAM GRAND PHOTO */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-10">

          <h2 className="text-4xl font-semibold mb-8 text-center">
            The Entire OpenAI Club Team
          </h2>

          <img
            src={teamPhoto}
            className="w-full rounded-2xl border border-white/20 hover:scale-[1.02] transition"
          />

          <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
            A collective of innovators building the future of AI and IoT
            through collaboration, experimentation, and engineering.
          </p>
        </div>
      </div>
    </div>
  );
}