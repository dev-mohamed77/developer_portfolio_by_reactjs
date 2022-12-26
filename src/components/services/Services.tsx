import React from "react";
import { FiCheck } from "react-icons/fi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services__card">
          <div className="services__header">
            <h3>Mobile Development</h3>
          </div>
          <ul className="services__content">
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
          </ul>
        </article>
        {/* frontend development */}
        <article className="services__card">
          <div className="services__header">
            <h3>Frontend Development</h3>
          </div>
          <ul className="services__content">
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
          </ul>
        </article>
        {/* backend development */}
        <article className="services__card">
          <div className="services__header">
            <h3>Mobile Development</h3>
          </div>
          <ul className="services__content">
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
            <li>
              <FiCheck className="services_icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit. </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
