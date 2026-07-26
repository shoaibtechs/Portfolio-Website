import React, { useState } from "react";

// Aapke authentic projects ka data
const myProjects = [
  {
    id: 1,
    title: "StayHub — Premium Vacation Rental Platform",
    description:
      "Engineering a high-performance, full-stack vacation marketplace featuring real-time property listings, dynamic booking workflows, and advanced search filters. Architecting scalable data models using MongoDB and Mongoose ODM to manage relational-like data structures efficiently.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Yahan apni image URL lagayein
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Modern CSS", "Git"],
    github: "https://github.com/shoaibtechs/Wanderlust",
    webapp: "https://wanderlust-xyz.onrender.com",
  },
  {
    id: 2,
    title: "Admission Portal Validator — Enterprise Schema Validation",
    description:
      "Developed a secure backend engine for an academic portal implementing strict server-side body validation using the Joi schema validation library. Built an enterprise-grade error handling architecture using a custom ExpressError utility class and wrapAsync middleware.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // Yahan apni image URL lagayein
    tags: ["Node.js", "Express.js", "Joi", "MongoDB", "Mongoose", "Async JS"],
    github: "https://github.com/shoaibtechs/Express-Joi-Admission-Portal-Validator-",
    webapp: "#",
  },
  {
    id: 3,
    title: "Blogs Sphere: Data Pipeline Systems",
    description:
      "Architected a full-stack blogging platform using the MERN pattern with a strict focus on scalable RESTful API design. Implemented complete CRUD operational pipelines with high-performance MySQL database instances.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80", // Yahan apni image URL lagayein
    tags: ["Node.js", "Express.js", "EJS", "MySQL", "UUID v4", "Method-Override", "CSS3"],
    github: "https://github.com/shoaibtechs/Blogger_Sphere_API",
    webapp: "#",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/20 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 pt-2 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 mb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-700">
            <div className="flex justify-end p-4 absolute top-0 right-0 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 bg-gray-800/80 rounded-full w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col pt-6">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] max-h-[300px] object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 lg:text-base text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-900 text-white lg:px-6 lg:py-2.5 px-3 py-2 rounded-xl lg:text-base text-sm font-semibold text-center transition-all duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white lg:px-6 lg:py-2.5 px-3 py-2 rounded-xl lg:text-base text-sm font-semibold text-center transition-all duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;