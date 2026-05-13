import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .limit(10);

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Supabase</h1>

      {error && <p style={{ color: "red" }}>{error.message}</p>}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}