'use client'

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";
// SVG blobs for top-left and bottom-right
const Blob = ({ className, style, color, animateProps }) => (
  <motion.svg
    width="480" height="480" viewBox="0 0 480 480"
    className={className}
    style={style}
    {...animateProps}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.ellipse
      cx="240" cy="240" rx="200" ry="160"
      fill={color}
      filter="url(#blur)"
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <defs>
      <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="48" result="blur" />
      </filter>
    </defs>
  </motion.svg>
);

export default function BackgroundFX() {
  // Mouse-following neon glow
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const glowRef = useRef(null);
  const glowX = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 40 });
  const glowY = useSpring(useMotionValue(0.5), { stiffness: 120, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = e.clientX / w;
      const y = e.clientY / h;
      setMouse({ x, y });
      glowX.set(x);
      glowY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [glowX, glowY]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none max-md:hidden select-none">
      {/* Top overlay gradient to match HeroSection fade */}
      <div className="absolute top-0 left-0 w-full h-60 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #240C36 0%, #240C36 40px, transparent 100%)" }} />
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#240C36]" />
      {/* Premium neon accent top right, blending with Home/Hero */}
      <motion.div
        className="absolute -top-32 right-0 w-[700px] h-[420px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 0%, rgba(232,111,255,0.22) 0%, rgba(36,12,54,0) 70%)"
        }}
        animate={{
          x: mouse.x * 24 - 12,
          y: mouse.y * 8 - 4,
          opacity: 1
        }}
        transition={{ type: "spring", stiffness: 60, damping: 30 }}
      />
      {/* Glassy angled sheen (top right) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(100deg, rgba(255,255,255,0.14) 8%, transparent 70%)",
          mixBlendMode: "screen"
        }}
        animate={{
          x: mouse.x * 16 - 8,
          y: mouse.y * 6 - 3,
          opacity: [0.18, 0.24, 0.18]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      {/* Mouse-following premium neon glow */}
      <motion.div
        ref={glowRef}
        className="absolute"
        style={{
          left: `calc(${mouse.x * 100}% - 210px)`,
          top: `calc(${mouse.y * 100}% - 210px)`,
          width: 420,
          height: 420,
          pointerEvents: "none",
          opacity: 0.16,
          filter: "blur(42px)",
          zIndex: 0,
        }}
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, #E86FFF 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, #00FFB2 0%, transparent 70%)",
            "radial-gradient(circle at 50% 50%, #E86FFF 0%, transparent 70%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      {/* Subtle grain overlay */}
      <div className={`absolute inset-0 bg-[url(${grainImage.src})] opacity-7 mix-blend-soft-light`} />
    </div>
  );
}
