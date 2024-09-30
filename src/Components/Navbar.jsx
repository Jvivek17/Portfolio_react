import React from "react";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className=" md-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl font-semibold">
        <p>About Projets </p>
      </div>
    </nav>
  );
};

export default Navbar;
