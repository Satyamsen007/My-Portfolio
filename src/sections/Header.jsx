import React, { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState("home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const navRef = React.useRef(null);
  const linkRefs = React.useRef({});

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = link.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Function to update pill position and width
    const updatePill = () => {
      const node = linkRefs.current[active];
      const navNode = navRef.current;
      if (node && navNode) {
        const navRect = navNode.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        setPillStyle({
          left: nodeRect.left - navRect.left,
          width: nodeRect.width,
        });
      }
    };
    updatePill();
    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updatePill, 50);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [active]);

  return (
    <div className="flex justify-center z-50 items-center fixed top-3 left-0 right-0">
      <nav
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur relative"
        ref={navRef}
      >
        {/* Animated pill background, does not affect layout */}
        <div
          className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300 z-0"
          style={{
            width: pillStyle.width,
            left: pillStyle.left,
            boxShadow: "0 2px 16px 0 #fff4",
            transition: "all 0.3s cubic-bezier(.4,1.3,.6,1)",
            pointerEvents: "none",
          }}
        />
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={el => (linkRefs.current[link.id] = el)}
            className={`nav-item z-10 ${active === link.id
              ? "text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : "text-white hover:bg-white/20 hover:text-gray-100"
              }`}
            onClick={e => {
              e.preventDefault();
              const target = document.getElementById(link.id);
              if (target) {
                // Try Lenis if available
                if (window.Lenis && typeof window.Lenis.scrollTo === 'function') {
                  window.Lenis.scrollTo(target, { offset: -60 });
                } else {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};