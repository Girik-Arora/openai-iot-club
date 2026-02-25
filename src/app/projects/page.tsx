"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = 500;

    let player = { x: canvas.width / 2, y: 250, r: 12 };
    let enemies: any[] = [];
    let speed = 2;
    let animationId: number;

    const spawnEnemy = () => {
      enemies.push({
        x: Math.random() * canvas.width,
        y: -20,
        r: 10,
      });
    };

    const mouseMove = (e: MouseEvent) => {
      player.x = e.clientX;
      player.y = e.clientY - canvas.offsetTop;
    };

    window.addEventListener("mousemove", mouseMove);

    let spawnInterval = setInterval(spawnEnemy, 900);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player glow
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
      ctx.fillStyle = "#6366f1";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#6366f1";
      ctx.fill();

      // Enemies
      enemies.forEach((e, i) => {
        e.y += speed;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = "#f43f5e";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#f43f5e";
        ctx.fill();

        // Collision
        const dx = player.x - e.x;
        const dy = player.y - e.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < player.r + e.r) {
          setGameOver(true);
          cancelAnimationFrame(animationId);
        }

        if (e.y > canvas.height + 20) enemies.splice(i, 1);
      });

      setScore((prev) => prev + 1);
      speed += 0.002;

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-6">

      {/* HEADER */}
      <h1 className="text-5xl font-bold mb-4">
        🚧 Projects Updating Soon
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-xl">
        While we build insane AIoT projects, try surviving our Neural Dodge
        challenge. Move your mouse and avoid the incoming nodes.
      </p>

      {/* GAME AREA */}
      <div className="relative border border-white/10 rounded-2xl overflow-hidden">
        <canvas ref={canvasRef} className="bg-black/40 backdrop-blur-xl" />
      </div>

      {/* SCORE */}
      <p className="mt-6 text-lg">
        Score: <span className="font-bold">{score}</span>
      </p>

      {gameOver && (
        <p className="mt-4 text-red-400 text-xl animate-pulse">
          Game Over — Refresh to Retry 😄
        </p>
      )}
    </div>
  );
}