import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import LoadingSpinner from "./LoadingSpinner";

const Header = () => {
  const { isAuthenticated, logout, isLoading } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center my-6 ">
      {/* Logo */}
      <div className="px-2">
        <p className="font-bold text-3xl text-[#618264]">Poseidon</p>
      </div>
      {/* Misc info */}
      <div className="hidden md:flex gap-4">
        <NavLink to={"/"}>Home</NavLink> |<NavLink to={"/"}>About Us</NavLink> |
        <NavLink to={"/"}>Contact</NavLink>
      </div>
      {/* Profile/Sign in button */}
      <div className="flex">
        {isAuthenticated ? (
          <div>
            <div
              className={`fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-opacity-50 bg-gray-500 ${
                isLoading ? "block" : "hidden"
              }`}
            >
              <LoadingSpinner />
            </div>
            <button
              onClick={() => {
                logout();
              }}
              className="px-4 py-2 text-white rounded-full bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="px-4 py-2 text-white rounded-full bg-red-600">
              Sign In
            </button>
            <button className="px-4 py-2 text-white rounded-full bg-red-600">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
