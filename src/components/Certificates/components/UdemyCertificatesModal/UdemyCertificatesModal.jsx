import React, { useState } from "react";
import "./UdemyCertificatesModal.css";
import { useModalContext } from "../../../Context/modal/ModalContext";
import IMG1 from "../../../../assets/Certificado Lógica de Programação Udemy.jpg";
import IMG2 from "../../../../assets/Programação Para Leigos.jpg";

import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const UdemyCertificatesModal = ({ visible, certificateImages }) => {
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
  const UdemyCertificates = [
    {
      img: IMG1,
      label:
        "Certificado de curso em Lógica de Programação realizado na plataforma Udemy",
    },
    {
      img: IMG2,
      label:
        "Certificado de curso Programação para Leigos realizado na plataforma Udemy",
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
              UdemyCertificates.map((slide, index) => {
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
                  <img src={UdemyCertificates[slideNumber].img} alt="" />
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
