import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center my-6 ">
      {/* Logo */}
      <div>
          <p className="font-bold text-3xl text-[#618264]">Poseidon</p>
        </div>
      {/* Misc info */}
      <div className="flex gap-4">
        <NavLink to={'/'}>Home</NavLink> | 
        <NavLink to={'/'}>About Us</NavLink> |
        <NavLink to={'/'}>Contact</NavLink>

        
      </div>
      {/* Profile/Sign in button */}
      <div className="flex">
        {isAuthenticated ? (
          <div>
            <button onClick={() => {logout()}} className="px-4 py-2 text-white rounded-full bg-red-600">Logout</button>
          </div>
        ) : (
          <div>
            <button className="px-4 py-2 text-white rounded-full bg-red-600">Sign In</button>
            <button className="px-4 py-2 text-white rounded-full bg-red-600">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
