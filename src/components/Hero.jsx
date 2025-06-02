import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] max-w-3xl mx-auto px-2">
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
          Hello there, I'm Conner Krenzer
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-500 mb-2">
          Full Stack Web Developer
        </h1>
        <p className="text-base md:text-lg text-white font-bold mb-4 max-w-2xl">
          Welcome to my corner of the web, take a look around and if you have
          any question lets have a conversation. I like to create applications
          with seamless UI/UX.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="group flex items-center border-2 border-emerald-500 text-emerald-500 px-6 py-2 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-colors duration-300 text-base md:text-lg"
          >
            GET IN TOUCH
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
          <div className="flex space-x-3">
            <a
              href="https://github.com/ckrenzer720"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center border-2 border-emerald-500 rounded-full text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/conner-krenzer/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center border-2 border-emerald-500 rounded-full text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/c_krenza/"
              target="_blank"
              className="w-11 h-11 flex items-center justify-center border-2 border-emerald-500 rounded-full text-emerald-100 hover:bg-emerald-500 hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
