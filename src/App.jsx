import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FadeInSection from "./components/FadeInSection";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LoadingSpinner from "./components/LoadingSpinner";

const SoftSkillsBar = () => (
  <div className="w-full bg-emerald-950/90 border-t border-b border-emerald-800 py-3 flex justify-center items-center">
    <div className="flex w-full max-w-5xl justify-between text-white font-bold uppercase text-base md:text-lg tracking-wide">
      <div className="flex-1 text-center">Fast Learner</div>
      <div className="flex-1 text-center">Teamwork</div>
      <div className="flex-1 text-center">Detail Oriented</div>
    </div>
  </div>
);

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-emerald-400 hover:bg-emerald-500 flex items-center justify-center shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
      aria-label="Back to top"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <main className="flex-1">
          <FadeInSection>
            <section id="home" className="">
              <Hero />
            </section>
          </FadeInSection>
          <SoftSkillsBar />
          <FadeInSection>
            <section id="about" className="">
              <About />
            </section>
          </FadeInSection>
          <FadeInSection>
            <section id="skills" className="">
              <Skills />
            </section>
          </FadeInSection>
          <FadeInSection>
            <section id="experience" className="">
              {/* Experience section content will go here */}
            </section>
          </FadeInSection>
          <FadeInSection>
            <section id="projects" className="">
              <Projects />
            </section>
          </FadeInSection>
          <FadeInSection>
            <section id="contact" className="">
              <Contact />
            </section>
          </FadeInSection>
        </main>
        <BackToTopButton />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
