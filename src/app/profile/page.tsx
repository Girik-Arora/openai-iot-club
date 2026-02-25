"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // 🔥 Check login session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // 🚀 Google Login
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  // 🚪 Logout
  const logout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // 🎨 Smart Avatar (Google OR AI generated)
  const avatar =
    user?.user_metadata?.avatar_url ||
    `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.email}`;

  return (
    <div className="flex items-center gap-4">
      {!user ? (
        <button
          onClick={login}
          className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
        >
          Login with Google
        </button>
      ) : (
        <>
          {/* Avatar */}
          <img
            src={avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-white/20 cursor-pointer hover:scale-105 transition"
            onClick={() => router.push("/profile")}
          />

          {/* Logout */}
          <button
            onClick={logout}
            className="border border-white/20 px-4 py-2 rounded-xl hover:bg-red-500 hover:border-red-500 transition"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}