'use client';

const EnterScreen = ({ onEnter }) => {
  const handleEnter = () => {
    const audio = new Audio("/music/intro_sound.mp3");
    audio.volume = 1;
    audio.play().catch((err) =>
      console.warn("Autoplay blocked or error:", err.message)
    );

    onEnter();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] cursor-pointer bg-[#1a0f23] transition-opacity duration-500"
      style={{
        background: "radial-gradient(ellipse at center, #26113c 0%, #1a0f23 100%)"
      }}
      onClick={handleEnter}
    >
      <div className="text-center select-none flex flex-col items-center animate-fadein">
        <span
          className="text-6xl md:text-8xl font-extrabold text-white/95 transition-transform duration-300 ease-out"
          style={{
            background: "linear-gradient(90deg,#fff 60%,#bdaaff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            filter: "drop-shadow(0 2px 12px #0006)"
          }}
        >
          Enter?
        </span>
        <div className="mt-6 flex flex-col items-center">
          <span className="text-base md:text-lg text-neutral-300 tracking-wide">
            Tap anywhere on the screen to continue
          </span>
          <span className="block mt-2 h-0.5 w-16 bg-gradient-to-r from-[#a855f7] via-[#bdaaff] to-[#a855f7] opacity-70 rounded-full" />
        </div>
      </div>
      <style>{`
        .animate-fadein {
          animation: fadein 0.7s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadein {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .text-6xl:hover, .md\:text-8xl:hover {
          transform: scale(1.035);
        }
      `}</style>
    </div>
  );
};

export default EnterScreen;