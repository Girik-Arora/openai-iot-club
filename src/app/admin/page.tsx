"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();

  const ADMIN_EMAIL = "aroragirik9@gmail.com"; // ⭐ change this to your Google email

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔐 Check session + admin email
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      const user = data.session?.user;

      if (!user || user.email !== ADMIN_EMAIL) {
        router.push("/");
        return;
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  // ➕ Add Member to DB
  const addMember = async () => {
    if (!name || !role) return;

    const { error } = await supabase.from("members").insert([
      {
        name,
        role,
      },
    ]);

    if (error) {
      alert("Error adding member");
      return;
    }

    alert("Member Added 🚀");
    setName("");
    setRole("");
  };

  // ⏳ Prevent UI flash while checking auth
  if (loading) {
    return (
      <div className="p-10 text-white">
        Checking admin access...
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <div className="mt-6 flex flex-col gap-3 max-w-sm">
        <input
          placeholder="Name"
          className="border p-2 bg-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Role"
          className="border p-2 bg-transparent"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          onClick={addMember}
          className="border px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Add Member
        </button>
      </div>
    </div>
  );
}