import { supabase } from "@/lib/supabase";

export default async function Team() {
  const { data } = await supabase.from("members").select("*");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Our Team Members</h1>

      {data?.map((m) => (
        <div key={m.id} className="mt-4 p-6 rounded-xl bg-white/5 backdrop-blur border border-gray-800">
          <p className="text-lg font-semibold">{m.name}</p>
          <p className="text-gray-400">{m.role}</p>
        </div>
      ))}
    </div>
  );
}