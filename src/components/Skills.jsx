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
  <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-2 py-12 w-full min-h-[50vh] bg-transparent">
    <h2 className="text-5xl font-bold text-emerald-400 mb-6 tracking-wide leading-tight text-center">
      Languages & Tools
    </h2>
    <p className="text-lg md:text-xl text-white font-normal mb-10 max-w-2xl text-center leading-relaxed tracking-wide">
      I have experience working with these languages and implement best
      practices to deliver high-quality results. I have also used these skills
      to develop a strong portfolio of projects.
    </p>
    <div className="flex flex-wrap justify-center gap-8 w-full">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center">
          <div className="rounded-full border-4 border-cyan-400 bg-gray-900 w-20 h-20 flex items-center justify-center mb-2 shadow-lg">
            <span className="text-cyan-300 text-5xl">{skill.icon}</span>
          </div>
          <span className="text-white font-bold text-sm md:text-base mt-1">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
