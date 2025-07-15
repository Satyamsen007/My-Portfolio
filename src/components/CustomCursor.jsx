'use client'

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor
 * - Dot follows mouse exactly
 * - Circle lags behind with smooth animation
 * - Circle grows on hover over buttons, links, headings
 */
export default function CustomCursor() {
  // SSR-safe: Only access window in useEffect
  const [mounted, setMounted] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Show custom cursor only on large screens
  useEffect(() => {
    function handleResize() {
      setShowCursor(window.innerWidth >= 1024);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dotX.set(window.innerWidth / 2);
    dotY.set(window.innerHeight / 2);
    setMounted(true);
  }, []);
  // Circle position (lags behind, smoother)
  const circleX = useSpring(dotX, { stiffness: 500, damping: 40 });
  const circleY = useSpring(dotY, { stiffness: 500, damping: 40 });
  // Hover state
  const [isHovering, setIsHovering] = useState(false);

  // Update mouse position with requestAnimationFrame for smoothness
  useEffect(() => {
    let frame;
    const handleMouseMove = (e) => {
      frame && cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      frame && cancelAnimationFrame(frame);
    };
  }, [dotX, dotY]);

  // Detect hover on interactive elements
  useEffect(() => {
    const selectors = [
      "button",
      "a",
      "[role=button]",
      "input",
      "textarea",
      "select",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
    ];
    const hoverElements = document.querySelectorAll(selectors.join(","));
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Hide default cursor only if custom cursor is shown
  useEffect(() => {
    if (showCursor) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [showCursor]);

  // Sizes
  const dotSize = 10;
  const circleBaseSize = 38;
  const circleHoverSize = 74;
  const circleOpacity = 0.18;

  if (!showCursor) return null;

  return (
    <>
      {/* Outer Circle: glassy, blurred, violet glow, white outline on hover */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: circleX,
          y: circleY,
          width: circleBaseSize,
          height: circleBaseSize,
          marginLeft: -circleBaseSize / 2,
          marginTop: -circleBaseSize / 2,
          borderRadius: "50%",
          border: isHovering ? "2px solid #fff" : "1px solid #a855f7",
          background: isHovering
            ? `rgba(36,12,54,${circleOpacity})` // less frosted, more transparent
            : `rgba(36,12,54,${circleOpacity + 0.07})`, // more frosted
          boxShadow: isHovering
            ? "0 0 32px 10px #a855f7, 0 0 0 2px #fff"
            : "0 0 16px 5px #7c3aed77",
          backdropFilter: isHovering ? "none" : "blur(3px)",
          WebkitBackdropFilter: isHovering ? "none" : "blur(3px)",
          transition: "border 0.18s cubic-bezier(0.4,0,0.2,1), box-shadow 0.18s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.18s cubic-bezier(0.4,0,0.2,1), background 0.18s cubic-bezier(0.4,0,0.2,1)",
        }}
        animate={{
          scale: isHovering ? circleHoverSize / circleBaseSize : 1,
          transition: { type: "spring", stiffness: 320, damping: 30 },
        }}
      />
      {/* Dot: pure white, soft violet glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] bg-white"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
          borderRadius: "50%",
          boxShadow: isHovering
            ? "0 0 18px 7px #a855f7cc"
            : "0 0 8px 2px #7c3aed77",
        }}
        animate={{
          scale: isHovering ? 1.22 : 1,
          transition: { type: "spring", stiffness: 350, damping: 22 },
        }}
      />
    </>
  );
}
