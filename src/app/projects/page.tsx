"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.9;
    canvas.height = 520;

    let player = { x: canvas.width / 2, y: canvas.height - 60 };
    let bullets: any[] = [];
    let enemies: any[] = [];
    let particles: any[] = [];

    let scoreLocal = 0;
    let lives = 3;
    let animationId: number;

    // PLAYER CONTROL
    const move = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      player.x = e.clientX - rect.left;
    };

    window.addEventListener("mousemove", move);

    // SHOOT
    const shoot = () => {
      bullets.push({
        x: player.x,
        y: player.y,
      });
    };

    window.addEventListener("click", shoot);

    // SPAWN ENEMIES
    const spawnEnemy = () => {
      enemies.push({
        x: Math.random() * canvas.width,
        y: -20,
        r: 12,
      });
    };

    let spawnInterval = setInterval(spawnEnemy, 1000);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // PLAYER SHIP
      ctx.fillStyle = "#6366f1";
      ctx.beginPath();
      ctx.moveTo(player.x, player.y);
      ctx.lineTo(player.x - 12, player.y + 24);
      ctx.lineTo(player.x + 12, player.y + 24);
      ctx.closePath();
      ctx.fill();

      // BULLETS
      bullets.forEach((b, bi) => {
        b.y -= 6;
        ctx.fillStyle = "#22c55e";
        ctx.fillRect(b.x - 2, b.y, 4, 12);

        if (b.y < 0) bullets.splice(bi, 1);
      });

      // ENEMIES
      enemies.forEach((e, ei) => {
        e.y += 2;

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fillStyle = "#f43f5e";
        ctx.fill();

        // HIT PLAYER
        if (
          Math.abs(e.x - player.x) < 15 &&
          Math.abs(e.y - player.y) < 20
        ) {
          lives--;
          enemies.splice(ei, 1);

          if (lives <= 0) {
            setRunning(false);
            cancelAnimationFrame(animationId);
          }
        }

        // BULLET COLLISION
        bullets.forEach((b, bi) => {
          const dx = b.x - e.x;
          const dy = b.y - e.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < e.r) {
            enemies.splice(ei, 1);
            bullets.splice(bi, 1);

            scoreLocal += 10;
            setScore(scoreLocal);

            particles.push({
              x: e.x,
              y: e.y,
              life: 20,
            });
          }
        });
      });

      // PARTICLES
      particles.forEach((p, pi) => {
        p.life--;
        ctx.fillStyle = "orange";
        ctx.fillRect(p.x, p.y, 3, 3);
        if (p.life <= 0) particles.splice(pi, 1);
      });

      // HUD
      ctx.fillStyle = "white";
      ctx.fillText(`Lives: ${lives}`, 20, 30);

      animationId = requestAnimationFrame(loop);
    };

    if (running) loop();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", shoot);
      clearInterval(spawnInterval);
      cancelAnimationFrame(animationId);
    };
  }, [running]);

  const restart = () => {
    setScore(0);
    setRunning(true);
  };

  return (
    <div className="text-white px-6 py-24">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          🚧 Projects Updating Soon
        </h1>

        <p className="text-gray-400">
          Play Neural Defender — Destroy incoming AI nodes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto border border-white/10 rounded-2xl overflow-hidden relative">
        <canvas ref={canvasRef} className="w-full bg-black/60" />

        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
            <h2 className="text-3xl text-red-400 mb-4">
              Mission Failed
            </h2>

            <button
              onClick={restart}
              className="px-6 py-3 border rounded-xl hover:bg-white hover:text-black transition"
            >
              Restart Mission
            </button>
          </div>
        )}
      </div>

      <p className="mt-10 text-center text-lg">
        Score: {score}
      </p>
    </div>
  );
}