import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="topnav">
      <Link to="/Home">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/Hobbies">Hobbies</Link>
    </nav>
  );
}
