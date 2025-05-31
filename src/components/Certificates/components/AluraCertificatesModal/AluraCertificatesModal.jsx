import React, { useState } from "react";
import "./AluraCertificatesModal.css";
import { useModalContext } from "../../../Context/modal/ModalContext";
import html5part1 from "../../../../assets/html5part1.jpg";
import html5part2 from "../../../../assets/html5part2.jpeg";
import html5part3 from "../../../../assets/html5part3.jpeg";
import html5part4 from "../../../../assets/html5part4.jpeg";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const AluraCertificatesModal = ({ visible, certificateImages }) => {
  const { setModalState } = useModalContext();

  const [slideNumber, setSlideNumber] = useState(0);
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenImageModal(true);
  };

  const handleCloseModal = () => {
    setOpenImageModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(certificateImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === certificateImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  function onClose() {
    setModalState("");
  }
  const AluraCertificates = [
    {
      img: html5part1,
      label:
        "Certificado de curso em HTML5 e CSS realizado na plataforma Alura",
    },
    {
      img: html5part2,
      label:
        "Certificado de curso em HTML5 e CSS realizado na plataforma Alura",
    },
    {
      img: html5part3,
      label:
        "Certificado de curso em HTML5 e CSS realizado na plataforma Alura",
    },
    {
      img: html5part4,
      label:
        "Certificado de curso em HTML5 e CSS realizado na plataforma Alura",
    },
  ];

  return (
    <div className="container">
      {visible && (
        <Modal
          footer={
            <button
              key="back"
              onClick={onClose}
              className="btn btn-primary"
              type="link"
            >
              Voltar
            </button>
          }
          className="modal__Container"
          open
          onCancel={onClose}
          closeIcon={openImageModal ? false : true}
        >
          <div className="galleryWrap">
            {certificateImages &&
              AluraCertificates.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt=""></img>
                    <label className="labelImg">{slide.label}</label>
                  </div>
                );
              })}
            {openImageModal && (
              <div className="sliderWrap">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="btnClose"
                  onClick={handleCloseModal}
                />
                <FontAwesomeIcon
                  icon={faCircleChevronLeft}
                  onClick={prevSlide}
                  className="btnPrev"
                />
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  onClick={nextSlide}
                  className="btnNext"
                />
                <div className="fullScreenImage">
                  <img src={AluraCertificates[slideNumber].img} alt="" />
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
