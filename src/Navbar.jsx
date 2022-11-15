import React from "react";

const Navbar = () => {
  return (
    <div class="topnav" id="myTopnav">
      <a href="/" class="active">
        Home
      </a>
      <a href="https://github.com/moayaan1911/gen-p" target={"_blank"}>
        GITHUB Repo
      </a>
      <a href="https://youtu.be/2DSzox0krMU" target={"_blank"}>
        Video Demo
      </a>
      <a href="https://linktr.ee/ayaaneth" target="_blank" rel="noreferrer">
        ✨Connect With Developer✨
      </a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Navbar;
