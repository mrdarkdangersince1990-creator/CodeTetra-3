"use client";
import React, { Suspense, useRef } from "react";
import dynamic from "next/dynamic";
import { Loader } from "@react-three/drei";

import HeroUI from "../components/HeroUI";
import PricingSection from "../components/PricingSection";

const Scene = dynamic(() => import("../components/3d/Scene"), { 
  ssr: false,
  loading: () => <div className="h-screen w-full flex items-center justify-center bg-black font-mono">INITIALIZING_CORE...</div>
});

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <main ref={scrollContainer} className="relative bg-black">
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      <section className="relative h-[200vh] z-10">
        <HeroUI />
      </section>

      <section className="relative h-screen flex items-center justify-center z-10">
        <div className="max-w-4xl px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic uppercase tracking-tighter">
            Modular Scalability.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            CodeTetra infrastructure allows for hot-swappable GPU nodes. 
            Scale from a single unit to a global cluster without a second of downtime.
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-black/80 backdrop-blur-xl border-y border-white/5">
        <PricingSection />
      </section>

      <footer className="relative z-10 py-24 px-8 text-center bg-black">
        <div className="opacity-40 hover:opacity-100 transition-opacity">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold mb-2">Developed by</p>
          <h3 className="text-xl font-medium tracking-tight">Aniket Sharma (Andyy)</h3>
          <p className="mt-1 font-mono text-cyan-500 text-sm">as977100@gmail.com</p>
        </div>
      </footer>

      <Loader />
    </main>
  );
}
