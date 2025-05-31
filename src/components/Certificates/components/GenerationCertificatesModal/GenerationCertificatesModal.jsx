import React, { useState } from "react";
import "./GenerationCertificatesModal.css";
import { useModalContext } from "../../../Context/modal/ModalContext";
import Certificado_Generation from "../../../../assets/Certificado_Generation.jpg";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const GenerationCertificatesModal = ({ visible, certificateImages }) => {
  const { setModalState } = useModalContext();

  const [openImageModal, setOpenImageModal] = useState(false);

  const handleOpenModal = () => {
    setOpenImageModal(true);
  };

  const handleCloseModal = () => {
    setOpenImageModal(false);
  };

  function onClose() {
    setModalState("");
  }
  const GenerationCertificates = [{ img: Certificado_Generation }];

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
          closeIcon={openImageModal ? false : true}
          className="modal__Container"
          open
          onCancel={onClose}
        >
          <div className="galleryWrap">
            {certificateImages &&
              GenerationCertificates.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt=""></img>
                    <label className="labelImg">
                      Certificado recebido pela ONG Generation Brasil
                    </label>
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
                  className="btnPrev"
                />
                <FontAwesomeIcon
                  icon={faCircleChevronRight}
                  className="btnNext"
                />
                <div className="fullScreenImage">
                  <img src={Certificado_Generation} alt="" />
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
