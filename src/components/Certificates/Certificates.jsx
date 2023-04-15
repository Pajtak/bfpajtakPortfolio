import React from "react";
import "./Certificates.css";
import IMG1 from "../../assets/origamid.jpg";
import IMG2 from "../../assets/alura.jpg";
import IMG3 from "../../assets/generation.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    id: 1,
    nome: "Origamid",
    img: IMG1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente corrupti tempora cupiditate impedit a enim quaerat est minima? Rerum quia placeat molestiae sequi magni, omnis fugit dolorum earum quae.",
  },
  {
    id: 2,
    nome: "Alura",
    img: IMG2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente corrupti tempora cupiditate impedit a enim quaerat est minima? Rerum quia placeat molestiae sequi magni, omnis fugit dolorum earum quae.",
  },
  {
    id: 3,
    nome: "Generation",
    img: IMG3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente corrupti tempora cupiditate impedit a enim quaerat est minima? Rerum quia placeat molestiae sequi magni, omnis fugit dolorum earum quae.",
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h5>Certificados</h5>
      <h2>Conheça alguns dos cursos que realizei</h2>

      <Swiper
        className="container certificates__container"
        // install Swiper modules
        modules={[Pagination]}
        navigation
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, nome, img, desc }) => {
          return (
            <SwiperSlide key={id} className="certificate">
              <div className="certificate__image">
                <img src={img} alt="" />
              </div>
              <h5 className="certificate__name">{nome}</h5>
              <small className="certificate__desc">{desc}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
