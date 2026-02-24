"use client";

import { supabase } from "@/lib/supabase";

export default function LoginButton() {

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button
      onClick={login}
      className="px-4 py-2 border rounded"
    >
      Login with Google
    </button>
  );
}