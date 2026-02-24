"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/");
      }
    };

    checkUser();
  }, [router]);

  const addMember = async () => {
    await supabase.from("members").insert([
      {
        name,
        role,
      },
    ]);

    alert("Member Added 🚀");
    setName("");
    setRole("");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <div className="mt-6 flex flex-col gap-3 max-w-sm">
        <input
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Role"
          className="border p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={addMember} className="border px-4 py-2">
          Add Member
        </button>
      </div>
    </div>
  );
}