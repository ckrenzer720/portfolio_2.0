import { motion } from "framer-motion"; // eslint-disable-line

const About = () => {
  return (
    <section
      className="flex flex-col items-start justify-center max-w-4xl mx-auto px-2 py-4 w-full min-h-[40vh]"
      id="about"
    >
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-emerald-400 mb-3 tracking-wide leading-tight text-center mx-auto"
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-left w-full"
      >
        <p className="text-base md:text-lg text-white font-normal mb-4 max-w-full text-left leading-relaxed tracking-wide">
          I grew up in the rugged beauty of Colorado. At 18, I moved to
          California to train as a professional chef. For the next decade, I
          worked in fine dining restaurants across California and Colorado;
          pouring blood, sweat, and tears into the kitchen. By 2023, after years
          of culinary success, I knew it was time for a change. I then decided
          to pivot and leave the hospitality world behind. I decided to lean
          into my side passion of technology by going through BloomTech's
          (formerly Lambda School) full-stack web development bootcamp, setting
          me on the path to becoming a software developer.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
