import { Link } from "react-scroll";
import { motion } from "framer-motion"; // eslint-disable-line

const Header = () => {
  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-900/80 dark:bg-emerald-950/80 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-md"
            >
              CK
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="uppercase tracking-wider font-bold text-emerald-100 dark:text-emerald-200 hover:text-emerald-300 dark:hover:text-emerald-300 cursor-pointer transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Connect Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-emerald-500 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-emerald-400 transition-colors duration-300 text-sm md:text-base"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
