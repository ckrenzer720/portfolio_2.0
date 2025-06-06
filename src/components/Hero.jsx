import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // eslint-disable-line
import ConnerResume from "../assets/Conner_Krenzer_Resume.pdf";

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full pt-24 sm:pt-28 md:pt-32 min-h-[70vh] sm:min-h-[80vh]">
      <div className="space-y-4 w-full">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-wide leading-tight text-left"
        >
          Hello there, I'm Conner Krenzer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-left w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-500 tracking-tight leading-tight">
            Full Stack Web Developer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-white font-normal tracking-wide leading-relaxed max-w-full mt-4 sm:mt-6">
            Welcome to my corner of the web. Take a look around. If you have any
            questions, let's have a conversation. I like to create applications
            with seamless UI/UX.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 sm:pt-8">
            <motion.a
              href={ConnerResume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center border border-emerald-500/50 text-emerald-400 px-6 py-2 font-medium hover:bg-emerald-500/10 hover:text-emerald-300 transition-all duration-300 ease-in-out text-sm sm:text-base tracking-wide bg-transparent rounded"
            >
              resume
            </motion.a>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/ckrenzer720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-emerald-100 hover:text-white transform hover:scale-110 transition-all duration-175 bg-transparent hover:bg-gradient-to-tr hover:bg-black"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/conner-krenzer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-emerald-500 rounded-full text-emerald-100 hover:text-white transform hover:scale-110 transition-all duration-175 bg-transparent hover:bg-gradient-to-tr hover:bg-[#0077b5]"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
