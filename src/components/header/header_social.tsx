import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function HeaderSocial() {
  return (
    <div className="header_social">
      <a
        href="https://www.facebook.com/Mohamed.Abdel.Nasser8"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook />
      </a>
      <a
        href="https://www.facebook.com/Mohamed.Abdel.Nasser8"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/Mohamed.Abdel.Nasser8"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocial;
