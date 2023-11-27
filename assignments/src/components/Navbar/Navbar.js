import React from "react";

const Navbar = () => {
  let navbar = ["Home", "About", "Contact", "Sign In"];
  return (
    <div>
      <nav className="bg-blue-700 flex align-center justify-between p-3">
        <div className="mx-70 align-center flex">
          <img src='a.jpg' alt='a.jpg'></img>
          <h1>Company</h1>
        </div>
        <ul>
          {navbar.map((buttons, index) => (
            <button className="bg-white text-blue-700 mx-4 w-20 rounded-full p-2 text-center hover: curosr-pointer border-cyan-500    ">
              buttons
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
