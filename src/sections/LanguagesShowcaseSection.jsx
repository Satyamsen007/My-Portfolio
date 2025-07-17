import { FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FlameStarEffectUnderline from '@/components/FlameStarEffectUnderline';

const languages = [
  { name: 'Bengali', level: 'Native', value: 98 },
  { name: 'Hindi', level: 'Fluent', value: 90 },
  { name: 'English', level: 'Conversational', value: 60 },
];

export default function LanguagesShowcaseSection() {
  return (
    <section
      className="relative w-[95%] lg:w-[85%] mx-auto py-8 lg:py-12 px-4 md:px-8 text-white font-sans"
    >
      <div className="w-full flex flex-col items-center relative mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight">
          Languages
        </h2>
        {/* Fade underlines */}
        <FlameStarEffectUnderline />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#231a2e] flex items-center justify-center shadow-inner border border-[#36244a]">
              <FaGlobe className="text-[#E86FFF] text-2xl" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-sans text-sm md:text-lg font-bold text-white/90">
                  {lang.name}
                </span>
                <span className="font-sans text-xs md:text-sm text-[#e0c6f7] opacity-80">
                  {lang.level}
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-[#191622] relative overflow-hidden">
                <motion.div
                  initial={{ width: `${lang.value}%` }}
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#E86FFF] to-[#8e44ec]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
