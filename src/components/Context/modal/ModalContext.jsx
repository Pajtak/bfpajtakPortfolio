import React, { createContext, useContext, useState } from "react";
import { AluraCertificatesModal } from "../../Certificates/components/AluraCertificatesModal/AluraCertificatesModal";
import { GenerationCertificatesModal } from "../../Certificates/components/GenerationCertificatesModal/GenerationCertificatesModal";
import { UdemyCertificatesModal } from "../../Certificates/components/UdemyCertificatesModal/UdemyCertificatesModal";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState("");

  return (
    <ModalContext.Provider value={{ modalState, setModalState }}>
      <AluraCertificatesModal
        certificateImages
        visible={modalState === "Alura"}
      />
      <GenerationCertificatesModal
        visible={modalState === "Generation"}
        certificateImages
      />
      <UdemyCertificatesModal
        certificateImages
        visible={modalState === "Udemy"}
      />
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
