import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../UI/Header/Header";
import { AiOutlineMail, AiOutlineWhatsApp, AiFillWechat } from "react-icons/ai";
import { RiMailOpenLine } from "react-icons/ri";
import "./contact.css";
import Modal from "../UI/Modal/Modal";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSetn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          `${import.meta.env.VITE_EMAILJS_SERVICE_KEY}`,
          `${import.meta.env.VITE_EMAILJS_TEMPLATE_KEY}`,
          form.current,
          `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            setIsSetn(true);
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <div className="contact_container">
      <Header subTitle="Get In Touch" mainTitle="Contact Me" />
      <div className="form_area">
        <div className="other_contact">
          <div className="business_card ">
            <h1>Luis Miguel Hung Wu</h1>
            <h3>Front End Developer</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:luishung1996@gmail.com">luishung1996@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> 778-302-8624
            </p>
          </div>

          <div className="carton_area">
            <a
              href="https://wa.me/17783028624?text=Hello%20I%20got%20your%20num%20from%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp className="mail" />
            </a>
            {isSent ? (
              <AiOutlineMail className="mail sent" />
            ) : (
              <RiMailOpenLine className="mail" />
            )}
            <AiFillWechat className="mail" onClick={() => setShowModal(true)} />
            {showModal && (
              <Modal>
                <div className="weChatQR" onClick={() => setShowModal(false)}>
                  <img src="/QR.JPG" alt="wecaht scan" />
                </div>
              </Modal>
            )}
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="subject" placeholder="Title" />

          <input type="text" name="name" placeholder="May I have your name?" />

          <input type="email" name="email" placeholder="Email" />

          <textarea name="message" placeholder="Tell me if I get hired" />
          <input type="submit" value="Send" className="btn btn_primary" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
