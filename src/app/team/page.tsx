"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Team() {
  const [members, setMembers] = useState<any[]>([]);

  // 📥 Load members initially
  const fetchMembers = async () => {
    const { data } = await supabase
      .from("members")
      .select("*")
      .order("id");

    setMembers(data || []);
  };

  useEffect(() => {
    // Load data first time
    fetchMembers();

    // ⚡ Listen for realtime DB changes
    const channel = supabase
      .channel("members-live")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "members",
        },
        () => {
          // When DB updates → reload list
          fetchMembers();
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Team</h1>

      <div className="grid gap-4">
        {members.map((m) => (
          <div
            key={m.id}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
          >
            <p className="text-lg font-semibold">{m.name}</p>
            <p className="text-gray-400">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}