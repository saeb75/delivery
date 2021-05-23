import React from "react";
import logo from "../../assents/logo.png";

const Navbar = () => {
  return (
    <div className="h-12 bg-softBlack flex items-center px-5">
      <div>
        <span className="bg-red-600 block w-6 h-0.5 mb-1"></span>
        <span className="bg-red-600 block w-6 h-0.5 mb-1"></span>
        <span className="bg-red-600 block w-6 h-0.5"></span>
      </div>
      <div className="ml-3">
        <img src={logo} className="w-14 " />
      </div>
    </div>
  );
};

export default Navbar;
