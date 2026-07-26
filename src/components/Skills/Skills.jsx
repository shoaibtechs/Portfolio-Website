// src/components/Skills/Skills.jsx
import React from "react";
import Tilt from "react-parallax-tilt";

// Importing high-quality professional icons
import { 
  FaNodeJs, FaPython, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaBootstrap, FaDocker, FaAws, FaGitAlt, FaLinux, FaJava 
} from "react-icons/fa";
import { 
  SiExpress, SiFastapi, SiMongodb, SiMysql, SiTailwindcss, 
  SiKubernetes, SiJenkins, SiPostman, SiJsonwebtokens 
} from "react-icons/si";
import { TbApi, TbHierarchy3 } from "react-icons/tb";

const ProfessionalSkills = [
  {
    title: "Backend & Core Logic",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400 group-hover:text-white" /> },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      { name: "C/C++", icon: <span className="font-extrabold text-[#00599C] text-xs">C++</span> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "NASM (Assembly)", icon: <span className="font-bold text-gray-400 text-[10px]">ASM</span> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB] animate-[spin_20s_linear_infinite]" /> },
      { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }
    ]
  },
  {
    title: "Databases & Architecture",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "RESTful APIs", icon: <TbApi className="text-[#00bcd4]" /> },
      { name: "MVC Architecture", icon: <TbHierarchy3 className="text-[#e91e63]" /> }
    ]
  },
  {
    title: "DevOps, Middlewares & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "Linux", icon: <FaLinux className="text-white" /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens className="text-[#00F0FF]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
    ]
  }
];

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[6vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom select-none"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider uppercase">
        My Expertise
      </h2>
      <div className="w-28 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#a87ff5] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
        A comprehensive showcase of my full-stack engineering expertise, database systems, and modern DevOps pipelines[cite: 1].
      </p>
    </div>

    {/* Skill Categories Showcase */}
    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
      {ProfessionalSkills.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-gray-800/80 
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] hover:border-gray-700/50 transition-all duration-300"
        >
          {/* Category Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#8245ec] rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-200 tracking-wide">
              {category.title}
            </h3>
          </div>

          {/* Dynamic Flex-Wrap Layout */}
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1500}
            scale={1.01}
            transitionSpeed={800}
          >
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-start items-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 bg-gray-850/40 hover:bg-gray-800/80 
                  border border-gray-700/50 hover:border-[#8245ec] rounded-full 
                  py-2.5 px-5 transition-all duration-300 group cursor-pointer
                  shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(130,69,236,0.2)]"
                >
                  {/* Icon Container with vector scaling */}
                  <div className="text-lg sm:text-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Clean Text */}
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;