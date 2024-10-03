import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Expirence from "./Components/Expirence";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <About />
        <AboutMe />
        <Technologies />
        <Expirence />
      </div>
    </div>
  );
};

export default App;
