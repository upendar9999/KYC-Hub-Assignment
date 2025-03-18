import React from "react";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center px-4 z-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZOFQlA65AC98ja9aPxg1MwbOJM7HTdwpSw&s"
        alt="Shopping Logo"
        className="h-10 w-10 mr-2"
      />
      <h1 className="text-lg font-bold">Shopping App</h1>
    </div>
  );
};

export default NavBar;
