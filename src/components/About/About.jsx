import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-[7vw] lg:px-[15vw] font-sans overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* LEFT SIDE: CONTENT */}
        <div className="md:w-3/5 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              Welcome to my space
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none pt-2">
              Hi, I am
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-purple-400 tracking-tight">
              Shoaib Akhtar
            </h2>
          </div>

          {/* Typing Effect with Premium Colors */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300">
            <span>I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Instructor & Mentor', 'Problem Solver']}
              speed={80}
              eraseSpeed={40}
              typingDelay={400}
              eraseDelay={2500}
              cursorRenderer={(cursor) => (
                <span className="text-purple-400 font-light animate-pulse">{cursor}</span>
              )}
            />
          </h3>

          {/* Paragraph text cleaned up for readability */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
            Dynamic Full Stack Developer specializing in the <span className="text-white font-medium">MERN stack</span> with a proven track record of building high-performance web architectures. Expert in designing RESTful APIs, managing databases, and leveraging DevOps workflows like <span className="text-purple-400 font-medium">Docker & Jenkins</span>. 
            Currently mentoring <span className="text-white font-medium">8 concurrent batches</span> in Python and backend logic, demonstrating an elite ability to simplify complex systems.
          </p>

          {/* Quick Stats Grid for Visual Impact */}
          <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto md:mx-0">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-purple-400">8+</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Batches Mentored</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-blue-400">MERN</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Stack Expert</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-emerald-400">CI/CD</h4>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">DevOps Ready</p>
            </div>
          </div>

          {/* Clean Modern Action Button */}
          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1dKgxsLMRG4U5G4RzPcSADMyidk9eADzN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white font-bold tracking-wide uppercase px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(130,69,236,0.4)] active:translate-y-0"
              style={{
                background: 'linear-gradient(135deg, #8245ec 0%, #6366f1 100%)',
              }}
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PROFILE IMAGE WITH GLOWING CONTAINER */}
        <div className="md:w-2/5 flex justify-center md:justify-end relative">
          {/* Subtle Outer Glow behind the Tilt component */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-full blur-2xl opacity-40 animate-pulse w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] mx-auto" />
          
          <Tilt
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-full p-1 bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 shadow-2xl relative"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full bg-slate-950 p-1">
              <img
                src={profileImage}
                alt="Shoaib Akhtar"
                className="w-full h-full rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;