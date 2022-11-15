import React from "react";

const Navbar = () => {
  return (
    <div class="topnav" id="myTopnav">
      <a href="/" class="active">
        Home
      </a>
      <a href="#contact">GITHUB Repo</a>
      <a href="#about">Video Demo</a>
      <a href="https://linktr.ee/ayaaneth">✨Connect With Developer✨</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;
