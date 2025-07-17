'use client'

import Image from "next/image";
import githubIcon from '@/assets/images/github.png';
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import { portfolioProjects } from "@/assets/assets";

export const ProjectsSection = () => {

  return (
    <section id="projects" className="pb-16 lg:pt-20 relative overflow-x-clip">
      <div className="w-[85%] mx-auto">
        <div
          className="w-full flex flex-col items-center relative mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight mb-4 max-md:mb-2">
            Projects that Inspire
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-gray-300 text-center font-medium">
            Dive into my portfolio and discover how innovative design and robust code come together to create digital experiences that captivate and deliver results.
          </p>
          {/* Fade underlines */}
          <FlameStarEffectUnderline />
        </div>

        <div
          className="w-full mt-10 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {portfolioProjects.map((project, i) => {
              return (
                <div
                  key={project.id}
                  className="z-20 rounded-3xl overflow-hidden shadow-xl border border-[#4d256c] bg-gradient-to-br from-[#2e1543] to-[#240C36] p-0 flex flex-col group transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="w-full aspect-video bg-[#1a0c23]/70 border-b border-[#e0c6f7]/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image?.src || project.image}
                      alt={project.title || 'Project screenshot'}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      width={800}
                      height={450}
                      priority={true}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="flex flex-col gap-2 items-center px-6 pt-6 pb-5">
                    {/* Title */}
                    <h3
                      className="text-lg md:text-xl font-bold text-white text-center mb-1 tracking-tight drop-shadow-lg">
                      {project.title}
                    </h3>
                    {/* Description */}
                    {project.description && (
                      <p
                        className="text-[#e0c6f7]/90 text-xs md:text-sm text-center mb-2 px-1">
                        {project.description}
                      </p>
                    )}
                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div
                        className="flex flex-wrap justify-center gap-2 mb-1">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e0c6f7]/10 border border-[#e0c6f7]/20 text-[#e0c6f7] shadow-sm backdrop-blur-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Action Buttons */}
                    <div
                      className="flex gap-3 w-full mt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2"
                      >
                        <button
                          className="bg-[#e0c6f7] text-[#240C36] h-11 w-full rounded-xl font-semibold flex items-center justify-center text-xs gap-2 shadow-md transition-all duration-200 border border-[#e0c6f7]/30 hover:bg-white cursor-pointer focus:ring-2 focus:ring-[#e0c6f7]/40 focus:outline-none">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 0 0 2-2v-7" /></svg>
                          <span>Live Demo</span>
                        </button>
                      </a>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-1/2"
                        >
                          <button
                            className="bg-transparent text-[#e0c6f7] h-11 w-full rounded-xl font-semibold flex items-center justify-center text-xs gap-2 shadow-md transition-all duration-200 border border-[#e0c6f7]/30 hover:bg-[#4d256c]/30 focus:ring-2 focus:ring-[#e0c6f7]/40 focus:outline-none cursor-pointer"
                          >
                            <Image src={githubIcon} alt="GitHub" className="size-4" />
                            <span>View Code</span>
                          </button>
                        </a>
                      ) : (
                        <div className="w-1/2 flex flex-col items-center">
                          <button
                            className="bg-gray-400/20 text-gray-400 h-11 w-full rounded-xl font-semibold flex items-center justify-center text-xs gap-2 shadow-md border border-gray-400/30 cursor-not-allowed"
                            disabled
                          >
                            <Image src={githubIcon} alt="GitHub" className="size-4" />
                            <span>View Code</span>
                          </button>
                          <span className="text-[10px] text-gray-400 mt-1 text-center">This project is private or was created as client work and cannot be shared.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}