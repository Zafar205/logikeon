"use client";

import { Cover } from "../ui/cover";

interface HeroTextProps {
  className?: string;
}

export default function HeroText({ className }: HeroTextProps) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-start px-6 py-2 lg:py-8 z-10 lg:pt-32 ${className || ''}`}>
      <div className="max-w-lhog w-full text-center lg:text-left lg:mt-0 mt-1 mb-1 lg:mb-0">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-1 lg:mb-7 leading-relaxed ml-8">
          Build your projects with{" "}
          <br className="block lg:hidden" />
          <Cover className="text-3xl md:text-4xl lg:text-5xl ml-2 mt-2">warp speed</Cover>
        </h2>
        
        {/* Get Started Button */}
        <div className="flex justify-center lg:justify-start ml-8 lg:ml-12 mt-6 lg:mt-8">
          <a href="#contact-us" className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" style={{background: 'linear-gradient(to right, #06b6d4, #000B42)'}}>
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" style={{background: 'linear-gradient(to right, #0891b2, #000B42)'}}></div>
          </a>
        </div>
      </div>
    </div>
  );
}
