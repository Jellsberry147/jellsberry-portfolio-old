import React from "react";

export function Navbar() {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#hobbies">Hobbies</a>
    </div>
  );
}
