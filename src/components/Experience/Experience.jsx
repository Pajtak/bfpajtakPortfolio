import React from "react";
import { DiReact } from "react-icons/di";
import "./Experience.css";
import { FaStar } from "react-icons/fa";

const Experience = () => {
  const createArray = (lenght) => [...Array(lenght)];

  function Star() {
    return <FaStar color={"rgba(255, 255, 255, 0.6)"} />;
  }

  function StarRating({ totalStar }) {
    return createArray(totalStar).map((n, i) => <Star key={i} />);
  }
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
                <small className="text-light">
                  <StarRating totalStar={5} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  <StarRating totalStar={5} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">
                  <StarRating totalStar={5} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">
                  <StarRating totalStar={5} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  <StarRating totalStar={5} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Testes Unitários</h4>
                <small className="text-light">
                  <StarRating totalStar={4} />
                </small>
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
                <small className="text-light">
                  <StarRating totalStar={3} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">
                  <StarRating totalStar={4} />
                </small>
              </div>
            </article>

            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">
                  <StarRating totalStar={2} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">
                  <StarRating totalStar={2} />
                </small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">
                  <StarRating totalStar={2} />
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
