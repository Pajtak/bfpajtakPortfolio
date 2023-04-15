import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { SiProtondb } from "react-icons/si";
import { IoIosCloudDone } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState("");
  return (
    <nav>
      <a
        href="#header"
        className={isActiveNav === "home" ? "active" : ""}
        onClick={() => {
          setIsActiveNav("home");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActiveNav === "about" ? "active" : ""}
        onClick={() => {
          setIsActiveNav("about");
        }}
      >
        <ImProfile />
      </a>
      <a
        href="#experiences"
        className={isActiveNav === "experiences" ? "active" : ""}
        onClick={() => {
          setIsActiveNav("experiences");
        }}
      >
        <SiProtondb />
      </a>
      <a
        href="#portfolio"
        className={isActiveNav === "portfolio" ? "active" : ""}
        onClick={() => {
          setIsActiveNav("portfolio");
        }}
      >
        <IoIosCloudDone />
      </a>
      <a
        href="#contact"
        className={isActiveNav === "contact" ? "active" : ""}
        onClick={() => {
          setIsActiveNav("contact");
        }}
      >
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
