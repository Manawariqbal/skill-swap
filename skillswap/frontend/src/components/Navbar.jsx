import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">TechMatch</h1>
        <div>
          <a href="#signup" className="text-white px-4">Sign Up</a>
          <a href="#signin" className="text-white px-4">Sign In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
