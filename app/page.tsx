"use client";

import dynamic from "next/dynamic";
import { Cover } from "./components/ui/cover";

// Dynamically import the WorldGlobe component with SSR disabled
const WorldGlobe = dynamic(() => import("./components/ui/world").then((mod) => ({ default: mod.WorldGlobe })), {
  ssr: false,
  loading: () => (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-black relative w-full">
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
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Text Content - Left side on desktop, top on mobile */}
        <div className="flex-1 flex flex-col items-center justify-start lg:justify-center px-6 py-6 lg:py-20 z-10 lg:pb-32">
          <div className="max-w-lhog w-full text-center lg:text-left lg:mt-0 mt-4 mb-4 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-7 leading-relaxed">
              Build your projects with{" "}
              <br className="block lg:hidden" />
              <Cover className="text-4xl md:text-6xl lg:text-7xl ml-2 mt-2">warp speed</Cover>
            </h2>

          </div>
        </div>
        
        {/* Globe - Right side on desktop, bottom on mobile */}
        <div className="flex-1 relative">
          <WorldGlobe />
        </div>
      </div>
    </main>
  );
}

