import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" md:flex flex-col gap-4 items-center justify-center">
      <div className="h-full w-full items-center text-center md:flex justify-between gap-4" >
        {/* Logo */}
        <div>
          <p className="font-bold text-xl text-[#618264]">Poseidon</p>
        </div>
        {/* Content */}
        <div className="text-gray-400 font-semibold flex items-center justify-center gap-4 mb-2 md:mb-0">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/"}>About Us</NavLink>
          <NavLink to={"/"}>Contact</NavLink>
        </div>
        {/* Social media */}
        <div className="flex gap-2 items-center justify-center">
          <div><Twitter /></div>
          <div><Instagram /></div>
          <div><LinkedIn /></div>
          <div><GitHub /></div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex justify-center mt-3 items-center">
        <p className="text-gray-400">@2023 Created by Alagbe Adeolu Ayoola</p>
      </div>
    </div>
  );
};

export default Footer;
