"use client";

import dynamic from "next/dynamic";
import MainNavbar from "./components/others/main-navbar";
import HeroText from "./components/others/hero-text";
import { CanvasRevealEffectDemo } from "./components/ui/canvas-reveal";
import { TimelineDemo } from "./components/ui/timeline";
import { WorldMapDemo } from "./components/ui/mapworld-comp";
import { FeaturesSectionDemo } from "./components/ui/features";


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
        
        {/* Canvas Reveal Effect Section */}
        <section className="w-full">
          <CanvasRevealEffectDemo />
        </section>



        {/* Portfolio Timeline Section */}
        <section className="w-full py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                A timeline of our professional growth, projects, and achievements in web development
              </p>
            </div>
            <TimelineDemo />
          </div>
        </section>

        {/* World Map Section */}
        <section className="w-full relative">
          <WorldMapDemo />
        </section>

                {/* Features Section */}
        <section className="w-full relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Why Choose Logikeon
              </h2>
              <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
                Cutting-edge technology solutions with interactive experiences that bring your digital vision to life
              </p>
            </div>
            <FeaturesSectionDemo />
          </div>
        </section>
      </main>


    </>
  );
}

