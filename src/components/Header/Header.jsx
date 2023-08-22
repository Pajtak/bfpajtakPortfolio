import React from "react";
import "./Header.css";
import CTA from "./components/CTA";
import me from "../../assets/me.png";
import HeaderSocials from "./components/HeaderSocials";

const Header = () => {
  return (
    <header>
      <div id="header" className="container header__container">
        <h5>Seja bem vindo, eu sou</h5>
        <h1>Bruno Foschini Pajtak</h1>
        <h5 className="text-light">Desenvolvedor Front End</h5>
        <CTA className="cta" />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="Minha foto" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
