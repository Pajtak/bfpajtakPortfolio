import React, { useRef } from "react";
import "./Contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const showToastMessage = () => {
    toast.success("Sua mensagem foi enviada!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rxubqe1",
      "template_23p26go",
      form.current,
      "tqE3nkPZcfmj-YKKe"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Entre em Contato</h5>
      <h2>Fale comigo</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>brunofpajtak@gmail.com</h5>
            <a
              href="mailto:brunofpajtak@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mande uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Bruno Pajtak</h5>
            <a
              href="https://www.linkedin.com/in/bruno-pajtak/"
              target="_blank"
              rel="noreferrer"
            >
              Mande uma mensagem
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=5511956003480"
              target="_blank"
              rel="noreferrer"
            >
              Mande uma mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="name"
            name="Subject"
            id="Subject"
            placeholder="Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Sua Mensagem"
            required
          ></textarea>
          <button
            onClick={showToastMessage}
            type="submit"
            className="btn btn-primary"
          >
            Mande sua mensagem
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
