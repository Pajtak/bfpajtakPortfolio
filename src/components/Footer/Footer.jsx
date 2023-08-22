import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">
        Bruno Pajtak
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#certificates">Certificados</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/bruno-pajtak">
          <BsLinkedin />
        </a>
        <a href="https://dribbble.com/Pajtak">
          <BsDribbble />
        </a>
        <a href="https://github.com/Pajtak">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;BFPajtak. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
