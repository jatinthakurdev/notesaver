import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          Dev<span className="text-white">Site</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition duration-300">
            Login
          </button>

          <button className="px-5 py-2 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;