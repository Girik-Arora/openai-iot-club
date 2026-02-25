"use client";

import { useEffect, useState } from "react";

export default function MouseGlow({ children }: any) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        style={{ left: pos.x, top: pos.y }}
      />
      {children}
    </>
  );
}