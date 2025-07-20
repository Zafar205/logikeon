"use client";
import React from "react";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

const servicesData = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and frameworks for optimal performance and user experience.",
    colors: [[125, 211, 252]], // Light blue
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications designed to engage users across iOS and Android platforms.",
    colors: [[196, 254, 165]], // Light green
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and visually appealing interfaces that provide seamless user experiences and drive conversions.",
    colors: [[254, 202, 202]], // Light red/pink
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business grow and succeed in the modern world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-black border border-gray-800 rounded-2xl p-8 h-[400px] overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-600"
            >
              {/* Canvas Reveal Effect Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CanvasRevealEffect
                  animationSpeed={0.4}
                  containerClassName="bg-transparent"
                  colors={service.colors}
                  dotSize={2}
                  showGradient={false}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8">
                  <button className="inline-flex items-center text-cyan-400 group-hover:text-black font-semibold transition-colors duration-300">
                    Learn More
                    <svg 
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
