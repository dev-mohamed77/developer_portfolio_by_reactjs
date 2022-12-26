import React from "react";
import CTA from "./CTA";
import "./header.css";
import ImageMe from "../../assets/dev_me.png";
import HeaderSocial from "./header_social";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Mohamed Abdel Nasser</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ImageMe} alt="/"></img>
        </div>
        <a className="scroll-down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
