import portfolioPng from "../assets/portfolio.png";
import calculatorPng from "../assets/calculator.png";
import noPhotoPng from "../assets/noPhoto.png";
import pokeDexPng from "../assets/pokedex.png";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "The current website you are on. This is my repository you can have a look at.",
    image: portfolioPng,
    techStack: ["React", "EmailJS", "TailwindCSS"],
    githubLink: "https://github.com/ckrenzer720/portfolio_2.0.git",
    liveLink: "",
  },
  {
    id: 2,
    title: "Calculator App",
    description: "It's a calculator",
    image: calculatorPng,
    techStack: ["React", "Node", "Styled-Components"],
    githubLink: "https://github.com/ckrenzer720/basic-calculator.git",
    liveLink: "https://basic-calculator-three-gules.vercel.app",
  },
  {
    id: 3,
    title: "Authentication and Testing Project",
    description:
      "Feel free to take a look at this repository on GitHub. This project is a Node.js-based authentication and testing challenge focused on implementing user authentication and API security. It involves: User Authentication to receive a JWT, protected API routes, security implementation using bcryptjs to hash passwords, E2E testing requiremnets, and database management using SQL",
    techStack: ["Express", "Bcrypt", "SQLite", "Jest"],
    githubLink:
      "https://github.com/ckrenzer720/web-sprint-challenge-authentication-and-testing.git",
    liveLink: null,
  },
  {
    id: 4,
    title: "PokeDex v1.1 (Currently in Development)",
    description:
      "This PokéDex is a modern SPA that allows Pokémon trainers to browse and explore the world of Pokémon. The application features user authentication, detailed Pokémon information, and personalized user profiles.",
    image: pokeDexPng,
    techStack: ["React.js", "Redux Toolkit", "Auth0", "Axios"],
    githubLink: "https://github.com/ckrenzer720/PokeDex-v1.1.git",
    liveLink: null,
  },
];

export default projects;
