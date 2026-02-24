"use client";

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] bottom-[-80px] right-[-80px]"></div>
    </div>
  );
}