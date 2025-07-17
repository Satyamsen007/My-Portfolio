'use client'

import { tools } from "@/assets/assets";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import Image from "next/image";
import { useEffect, useRef } from "react";
export const ToolsSection = () => {

  const audioRefs = useRef({});

  useEffect(() => {
    tools.forEach(tool => {
      if (tool.sound) {
        audioRefs.current[tool.name] = new Audio(tool.sound);
        audioRefs.current[tool.name].load();
      }
    });

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);

  const handleHover = (toolName) => {
    if (audioRefs.current[toolName]) {
      const audio = audioRefs.current[toolName];
      audio.currentTime = 0;
      audio.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  return (
    <section className=" w-[95%] lg:w-[85%] mx-auto py-8 rounded-xl backdrop-blur-md">
      <div className="w-full flex flex-col items-center relative mb-10">
        <h2
          className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight mb-4 max-md:mb-2">
          Tech Stack for Building Awesome Stuff
        </h2>
        <p className="max-w-2xl text-sm md:text-base text-gray-300 text-center font-medium">
          Hover over the icons to hear the sound 🎵
        </p>
        <FlameStarEffectUnderline />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-4 rounded-2xl border border-white/20 shadow-xl backdrop-blur-lg transition-all duration-200 overflow-hidden group hover:scale-[1.02]"
            // Modify your hover handler
            onMouseEnter={() => handleHover(tool.name)}
            style={{ minHeight: '140px' }}
          >
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#2e1543]/80 via-[#30144a]/70 to-[#4d256c]/70 mb-2 shadow-lg z-20">
              {tool.icon ? (
                tool.icon
              ) : (
                <Image src={tool.image} alt={tool.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" priority={index < 5} />
              )}
            </div>
            <div className="mt-1 text-center text-white text-sm md:text-base font-medium tracking-wide w-full px-2 z-20">
              {tool.name}
            </div>

          </div>
        ))}
      </div>
    </section >
  );
};
