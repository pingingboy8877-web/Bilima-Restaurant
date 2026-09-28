import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import Link from "next/link";
export default async function AccountPage(){
  const supabase=await createClient(); const {data:{claims}}=await supabase.auth.getClaims();
  if(!claims) redirect("/auth/login");
  return <main className="min-h-screen bg-[#f5f0e7] p-5 md:p-10"><Link href="/" className="text-[10px] uppercase tracking-[.2em] text-black/45">← Bilima</Link>
  <div className="max-w-5xl mx-auto py-20"><p className="text-[10px] tracking-[.25em] uppercase text-black/40">Account</p><h1 className="text-6xl tracking-[-.07em] mt-4">Good to see you.</h1>
  <p className="mt-4 text-black/50">{String(claims.email ?? "")}</p><div className="grid md:grid-cols-3 gap-4 mt-14">{["Orders","Reservations","Profile"].map(x=><div key={x} className="bg-white border border-black/10 rounded-2xl p-7 min-h-40"><p className="text-[10px] uppercase tracking-[.2em] text-black/40">{x}</p><p className="mt-12 text-sm text-black/45">Your {x.toLowerCase()} will appear here.</p></div>)}</div></div></main>
}