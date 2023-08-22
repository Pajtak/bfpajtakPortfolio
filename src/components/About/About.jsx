import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conheça um pouco mais</h5>
      <h2>Sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="Sobre mim" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>1 ano trabalhando como Front End</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Outras Atividades</h5>
              <small>Mestre em História Professor de Inglês</small>
            </article>

            <a href="#portfolio" className="about__card__button">
              <VscFolderLibrary className="about__icon__button" />
              <h5>Projetos</h5>
              <small
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "0.7rem",
                  fontFamily: "Poppins",
                }}
              >
                Conheça meus projetos
              </small>
            </a>
          </div>

          <p>
            Bacharel e Mestre em História pela Pontifícia Universidade Católica
            de São Paulo, decidi mudar de carreira em 2021 quando terminei o
            curso de formação da ONG Generation Brasil e me tornei um
            desenvolvedor Full Stack, trabalhei por 1 ano e 3 meses na empresa
            BEES Brasil como desenvolvedor Front End, desenvolvendo aplicações
            com React.
          </p>

          <a href="contact" className="btn btn__primary">
            Fale comigo!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
