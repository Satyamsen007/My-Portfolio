import memojiImage from '@/assets/images/memoji-computer.png';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import BackgroundFX from "@/components/BackgroundFX";
import SparkleBackgroundLayer from '@/components/SparkleBackgroundLayer';
import HeroSectionBgOrbits from '@/components/HeroSectionBgOrbits';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section id="home" className='py-32 md:py-48 overflow-y-hidden lg:py-60 relative z-0 overflow-x-clip bg-[#240C36]'>
      <HeroSectionBgOrbits />
      <SparkleBackgroundLayer />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className='container mx-auto'>
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400/40 via-purple-400/30 to-pink-400/20 blur-xl opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300 z-0"></div>
            <div className="rounded-full bg-gradient-to-br from-[#2e1543] via-[#30144a] to-[#4d256c] p-1 shadow-xl ring-2 ring-emerald-400/60 group-hover:scale-105 transition-transform duration-300 relative z-10">
              <Image src={memojiImage} alt="Person peeking from behind laptop" className="size-[90px] rounded-full bg-[#240C36]" />
            </div>
          </div>
          <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gradient-to-r from-emerald-400 via-purple-400 to-pink-400 bg-white/10 backdrop-blur-xl shadow-xl overflow-hidden animate-badge-float">
            <span className="block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-300 to-emerald-500 animate-pulse shadow-lg"></span>
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <span className="text-xs md:text-base font-bold text-white tracking-wide drop-shadow">Available for new projects</span>
            <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-emerald-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
          </div>
          <style jsx>{`
            @keyframes badge-float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            .animate-badge-float {
              animation: badge-float 3s ease-in-out infinite;
            }
          `}</style>
        </div>
        <div className="max-w-xl mx-auto mt-5 px-4 py-0 flex flex-col items-center gap-2 max-md:mt-2">
          <div
            className="flex items-center gap-2 group max-md:mt-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-serif font-bold bg-gradient-to-r from-emerald-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-none">
                &lt;/&gt;
              </span>
              <span className="text-sm font-medium text-[#e0c6f7] tracking-wider group-hover:text-white transition-colors duration-300 leading-none">
                FULL-STACK DEVELOPER
              </span>
            </div>
          </div>
          <h1
            className="font-serif text-3xl md:text-5xl text-center font-extrabold tracking-tight flex flex-wrap justify-center items-center relative"
            style={{ minHeight: '3.5rem' }}
          >
            <span className="text-white drop-shadow-lg">
              Hi, I am
            </span>
            <span className="ml-3 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#e0c6f7] via-[#ff9800] to-[#e0c6f7] relative drop-shadow-lg">
              Satyam Sen
            </span>
          </h1>
          <p
            className="mt-3 text-center text-sm text-[#e0c6f7]/90 md:text-lg font-medium max-w-md">
            I build robust, scalable, and beautiful web apps.<br className="hidden md:inline" />
            Focused on modern JavaScript, UI/UX, and delivering clean code that solves real problems.
          </p>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center mt-8 gap-4'>
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              const target = document.getElementById("projects");
              if (target) {
                // Try Lenis if available
                if (window.Lenis && typeof window.Lenis.scrollTo === 'function') {
                  window.Lenis.scrollTo(target, { offset: -60 });
                } else {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className='inline-flex items-center gap-2 border border-[#e0c6f7]/20 bg-[#30144a] text-[#e0c6f7] px-6 h-12 rounded-xl z-10 shadow transition-colors max-md:w-[90%] max-md:justify-center max-md:text-sm'>
            <span className='font-semibold'>Explore my work</span>
            <ArrowDown className='size-4' />
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              const target = document.getElementById("contact");
              if (target) {
                // Try Lenis if available
                if (window.Lenis && typeof window.Lenis.scrollTo === 'function') {
                  window.Lenis.scrollTo(target, { offset: -60 });
                } else {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
            className='inline-flex items-center gap-2 border border-[#e0c6f7]/30 bg-[#e0c6f7] text-[#240C36] h-12 px-6 rounded-xl z-10 shadow font-semibold hover:bg-white transition-colors max-md:w-[90%] max-md:justify-center max-md:text-sm'>
            <span>👋</span>
            <span className='font-semibold'>Let's Connect</span>
          </a>
        </div>
      </motion.div>
      <BackgroundFX />
    </section >
  )
}