import Image from "next/image";

export default function About() {
  return (
    <div className="text-white">

      {/* 🔥 HERO SECTION */}
      <section className="px-10 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          OpenAI Club — IoT Department
        </h1>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          A student-driven technical community at TCET focused on bridging
          Artificial Intelligence with the physical world through AI-IoT
          integration and real-world engineering innovation.
        </p>
      </section>

      {/* 🧠 OVERVIEW */}
      <section className="px-10 py-16 max-w-5xl mx-auto text-gray-300 leading-relaxed">
        <p>
          The OpenAI Club is a student-driven technical community established
          under the Department of Internet of Things (IoT) at TCET. The club
          focuses on bridging Artificial Intelligence with the physical world
          through AI-IoT integration, enabling students to design intelligent,
          connected systems that address real-world challenges.
        </p>
      </section>

      {/* ✨ VISION & MISSION */}
      <section className="px-10 py-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-3">Vision</h2>
          <p className="text-gray-400">
            To cultivate a future-ready generation of engineers capable of
            integrating Artificial Intelligence, IoT hardware, and creative
            problem-solving to build meaningful, scalable solutions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-3">Mission</h2>
          <p className="text-gray-400">
            Promote technical excellence by connecting AI with real-world
            applications through workshops, collaborative projects, and
            hands-on learning experiences.
          </p>
        </div>
      </section>

      {/* 🎯 OBJECTIVES */}
      <section className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Club Objectives</h2>

        <ul className="space-y-3 text-gray-400">
          <li>• Bridge AI and the physical world through AI-IoT integration.</li>
          <li>• Encourage development of intelligent connected systems.</li>
          <li>• Promote innovation, teamwork, and practical engineering.</li>
          <li>• Prepare students for rapidly evolving technology ecosystems.</li>
        </ul>
      </section>

      {/* 🚀 EVENTS SECTION */}
      <section className="px-10 py-20 space-y-20">

        {/* Mission AgentSpace */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/events/agentspace.jpg"
            width={600}
            height={400}
            alt="Mission AgentSpace"
            className="rounded-2xl border border-white/10"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3">Mission AgentSpace</h3>
            <p className="text-gray-400">
              Members engineered advanced AI agents integrating private
              documentation with live web data to deliver accurate,
              context-aware responses while mastering prompt engineering
              workflows.
            </p>
          </div>
        </div>

        {/* AIoT Workshop */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-3">AIoT Workshop</h3>
            <p className="text-gray-400">
              Participants built AIoT prototypes using ESP32 and Wokwi,
              presenting solutions to industry experts while learning system
              design, prototyping, and technical pitching.
            </p>
          </div>

          <Image
            src="/events/aiot.jpg"
            width={600}
            height={400}
            alt="AIoT Workshop"
            className="rounded-2xl border border-white/10"
          />
        </div>

        {/* Hackathon */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/events/hackathon.jpg"
            width={600}
            height={400}
            alt="Hackathon"
            className="rounded-2xl border border-white/10"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-3">Hackathon</h3>
            <p className="text-gray-400">
              A high-energy competition focused on logic, creativity, and rapid
              innovation where participants built complex solutions through
              collaborative problem-solving.
            </p>
          </div>
        </div>

      </section>

      {/* 🌌 LEARNING APPROACH */}
      <section className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Learn — Build — Showcase</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="font-semibold mb-2">Learn</h4>
            <p className="text-gray-400">
              Workshops, mentorship, and knowledge sessions.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="font-semibold mb-2">Build</h4>
            <p className="text-gray-400">
              AI-powered IoT prototypes and experimental systems.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="font-semibold mb-2">Showcase</h4>
            <p className="text-gray-400">
              Hackathons, demos, and industry evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* 🔚 CONCLUSION */}
      <section className="px-10 py-20 text-center max-w-3xl mx-auto text-gray-400">
        The OpenAI Club stands as a hub where Artificial Intelligence meets IoT
        engineering — empowering students to create meaningful, future-focused
        solutions that shape tomorrow’s technological landscape.
      </section>

    </div>
  );
}