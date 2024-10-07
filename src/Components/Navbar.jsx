import React from "react";
// import logo from "../assets/kevinRushLogo.png";
// import viveklogo from "../assets/lakshmi_vivek_jlogo.png";
// import logowhite from "../assets/lakshmivivekjlogo.png";
import logo from "../assets/lakshmi-vivek-j-logo-white-transparent.png";
// C:\Users\jlaks\Desktop\react-portfolio\src\assets\Lakshmi_vivek_logo.png
import { Link } from "react-scroll";

const Navbar = () => {
  // const aboutMeRef = React.useRef(null);
  // const technologiesRef = React.useRef(null);
  // const expirenceRef = React.useRef(null);
  // const projectsRef = React.useRef(null);
  // const contactRef = React.useRef(null);

  // const scrollToSection = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <nav className=" md-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 h-24 w-40 md:h-24 md:w-24 lg:h-32 lg:w-32 rounded"
          src={logo}
          alt="viveklogo"
        ></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-xl font-semibold cursor-pointer">
        {/* <p onClick={() => scrollToSection(aboutMeRef)}>About Me</p>
        <p onClick={() => scrollToSection(technologiesRef)}>Technologies</p>
        <p onClick={() => scrollToSection(expirenceRef)}>Experience</p>
        <p onClick={() => scrollToSection(projectsRef)}>Projects</p>

        <p onClick={() => scrollToSection(contactRef)}>Contact</p> */}

        <Link
          to="about-me-section"
          smooth={true}
          duration={900}
          offset={-250}
          className="hover:text-purple-500"
        >
          About Me
        </Link>
        <Link
          to="technologies-section"
          smooth={true}
          duration={1000}
          offset={-250}
          className="hover:text-purple-500"
        >
          Technologies
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={1200}
          offset={-250}
          className="hover:text-purple-500"
        >
          Experience
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={1300}
          offset={-250}
          className="hover:text-purple-500"
        >
          Projects
        </Link>
        <Link
          to="contact-section"
          smooth={true}
          duration={1400}
          offset={-250}
          className="hover:text-purple-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
