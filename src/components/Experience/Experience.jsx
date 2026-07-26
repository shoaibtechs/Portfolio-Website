import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

// ✅ Corrected extensions (.jpeg vs .png) according to your actual asset list
import myTutorPodLogo from "../../assets/company_logo/mytutorpod.jpeg";
import sourceCodeLogo from "../../assets/company_logo/sourcecode.png";
import colabLogo from "../../assets/company_logo/colab.jpeg";

const ShoaibExperiences = [
  {
    id: 1,
    role: "INSTRUCTOR — FULL STACK DEVELOPMENT (MERN)",
    company: "My Tutor Pod",
    location: "Remote",
    date: "May 2025 – Present",
    img: myTutorPodLogo,
    bgStyling: "bg-white p-1",
    desc: [
      "Taught full stack development using the MERN stack — MongoDB, Express.js, React.js, and Node.js.",
      "Delivered lessons on frontend technologies including HTML, CSS, JavaScript (ES6+), and React Hooks, with responsive design using Bootstrap and Tailwind CSS.",
      "Guided backend development with Node.js, Express, RESTful APIs, and NoSQL database management with MongoDB.",
      "Mentored students on version control workflows using Git and GitHub for team collaboration and project deployment.",
      "Introduced deployment and DevOps fundamentals including Linux, Docker containerization, and Kubernetes for scalable application deployment.",
      "Designed hands‑on projects simulating real‑world applications, reinforcing concepts like CRUD operations, authentication, routing, middleware, and API integration."
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "Linux", "Docker", "Kubernetes", "RESTful APIs"]
  },
  {
    id: 2,
    role: "INSTRUCTOR",
    company: "Source Code Academia",
    location: "Remote",
    date: "June 2024 – Present",
    img: sourceCodeLogo,
    bgStyling: "bg-gray-900 p-2",
    desc: [
      "Taught Python programming, covering data structures, OOP, and algorithmic problem‑solving.",
      "Designed structured curricula with real‑world applications and coding challenges.",
      "Conducted interactive coding sessions, mentoring students in best coding practices.",
      "Developed assessments and hands‑on projects to evaluate student progress."
    ],
    skills: ["Python", "Data Structures", "OOP", "Algorithms", "Curriculum Design", "Coding Practices", "Assessments"]
  },
  {
    id: 3,
    role: "TIER‑3 MEMBER",
    company: "COLAB (Research Lab)",
    location: "FAST NUCES",
    date: "Oct. 2020 – Jun. 2024",
    img: colabLogo,
    bgStyling: "bg-white p-1",
    desc: [
      "Worked on research‑oriented projects involving software engineering, automation, and cloud‑based systems.",
      "Participated in workshops focused on scalable systems, DevOps practices, and cloud deployment strategies.",
      "Mentored junior members in problem‑solving, clean code practices, and collaborative development.",
      "Contributed to research publications and presents technical findings at academic forums."
    ],
    skills: ["Software Engineering", "Automation", "Cloud Systems", "DevOps", "Scalable Systems", "Clean Code", "Research"]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="py-24 px-[6vw] md:px-[8vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2 select-none"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider uppercase">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Split Layout Container */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto items-start">
        
        {/* LEFT PANEL: Sticky Tabs */}
        <div className="w-full md:w-[32%] md:sticky md:top-28 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-3 pb-4 md:pb-0 scrollbar-none z-20">
          {ShoaibExperiences.map((exp, idx) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-4 min-w-[240px] md:min-w-0 text-left px-5 py-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group ${
                activeTab === idx
                  ? "bg-gradient-to-r from-purple-500/20 to-gray-900/40 border-purple-500 shadow-[0_0_20px_rgba(130,69,236,0.15)] text-white"
                  : "bg-gray-900/30 border-gray-800/60 text-gray-400 hover:text-gray-200 hover:border-gray-700/50"
              }`}
            >
              {/* Tab Logo Frame */}
              <div className={`w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-gray-700 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center ${exp.bgStyling}`}>
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Tab Meta Info */}
              <div className="truncate">
                <h4 className={`text-sm font-bold tracking-wide truncate ${activeTab === idx ? "text-white" : "text-gray-300"}`}>
                  {exp.company}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">{exp.date}</p>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL: Dynamic Bento Grid Area */}
        <div className="w-full md:w-[68%]">
          {ShoaibExperiences.map((experience, index) => {
            if (index !== activeTab) return null;

            return (
              <div key={experience.id} className="animate-[fadeIn_0.4s_ease-out]">
                <Tilt
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  perspective={1500}
                  scale={1.002}
                  transitionSpeed={800}
                >
                  {/* Bento Box Card */}
                  <div className="bg-gray-900/40 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-gray-800/80 shadow-[0_0_30px_1px_rgba(130,69,236,0.15)] hover:border-purple-500/40 transition-all duration-300">
                    
                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/60 pb-6 mb-6">
                      <div className="flex items-center gap-5">
                        {/* Custom Dynamic Asset Wrapper */}
                        <div className={`w-14 h-14 rounded-2xl overflow-hidden border border-gray-700 shadow-inner flex-shrink-0 flex items-center justify-center ${experience.bgStyling}`}>
                          <img
                            src={experience.img}
                            alt={experience.company}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide leading-tight">
                            {experience.role}
                          </h3>
                          <h4 className="text-sm font-semibold text-purple-400 mt-1">
                            {experience.company} <span className="text-gray-500 font-normal">| {experience.location}</span>
                          </h4>
                        </div>
                      </div>
                      
                      {/* Timeline Badge */}
                      <span className="self-start sm:self-center bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-xs font-bold text-purple-400 tracking-wide whitespace-nowrap">
                        {experience.date}
                      </span>
                    </div>

                    {/* Bullet Description Blocks */}
                    <div className="mb-8">
                      <ul className="space-y-3.5 text-gray-400 text-sm sm:text-base font-medium leading-relaxed list-none">
                        {experience.desc.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#8245ec] mt-2 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Capsule Tags */}
                    {experience.skills && (
                      <div className="border-t border-gray-800/40 pt-6">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3.5">
                          Core Competencies Deployed
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-gray-850/40 hover:bg-gray-800/80 border border-gray-700/50 hover:border-purple-500/40 text-gray-300 hover:text-white px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;