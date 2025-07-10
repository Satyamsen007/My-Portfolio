import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const WelcomeLoader = ({ onComplete }) => {
  const textRef = useRef();
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!hasPlayed.current) {
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 2 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }
      ).to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.inOut",
        }
      );

      hasPlayed.current = true;
    }
  }, [onComplete]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at center, #26113c 0%, #1a0f23 100%)",
        transition: "background 0.5s"
      }}
    >
      <h1
        ref={textRef}
        className="text-6xl md:text-8xl font-extrabold leading-none text-center select-none"
        style={{
          background: "linear-gradient(90deg,#fff 60%,#bdaaff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "0.02em",
          filter: "drop-shadow(0 2px 12px #0006)",
          textShadow: "0 2px 12px #0004"
        }}
      >
        Welcome!
      </h1>
    </div>
  );
};

export default WelcomeLoader;