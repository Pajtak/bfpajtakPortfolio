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

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>Conheça meus projetos</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            atque voluptate repellat modi aut incidunt consequuntur alias
            cupiditate, repudiandae quisquam beatae explicabo eaque labore
            laborum, ex nesciunt rem, rerum expedita?
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
