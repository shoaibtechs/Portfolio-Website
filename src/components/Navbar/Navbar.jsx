import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-[7vw] lg:px-[15vw] ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60 py-3 shadow-lg shadow-purple-950/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO WITH MODERN GLOW */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-black tracking-tight cursor-pointer select-none group"
        >
          <span className="text-purple-500 transition-transform group-hover:scale-110 inline-block">&lt;</span>
          <span className="text-white group-hover:text-purple-400 transition-colors">Shoaib</span>
          <span className="text-purple-400">/</span>
          <span className="text-slate-300 font-light">Akhtar</span>
          <span className="text-purple-500 transition-transform group-hover:scale-110 inline-block">&gt;</span>
        </div>

        {/* DESKTOP NAV ITEMS WITH BOTTOM LINE GLOW */}
        <ul className="hidden md:flex items-center space-x-1 bg-slate-900/40 border border-slate-800/50 rounded-full px-2 py-1.5 backdrop-blur-md">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-shadow-sm shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* SOCIAL LINKS (RIGHT SIDE) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/shoaibtechs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shoaib21/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-purple-400 hover:text-white transition-all"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROP-DOWN MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 px-6">
          {menuItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`w-full py-2.5 text-base font-medium rounded-xl transition-all ${
                  activeSection === item.id
                    ? "text-purple-400 bg-purple-500/10 border border-purple-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          
          <div className="w-full border-t border-slate-800/60 my-2" />
          
          {/* CORRECTED PORTED LINKS FOR MOBILE */}
          <div className="flex space-x-6 pt-2">
            <a
              href="https://github.com/shoaibtechs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 border border-slate-800"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/shoaib21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 p-2 rounded-full bg-slate-900 border border-slate-800"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;