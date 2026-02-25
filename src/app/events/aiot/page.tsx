import Image from "next/image";

export default function AIOT() {
  return (
    <div className="text-white">

      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/events/aiot.png"
          fill
          alt="AIOT Workshop"
          className="object-cover opacity-40"
        />
        <h1 className="relative text-5xl font-bold">
          AIoT Workshop
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-10 py-20 text-gray-300 leading-relaxed space-y-6">
        <p>
          The AIoT Workshop demonstrated how Artificial Intelligence can extend
          beyond software into the physical world through intelligent IoT
          systems. Led by AI Consultant and public speaker Mr. Dishant Gandhi,
          the session guided participants through real-world applications where
          AI enhances embedded devices and smart environments.
        </p>

        <p>
          Students explored how machine learning models can interact with
          sensors, microcontrollers, and connected platforms to create adaptive
          systems capable of responding to environmental data. The workshop
          emphasized experimentation, allowing participants to design and
          prototype AI-powered IoT solutions while understanding system
          architecture and real-time data processing.
        </p>

        <p>
          Beyond technical skills, the event encouraged innovative thinking and
          collaboration. Participants gained exposure to industry workflows,
          learning how AIoT bridges hardware engineering with intelligent
          decision-making systems.
        </p>

        <p>
          The workshop strengthened the club’s vision of integrating AI with the
          physical world — empowering students to build smarter, connected
          technologies that solve meaningful engineering challenges.
        </p>
      </section>
    </div>
  );
}