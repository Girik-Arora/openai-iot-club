"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.9;
    canvas.height = 520;

    let player = { x: canvas.width / 2, y: canvas.height / 2, r: 12 };
    let enemies: any[] = [];
    let particles: any[] = [];

    let speed = 2;
    let animationId: number;

    const spawnEnemy = () => {
      enemies.push({
        x: Math.random() * canvas.width,
        y: -20,
        r: 10,
      });
    };

    const spawnParticle = () => {
      particles.push({
        x: player.x,
        y: player.y,
        life: 20,
      });
    };

    const mouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      player.x = e.clientX - rect.left;
      player.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", mouseMove);

    let spawnInterval = setInterval(spawnEnemy, 800);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // PLAYER
      ctx.beginPath();
      ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
      ctx.fillStyle = "#6366f1";
      ctx.shadowBlur = 25;
      ctx.shadowColor = "#6366f1";
      ctx.fill();

      // PARTICLE TRAIL
      spawnParticle();
      particles.forEach((p, i) => {
        p.life--;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.3)";
        ctx.fill();
        if (p.life <= 0) particles.splice(i, 1);
      });

      // ENEMIES
      enemies.forEach((e, i) => {
        e.y += speed;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = "#f43f5e";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#f43f5e";
        ctx.fill();

        const dx = player.x - e.x;
        const dy = player.y - e.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < player.r + e.r) {
          setRunning(false);
          cancelAnimationFrame(animationId);
        }

        if (e.y > canvas.height + 20) enemies.splice(i, 1);
      });

      scoreRef.current += 1;

      if (scoreRef.current % 20 === 0) {
        setScore(scoreRef.current);
      }

      speed += 0.002;

      animationId = requestAnimationFrame(loop);
    };

    if (running) loop();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
    };
  }, [running]);

  const restartGame = () => {
    scoreRef.current = 0;
    setScore(0);
    setRunning(true);
  };

  return (
  <div className="text-white px-6 py-24">

    {/* HEADER */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold mb-4">
        🚧 Projects Updating Soon
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto">
        While we build insane AIoT projects, try surviving our Neural Dodge
        Elite Mode.
      </p>
    </div>

    {/* GAME CONTAINER */}
    <div className="max-w-6xl mx-auto border border-white/10 rounded-2xl overflow-hidden relative">
      <canvas ref={canvasRef} className="w-full bg-black/50" />

      {!running && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-xl">
          <h2 className="text-3xl mb-4 text-red-400">
            Game Over
          </h2>

          <button
            onClick={restartGame}
            className="px-6 py-3 border rounded-xl hover:bg-white hover:text-black transition"
          >
            Restart Mission
          </button>
        </div>
      )}
    </div>

    {/* SCORE */}
    <p className="mt-10 text-center text-lg">
      Score: <span className="font-bold">{score}</span>
    </p>

  </div>
);
}