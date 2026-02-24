"use client";

export default function MouseGlow({ children }: { children: React.ReactNode }) {
  return (
    <div
      onMouseMove={(e) => {
        document.body.style.setProperty("--x", e.clientX + "px");
        document.body.style.setProperty("--y", e.clientY + "px");
      }}
    >
      {children}
    </div>
  );
}