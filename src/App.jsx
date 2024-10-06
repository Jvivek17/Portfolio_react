import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import AboutMe from "./Components/AboutMe";
import Technologies from "./Components/Technologies";
import Expirence from "./Components/Expirence";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950 shadow-lg">
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </header>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="fixed top-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* background 1 */}
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */}

      {/* background 2 */}
      {/* <div class="relative h-full w-full bg-slate-950">
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div> */}

      <div className="container mx-auto px-8 pt-32 md:pt-40 lg:pt-48">
        <About />
        <AboutMe />
        <Technologies />
        <Expirence />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
