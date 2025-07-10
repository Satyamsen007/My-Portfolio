'use client'

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import { ArrowUpIcon, CheckCircleIcon } from "lucide-react";
import grainImage from '@/assets/images/grain.jpg';
import githubIcon from '@/assets/images/github.png';
import { useEffect, useState } from "react";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import { motion, AnimatePresence } from "framer-motion";

const portfolioProjects = [
  {
    id: 1,
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    description: "A modern dark-themed SaaS landing page built with React and Tailwind CSS. Features include responsive design, animations, and optimized performance.",
    techStack: ["React", "Tailwind CSS", "Next.js", "Framer Motion"],
    role: "Lead Frontend Developer",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
    github: "https://github.com/username/dark-saas-landing",
  },
  {
    id: 2,
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    description: "Clean and minimal light-themed landing page designed for maximum conversion. Implements modern web practices and accessibility standards.",
    techStack: ["React", "Styled Components", "Firebase", "Redux"],
    role: "Frontend Developer",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
    github: "https://github.com/username/light-saas-landing",
  },
  {
    id: 3,
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    description: "Dynamic landing page for an AI startup featuring interactive demos, real-time API integration, and modern design principles.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
    role: "Full Stack Developer",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
    github: "https://github.com/username/ai-startup-landing",
  },
  {
    id: 4,
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    description: "Dynamic landing page for an AI startup featuring interactive demos, real-time API integration, and modern design principles.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
    role: "Full Stack Developer",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
    github: "https://github.com/username/ai-startup-landing",
  },
];


export const ProjectsSection = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="projects" className="pb-16 lg:pt-20 relative overflow-x-clip">
      <div className="w-[85%] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full flex flex-col items-center relative mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg tracking-tight mb-4 max-md:mb-2">
            Projects that Inspire
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-gray-300 text-center font-medium">
            Dive into my portfolio and discover how innovative design and robust code come together to create digital experiences that captivate and deliver results.
          </p>
          {/* Fade underlines */}
          <FlameStarEffectUnderline />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:mt-20 mt-10 gap-20 lg:grid lg:grid-cols-2">
          {
            portfolioProjects.map((project, i) => {
              const row = Math.floor(i / 2);
              const largeScreenTopValue = `calc(64px + ${row * 40}px)`;
              const smallScreenTopValue = `calc(64px + ${i * 40}px)`;
              return (
                <motion.div
                  variants={item}
                  key={project.id} className="bg-[#2e1543] z-20 rounded-3xl overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-[#e0c6f7]/10 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none shadow-lg hover:shadow-[#e0c6f7]/30 transition-shadow duration-300 border border-[#4d256c] hover:border-[#e0c6f7]/40 sticky"
                  style={{
                    top: isLargeScreen ? largeScreenTopValue : smallScreenTopValue
                  }}
                >
                  <div className="absolute inset-0 -z-10 opacity-10" style={{
                    backgroundImage: `url(${grainImage.src})`,
                    backgroundColor: '#240C36',
                    backgroundBlendMode: 'multiply'
                  }}></div>

                  <div className="group lg:relative lg:flex lg:items-stretch">
                    {/* Details: visible on mobile/tablet, hidden on lg and up */}
                    <div className="lg:hidden lg:pb-16 flex flex-col items-center gap-4">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-2xl md:text-4xl text-white text-center mt-2">{project.title}</motion.h3>
                      {/* Role badge */}
                      {project.role && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="bg-[#e0c6f7]/10 text-[#e0c6f7] px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#e0c6f7]/20">{project.role}</motion.span>
                      )}
                      {/* Description */}
                      {project.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="text-[#e0c6f7]/90 text-xs text-center mt-1">{project.description}</motion.p>
                      )}
                      {/* Tech stack */}
                      {project.techStack && project.techStack.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, staggerChildren: 0.1 }}
                          className="flex flex-wrap justify-center gap-2 mt-2">
                          {project.techStack.map((tech, idx) => (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                              key={idx} className="bg-[#e0c6f7]/10 text-[#e0c6f7] px-2 py-0.5 rounded text-xs font-medium border border-[#e0c6f7]/10">{tech}</motion.span>
                          ))}
                        </motion.div>
                      )}
                      {/* Results */}
                      <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col gap-2 mt-2">
                        {project.results.map((result, idx) => (
                          <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            key={idx} className="flex gap-2 text-xs text-[#e0c6f7]/70 items-center">
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                      {/* Action buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-3 w-full mt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-1/2">
                          <button className="bg-[#e0c6f7] text-[#240C36] h-12 w-full px-2 rounded-xl font-semibold inline-flex items-center justify-center text-xs gap-2 shadow-md transition-colors duration-200 border border-[#e0c6f7]/30">
                            <span>Visit Live Site</span>
                            <ArrowUpIcon className="size-4 max-sm:size-3 rotate-45" />
                          </button>
                        </a>
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2">
                            <button className="bg-transparent text-[#e0c6f7] h-12 w-full px-2 rounded-xl font-semibold inline-flex items-center text-xs justify-center gap-2 shadow-md transition-colors duration-200 border border-[#e0c6f7]/30">
                              <span>View Code</span>
                              <Image src={githubIcon} alt="GitHub" className="size-4 max-sm:size-3" />
                            </button>
                          </a>
                        )}
                      </motion.div>
                    </div>

                    {/* Image only on lg and up, with popup interaction bar on hover */}
                    <div className="relative w-full lg:h-[400px]">
                      <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <Image src={project.image} alt={project.title || 'Project screenshot'} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:inset-0 lg:h-full lg:w-full lg:max-w-none rounded-2xl lg:rounded-t-2xl lg:rounded-b-none shadow-xl border border-[#4d256c] lg:object-cover" />
                      </motion.div>

                      {/* Popup bar/modal for lg screens, appears on hover */}
                      <div
                        className="hidden lg:flex flex-col items-center justify-center absolute bottom-0 left-0 w-full p-6 bg-[#2e1543]/98 rounded-t-2xl shadow-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">

                        <div className="w-full flex flex-col items-center gap-4">
                          <h3
                            className="font-serif text-2xl md:text-4xl text-gray-100 text-center">{project.title}</h3>
                          {/* Role badge */}
                          {project.role && (
                            <span
                              className="bg-[#4d256c] text-[#e0c6f7] px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[#e0c6f7]/40">{project.role}</span>
                          )}
                          {/* Description */}
                          {project.description && (
                            <p className="text-gray-200 text-sm text-center mt-1">{project.description}</p>
                          )}
                          {/* Tech stack */}
                          {project.techStack && project.techStack.length > 0 && (
                            <div
                              className="flex flex-wrap justify-center gap-2 mt-2">
                              {project.techStack.map((tech, idx) => (
                                <span
                                  key={idx} className="bg-[#4d256c] text-[#e0c6f7] px-2 py-0.5 rounded text-xs font-medium border border-[#e0c6f7]/20">{tech}</span>
                              ))}
                            </div>
                          )}
                          {/* Results */}
                          <ul
                            className="flex flex-col gap-2 mt-2">
                            {project.results.map((result, idx) => (
                              <li
                                key={idx} className="flex gap-2 text-sm text-gray-200 items-center">
                                <CheckCircleIcon className="size-5" />
                                <span>{result.title}</span>
                              </li>
                            ))}
                          </ul>
                          {/* Action buttons */}
                          <div
                            className="flex gap-3 w-full mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-1/2">
                              <button className="bg-[#e0c6f7] cursor-pointer hover:bg-white text-[#240C36] h-12 w-full px-2 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-md transition-colors duration-200 border border-[#e0c6f7]/30">
                                <span>Visit Live Site</span>
                                <ArrowUpIcon className="size-4 rotate-45" />
                              </button>
                            </a>
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-1/2">
                                <button className="bg-transparent cursor-pointer hover:bg-[#4d256c] text-[#e0c6f7] h-12 w-full px-2 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-md transition-colors duration-200 border border-[#e0c6f7]/30 hover:border-[#e0c6f7]/50">
                                  <span>View Code</span>
                                  <Image src={githubIcon} alt="GitHub" className="size-4" />
                                </button>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}