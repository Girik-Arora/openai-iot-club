import Stats from "@/components/Stats";
import LogoMarquee from "@/components/LogoMarquee";
import Features from "@/components/Features";
import BackgroundFX from "@/components/BackgroundFX";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
export default function Home() {
  return (
    <main className="bg-black text-white">
      <BackgroundFX />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold max-w-3xl leading-tight">
          Building the Future of AI & IoT Innovation
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Open AI Club of IoT is a student-led innovation hub focused on
          artificial intelligence, embedded systems and real-world engineering.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="/events">
            <MagneticButton text="Explore Events" />
          </a>
          <a href="/projects">
            <MagneticButton text="View Projects" />
          </a>
        </div>
      </section>
        <LogoMarquee />
        <Stats />
        <Features />

      
    </main>
  );
}