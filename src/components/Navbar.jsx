import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-6  font-josefin font-bold">
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Home
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-blue-800">
            Services
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-blue-800">
            Doctors
          </a>
        </li>
        <li>
          <a href="#" className=" hover:text-blue-800">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};
