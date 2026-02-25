"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

export default function UserMenu() {
  const [user, setUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const ADMIN_EMAIL = "YOUR_EMAIL@gmail.com"; // ⭐ replace with your email

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setOpen(false);
  };

  // 🔓 Not logged in
  if (!user) {
    return (
      <button
        onClick={login}
        className="px-4 py-2 border rounded hover:bg-white hover:text-black transition"
      >
        Login with Google
      </button>
    );
  }

  // ✅ Logged in UI
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <Image
          src={user.user_metadata.avatar_url}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full border"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-black border border-white/10 rounded-xl p-3 backdrop-blur-xl shadow-lg">
          <p className="text-sm text-gray-400 mb-2">
            {user.user_metadata.full_name}
          </p>

          {/* 🔐 Admin link only for you */}
          {user.email === ADMIN_EMAIL && (
            <Link
              href="/admin"
              className="block py-2 hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              Admin Panel
            </Link>
          )}

          <button
            onClick={logout}
            className="w-full text-left py-2 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}