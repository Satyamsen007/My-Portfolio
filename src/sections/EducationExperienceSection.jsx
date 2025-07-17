'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import { education, experience } from "@/assets/assets";

const tabs = ["Education", "Experience"];


// Add this to your cardVariants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.96,
  },
  visible: idx => ({
    opacity: 1,
    y: 0,
    scale: 1,
    height: "auto",
    transition: { delay: idx * 0.09, type: "spring", stiffness: 60, damping: 18 }
  })
};



const EducationExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("Education");
  const items = activeTab === "Education" ? education : experience;
  const tabIndex = tabs.indexOf(activeTab);

  return (
    <section
      className="relative w-[95%] lg:w-[85%] mx-auto py-8 lg:py-12 px-4 md:px-8 text-white font-sans overflow-x-clip"
    >

      <div className="w-full flex flex-col items-center relative mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight">
          Education & Experience
        </h2>
        {/* Fade underlines */}
        <FlameStarEffectUnderline />
      </div>
      {/* Glassy Tabs with Sliding Indicator */}
      <div className="flex justify-center items-center mb-16 relative w-full max-w-md mx-auto">
        <div className="flex w-full rounded-full bg-[#2e1543]/90 border border-[#43205c] shadow-lg backdrop-blur-xl relative overflow-hidden">
          {/* Sliding Pill Indicator */}
          <motion.div
            className="absolute inset-y-1 left-1 h-[calc(100%-0.5rem)] w-[48%] rounded-full pointer-events-none z-0"
            style={{
              background: "linear-gradient(90deg, #e0c6f7 0%, #a084e8 50%, #8e44ec 100%)",
              boxShadow: "0 2px 18px 0 rgba(232,111,255,0.10)",
              opacity: 1,
            }}
            layout
            initial={false}
            animate={{ x: `${tabIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
          />
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 w-1/2 py-2 md:py-3 text-base md:text-lg font-semibold tracking-wide rounded-full focus:outline-none cursor-pointer transition-colors duration-200 ${activeTab === tab ? "text-[#240C36]" : "text-[#b8a6cc] hover:text-[#e0c6f7]"}`}
              style={{
                letterSpacing: "0.03em",
                fontFamily: "inherit",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-2 md:px-0 min-h-[300px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item, idx) => {
            return (
              <motion.div
                key={`${activeTab}-${item.title}-${idx}`}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={idx}
                className="relative rounded-3xl bg-[#2e1543]/70 border border-[#5e2bbd] shadow-2xl px-6 pt-12 pb-7 flex flex-col items-center justify-start min-h-[230px] max-w-sm mx-auto backdrop-blur-xl overflow-visible group"
              >
                {/* Floating Icon */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] shadow-xl border-4 border-[#240C36] z-20">
                  <span className="text-3xl md:text-4xl drop-shadow-lg">{item.icon}</span>
                </span>
                {/* Neon Border Glow (removed on hover, only static faint border) */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-[#00FFB2] opacity-15 blur-[2.5px]" />
                {/* Card Content */}
                <div className="w-full flex flex-col items-center gap-1 mt-2 mb-1">
                  <h4 className="w-full text-lg md:text-xl font-bold text-white text-center drop-shadow-sm leading-tight mb-1">
                    {item.title}
                  </h4>
                  <span className="w-full text-white/80 font-semibold text-base text-center mb-1 leading-snug">
                    {item.org}
                  </span>
                  <div className="flex flex-wrap items-center justify-center text-[#e0c6f7]/80 text-xs gap-2 mb-2">
                    <span>{item.date}</span>
                    <span>• {item.location}</span>
                  </div>
                  <p className="text-[#e0c6f7]/90 text-xs md:text-sm text-center leading-snug max-w-xs">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export { EducationExperienceSection };
