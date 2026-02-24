"use client";

import { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(target / 40);
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);
  }, [target]);

  return <span>{count}+</span>;
}

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-10 px-10 py-24 text-center">
      <div>
        <h2 className="text-5xl font-bold"><Counter target={50} /></h2>
        <p className="text-gray-400">Members</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold"><Counter target={20} /></h2>
        <p className="text-gray-400">Projects</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold"><Counter target={12} /></h2>
        <p className="text-gray-400">Workshops</p>
      </div>
      <div>
        <h2 className="text-5xl font-bold"><Counter target={5} /></h2>
        <p className="text-gray-400">AI Models</p>
      </div>
    </section>
  );
}