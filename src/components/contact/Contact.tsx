import { useState, FC } from "react";

import Header from "../UI/Header/Header";
import { AiOutlineMail, AiOutlineWhatsApp, AiFillWechat } from "react-icons/ai";
import { RiMailOpenLine } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";
import "./contact.css";
import Modal from "../UI/Modal/Modal";
import useForm from "../Validation/useForm";
interface User {
  subject: string;
  name: string;
  email: string;
  message: string;
}
// !手机版本输入一个东西的时候，按enter直接提交了。这是一个bug
const Contact: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
    isSent,
  } = useForm<User>({
    validations: {
      subject: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: "Cannot submit empty message",
        },
        pattern: {
          value: "^[A-Za-z\\s]*$",
          message:
            "You're not allowed to use special characters or numbers in the subject",
        },
      },
      name: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: "Cannot submit empty message",
        },
        pattern: {
          value: "^[A-Za-z\\s]*$",
          message:
            "You're not allowed to use special characters or numbers in the subject",
        },
      },
      email: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: "Cannot submit empty message",
        },
        pattern: {
          value:
            "^([\\w+\\!\\#\\$\\%\\&\\’\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~])+((\\.?)([\\w+\\!\\#\\$\\%\\&\\’\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]))+\\@[a-zA-Z0-9-]+((\\.?)([a-zA-Z0-9-]+))+$",
          message: "Please enter a valid email address",
        },
      },
      message: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: "Cannot submit empty message",
        },
        pattern: {
          value: '^[a-zA-Z0-9\\s\\.\\,\\?\\"\\!\\=]+$',
          message:
            "Your're not allowed to use Special characters except . ? , \" and !",
        },
      },
    },
    onSubmit: () => console.log("submitted"),
    initialValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
  });

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="Title"
            required
            value={user.subject || ""}
            onChange={handleChange("subject")}
          />
          {errors.subject && <p className="error">{errors.subject}</p>}
          <input
            type="text"
            name="name"
            placeholder="May I have your name?"
            required
            value={user.name || ""}
            onChange={handleChange("name")}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user.email || ""}
            onChange={handleChange("email")}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <textarea
            name="message"
            placeholder="Tell me if I get hired"
            required
            value={user.message || ""}
            onChange={handleChange("message")}
          />
          {errors.message && <p className="error">{errors.message}</p>}
          {isSent ? (
            <CgSpinner className="spinner" />
          ) : (
            <input type="submit" value="Send" className="btn btn_primary" />
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
