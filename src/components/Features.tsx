export default function Features() {
  const items = [
    { title: "AI Workshops", desc: "Hands-on sessions on ML & LLMs." },
    { title: "IoT Projects", desc: "Real embedded systems engineering." },
    { title: "Hackathons", desc: "Build, compete and innovate." },
  ];

  return (
    <section className="px-10 py-24 grid md:grid-cols-3 gap-8">
      {items.map((f) => (
        <div
          key={f.title}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition"
        >
          <h3 className="text-xl font-semibold">{f.title}</h3>
          <p className="mt-3 text-gray-400">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}