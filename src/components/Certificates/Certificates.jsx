import React from "react";
import "./Certificates.css";
import IMG2 from "../../assets/alura.jpg";
import IMG3 from "../../assets/generation.jpg";
import IMG4 from "../../assets/udemy.png";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import { useModalContext } from "../Context/modal/ModalContext";
import { SwiperNavButtons } from "./components/SwiperNavButtons/SwipperNavButtons";

const data = [
  {
    id: 1,
    nome: "Udemy",
    img: IMG4,
    desc: "Veja os certificados de cursos completados na plataforma Udemy.",
    buttonDesc: "Certificados Udemy",
  },
  {
    id: 2,
    nome: "Alura",
    img: IMG2,
    desc: "Veja os certificados de cursos completados na plataforma Alura.",
    buttonDesc: "Certificados Alura",
  },
  {
    id: 3,
    nome: "Generation",
    img: IMG3,
    desc: "Veja o certificado de curso realizado pela ONG Generation Brasil.",
    buttonDesc: "Certificados Generation",
  },
];

const Certificates = () => {
  const { setModalState } = useModalContext();

  const swiper = useSwiper();

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
      >
        {data.map(({ id, nome, img, desc, buttonDesc }) => {
          return (
            <SwiperSlide key={id} className="certificate">
              <div className="certificate__image">
                <img src={img} alt="" />
              </div>
              <h5 className="certificate__name">{nome}</h5>
              <small className="certificate__desc">{desc}</small>
              <button
                className="button__modal"
                onClick={() => {
                  if (buttonDesc === "Certificados Generation") {
                    setModalState("Generation");
                  } else if (buttonDesc === "Certificados Alura") {
                    setModalState("Alura");
                  } else if (buttonDesc === "Certificados Udemy") {
                    setModalState("Udemy");
                  }
                }}
              >
                {buttonDesc}
              </button>
            </SwiperSlide>
          );
        })}
        <SwiperNavButtons />
      </Swiper>
    </section>
  );
};

export default Certificates;
