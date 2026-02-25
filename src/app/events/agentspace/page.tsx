import Image from "next/image";

export default function AgentSpace() {
  return (
    <div className="text-white">

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/events/agentspace.png"
          fill
          alt="AgentSpace"
          className="object-cover opacity-40"
        />
        <h1 className="relative text-5xl font-bold">
          Mission AgentSpace
        </h1>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto px-10 py-20 text-gray-300 leading-relaxed space-y-6">
        <p>
          Mission AgentSpace was a high-impact technical session designed to
          decode the evolving world of AI agents and intelligent automation.
          Led by Ms. Shachi Singh, Assistant Manager at Deloitte and an alumna
          of TCET, the session provided students with an insider perspective on
          how modern AI systems are reshaping workflows across industries.
        </p>

        <p>
          Participants explored advanced concepts such as prompt engineering,
          generative AI architectures, and the integration of Google Cloud
          services into AI pipelines. Rather than focusing purely on theory,
          the session emphasized hands-on experimentation — enabling students
          to build their own AI agents capable of responding dynamically using
          real-time data.
        </p>

        <p>
          The event fostered a collaborative environment where students moved
          beyond passive learning and actively engaged in designing intelligent
          systems. Through live demonstrations and guided experimentation,
          attendees gained practical insight into how AI agents can connect
          private knowledge bases with web-scale intelligence.
        </p>

        <p>
          Mission AgentSpace became more than a workshop — it served as a
          gateway for students to understand how future AI ecosystems will
          operate, inspiring participants to explore advanced AIoT solutions
          and scalable intelligent architectures.
        </p>
      </section>
    </div>
  );
}