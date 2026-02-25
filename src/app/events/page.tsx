import Link from "next/link";
import Image from "next/image";

const events = [
  {
    title: "Mission AgentSpace",
    image: "/events/agentspace.png",
    link: "/events/agentspace",
  },
  {
    title: "AIoT Workshop",
    image: "/events/aiot.png",
    link: "/events/aiot",
  },
  {
    title: "Hackathon",
    image: "/events/hackathon.png",
    link: "/events/hackathon",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen px-10 py-20 text-white">
      <h1 className="text-5xl font-bold mb-14 text-center">
        Select Your Mission
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event) => (
          <Link
            href={event.link}
            key={event.title}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition"
          >
            <Image
              src={event.image}
              width={600}
              height={800}
              alt={event.title}
              className="w-full h-105 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent opacity-70" />

            <h2 className="absolute bottom-6 left-6 text-2xl font-semibold">
              {event.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}