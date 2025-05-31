import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bloco de Notas",
    github: "https://www.github.com",
    demo: "/notepad",
  },
  {
    id: 2,
    image: IMG2,
    title: "Segundo Projeto",
    github: "https://www.github.com",
    demo: "https://www.dribbble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Terceiro Projeto",
    github: "https://www.github.com",
    demo: "https://www.dribbble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quarto Projeto",
    github: "https://www.github.com",
    demo: "https://www.dribbble.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Quinto Projeto",
    github: "https://www.github.com",
    demo: "https://www.dribbble.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Sexto Projeto",
    github: "https://www.github.com",
    demo: "https://www.dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus Trabalhos Recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demonstração
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
