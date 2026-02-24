import { supabase } from "@/lib/supabase";

export default async function Team() {
  const { data } = await supabase.from("members").select("*");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Our Team Members</h1>

      {data?.map((m) => (
        <div key={m.id} className="mt-4 border p-4">
          <p>{m.name}</p>
          <p>{m.role}</p>
        </div>
      ))}
    </div>
  );
}