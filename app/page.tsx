"use client";

import dynamic from "next/dynamic";

// Dynamically import the WorldGlobe component with SSR disabled
const WorldGlobe = dynamic(() => import("./components/ui/world").then((mod) => ({ default: mod.WorldGlobe })), {
  ssr: false,
  loading: () => (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to Logikeon
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Connecting the world through innovation and technology
          </p>
        </div>
        <WorldGlobe />
      </div>
    </main>
  );
}

