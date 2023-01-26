import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../UI/Header/Header";
import "./contact.css";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_pstf0zo",
          "template_6lxm2yp",
          form.current,
          "Sqk_Chpccz1amAO2T"
        )
        .then(
          (result) => {
            console.log(result.text);
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
        <div className="carton_area">abcs</div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="subject"
            placeholder="What is this email about?"
          />

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
