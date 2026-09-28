"use client";
import { FormEvent, useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
export default function SignUpPage() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [busy,setBusy]=useState(false); const [message,setMessage]=useState(""); const [error,setError]=useState("");
  async function submit(e:FormEvent) {
    e.preventDefault(); setBusy(true); setError(""); setMessage("");
    const {error}=await createClient().auth.signUp({email,password,options:{data:{full_name:name},emailRedirectTo:window.location.origin + "/auth/callback"}});
    if(error)setError(error.message); else setMessage("Check your email to confirm your account.");
    setBusy(false);
  }
  return <main className="min-h-screen bg-[#171714] text-white p-5 md:p-10 flex flex-col">
    <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/50"><ArrowLeft size={14}/> Back to Bilima</Link>
    <div className="w-full max-w-md m-auto py-16">
      <p className="text-[10px] tracking-[.28em] uppercase text-white/40">Bilima / Join</p><h1 className="text-5xl tracking-[-.07em] mt-4">Pull up a chair.</h1>
      <p className="text-sm text-white/50 mt-4 leading-6">Create an account for faster ordering and table reservations.</p>
      <form onSubmit={submit} className="mt-12 space-y-4">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none"/>
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none"/>
        <input required minLength={8} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password · 8+ characters" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none"/>
        {error&&<p className="text-sm text-[#ef8b6c]">{error}</p>}{message&&<p className="text-sm text-[#9cc98c]">{message}</p>}
        <button disabled={busy} className="w-full bg-white text-black rounded-full py-4 text-[10px] uppercase tracking-[.2em] flex items-center justify-center gap-2 disabled:opacity-50">{busy&&<LoaderCircle className="animate-spin" size={14}/>}Create account</button>
      </form>
      <p className="text-xs text-white/40 mt-8">Already have an account? <Link href="/auth/login" className="text-white underline underline-offset-4">Sign in</Link></p>
    </div>
  </main>
}