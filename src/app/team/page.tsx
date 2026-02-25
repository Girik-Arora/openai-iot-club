import Image from "next/image";

const team = [
  {
    name: "Girik Arora",
    role: "Chairperson",
    image: "/team/girik.jpg",
  },
  {
    name: "Parth Desai",
    role: "Vice Chairperson",
    image: "/team/parth.jpg",
  },
  {
    name: "Shreya Shrivastav",
    role: "Secretary",
    image: "/team/shreya.jpg",
  },
  {
    name: "Krishna Bittharia",
    role: "Student Advisor",
    image: "/team/krishna.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen px-6 py-20">

      {/* TITLE */}
      <h1 className="text-6xl font-bold text-center mb-16">
        Meet The OpenAI Club Team
      </h1>

      {/* TEAM GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">

        {/* FIRST ROW (3 MEMBERS) */}
        {team.slice(0,3).map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}

        {/* SECOND ROW CENTERED (4TH MEMBER) */}
        <div className="col-span-3 flex justify-center">
          <MemberCard member={team[3]} />
        </div>

      </div>

      {/* FULL TEAM PHOTO */}
      <div className="max-w-6xl mx-auto mt-28">
        <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden border border-white/10">
          <Image
            src="/team/fullteam.jpg"
            alt="Full Team"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}

/* ======================
   MEMBER CARD COMPONENT
====================== */

function MemberCard({ member }: any) {
  return (
    <div className="group relative w-85">

      {/* IMAGE */}
      <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-contain object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* NAME AREA */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold">{member.name}</h2>
        <p className="text-white/60">{member.role}</p>
      </div>

    </div>
  );
}