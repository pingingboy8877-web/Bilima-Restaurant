"use client";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [busy,setBusy]=useState(false); const [error,setError]=useState("");
  async function submit(e:FormEvent) {
    e.preventDefault(); setBusy(true); setError("");
    const {error}=await createClient().auth.signInWithPassword({email,password});
    if(error){setError(error.message);setBusy(false);return}
    window.location.href="/account";
  }
  return <main className="min-h-screen bg-[#171714] text-white p-5 md:p-10 flex flex-col">
    <Link href="/" className="flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/50"><ArrowLeft size={14}/> Back to Bilima</Link>
    <div className="w-full max-w-md m-auto py-16">
      <p className="text-[10px] tracking-[.28em] uppercase text-white/40">Bilima / Account</p>
      <h1 className="text-5xl tracking-[-.07em] mt-4">Welcome back.</h1>
      <p className="text-sm text-white/50 mt-4 leading-6">Sign in to manage orders, reservations and your profile.</p>
      <form onSubmit={submit} className="mt-12 space-y-4">
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-white/40"/>
        <input required type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-white/40"/>
        {error&&<p className="text-sm text-[#ef8b6c]">{error}</p>}
        <button disabled={busy} className="w-full bg-white text-black rounded-full py-4 text-[10px] uppercase tracking-[.2em] flex items-center justify-center gap-2 disabled:opacity-50">{busy&&<LoaderCircle className="animate-spin" size={14}/>}Sign in</button>
      </form>
      <p className="text-xs text-white/40 mt-8">New to Bilima? <Link href="/auth/sign-up" className="text-white underline underline-offset-4">Create an account</Link></p>
    </div>
  </main>
}
