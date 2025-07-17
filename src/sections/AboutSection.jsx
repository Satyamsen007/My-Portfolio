import React from "react";
import { EducationExperienceSection } from "./EducationExperienceSection";
import SkillsShowcase from "./SkillsShowcase";
import LanguagesShowcaseSection from "./LanguagesShowcaseSection";
import { ToolsSection } from "./ToolsSection";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";

const AboutSection = () => {
  return (
    <section
      id="about"
    >
      <div className="lg:w-[85%] w-[95%] mx-auto pt-0 pb-4 lg:py-12 lg:px-6 px-2 text-white font-sans">
        <div
          className="w-full flex flex-col items-center relative mb-10">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight">
            About Me
          </h2>
          {/* Fade underlines */}
          <FlameStarEffectUnderline />
        </div>
        <div
          className="lg:p-6 md:p-8 backdrop-blur-sm">
          <p
            className="mb-4 text-sm lg:text-lg leading-relaxed text-gray-300 text-center">
            Hello! I'm Satyam Sen, a dedicated Full Stack Developer from West Bengal, India. With a strong foundation in web technologies and a diploma in Web Design from Moople Institute (2023-2024), I specialize in building responsive, user-centric web applications.
          </p>
          <p
            className="mb-4 text-sm lg:text-lg leading-relaxed text-gray-300 text-center">
            My academic background includes completing both secondary and higher secondary education under the West Bengal Board & Council.
          </p>
          <p
            className="mb-4 text-sm lg:text-lg leading-relaxed text-gray-300 text-center">
            As a full-stack developer, I've worked with both frontend and backend technologies, focusing on creating seamless digital experiences. My technical education has provided me with comprehensive understanding of web architecture, UI/UX principles, and efficient coding practices.
          </p>
          <p
            className="text-sm lg:text-lg leading-relaxed text-gray-300 text-center">
            Committed to continuous learning, I stay up to date with the latest technologies, tools, and development practices. Outside of coding, I invest time in building personal projects, exploring new frameworks, and expanding my knowledge to remain aligned with industry trends. I strongly believe in sharing insights with peers and learning through collaboration to grow as a developer and support the broader tech community.
          </p>
          <div
            className="flex justify-center mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-3 rounded-xl bg-[#240C36]/80 border-2 border-[#e86fff] text-[#e0c6f7] font-bold shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#e86fff]"
              style={{
                boxShadow: "0 4px 24px 0 rgba(232,111,255,0.18), 0 1.5px 6px 0 rgba(142,68,236,0.10)"
              }}
            >
              {/* Border (static, no hover glow) */}
              <span className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent"></span>
              {/* Glassy overlay (static) */}
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-30 pointer-events-none"></span>
              {/* Icon and text (static) */}
              <span className="flex items-center gap-2 relative z-10 font-bold text-sm md:text-lg text-[#e86fff] drop-shadow-lg">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block"
                >
                  <path d="M12 16V4M12 16l4-4M12 16l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor" opacity="0.5" />
                </svg>
                View My Resume
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
      >
        <SkillsShowcase />
      </div>
      <div
      >
        <EducationExperienceSection />
      </div>
      <div
      >
        <LanguagesShowcaseSection />
      </div>
      <div
      >
        <ToolsSection />
      </div>
    </section>
  );
};

export { AboutSection };
