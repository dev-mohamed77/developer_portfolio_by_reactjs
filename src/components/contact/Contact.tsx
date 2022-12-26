import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    console.log(e.typeof);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ten2953",
        "template_8k3u0hr",
        form.current!,
        "jvNX_yH5R6nnJQFuu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__social">
          <div className="contact__card">
            <HiOutlineMail className="contact__card-icon" />
            <h3>Email</h3>
            <p>developer.mohamed55@gmail.com</p>
            <a
              href="mailto:developer.mohamed55@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact__card">
            <RiMessengerLine className="contact__card-icon" />
            <h3>Messenger</h3>
            <p>Mohamed.Abdel.Nasser8</p>
            <a
              href="https://m.me/Mohamed.Abdel.Nasser8"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact__card">
            <BsWhatsapp className="contact__card-icon" />
            <h3>WhatsApp</h3>
            <p>01208944100</p>
            <a
              href="https://api.whatsapp.com/send?phone+201208944100"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
