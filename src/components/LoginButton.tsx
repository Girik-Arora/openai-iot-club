"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function LoginButton() {
  const [user, setUser] = useState<any>(null);

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
  };

  if (!user) {
    return (
      <button onClick={login} className="px-4 py-2 border rounded">
        Login with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={user.user_metadata.avatar_url}
        alt="avatar"
        width={32}
        height={32}
        className="rounded-full"
      />

      <span className="text-sm">
        {user.user_metadata.full_name}
      </span>

      <button
        onClick={logout}
        className="px-3 py-1 border rounded"
      >
        Logout
      </button>
    </div>
  );
}