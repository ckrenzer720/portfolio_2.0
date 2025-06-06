import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJs", icon: <SiReact /> },
  { name: "NodeJs", icon: <SiNodedotjs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Github", icon: <SiGithub /> },
];

const Skills = () => (
  <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-2 py-6 w-full min-h-[40vh] bg-transparent">
    <h2 className="text-5xl font-bold text-emerald-400 mb-4 tracking-wide leading-tight text-center">
      Languages & Tools
    </h2>
    <p className="text-lg md:text-xl text-white font-normal mb-6 max-w-2xl text-center leading-relaxed tracking-wide">
      I have experience working with these languages. I implement best practices
      to deliver high-quality results, using these skills to develop a strong
      portfolio of projects.
    </p>
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center group">
          <div
            className={`rounded-full border-4 border-transparent bg-gray-900/50 w-20 h-20 flex items-center justify-center mb-2 shadow-lg 
            hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out
            hover:rotate-3 group-hover:rotate-3
            hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-gray-900/70
            group-hover:bg-gradient-to-br group-hover:from-gray-900/90 group-hover:to-gray-900/70
            ${
              skill.name === "HTML"
                ? "hover:border-[#E34F26] group-hover:border-[#E34F26] hover:shadow-[#E34F26]/40 group-hover:shadow-[#E34F26]/40"
                : skill.name === "CSS"
                  ? "hover:border-[#1572B6] group-hover:border-[#1572B6] hover:shadow-[#1572B6]/40 group-hover:shadow-[#1572B6]/40"
                  : skill.name === "JavaScript"
                    ? "hover:border-[#F7DF1E] group-hover:border-[#F7DF1E] hover:shadow-[#F7DF1E]/40 group-hover:shadow-[#F7DF1E]/40"
                    : skill.name === "ReactJs"
                      ? "hover:border-[#61DAFB] group-hover:border-[#61DAFB] hover:shadow-[#61DAFB]/40 group-hover:shadow-[#61DAFB]/40"
                      : skill.name === "NodeJs"
                        ? "hover:border-[#339933] group-hover:border-[#339933] hover:shadow-[#339933]/40 group-hover:shadow-[#339933]/40"
                        : skill.name === "TailwindCSS"
                          ? "hover:border-[#06B6D4] group-hover:border-[#06B6D4] hover:shadow-[#06B6D4]/40 group-hover:shadow-[#06B6D4]/40"
                          : skill.name === "Postman"
                            ? "hover:border-[#FF6C37] group-hover:border-[#FF6C37] hover:shadow-[#FF6C37]/40 group-hover:shadow-[#FF6C37]/40"
                            : skill.name === "Github"
                              ? "hover:border-[#474747] group-hover:border-[#474747] hover:shadow-[#474747]/40 group-hover:shadow-[#474747]/40"
                              : "hover:border-emerald-400 group-hover:border-emerald-400 hover:shadow-emerald-400/40 group-hover:shadow-emerald-400/40"
            }`}
          >
            <span
              className={`text-4xl transition-all duration-300 ease-in-out
              ${
                skill.name === "HTML"
                  ? "text-[#E34F26] group-hover:text-[#E34F26]"
                  : skill.name === "CSS"
                    ? "text-[#1572B6] group-hover:text-[#1572B6]"
                    : skill.name === "JavaScript"
                      ? "text-[#F7DF1E] group-hover:text-[#F7DF1E]"
                      : skill.name === "ReactJs"
                        ? "text-[#61DAFB] group-hover:text-[#61DAFB]"
                        : skill.name === "NodeJs"
                          ? "text-[#339933] group-hover:text-[#339933]"
                          : skill.name === "TailwindCSS"
                            ? "text-[#06B6D4] group-hover:text-[#06B6D4]"
                            : skill.name === "Postman"
                              ? "text-[#FF6C37] group-hover:text-[#FF6C37]"
                              : skill.name === "Github"
                                ? "text-[#474747] group-hover:text-[#474747]"
                                : "text-emerald-400"
              }`}
            >
              {skill.icon}
            </span>
          </div>
          <span className="text-gray-700 dark:text-white/80 font-medium text-sm md:text-base mt-1 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
