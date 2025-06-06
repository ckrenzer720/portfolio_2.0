import { motion } from "framer-motion"; // eslint-disable-line
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import projects from "../backend/projects";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null); // eslint-disable-line

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      rotateX: 10,
      rotateY: 10,
      transition: { duration: 0.3 },
    },
  };

  const headingVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={headingVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-emerald-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaGithub size={24} className="sm:w-6 sm:h-6" />
                    </motion.a>
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaExternalLinkAlt
                          size={24}
                          className="sm:w-6 sm:h-6"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-emerald-50 dark:bg-emerald-900/50 rounded-full text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
