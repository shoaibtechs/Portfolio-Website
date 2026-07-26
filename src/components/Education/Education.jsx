
import React from "react";
import Tilt from "react-parallax-tilt";
import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";

// ✅ Corrected exact path matching your new folder structure
import fastLogo from "../../assets/education_logo/fast.png";

const AcademicBackground = [
  {
    id: 1,
    degree: "B.S. IN COMPUTER SCIENCE",
    school: "FAST NUCES",
    fullName: "National University of Computer and Emerging Sciences",
    date: "Sep. 2020 ‑ June. 2024",
    img: fastLogo,
    grade: "Completed",
    desc: "Graduated with a Bachelor of Science degree in Computer Science from Fast National University, completing rigorous core engineering coursework and acquiring comprehensive industry-standard theoretical and practical expertise.",
    coreModules: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Cloud Computing"
    ]
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-3 select-none"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider uppercase">
          EDUCATION
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-purple-500 to-[#a87ff5] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          My academic foundation has been a journey of deep engineering insights and core computer science development.
        </p>
      </div>

      {/* Main Education Showcase Card Container */}
      <div className="max-w-4xl mx-auto">
        {AcademicBackground.map((edu) => (
          <Tilt
            key={edu.id}
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            perspective={1500}
            scale={1.002}
            transitionSpeed={800}
          >
            {/* High-Contrast Glassmorphic Card */}
            <div className="bg-gray-900/40 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-gray-800/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] hover:border-purple-500/40 transition-all duration-300">
              
              {/* Header: University Brand Identity and Timing */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-gray-800/60 pb-6 mb-6">
                <div className="flex items-center gap-5">
                  {/* University Logo Wrapper */}
                  <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden p-1.5 border border-gray-700 shadow-inner flex-shrink-0 flex items-center justify-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/64x64/111827/ffffff?text=FAST`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base font-bold text-purple-400 mt-1">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5 hidden sm:block">
                      {edu.fullName}
                    </p>
                  </div>
                </div>

                {/* Date Capsule Badge */}
                <span className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-purple-400 tracking-wide whitespace-nowrap self-start sm:self-center">
                  <FaCalendarAlt className="text-[10px]" />
                  {edu.date}
                </span>
              </div>

              {/* Main Core Description */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
                  {edu.desc}
                </p>
              </div>

              {/* Advanced Coursework Sub-Grid */}
              <div className="border-t border-gray-800/40 pt-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <FaBookOpen className="text-purple-400 text-sm" />
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Core Engineering Coursework
                  </h5>
                </div>
                
                {/* Micro-Capsule Tags Grid */}
                <div className="flex flex-wrap gap-2">
                  {edu.coreModules.map((module, mIdx) => (
                    <span
                      key={mIdx}
                      className="bg-gray-850/40 hover:bg-gray-800/80 border border-gray-700/50 hover:border-purple-500/40 text-gray-300 hover:text-white px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-default"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Education;