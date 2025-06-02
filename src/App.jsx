import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FadeInSection from "./components/FadeInSection";

const SoftSkillsBar = () => (
  <div className="w-full bg-emerald-950/90 border-t border-b border-emerald-800 py-3 flex justify-center items-center">
    <div className="flex w-full max-w-5xl justify-between text-white font-bold uppercase text-base md:text-lg tracking-wide">
      <div className="flex-1 text-center">Fast Learner</div>
      <div className="flex-1 text-center">Teamwork</div>
      <div className="flex-1 text-center">Detail Oriented</div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Main content sections */}
      <main>
        <FadeInSection>
          <section id="home" className="min-h-[80vh]">
            <Hero />
          </section>
        </FadeInSection>
        <SoftSkillsBar />
        <FadeInSection>
          <section id="about" className="min-h-[70vh]">
            <About />
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills" className="min-h-[60vh]">
            {/* Skills section content will go here */}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="experience" className="min-h-[60vh]">
            {/* Experience section content will go here */}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="min-h-[60vh]">
            {/* Projects section content will go here */}
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="min-h-[60vh]">
            {/* Contact form will go here */}
          </section>
        </FadeInSection>
      </main>
    </div>
  );
}

export default App;
