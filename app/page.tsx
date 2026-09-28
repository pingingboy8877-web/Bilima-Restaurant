"use client";
import {ArrowUpRight, Clock3, MapPin, ShoppingBag, Star, UtensilsCrossed} from "lucide-react";
import {useState} from "react";

const dishes=[
 {name:"Bilima Jollof",type:"SIGNATURE",price:"₦8,500",desc:"Smoky party-style jollof, charred peppers and slow-cooked chicken.",tag:"Chef's pick"},
 {name:"Suya Board",type:"GRILL",price:"₦9,800",desc:"Spiced beef skewers, onions, tomatoes and house pepper sauce.",tag:"Popular"},
 {name:"Coconut Rice",type:"PLATE",price:"₦7,500",desc:"Fragrant coconut rice with grilled prawns and citrus herb oil.",tag:"New"},
 {name:"Plantain & Eggs",type:"BREAKFAST",price:"₦5,500",desc:"Sweet fried plantain, soft eggs, avocado and house chili.",tag:"Morning"}
];

export default function Home(){
 const [cart,setCart]=useState(0);
 return <main>
  <nav className="fixed z-50 top-0 left-0 right-0 px-5 md:px-10 py-5 flex items-center justify-between mix-blend-difference text-white">
   <a href="#" className="font-black tracking-[-.06em] text-xl">BILIMA<span className="text-[#d76b48]">.</span></a>
   <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[.22em]"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Visit</a></div>
   <button onClick={()=>setCart(cart+1)} className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] border border-white/30 rounded-full px-4 py-2"><ShoppingBag size={14}/><span>Order · {cart}</span></button>
  </nav>

  <section className="min-h-screen bg-[#1b1a17] text-white px-5 md:px-10 pt-28 pb-10 flex items-end relative overflow-hidden">
   <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_35%,#a94f32,transparent_32%),radial-gradient(circle_at_25%_80%,#6b513d,transparent_30%)]"/>
   <div className="relative z-10 w-full grid md:grid-cols-[1fr_340px] gap-12 items-end">
    <div className="reveal"><p className="text-[10px] uppercase tracking-[.3em] text-white/55 mb-7">Restaurant · Abuja · Nigeria</p><h1 className="text-[clamp(4rem,12vw,10rem)] leading-[.78] tracking-[-.085em] font-semibold max-w-5xl">Eat<br/>well<span className="text-[#d76b48]">.</span></h1></div>
    <div className="border-t border-white/20 pt-5 reveal" style={{animationDelay:".12s"}}><p className="text-sm leading-6 text-white/65">A contemporary Nigerian kitchen built around fire, comfort, generous plates and the people sitting around them.</p><a href="#menu" className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[.2em] uppercase">Explore menu <ArrowUpRight size={15}/></a></div>
   </div>
  </section>

  <section className="overflow-hidden border-b border-black/10 py-4 bg-[#bd4d2c] text-white"><div className="marquee whitespace-nowrap flex gap-10 text-[10px] tracking-[.3em] uppercase w-max">Freshly made · Local ingredients · Abuja nights · Family table · Freshly made · Local ingredients · Abuja nights · Family table ·</div></section>

  <section id="menu" className="px-5 md:px-10 py-24 md:py-32">
   <div className="flex justify-between items-end mb-14"><div><p className="text-[10px] tracking-[.25em] uppercase text-black/45">01 / The menu</p><h2 className="text-5xl md:text-7xl tracking-[-.07em] mt-4">Made to<br/>be shared.</h2></div><span className="hidden md:block text-xs text-black/45 max-w-[220px]">Bold Nigerian flavours with a contemporary point of view.</span></div>
   <div className="grid md:grid-cols-2 border-t border-black/15">{dishes.map((d,i)=><article key={d.name} className="group py-8 md:py-10 border-b border-black/15 md:nth-[odd]:border-r md:pr-10 md:nth-[even]:pl-10"><div className="flex justify-between gap-6"><div><p className="text-[9px] tracking-[.22em] uppercase text-black/40">{d.type} · {d.tag}</p><h3 className="text-2xl md:text-3xl mt-3 tracking-[-.04em] group-hover:translate-x-1 transition-transform">{d.name}</h3><p className="text-sm text-black/55 mt-3 max-w-md leading-6">{d.desc}</p></div><span className="text-sm whitespace-nowrap">{d.price}</span></div><button onClick={()=>setCart(cart+1)} className="mt-7 text-[9px] uppercase tracking-[.2em] border-b border-black/30 pb-2">Add to order +</button></article>)}</div>
  </section>

  <section id="story" className="bg-[#171714] text-white px-5 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16">
   <div><p className="text-[10px] tracking-[.25em] uppercase text-white/40">02 / The kitchen</p><h2 className="text-5xl md:text-7xl tracking-[-.07em] mt-5">Rooted here.<br/>Made for now.</h2></div>
   <div className="max-w-lg self-end"><p className="text-lg md:text-xl leading-8 text-white/70">Bilima is a neighbourhood restaurant with a serious kitchen. We source with intention, cook with patience and serve food that belongs at the centre of the table.</p><div className="grid grid-cols-2 gap-8 border-t border-white/15 mt-12 pt-6"><div><Clock3 size={16}/><p className="text-[10px] tracking-[.18em] uppercase mt-3 text-white/45">Daily</p><p className="text-sm mt-1">11:00 — 23:00</p></div><div><UtensilsCrossed size={16}/><p className="text-[10px] tracking-[.18em] uppercase mt-3 text-white/45">Service</p><p className="text-sm mt-1">Dine in · Takeaway</p></div></div></div>
  </section>

  <section id="visit" className="px-5 md:px-10 py-24 md:py-32"><div className="grid md:grid-cols-[1.2fr_.8fr] gap-14"><div><p className="text-[10px] tracking-[.25em] uppercase text-black/45">03 / Find us</p><h2 className="text-5xl md:text-8xl tracking-[-.08em] mt-5">Your table<br/>is waiting.</h2></div><div className="md:pt-16"><div className="flex gap-4 border-t border-black/15 pt-5"><MapPin size={18}/><div><p className="text-sm">Abuja, Nigeria</p><p className="text-sm text-black/45 mt-1">Exact location coming soon</p></div></div><button className="mt-12 w-full bg-[#171714] text-white py-4 text-[10px] tracking-[.2em] uppercase rounded-full">Reserve a table</button></div></div></section>

  <footer className="px-5 md:px-10 py-8 border-t border-black/10 flex flex-col md:flex-row gap-4 justify-between text-[9px] tracking-[.2em] uppercase text-black/45"><span>© {new Date().getFullYear()} Bilima Restaurant</span><span>Good food. Good company.</span><span className="flex items-center gap-1"><Star size={10}/> Built for hospitality</span></footer>
 </main>
}