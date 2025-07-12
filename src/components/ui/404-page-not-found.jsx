"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function NotFoundPage() {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-br from-[#17002b] to-[#2d1446] min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            className="w-full sm:w-10/12 md:w-7/12 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* SVG Illustration with integrated 404 */}
            <div className="flex justify-center mb-4 animate-bounce">
              <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk shadow */}
                <ellipse cx="110" cy="155" rx="70" ry="12" fill="#e0c6f7" fillOpacity="0.10" />
                {/* Laptop base */}
                <rect x="60" y="100" width="100" height="28" rx="8" fill="#e0c6f7" fillOpacity="0.18" />
                {/* Laptop screen */}
                <rect x="70" y="60" width="80" height="50" rx="6" fill="#e0c6f7" fillOpacity="0.32" />
                {/* Laptop inner screen */}
                <rect x="78" y="68" width="64" height="34" rx="4" fill="#e0c6f7" fillOpacity="0.65" />
                {/* Sad face on screen */}
                <circle cx="102" cy="85" r="4" fill="#240C36" fillOpacity="0.7" />
                <circle cx="118" cy="85" r="4" fill="#240C36" fillOpacity="0.7" />
                <path d="M104,96 Q110,91 116,96" stroke="#240C36" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* 404 badge */}
                <g>
                  <rect x="140" y="38" width="44" height="28" rx="10" fill="#e0c6f7" fillOpacity="0.85" stroke="#a084d8" strokeWidth="2" />
                  <text x="162" y="58" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#240C36">404</text>
                </g>
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#e0c6f7] font-semibold mb-3 font-serif">Oops! Page not found</h2>
            <p className="mb-6 text-[#cbb7e5] text-base sm:text-lg font-sans">
              Sorry, the page you are looking for doesn't exist in <span className="font-bold text-[#e0c6f7]">Satyam Sen's Portfolio</span>.<br />
              It might have been moved, deleted, or never existed.
            </p>
            <Button
              variant="default"
              onClick={() => router.push("/")}
              className="my-5 bg-[#e0c6f7] text-[#240C36] cursor-pointer hover:bg-[#e0c6f7] px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-all duration-200"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
