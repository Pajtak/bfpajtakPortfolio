import React from "react";
import { DiReact } from "react-icons/di";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experiences">
      <h5>Habilidades que possuo</h5>
      <h2>Minha Experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Front End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experiente</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Testes Unitários</h4>
                <small className="text-light">Habilidoso</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Desenvolvimento Back End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Habilidoso</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Habilidoso</small>
              </div>
            </article>

            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
