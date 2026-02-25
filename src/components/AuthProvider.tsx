"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Load initial session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Listen for changes (THIS FIXES WIFI SWITCH ISSUE)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}