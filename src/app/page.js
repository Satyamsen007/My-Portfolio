'use client';

import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import CustomCursor from "@/components/CustomCursor";
import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis';
import EnterScreen from "@/components/EnterScreen";
import WelcomeLoader from "@/components/WelcomeLoader";
import { ContactUsSection } from "@/sections/ContactUsSection";
import SocialMediaShowcase from "@/sections/SocialMediaShowcase";
import Footer from "@/sections/Footer";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isHome = window.location.pathname === '/';
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');

    if (isHome && !alreadyVisited) {
      setStarted(false);
    } else {
      setStarted(true);
    }

    setInitialCheckDone(true);
  }, []);

  // Lenis smooth scroll integration
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust for more/less smoothing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#240C36] z-[99999]" />
    );
  }
  return (
    <>
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <WelcomeLoader onComplete={() => setShowLoader(false)} />
      ) : (
        <div className="relative min-h-screen w-full text-white antialiased font-sans overflow-x-clip">
          <CustomCursor />
          <Header />
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ContactUsSection />
          <SocialMediaShowcase />
          <Footer />
          <ScrollProgressBar showPercentage type="circle" color="#9B74E9" strokeSize={4} />
        </div>
      )
      }
    </>


  );
}
