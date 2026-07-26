import React from "react";
import { FaLinkedin, FaYoutube, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  // Ultra-Smart Smooth Scroll System
  const handleScroll = (sectionId) => {
    // Method 1: Check standard ID (projects)
    let section = document.getElementById(sectionId);
    
    // Method 2: Check Capitalized ID (Projects)
    if (!section) {
      const capitalizedId = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
      section = document.getElementById(capitalizedId);
    }

    // Method 3: Global Text Fallback (Dhoondo heading kahan hai)
    if (!section) {
      const headings = Array.from(document.querySelectorAll("h1, h2, h3, section, div"));
      section = headings.find(
        (el) => el.textContent?.trim().toLowerCase() === sectionId.toLowerCase()
      );
    }

    // Target milte hi smooth scroll execute karein
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Target section for "${sectionId}" not found on this page.`);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-gray-950/80 text-white py-12 px-[6vw] md:px-[10vw] lg:px-[15vw] border-t border-gray-900 select-none">
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        
        {/* Name / Logo Branding */}
        <div className="text-center group cursor-pointer" onClick={scrollToTop}>
          <h2 className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-[#a87ff5] bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-purple-300 transition-all duration-300">
            Shoaib Akhtar
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto mt-2 rounded-full transform group-hover:w-20 transition-all duration-300"></div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 z-10">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-400 text-sm sm:text-base font-semibold tracking-wide transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Professional Links (LinkedIn, GitHub, YouTube) */}
        <div className="flex justify-center gap-5 mt-8 z-10">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shoaib21/" },
            { icon: <FaGithub />, link: "https://github.com/shoaibtechs" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@shoaibakhtar5889" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-lg text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-10"></div>

        {/* Copyright & Meta Details */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs sm:text-sm text-gray-500 font-medium">
          <p>© 2026 Shoaib Akhtar. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-500 hover:text-purple-400 font-semibold transition-colors duration-200 cursor-pointer group"
          >
            Back to top 
            <FaArrowUp className="text-[10px] transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;