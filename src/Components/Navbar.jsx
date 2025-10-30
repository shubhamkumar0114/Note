import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex mb-4 md:pl-4 text-blue-400 items-center gap-8 text-[1.2rem] font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/paste"}>Pastes</Link>
      </div>
    </div>
  );
};

export default Navbar;
