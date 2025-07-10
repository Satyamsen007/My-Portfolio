'use client'

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/music/background-music.mp3');
    }
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleClick = (e) => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;

    if (timeDiff < 300) { // Double click threshold (300ms)
      // Double click - restart from beginning
      audioRef.current.currentTime = 0;
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Single click - play/pause
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }

    setLastClickTime(currentTime);
  };

  return (
    <div className="fixed top-3 right-6 z-50 max-md:hidden">
      <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
        {/* CIRCULAR BORDER SPINNER */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="absolute w-[60px] h-[60px] rounded-full pointer-events-none"
              style={{
                background: `
                conic-gradient(
                  from 0deg at 50% 50%,
                  transparent 0deg,
                  #e0c6f7 90deg,
                  #a78bfa 180deg,
                  transparent 270deg,
                  transparent 360deg
                )
              `,
                mask: `
                radial-gradient(
                  farthest-side,
                  transparent calc(100% - 2px),
                  #000 calc(100% - 1px)
                )
              `,
                WebkitMask: `
                radial-gradient(
                  farthest-side,
                  transparent calc(100% - 2px),
                  #000 calc(100% - 1px)
                )
              `,
                filter: 'blur(1px)'
              }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{
                rotate: { repeat: Infinity, duration: 2.5, ease: "linear" },
                opacity: { duration: 0.4 }
              }}
            />
          )}
        </AnimatePresence>

        {/* Main Button */}
        <button
          onClick={handleClick}
          className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2e1543] text-white flex items-center justify-center shadow-lg backdrop-blur-md border border-[#4d256c] cursor-pointer transition-colors"
        >
          {isPlaying ? (
            <Pause className="text-[#e0c6f7] size-5 lg:size-6" />
          ) : (
            <Music className="text-[#e0c6f7] size-5 lg:size-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayButton;