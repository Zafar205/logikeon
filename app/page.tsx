"use client";

import dynamic from "next/dynamic";
import MainNavbar from "./components/others/main-navbar";
import HeroText from "./components/others/hero-text";

// Dynamically import the WorldGlobe component with SSR disabled
const WorldGlobe = dynamic(() => import("./components/ui/world").then((mod) => ({ default: mod.WorldGlobe })), {
  ssr: false,
  loading: () => (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-transparent relative w-full">
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
    <>
      <MainNavbar />

      <main className="min-h-screen pt-20 lg:pt-24 mt-4">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Text Content - Left side on desktop, top on mobile */}
          <HeroText />
          
          {/* Globe - Right side on desktop, bottom on mobile */}
          <div className="flex-1 relative lg:pt-0 -mt-6 lg:-mt-8">
            <WorldGlobe />
          </div>
        </div>
      </main>
    </>
  );
}

