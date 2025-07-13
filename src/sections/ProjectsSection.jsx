'use client'

import FreshCartLandingPage from "@/assets/images/FreshCartLandingPage.png";
import MotionWriterLandingPage from "@/assets/images/MotionWriterLandingPage.png";
import SpotifyCloneLandingPage from "@/assets/images/SpotifyCloneLandingPage.png";
import ChattyLandingPage from "@/assets/images/ChattyLandingPage.png";
import KlimateLandingPage from "@/assets/images/KlimateLandingPage.png";
import Image from "next/image";
import githubIcon from '@/assets/images/github.png';
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    id: 1,
    title: "FreshCat - Online Grocery Store",
    description: "A full-featured e-commerce platform for grocery shopping with modern UI/UX. Includes product catalog, shopping cart, user authentication, and payment integration. Built with React for a seamless shopping experience across all devices.",
    techStack: ["React", "Tailwind CSS", "Next.js", "Framer Motion", "Lucide React", "React-Redux", "Cloudinary", "Mongoose", "Stripe", "Next-Auth"],
    link: "https://fresh-cart-mu-ten.vercel.app",
    image: FreshCartLandingPage,
    github: "https://github.com/Satyamsen007/FreshCart_Grosery_Store",
  },
  {
    id: 2,
    title: "Spotify Clone – Minimal Music Streaming App",
    description: "A clean and responsive Spotify-inspired music player featuring basic playback, playlist browsing, and user authentication. Designed with a sleek UI, smooth transitions, and persistent audio experience across pages. Built to reflect core streaming functionality with a focus on UI/UX.",
    techStack: ["React", "Tailwind CSS", "Next.js", "Framer Motion", "Cloudinary", "Mongoose", "Shadcn Ui", "Zustand", "Next-Auth", "Lucide React"],
    link: "https://spotify-clone-omega-gold.vercel.app",
    image: SpotifyCloneLandingPage,
    github: "https://github.com/Satyamsen007/spotify-clone",
  },
  {
    id: 3,
    title: "MotionWriter | Creative & Motion Marketing Agency",
    description: "A modern agency site for MotionWriter, presenting their creative services including motion graphics, branding, and digital marketing. Features smooth animations, interactive showcases, and a sleek UI that reflects their premium, results-focused identity.",
    techStack: ["React", "Tailwind CSS", "Next.js", "Framer Motion", "Next-Themes", "React Icons", "Lucide React", "React-Player"],
    link: "https://www.motionwriter.in",
    image: MotionWriterLandingPage,
    github: null,
  },
  {
    id: 4,
    title: "Chatty – Real-Time Chat Application",
    description: "A full-stack chat application built with the MERN stack. Features real-time messaging using Socket.IO, user authentication, MongoDB-based message storage, and a responsive React frontend with Multiple theme mode support. Designed for seamless and interactive 1-on-1 conversations.",
    techStack: ["React", "Tailwind CSS", "Daisyui", "Framer Motion", "Socket-Io-Client", "Socket.Io", "Express", "Cloudinary", "Mongoose", "BcryptJs", "Zustand", "Lucide React"],
    link: "https://chatty-sigma-virid.vercel.app",
    image: ChattyLandingPage,
    github: "https://github.com/Satyamsen007/Chatty_Online_ChatAplication",
  },
  {
    id: 5,
    title: "Klimate – Modern Weather Dashboard",
    description: "A responsive and modern weather app built with Next.js and React 19. It features real-time location-based forecasts, animated UI, interactive charts, and theme switching. Built using TanStack Query, Radix UI, Recharts, and Tailwind for a fast, accessible experience.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Recharts", "Radix UI", "TanStack Query", "Lucide React", "Next-Themes", "Shadcn UI", "Date-fns",],
    link: "https://klimate-weather-app-eight.vercel.app",
    image: KlimateLandingPage,
    github: "https://github.com/Satyamsen007/Klimate_Weather_App",
  },
];


export const ProjectsSection = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.9
      }
    }
  };
  // Smoother fade-in for the section header
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
          viewport={{ once: true, margin: "-300px" }}
          className="w-full mt-10 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {portfolioProjects.map((project, i) => {
              return (
                <motion.div
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
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg md:text-xl font-bold text-white text-center mb-1 tracking-tight drop-shadow-lg">
                      {project.title}
                    </motion.h3>
                    {/* Description */}
                    {project.description && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-[#e0c6f7]/90 text-xs md:text-sm text-center mb-2 px-1">
                        {project.description}
                      </motion.p>
                    )}
                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, staggerChildren: 0.1 }}
                        className="flex flex-wrap justify-center gap-2 mb-1">
                        {project.techStack.map((tech, idx) => (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e0c6f7]/10 border border-[#e0c6f7]/20 text-[#e0c6f7] shadow-sm backdrop-blur-md">
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.3 }}
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
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}