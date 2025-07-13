import { motion } from "framer-motion";
import { useRef } from "react";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";

const skills = [
  { name: "HTML5", value: 84 },
  { name: "CSS3", value: 82 },
  { name: "JavaScript", value: 78 },
  { name: "React.js", value: 88 },
  { name: "Tailwind CSS", value: 85 },
  { name: "Bootstrap", value: 80 },
  { name: "Redux Toolkit", value: 65 },
  { name: "Zustand", value: 75 },
  { name: "Next.js", value: 78 },
  { name: "Express.js", value: 68 },
  { name: "Node.js", value: 72 },
  { name: "MongoDB", value: 78 },
];

export const SkillsShowcase = () => {
  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative w-[95%] lg:w-[85%] mx-auto py-8 lg:pt-0 lg:pb-12 px-4 md:px-8 text-white font-sans"
    >
      <div className="w-full flex flex-col items-center relative mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight">
          My Core Competencies & Technical Expertise
        </h2>
        {/* Fade underlines */}
        <FlameStarEffectUnderline />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {[leftSkills, rightSkills].map((col, i) => (
          <div key={i} className="flex flex-col gap-7">
            {col.map((skill, idx) => (
              <div key={skill.name} className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans text-sm md:text-base tracking-tight text-white/90">
                    {skill.name}
                  </span>
                  <span className="font-sans text-sm md:text-base text-[#E86FFF] drop-shadow-[0_0_6px_#E86FFFBB]">
                    {skill.value}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#191622] relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#E86FFF] to-[#8e44ec]"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsShowcase;
