import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/jellsberry-portfolio">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/Hobbies">Hobbies</Link>
    </nav>
  );
}
