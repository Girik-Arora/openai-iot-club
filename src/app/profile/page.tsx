"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const styles = [
  "bottts",
  "adventurer",
  "pixel-art",
  "avataaars",
  "micah",
  "identicon",
];

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [style, setStyle] = useState("bottts");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };
    getUser();
  }, []);

  if (!user) {
    return (
      <div className="text-white p-20 text-center text-xl">
        Loading Neural Identity...
      </div>
    );
  }

  // 🎨 Avatar logic
  const avatar =
    user?.user_metadata?.avatar_url ||
    `https://api.dicebear.com/7.x/${style}/svg?seed=${user.email}`;

  // 🚀 Save avatar
  const saveAvatar = async () => {
    setLoading(true);

    const avatarUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${user.email}`;

    await supabase.auth.updateUser({
      data: { avatar_url: avatarUrl },
    });

    setLoading(false);
    alert("Avatar Updated 🚀");
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* 🌌 GOD MODE BACKGROUND ORBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-175 h-175 bg-purple-500/20 blur-[160px] rounded-full -top-40 -left-40 animate-pulse" />
        <div className="absolute w-150 h-150 bg-blue-500/20 blur-[160px] rounded-full bottom-0 right-0 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* 🔥 PROFILE BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl mb-16">
          <div className="h-48 bg-linear-to-r from-purple-600/30 to-blue-600/30" />

          <div className="flex flex-col md:flex-row items-center gap-10 px-10 pb-10 -mt-20">

            {/* AVATAR GOD MODE */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-blue-500 blur-2xl opacity-40 group-hover:opacity-80 transition" />

              <img
                src={avatar}
                className="relative w-40 h-40 rounded-full border border-white/20 bg-black hover:scale-105 transition"
              />

              {/* ONLINE STATUS */}
              <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-black" />
            </div>

            {/* USER INFO */}
            <div>
              <h1 className="text-4xl font-bold">
                {user.user_metadata?.full_name || "OpenAI Club Member"}
              </h1>

              <p className="text-gray-400 mt-2">{user.email}</p>

              <div className="flex gap-3 mt-6 flex-wrap">
                <span className="px-3 py-1 border border-white/20 rounded-full text-sm">
                  Neural Explorer
                </span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-sm">
                  AI Builder
                </span>
                <span className="px-3 py-1 border border-white/20 rounded-full text-sm">
                  IoT Innovator
                </span>
              </div>

              {/* XP BAR */}
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">
                  AI Level — Neural Tier
                </p>

                <div className="w-65 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-linear-to-r from-purple-400 to-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🎨 AVATAR CUSTOMIZER */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 mb-14">
          <h2 className="text-2xl mb-8">Customize Neural Avatar</h2>

          <div className="flex flex-wrap gap-6">
            {styles.map((s) => (
              <img
                key={s}
                src={`https://api.dicebear.com/7.x/${s}/svg?seed=${user.email}`}
                onClick={() => setStyle(s)}
                className={`w-20 h-20 cursor-pointer rounded-xl border transition ${
                  style === s
                    ? "border-purple-400 scale-110"
                    : "border-white/20 hover:scale-105"
                }`}
              />
            ))}
          </div>

          <button
            onClick={saveAvatar}
            disabled={loading}
            className="mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
          >
            {loading ? "Saving..." : "Save Avatar"}
          </button>
        </div>

        {/* ⚡ STATS CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <h3 className="text-gray-400 mb-2">Events Joined</h3>
            <p className="text-4xl font-bold">2</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <h3 className="text-gray-400 mb-2">Projects Built</h3>
            <p className="text-4xl font-bold">∞</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <h3 className="text-gray-400 mb-2">Club Rank</h3>
            <p className="text-4xl font-bold">Founder</p>
          </div>

        </div>
      </div>
    </div>
  );
}