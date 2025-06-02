import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center max-w-4xl mx-auto px-2 py-8 w-full pt-20 min-h-[60vh]">
      <div className="space-y-4 w-full">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-white tracking-wide leading-tight text-left"
        >
          Hello there, I'm Conner Krenzer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-500 tracking-tight leading-tight">
            Full Stack Web Developer
          </h1>
          <p className="text-lg md:text-xl text-white font-normal tracking-wide leading-relaxed max-w-full mt-2">
            Welcome to my corner of the web, take a look around and if you have
            any question lets have a conversation. I like to create applications
            with seamless UI/UX.
          </p>
          <div className="flex items-center space-x-4 pt-3">
            <a
              href="#contact"
              className="group flex items-center border-2 border-emerald-500 text-emerald-500 px-6 py-2 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-base md:text-lg tracking-wide bg-transparent hover:rounded-lg"
            >
              GET IN TOUCH
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
            <div className="flex space-x-2">
              <a
                href="https://github.com/ckrenzer720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border-2 border-emerald-500 hover:border-transparent rounded-full text-emerald-100 hover:bg-black hover:text-white transform hover:scale-125 transition-transform duration-200 bg-transparent"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/conner-krenzer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border-2 border-emerald-500 hover:border-transparent rounded-full text-emerald-100 hover:bg-[#0077b5] hover:text-white transform hover:scale-125 transition-transform duration-200 bg-transparent"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/c_krenza/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center border-2 border-emerald-500 hover:border-transparent rounded-full text-emerald-100 transition-colors duration-300 bg-transparent hover:text-white transform hover:scale-125 transition-transform duration-200"
                style={{ background: "" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
