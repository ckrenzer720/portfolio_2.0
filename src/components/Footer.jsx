import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-emerald-900/80 dark:bg-emerald-950/80 backdrop-blur-sm shadow-md text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center flex flex-col items-center">
        <p className="text-lg mb-2 font-semibold">
          "Building digital experiences with passion and precision"
        </p>
        <p className="text-sm mb-1">
          © {currentYear} Conner Krenzer's mind at work
        </p>
      </div>
    </footer>
  );
}

export default Footer;
