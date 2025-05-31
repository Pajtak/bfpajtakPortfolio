import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {
  ModalProvider,
  useModalContext,
} from "./components/Context/modal/ModalContext";
import { AluraCertificatesModal } from "./components/Certificates/components/AluraCertificatesModal/AluraCertificatesModal";
import { GenerationCertificatesModal } from "./components/Certificates/components/GenerationCertificatesModal/GenerationCertificatesModal";
import { OrigamidCertificatesModal } from "./components/Certificates/components/OrigamidCertificatesModal/OrigamidCertificatesModal";

export const Home = () => {
  const { modalState, setModalState } = useModalContext();

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);

  return (
    <ModalProvider>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </ModalProvider>
  );
};
