import { Navigate, useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#E7E7DE] flex p-4 text-2xl justify-between font-semibold items-center tracking-wider sticky top-0 z-50 shadow-lg">
      <div className="text-[#00587A] m-3 ml-8 flex transition rounded-full font-bold">
        <a
          onClick={() => navigate("/home")}
          className="flex transition duration-200 hover:scale-95 p-3 rounded-full cursor-pointer"
        >
          Raditya Alif
        </a>
      </div>
      <ul className="flex m-3 text-white mr-8 bg-gradient-to-r from-[#00587A] to-[#008891] p-3 rounded-full shadow-2xl">
        <li className="ml-4 transition duration-200 hover:text-white/60 hover:scale-95 active:text-white/60 cursor-pointer">
          <a onClick={() => navigate("/introduction")}>Introduction</a>
        </li>
        <li className="ml-5 transition duration-200 hover:text-white/60 hover:scale-95 cursor-pointer">
          <a onClick={() => navigate("/projects")}>Projects</a>
        </li>
        <li className="mx-5 transition duration-200 hover:text-white/60 hover:scale-95 cursor-pointer">
          <a onClick={() => navigate("/contact")}>Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
