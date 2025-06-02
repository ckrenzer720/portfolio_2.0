const About = () => {
  return (
    <section
      className="flex flex-col justify-center min-h-[70vh] max-w-3xl mx-auto px-2"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-6 tracking-tight">
        About
      </h2>
      <p className="text-base md:text-lg text-white font-medium mb-5 max-w-2xl text-left leading-relaxed">
        I grew up in the rugged beauty of Colorado, and at 18, I moved to
        California to train as a professional chef. For the next decade, I
        worked in some of the most fine dining restaurants across California and
        Colorado, blood, sweat, and tears into the kitchen; but by 2023, after
        years of culinary success, I knew it was time for a change. I then
        decided to pivot and leave the hospitality world behind. That's when a
        friend of mine mentioned going through BloomTech's (formerly Lambda
        School) full-stack web development bootcamp, a decision that set me on
        the path to becoming a software developer and continuing my side passion
        for technology.
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-emerald-400 mb-1">
          Languages & Tools
        </h3>
        <ul className="flex flex-wrap gap-2 text-emerald-200 text-sm">
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">HTML</li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">CSS</li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">
            JavaScript
          </li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">
            ReactJS
          </li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">NodeJS</li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">
            TailwindCSS
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-400 mb-1">
          Currently Learning
        </h3>
        <ul className="flex flex-wrap gap-2 text-emerald-200 text-sm">
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">
            TypeScript
          </li>
          <li className="bg-emerald-900/60 px-2 py-0.5 rounded-full">
            MongoDB
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
