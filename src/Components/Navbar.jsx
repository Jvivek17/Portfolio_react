import React from "react";
// import logo from "../assets/kevinRushLogo.png";
// import viveklogo from "../assets/lakshmi_vivek_jlogo.png";
// import logowhite from "../assets/lakshmivivekjlogo.png";
import logo from "../assets/lakshmi-vivek-j-logo-white-transparent.png";
// C:\Users\jlaks\Desktop\react-portfolio\src\assets\Lakshmi_vivek_logo.png

const Navbar = () => {
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
        <p>About</p>
        <p>Technologies</p>
        <p>Expirence</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
